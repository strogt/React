import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Detils from "../pages/Detils";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detils",
    element: <Detils />,
  },
]);

export { router };
