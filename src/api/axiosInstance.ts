import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { Buffer } from 'buffer';

const config = {
  authUrl: 'https://accounts.spotify.com/api/token',
  baseUrl: 'https://api.spotify.com/v1',
  basicToken: Buffer.from(
    `${process.env.REACT_APP_SPOTIFY_CLIENT_ID}:${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`
  ).toString('base64'),
};

if (!process.env.REACT_APP_SPOTIFY_CLIENT_ID || !process.env.REACT_APP_SPOTIFY_CLIENT_SECRET) {
  throw new Error(
    'REACT_APP_SPOTIFY_CLIENT_ID and REACT_APP_SPOTIFY_CLIENT_SECRET are required in .env file'
  );
}

type GetAccesTokenResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

const getBearerToken = async () => {
  const { data } = await axios.post<GetAccesTokenResponse>(
    config.authUrl,
    'grant_type=client_credentials',
    {
      headers: {
        Authorization: `Basic ${config.basicToken}`,
      },
    }
  );
  return `${data.token_type} ${data.access_token}`;
};

const axiosInstance = axios.create({
  baseURL: config.baseUrl,
});

// axiosInstance.interceptors.request.use(
//   async (config) => {
//     if (config.headers['Authorization']) return config;
//     const token = await getBearerToken();
//     if (token) {
//       config.headers['Authorization'] = token;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

type CustomConfig = {
  _retry?: boolean;
} & AxiosRequestConfig;

type QueueItem = {
  resolve: (value: unknown) => void;
  reject: (reason?: unknown) => void;
};

let failedQueue: QueueItem[] = [];
let isRefreshing = false;

type ProcessQueueParams =
  | { error: AxiosError<unknown>; token?: never }
  | { error?: never; token: string };

const processQueue = ({ token, error }: ProcessQueueParams) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as CustomConfig;
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers['Authorization'] = token;
            return axios(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      return new Promise((resolve, reject) => {
        getBearerToken()
          .then((token) => {
            axiosInstance.defaults.headers.common['Authorization'] = token;
            originalRequest.headers['Authorization'] = token;
            processQueue({ token });
            resolve(axiosInstance(originalRequest));
            isRefreshing = false;
          })
          .catch((error: AxiosError<unknown>) => {
            processQueue({ error });
            reject(error);
          })
          .finally(() => {
            isRefreshing = false;
          });
      });
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
