import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CoreLayout from '../common/layouts/CoreLayout';
import Discover from './Discover';
import Search from './Search';
import Track from './TrackPage';
import TrackLoader from './TrackPage/TrackLoader';

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
    loader: TrackLoader,

    element: (
      <CoreLayout>
        <Track />
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
