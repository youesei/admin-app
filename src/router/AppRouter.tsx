import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "@/pages/routes";
import { NotFoundRoutes } from "@/pages/404/routes";

const router = createBrowserRouter([
	PrivateRoutes,
	PublicRoutes,
	NotFoundRoutes,
]);

export const AppRouter = () => {
	return <RouterProvider router={router} />;
};
