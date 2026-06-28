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
import DashboardHome from "../pages/DashboardHome/DashboardHome";
import AboutUs from "../pages/AboutUs/AboutUs";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ParcelList from "../pages/ParcelList/ParcelList";
import Pricing from "../pages/Pricing/Pricing";
import Payment from "../pages/Payment/Payment";
import PaymentSuccess from "../pages/PaymentSuccess/PaymentSuccess";
import PaymentError from "../pages/PaymentError/PaymentError";
import PaymentHistory from "../pages/PaymentHistory/PaymentHistory";
import ApproveRiders from "../pages/ApproveRiders/ApproveRiders";
import ManageUsers from "../pages/ManageUsers/ManageUsers";
import AdminRoute from "./AdminRoute";
import TrackParcel from "../pages/TrackParcel/TrackParcel";
import AssignRiders from "../pages/AssignRiders/AssignRiders";
import AcceptParcels from "../pages/AcceptParcels/AcceptParcels";
import RiderStatics from "../pages/RiderStatics/RiderStatics";
import Portfolio from "../pages/Portfolio/Portfolio";

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
        loader: () => fetch("/serviceCenters.json").then((res) => res.json()),
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
        Component: AboutUs,
      },
      {
        path: "pricing",
        Component: Pricing,
        loader: () => fetch("/serviceCenters.json").then((res) => res.json()),
      },
      {
        path: "trackParcel",
        Component: TrackParcel,
      },
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
        path: "covarage-area",
        Component: Covarage,
        loader: () => fetch("/serviceCenters.json").then((res) => res.json()),
      },
      {
        path: "payment-history",
        Component: PaymentHistory,
      },
      // payment route
      {
        path: "payment/:id",
        Component: Payment,
      },
      {
        path: "approveRiders",
        element: (
          <AdminRoute>
            <ApproveRiders></ApproveRiders>
          </AdminRoute>
        ),
      },
      {
        path: "manageUsers",
        // Component: ManageUsers,
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: "assignRiders",
        element: (
          <AdminRoute>
            <AssignRiders></AssignRiders>
          </AdminRoute>
        ),
      },
      {
        path: "payment-cancelled",
        element: (
          <PrivateRoute>
            <PaymentError></PaymentError>
          </PrivateRoute>
        ),
      },
      {
        path: "payment-success",
        element: (
          <PrivateRoute>
            <PaymentSuccess></PaymentSuccess>
          </PrivateRoute>
        ),
      },
      {
        path: "acceptParcel",
        Component: AcceptParcels,
      },
      {
        path: "riderStatics",
        Component: RiderStatics,
      },
    ],
  },
  {
    path: "portfolio",
    Component: Portfolio
  },
]);
