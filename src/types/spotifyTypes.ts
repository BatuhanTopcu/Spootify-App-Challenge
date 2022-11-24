export type ExternalUrls = {
  spotify: string;
};

export type DataType = 'artist' | 'album' | 'track' | 'playlist';

export type SpotifyImage = {
  height: number;
  width: number;
  url: string;
};

export type Artist = {
  id: string;
  name: string;
  uri: string;
  href: string;
  images: SpotifyImage[];
  external_urls: ExternalUrls;
};

export type HrefTotal = {
  href: string;
  total: number;
};

export type Album = {
  album_type: string;
  artists: Artist[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  release_date: string;
  total_tracks: number;
  type: string;
  uri: string;
  _type: 'album';
};

export type Playlist = {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  owner: {
    display_name: string;
    external_urls: ExternalUrls;
    followers: HrefTotal;
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  public: boolean;
  tracks: HrefTotal;
  type: string;
  uri: string;
  _type: 'playlist';
};

export type Category = {
  href: string;
  icons: SpotifyImage[];
  id: string;
  name: string;
  _type: 'category';
};

export type Track = {
  album: Album;
  artists: Artist[];
  duration_ms: number;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  _type: 'track';
};

export type CustomTrack = Track & {
  images: SpotifyImage[];
};
