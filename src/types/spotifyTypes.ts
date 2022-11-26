import { GenericSpotifyResponse } from './responseTypes';

export type ExternalUrls = {
  spotify: string;
};

export type SpotifyImage = {
  height: number;
  width: number;
  url: string;
};

export type CommonSpotifyData = {
  id: string;
  name: string;
  uri: string;
  href: string;
  external_urls: ExternalUrls;
};

export type HrefTotal = {
  href: string;
  total: number;
};

export type Artist = CommonSpotifyData & {
  images: SpotifyImage[];
  genres: string[];
  followers: HrefTotal;
  type: 'artist';
};

export type CustomArtist = Artist & {
  top_tracks: Track[];
};

export type Album = CommonSpotifyData & {
  album_type: string;
  artists: Artist[];
  release_date: string;
  total_tracks: number;
  type: 'album';
  images: SpotifyImage[];
};

export type Playlist = CommonSpotifyData & {
  collaborative: boolean;
  description: string;
  images: SpotifyImage[];
  owner: Omit<CommonSpotifyData, 'name'> & {
    display_name: string;
    followers: HrefTotal;
    type: string;
  };
  public: boolean;
  tracks: {
    total: number;
  };
  type: 'playlist';
};

export type Category = CommonSpotifyData & {
  icons: SpotifyImage[];
};

export type CustomCategory = Category & {
  type: 'category';
};

export type Track = CommonSpotifyData & {
  album: Album;
  artists: Artist[];
  duration_ms: number;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  type: 'track';
  uri: string;
};

export type CustomTrack = Track & {
  images: SpotifyImage[];
};

export type SinglePlaylist = Playlist & {
  tracks: GenericSpotifyResponse<{ track: Track }>;
};

export type SingleAlbum = Album & {
  tracks: GenericSpotifyResponse<Omit<Track, 'album'>>;
};

export type SpotifyDataType = 'artist' | 'album' | 'track' | 'playlist' | 'category';
