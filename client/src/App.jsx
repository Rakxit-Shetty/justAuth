import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from './page/Login'
import Dashbord from './page/Dashbord'

import './App.css'
import RootLayout from "./component/layout/RootLayout";
import ProtectedRoute from "./component/layout/ProtectedRoute";

function App() {
let router=createBrowserRouter([{
  path: "/",
  element: <RootLayout/>,
  errorElement: <></>,
  children: [
    {
      path: "login",
      element: (
        <ProtectedRoute reverse>
          <Login />
        </ProtectedRoute>
         
      ),
    },
    {
      path: "",
      element: (
        <ProtectedRoute>
 <Dashbord />
        </ProtectedRoute>
         
      ),
    },

  ]}])

return <RouterProvider router={router} />;
 
}

export default App
