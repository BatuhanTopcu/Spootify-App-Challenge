import {
  FeaturedPlaylistsResponse,
  CategoriesResponse,
  NewReleasesResponse,
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
}

export default new SpotifyService();
