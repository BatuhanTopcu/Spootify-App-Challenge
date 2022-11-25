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

export type Artist = CommonSpotifyData & {
  images: SpotifyImage[];
  _type: 'artist';
};

export type HrefTotal = {
  href: string;
  total: number;
};

export type Album = CommonSpotifyData & {
  album_type: string;
  artists: Artist[];
  release_date: string;
  total_tracks: number;
  type: string;
  images: SpotifyImage[];
  _type: 'album';
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
  tracks: HrefTotal;
  type: string;
  _type: 'playlist';
};

export type Category = CommonSpotifyData & {
  icons: SpotifyImage[];
  _type: 'category';
};

export type Track = CommonSpotifyData & {
  album: Album;
  artists: Artist[];
  duration_ms: number;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
};

export type CustomTrack = Track & {
  images: SpotifyImage[];
  _type: 'track';
};

export type SpotifyDataType = 'artist' | 'album' | 'track' | 'playlist' | 'category';
