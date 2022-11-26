import {
  Album,
  Artist,
  CustomArtist,
  CustomCategory,
  Playlist,
  SingleAlbum,
  SinglePlaylist,
  Track,
} from '../types/spotifyTypes';
import {
  FeaturedPlaylistsResponse,
  CategoriesResponse,
  NewReleasesResponse,
  SearchResponse,
  SearchReturn,
} from './../types/responseTypes';
import axiosInstance from './axiosInstance';
import { getRequestParams } from './utils';

class SpotifyService {
  async GetNewReleases(): Promise<Album[]> {
    const params = getRequestParams();
    const response = await axiosInstance.get<NewReleasesResponse>('/browse/new-releases', { params });
    return response.data.albums.items;
  }
  async GetFeaturedPlaylists(): Promise<Playlist[]> {
    const params = getRequestParams();
    const response = await axiosInstance.get<FeaturedPlaylistsResponse>('/browse/featured-playlists', {
      params,
    });
    return response.data.playlists.items;
  }
  async GetCategories(): Promise<CustomCategory[]> {
    const params = getRequestParams();
    const response = await axiosInstance.get<CategoriesResponse>('/browse/categories', { params });
    const categories = response.data.categories.items.map((category) => ({
      ...category,
      type: 'category' as const,
    }));
    return categories;
  }
  async Search(query: string): Promise<SearchReturn> {
    const params = getRequestParams();
    params.append('q', query);
    params.append('type', 'album,artist,playlist,track');
    const response = await axiosInstance.get<SearchResponse>('/search', { params });
    const tracks = response.data.tracks.items.map((track) => ({
      ...track,
      images: track.album.images,
    }));
    const albums = response.data.albums.items;
    const artists = response.data.artists.items;
    const playlists = response.data.playlists.items;
    return {
      albums,
      artists,
      playlists,
      tracks,
    };
  }
  async GetTrack(id: string): Promise<Track> {
    const response = await axiosInstance.get<Track>(`/tracks/${id}`);
    return response.data;
  }
  async GetArtist(id: string): Promise<CustomArtist> {
    const artist = (await axiosInstance.get<Artist>(`/artists/${id}`)).data;
    const params = new URLSearchParams();
    params.append('market', 'TR');
    const topTracks = (
      await axiosInstance.get<{ tracks: Track[] }>(`/artists/${id}/top-tracks`, { params })
    ).data.tracks;
    return { ...artist, top_tracks: topTracks };
  }
  async GetPlaylist(id: string): Promise<SinglePlaylist> {
    const response = await axiosInstance.get<SinglePlaylist>(`/playlists/${id}`);
    return response.data;
  }
  async GetAlbum(id: string): Promise<SingleAlbum> {
    const response = await axiosInstance.get<SingleAlbum>(`/albums/${id}`);
    return response.data;
  }
}

export default new SpotifyService();
