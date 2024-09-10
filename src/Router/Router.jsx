import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Page/Error/Error";
import Home from "../Page/Home/Home";
import Register from "../Page/Register/Register";
import LogIn from "../Page/LogIn/LogIn";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/login",
          element: <LogIn></LogIn>
        },
      ],
    },
  ]);


  export default router;