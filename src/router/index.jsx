import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";
import SignIn from "../pages/signup";
import Verify from "../pages/verify";
import ForgotPassword from "../pages/forgotPassword";
import ForgotVerify from "../pages/forgotVerify";
import ForgotEmailCheck from "../pages/forgotEmailCheck";
import Protect from "../pages/protect";

let router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <Protect>
        <Home />
      </Protect>
    ),
  },
  {
    path: "/register",
    element: <SignIn />,
  },
  {
    path: "/verify",
    element: <Verify />,
  },
  {
    path: "/forgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "/forgotVerify",
    element: <ForgotVerify />,
  },
  {
    path: "/forgotEmailCheck",
    element: <ForgotEmailCheck />,
  },
]);
export default router;
