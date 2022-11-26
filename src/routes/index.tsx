import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CoreLayout from '../common/layouts/CoreLayout';
import Discover from './Discover';
import GenericLoader from './GenericLoader';
import Search from './Search';
import TrackPage from './TrackPage';
import ArtistPage from './ArtistPage';
import AlbumPage from './AlbumPage';
import PlaylistPage from './PlaylistPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <CoreLayout>
        <Discover />
      </CoreLayout>
    ),
  },
  {
    path: '/search',
    element: (
      <CoreLayout>
        <Search />
      </CoreLayout>
    ),
  },
  {
    path: '/track/:id',
    loader: GenericLoader('track'),
    element: (
      <CoreLayout>
        <TrackPage />
      </CoreLayout>
    ),
  },
  {
    path: '/artist/:id',
    loader: GenericLoader('artist'),
    element: (
      <CoreLayout>
        <ArtistPage />
      </CoreLayout>
    ),
  },
  {
    path: '/playlist/:id',
    loader: GenericLoader('playlist'),
    element: (
      <CoreLayout>
        <PlaylistPage />
      </CoreLayout>
    ),
  },
  {
    path: '/album/:id',
    loader: GenericLoader('album'),
    element: (
      <CoreLayout>
        <AlbumPage />
      </CoreLayout>
    ),
  },
  {
    path: '*',
    element: (
      <CoreLayout>
        <div>404</div>
      </CoreLayout>
    ),
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
