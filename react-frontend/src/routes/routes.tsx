import { createHashRouter } from "react-router-dom";
import App from "../App";
import Booking from "../pages/booking/booking";
import MyBookings from "../pages/myBookings/myBookings";
import PrivateRoute from "./privateRoute";
import SelectUser from "../pages/selectUser/selectUser";

export const router = createHashRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <SelectUser />,
      },
      {
        element: <PrivateRoute />,
        children: [
          { path: "booking", element: <Booking /> },
          { path: "my-bookings", element: <MyBookings /> },
        ],
      },
    ],
  },
]);
