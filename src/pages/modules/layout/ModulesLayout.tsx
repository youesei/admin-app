import { useBrowse } from "@hooks/useBrowse";
import { MODULES_ROUTES } from "../constants/modulesConsts";
import type { ModuleLayoutTypes } from "../types/types.d";

export const ModulesLayout = ({ children, title }: ModuleLayoutTypes) => {
	const { handleNavigate } = useBrowse();
	return (
		<div className="grid place-items-center gap-y-3">
			<div
				className="p-5 cursor-pointer bg-card rounded-2xl card-animation"
				onClick={handleNavigate(MODULES_ROUTES[title])}
			>
				{children}
			</div>
			<p className="text-lg font-medium capitalize">{title}</p>
		</div>
	);
};
