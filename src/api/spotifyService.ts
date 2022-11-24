import { Track } from '../types/spotifyTypes';
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
  async GetNewReleases() {
    const params = getRequestParams();
    const response = await axiosInstance.get<NewReleasesResponse>('/browse/new-releases', { params });
    const albums = response.data.albums.items.map((album) => ({
      ...album,
      _type: 'album' as const,
    }));
    return albums;
  }
  async GetFeaturedPlaylists() {
    const params = getRequestParams();
    const response = await axiosInstance.get<FeaturedPlaylistsResponse>('/browse/featured-playlists', {
      params,
    });
    const playlists = response.data.playlists.items.map((playlist) => ({
      ...playlist,
      _type: 'playlist' as const,
    }));
    return playlists;
  }
  async GetCategories() {
    const params = getRequestParams();
    const response = await axiosInstance.get<CategoriesResponse>('/browse/categories', { params });
    const categories = response.data.categories.items.map((category) => ({
      ...category,
      _type: 'category' as const,
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
      _type: 'track' as const,
    }));
    const albums = response.data.albums.items.map((album) => ({
      ...album,
      _type: 'album' as const,
    }));
    const artists = response.data.artists.items.map((artist) => ({
      ...artist,
      _type: 'artist' as const,
    }));
    const playlists = response.data.playlists.items.map((playlist) => ({
      ...playlist,
      _type: 'playlist' as const,
    }));
    return {
      albums,
      artists,
      playlists,
      tracks,
    };
  }
  async GetTrack(id: string) {
    const response = await axiosInstance.get<Track>(`/tracks/${id}`);
    return response.data;
  }
}

export default new SpotifyService();
