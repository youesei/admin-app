import { NotFoundRoutes } from "@pages/404/routes/NotFoundRoutes";
import { PrivateRoutes, PublicRoutes } from "@pages/routes/ProtectedRoutes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	PrivateRoutes,
	PublicRoutes,
	NotFoundRoutes,
]);

export const AppRouter = () => {
	return <RouterProvider router={router} />;
};
