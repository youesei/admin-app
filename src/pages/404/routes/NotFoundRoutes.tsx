import { NotFoundPage } from "@pages/404/pages/NotFoundPage";
import type { RouteObject } from "react-router-dom";

export const NotFoundRoutes = {
	path: "*",
	element: <NotFoundPage />,
} as RouteObject;
