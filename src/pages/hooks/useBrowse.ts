import {
	type NavigateOptions,
	useNavigate,
	useLocation,
} from "react-router-dom";
import type { RoutesTypes, TypedLocation } from "../types/types.d";

export const useBrowse = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation() as TypedLocation;

	const handleNavigate =
		(route: RoutesTypes, options?: NavigateOptions) => () => {
			navigate(route, options);
		};
	return { handleNavigate, pathname };
};
