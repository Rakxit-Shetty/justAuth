import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from './page/Login'
import Dashbord from './page/Dashbord'

import './App.css'
import RootLayout from "./component/layout/RootLayout";

function App() {
let router=createBrowserRouter([{
  path: "/",
  element: <RootLayout/>,
  errorElement: <></>,
  children: [
    {
      path: "login",
      element: (
          <Login />
      ),
    },
    {
      path: "",
      element: (
        
          <Dashbord />
      ),
    },

  ]}])

return <RouterProvider router={router} />;
 
}

export default App
