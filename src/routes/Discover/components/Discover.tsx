import React, { Component } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import { Album, Category, Playlist } from '../../../types/spotifyTypes';
import spotifyService from '../../../api/spotifyService';
import LoadingBar from '../../../common/components/LoadingBar/LoadingBar';

//TODO: Fix `any` types here

interface IDiscoverProps {}

interface IDiscoverState {
  newReleases: Array<Album>;
  playlists: Array<Playlist>;
  categories: Array<Category>;
  loading: boolean;
  error: boolean;
}

export default class Discover extends Component<IDiscoverProps, IDiscoverState> {
  constructor(props: IDiscoverProps) {
    super(props);

    this.state = {
      newReleases: [],
      playlists: [],
      categories: [],
      loading: false,
      error: false,
    };
  }

  //TODO: Handle APIs

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const [categories, newReleases, playlists] = await Promise.all([
        spotifyService.GetCategories(),
        spotifyService.GetNewReleases(),
        spotifyService.GetFeaturedPlaylists(),
      ]);
      this.setState({
        categories,
        newReleases,
        playlists,
        loading: false,
      });
    } catch (_) {
      this.setState({ error: true, loading: false });
    }
  }

  render() {
    const { newReleases, playlists, categories, loading, error } = this.state;

    return (
      <div className="discover">
        {loading && <LoadingBar />}
        {error && <div>Something went wrong</div>}
        {!loading && !error && (
          <>
            <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
            <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
            <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
          </>
        )}
      </div>
    );
  }
}
