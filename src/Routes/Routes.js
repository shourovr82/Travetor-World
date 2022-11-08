import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import ServiceDetails from "../Components/Pages/Services/ServiceDetails";
import Services from "../Components/Pages/Services/Services";
import Main from "../Layout/Main";


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
        path: '/services/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/serviceDetails/${params.id}`),
        element: <ServiceDetails></ServiceDetails>
      }
    ]
  }
])

export default router;