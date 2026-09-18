import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../layouts/LandingPage/LandingPage";
import NotFound from "../layouts/LandingPage/NotFound";

export const ProviderRoutePaths = {
  Root: "/",
  NotFound: "*", // Standard catch-all path
};

export const ProviderRouter = createBrowserRouter([
  {
    path: ProviderRoutePaths.Root,
    Component: LandingPage,
  },
  {
    // This MUST be the last route in the array
    path: ProviderRoutePaths.NotFound,
    Component: NotFound,
  },
]);