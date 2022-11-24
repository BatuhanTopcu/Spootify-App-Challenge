import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CoreLayout from '../common/layouts/CoreLayout';
import Discover from './Discover';
import Search from './Search';

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
