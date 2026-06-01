import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/rootLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import PasswordResetCodeEnter from "../pages/PasswordResetCodeEnter/PasswordResetCodeEnter";
import ResetPasswordPage from "../pages/ResetPassword/ResetPasswordPage";
import Covarage from "../pages/Covarage/Covarage";
import BeARider from "../pages/BeARider/BeARider";
import PrivateRoute from "./PrivateRoute";
import SendParcelForm from "../pages/SendParcel/SendParcelForm";
import DashBoardLayout from "../layouts/DashBoardLayout";
import ParcelDetails from "../pages/ParcelDetails.jsx/ParcelDetails";
import DashboardHome from "../pages/DashboardHome/DashboardHome";
import AboutUs from "../pages/AboutUs/AboutUs";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ParcelList from "../pages/ParcelList/ParcelList";

export const router = createBrowserRouter([
  //root routes
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      // data fetching from json file
      {
        path: "covarage",
        Component: Covarage,
        loader: () => fetch("/serviceCenters.json").then((res) => res.json()),
      },
      // data fetching from json file
      {
        path: "be-a-rider",
        element: (
          <PrivateRoute>
            <BeARider></BeARider>
          </PrivateRoute>
        ),
      },
      {
        path: "send-a-parcel",
        element: (
          <PrivateRoute>
            <SendParcelForm></SendParcelForm>
          </PrivateRoute>
        ),
        loader: () => fetch("/serviceCenters.json").then((res) => res.json()),
      },
      {
        path: "aboutUs",
        Component: AboutUs
      }
    ],
  },

  // auth routes
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/registration",
    Component: Registration,
  },
  {
    path: "/forgotPassword",
    Component: ForgotPassword,
  },
  {
    path: "/passwordResetCodeEnter",
    Component: PasswordResetCodeEnter,
  },
  {
    path: "/resetPassword",
    Component: ResetPasswordPage,
  },

  // dashboard routes
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoardLayout></DashBoardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        Component: DashboardHome,
      },
      {
        path: "myParcels",
        Component: ParcelList,
      },
      {
        path: "parcelDetails/:id",
        Component: ParcelDetails,
      },
      {
        path:"covarage-area",
        Component: Covarage,
        loader: () => fetch("/serviceCenters.json").then((res) => res.json()),
      }
    ],
  },
]);
