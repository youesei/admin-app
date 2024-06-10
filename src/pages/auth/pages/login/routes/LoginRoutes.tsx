import { NotFoundPage } from "@/pages/404/pages";
import { LoginPage } from "../pages";

export const LoginRoutes = {
	path: "/login",
	element: <LoginPage />,
	errorElement: <NotFoundPage />,
};
