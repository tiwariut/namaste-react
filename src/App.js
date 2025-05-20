import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Body from './components/Body';
import Header from './components/Header';
import Contact from './components/Contact';
import RestaurantInfo from './components/RestaurantInfo';
import Shimmer from './components/Shimmer';
import Error from './components/Error';

const Groceries = lazy(() => import('./components/Groceries'));
const About = lazy(() => import('./components/About'));

const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        )
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/groceries',
        element: (
          <Suspense fallback={<Shimmer />}>
            <Groceries />
          </Suspense>
        )
      },
      { path: '/restaurants/:resId', element: <RestaurantInfo /> }
    ],
    errorElement: <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
