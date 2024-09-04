import { ROUTES } from "@/constants/globalConsts";
import { Navigate, Outlet } from "react-router-dom";
import { LoginRoutes } from "../auth/pages/login/routes/LoginRoutes";
import { RegisterRoutes } from "../auth/pages/register/routes/RegisterRoutes";
import { ResetpassRoutes } from "../auth/pages/resetpass/routes/ResetPassRoutes";
import { BusinessRoutes } from "../dashboard/pages/business/routes/BusinessRoutes";
import { ProfileRoutes } from "../dashboard/pages/profile/routes/ProfileRoutes";
import { InventoryRoutes } from "../inventory/routes/InventoryRoutes";
import { SalesRoutes } from "../modules/pages/sales/routes/SalesRoutes";
import { ModulesRoutes } from "../modules/routes/ModulesRoutes";

export const ProtectedRoutes = ({ isPrivate }: { isPrivate: boolean }) => {
	const isLogged = true;

	if (isPrivate && !isLogged) {
		return <Navigate to={ROUTES.LOGIN} replace />;
	}

	if (!isPrivate && isLogged) {
		return <Navigate to={ROUTES.BUSINESS} replace />;
	}

	return <Outlet />;
};

export const PrivateRoutes = {
	element: <ProtectedRoutes isPrivate={true} />,
	children: [
		{
			path: "/",
			element: <Navigate to={ROUTES.BUSINESS} replace />,
		},
		ModulesRoutes,
		BusinessRoutes,
		ProfileRoutes,
		SalesRoutes,
		InventoryRoutes,
	],
};

export const PublicRoutes = {
	element: <ProtectedRoutes isPrivate={false} />,
	children: [LoginRoutes, RegisterRoutes, ResetpassRoutes],
};
