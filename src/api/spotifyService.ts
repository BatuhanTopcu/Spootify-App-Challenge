import {
  FeaturedPlaylistsResponse,
  CategoriesResponse,
  NewReleasesResponse,
} from './../types/responseTypes';
import axiosInstance from './axiosInstance';

class SpotifyService {
  async GetNewReleases() {
    const params = new URLSearchParams();
    params.append('country', 'TR');
    params.append('limit', '20');
    const response = await axiosInstance.get<NewReleasesResponse>('/browse/new-releases', { params });
    return response.data;
  }
  async GetFeaturedPlaylists() {
    const params = new URLSearchParams();
    params.append('country', 'TR');
    params.append('limit', '20');
    const response = await axiosInstance.get<FeaturedPlaylistsResponse>('/browse/featured-playlists', {
      params,
    });
    return response.data;
  }
  async GetCategories() {
    const params = new URLSearchParams();
    params.append('country', 'TR');
    params.append('limit', '20');
    const response = await axiosInstance.get<CategoriesResponse>('/browse/categories', { params });
    return response.data;
  }
}

export default new SpotifyService();
