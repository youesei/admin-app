import { NotFoundPage } from "@/pages/404/pages";
import { BusinessPage } from "../pages";

export const BusinessRoutes = {
	path: "/business",
	element: <BusinessPage />,
	errorElement: <NotFoundPage />,
};
