import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from 'src/Layout';
import Home from 'src/pages/Home';
import MyFavorites from 'src/pages/MyFavorites'
import Weather from 'src/pages/Weather';
import { Provider } from 'react-redux';
import { store } from 'src/store';
import NotFound from 'src/pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: '/myFavorites',
        element: <MyFavorites/>,
      },
      {
        path: '/weather/:city', 
        element: <Weather />, 
      },
      {
        path: '*',  
        element: <NotFound/>,
      }
    ]
  }
])

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  );
};

export default App;
