import { NotFoundPage } from "@/pages/404/pages";
import { ProfilePage } from "../pages";

export const ProfileRoutes = {
	path: "/profile",
	element: <ProfilePage />,
	errorElement: <NotFoundPage />,
};
