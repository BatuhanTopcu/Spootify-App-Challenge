import { SpotifyDataType } from '../types/spotifyTypes';

const baseUrls: Record<SpotifyDataType, string | null> = {
  track: '/track',
  album: null,
  artist: null,
  playlist: null,
  category: null,
};

export const urlGenerator = (type: SpotifyDataType, id: string) => {
  const baseUrl = baseUrls[type];
  if (!baseUrl) return null;
  return `${baseUrl}/${id}`;
};

export const msToMinutesAndSeconds = (ms: number) => {
  const minutes = Math.floor(ms / 60000).toString();
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
};

export const convertDateString = (dateString: string) => {
  const date = new Date(dateString);
  return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}/${date.getFullYear()}`;
};
