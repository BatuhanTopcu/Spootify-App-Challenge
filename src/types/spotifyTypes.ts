export type ExternalUrls = {
  spotify: string;
};

export type Artist = {
  id: string;
  name: string;
  uri: string;
  href: string;
  external_urls: ExternalUrls;
};

export type SpotifyImage = {
  height: number;
  width: number;
  url: string;
};

export type HrefTotal = {
  href: string;
  total: number;
};

export type Album = {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
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
  snapshot_id: string;
  tracks: HrefTotal;
  type: string;
  uri: string;
};

export type Category = {
  href: string;
  icons: SpotifyImage[];
  id: string;
  name: string;
};
