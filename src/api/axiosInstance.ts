import axios from 'axios';
import { Buffer } from 'buffer';

const config = {
  authUrl: 'https://accounts.spotify.com/api/token',
  baseUrl: 'https://api.spotify.com/v1',
  basicToken: Buffer.from(
    `${process.env.REACT_APP_SPOTIFY_CLIENT_ID}:${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`
  ).toString('base64'),
};

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

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await getBearerToken();
    if (token) {
      config.headers['Authorization'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
