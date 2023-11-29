import { useRoutes } from "react-router-dom";
import Login from "../pages/auth/login";
import RegisterPage from "../pages/auth/register";
import OutletChild from "./OutletChild";
import Navbar from "../components/Navbar.jsx";

const RouterPage = () => {
  const elements = useRoutes([
    {
      path:"/",
       element: (
        <OutletChild>
          <Navbar />
        </OutletChild>
      ),
      children: [
        {
          index: true,
          element: <Login />,
        },
        {
          path: "Register",
          element: <RegisterPage />,
        },
      ],
    },
  ]);
  return elements;
};

export default RouterPage;