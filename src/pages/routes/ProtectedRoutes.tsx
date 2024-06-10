import { Navigate, Outlet } from "react-router-dom";
import { ModulesRoutes } from "../modules/routes";
import { LoginRoutes } from "../auth/pages/login/routes";
import { RegisterRoutes } from "../auth/pages/register/routes";
import { ResetpassRoutes } from "../auth/pages/resetpass/routes";
import { BusinessRoutes } from "../home/pages/business/routes";
import { ProfileRoutes } from "../home/pages/profile/routes";

export const ProtectedRoutes = ({ isPrivate }: { isPrivate: boolean }) => {
	const isLogged = true;

	if (isPrivate && !isLogged) {
		return <Navigate to="/login" replace />;
	}

	if (!isPrivate && isLogged) {
		return <Navigate to="/business" replace />;
	}

	return <Outlet />;
};

export const PrivateRoutes = {
	element: <ProtectedRoutes isPrivate={true} />,
	children: [
		{
			path: "/",
			element: <Navigate to="/business" replace />,
		},
		ModulesRoutes,
		BusinessRoutes,
		ProfileRoutes,
	],
};

export const PublicRoutes = {
	element: <ProtectedRoutes isPrivate={false} />,
	children: [LoginRoutes, RegisterRoutes, ResetpassRoutes],
};
