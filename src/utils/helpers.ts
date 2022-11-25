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
