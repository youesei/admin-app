import { ROUTES } from "@constants/globalConsts";
import { NotFoundPage } from "@pages/404/pages/NotFoundPage";
import { BusinessPage } from "../pages/BusinessPage";

export const BusinessRoutes = {
	path: ROUTES.BUSINESS,
	element: <BusinessPage />,
	errorElement: <NotFoundPage />,
};
