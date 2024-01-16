import App from '../App.tsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Store } from './Store.tsx';
import { HomePage } from './HomePage.tsx';
import { ErrorPage } from './ErrorPage.tsx';

export const Router = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element:<App/>,
          errorElement: <ErrorPage />,
          children:[
            {path:'store', element:<Store/>},
            {path:'/', element:<HomePage/>}
          ]
        },
      
      ])
      
  return  <RouterProvider router={router} />
}
