import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Discover from './Discover';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Discover />,
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
