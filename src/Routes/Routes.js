import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Components/Pages/Blogs/Blogs";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import SignUp from "../Components/Pages/Login/SignUp";
import AddService from "../Components/Pages/Services/AddService/AddService";
import MyReviews from "../Components/Pages/Services/Reviews/MyReviews";
import ServiceDetails from "../Components/Pages/Services/ServiceDetails";
import Services from "../Components/Pages/Services/Services";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/services',
        element: <Services></Services>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <SignUp></SignUp>
      },
      {
        path: '/services/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/serviceDetails/${params.id}`),
        element: <ServiceDetails></ServiceDetails>
      },
      {
        path: '/myreviews',
        element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
      },
      {
        path: '/addservice',
        element: <PrivateRoute><AddService></AddService></PrivateRoute>
      }, {
        path: '/blogs',
        element: <Blogs></Blogs>
      }
    ]
  }
])

export default router;