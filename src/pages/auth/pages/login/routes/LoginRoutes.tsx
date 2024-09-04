import { ROUTES } from "@constants/globalConsts";
import { NotFoundPage } from "@pages/404/pages/NotFoundPage";
import { LoginPage } from "../pages/LoginPage";

export const LoginRoutes = {
	path: ROUTES.LOGIN,
	element: <LoginPage />,
	errorElement: <NotFoundPage />,
};
