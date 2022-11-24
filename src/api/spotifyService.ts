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
    return response.data;
  }
  async GetFeaturedPlaylists() {
    const params = getRequestParams();
    const response = await axiosInstance.get<FeaturedPlaylistsResponse>('/browse/featured-playlists', {
      params,
    });
    return response.data;
  }
  async GetCategories() {
    const params = getRequestParams();
    const response = await axiosInstance.get<CategoriesResponse>('/browse/categories', { params });
    return response.data;
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
    return {
      ...response.data,
      tracks: {
        ...response.data.tracks,
        items: tracks,
      },
    };
  }
}

export default new SpotifyService();
