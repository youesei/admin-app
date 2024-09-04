import { ROUTES } from "@/constants/globalConsts";
import type { RouteObject } from "react-router-dom";
import { SalesLayout } from "../layout/SalesLayout";
import { CheckoutPage } from "../pages/CheckoutPage";
import { PaymentSummary } from "../pages/PaymentSummary";
import { SalesPage } from "../pages/SalesPage";

export const SalesRoutes = {
	path: ROUTES.SALES,
	element: <SalesLayout />,
	children: [
		{
			index: true,
			element: <SalesPage />,
		},
		{
			path: ROUTES.CHECKOUT,
			element: <CheckoutPage />,
		},
		{
			path: ROUTES.PAYMENTSUMMARY,
			element: <PaymentSummary />,
		},
	],
} as RouteObject;
