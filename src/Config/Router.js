import { createBrowserRouter, Outlet, RouterProvider, useNavigate, } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";

import Home from "../Viwes/Home";
import Details from "../Viwes/Detail/Detail";
import Login from "../Viwes/Login/Login";
import SignUp from "../Viwes/Signup/Signup";
import Add from "../Add/Add";
import Navbar from "../Components/Navbar/Navbar";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[ 
      {
        path: "/",
        element: <Home/>,
      },
      
      
    {
      path: "/details/:adId",
      element: <Details />,
    },
  
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/SignUp",
      element: <SignUp />,
    },
    {
      path: "/Add",
      element: <Add />,
    },
  ]
  },
 
]);

function Layout() {
  const Navigate = useNavigate()
  const [user, setuser] = useState()

  useEffect(function () {

    onAuthStateChanged(auth, (user) => {
      setuser(user)
    });

  }, [])

  useEffect(() => {

    const { pathname } = window.location

    if (user) {
      if (pathname === "/Login" || pathname === "/SignUp") {
        Navigate("/")
      }
      } 
      else {
        if (pathname === "/Add") {
          Navigate("/Login")
        }
      }
    
  }, [window.location.pathname, user])

  return<div>
    <Navbar/>
    <Outlet/>
  </div>

}

function Router() {
  return <RouterProvider router={router} />
}

export default Router;