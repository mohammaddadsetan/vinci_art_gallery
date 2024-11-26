import React from 'react';

import Main from './components/Main/Main';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layouts from './layouts';
import RouteOne from './components/Products';
import Header from './components/Header/Header';
import RouteTwo from './components/product';
function App() {
  const router = createBrowserRouter(

    [
      {
        path: '/',
        element: <Layouts/>,
        children: [
          {
            index: true,
            element: <Main />
          },
          RouteOne,
          RouteTwo
        ]




      }
    ]
  )
return(
<RouterProvider router={router}/>
)




}

export default App;
