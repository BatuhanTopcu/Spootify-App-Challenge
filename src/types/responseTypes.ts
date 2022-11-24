import { Album, Artist, Category, CustomTrack, Playlist, Track } from './spotifyTypes';

type GenericSpotifyResponse<T> = {
  href: string;
  items: T[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
};

export type NewReleasesResponse = {
  albums: GenericSpotifyResponse<Album>;
};
export type CategoriesResponse = { categories: GenericSpotifyResponse<Category> };
export type FeaturedPlaylistsResponse = { playlists: GenericSpotifyResponse<Playlist> };
export type SearchResponse = {
  albums: GenericSpotifyResponse<Album>;
  artists: GenericSpotifyResponse<Artist>;
  playlists: GenericSpotifyResponse<Playlist>;
  tracks: GenericSpotifyResponse<Track>;
};
export type SearchReturn = SearchResponse & { tracks: GenericSpotifyResponse<CustomTrack> };
