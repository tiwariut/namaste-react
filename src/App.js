import { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';

import appStore from './utils/appStore';
import UserContext from './utils/UserContext';

import Body from './components/Body';
import Header from './components/Header';
import Cart from './components/Cart';
import Contact from './components/Contact';
import RestaurantInfo from './components/RestaurantInfo';
import Shimmer from './components/Shimmer';
import Error from './components/Error';

const Groceries = lazy(() => import('./components/Groceries'));
const About = lazy(() => import('./components/About'));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: 'Utkarsh Tiwari'
    };

    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className='app'>
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
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
      { path: '/restaurants/:resId', element: <RestaurantInfo /> },
      { path: '/cart', element: <Cart /> }
    ],
    errorElement: <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
