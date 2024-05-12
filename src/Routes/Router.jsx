import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Assignments from "../Pages/Assignments/Assignments";
import CreateAssignments from "../Pages/CreateAssignments/CreateAssignments";
import MyAssignments from "../Pages/MyAssignments/MyAssignments";
import PendingAssignments from "../Pages/PendingAssignments/PendingAssignments";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Shared/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/assignments",
        element: <Assignments />,
      },
      {
        path: "/create-assignments",
        element: <CreateAssignments />,
      },
      {
        path: "/my-assignments",
        element: <MyAssignments />,
      },
      {
        path: "/pending-assignments",
        element: <PendingAssignments />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
