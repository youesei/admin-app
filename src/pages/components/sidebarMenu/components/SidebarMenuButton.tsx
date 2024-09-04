import { useBrowse } from "@hooks/useBrowse";
import { Button } from "@ui/button";
import type { MenuButtonTypes } from "../types/types";

export const SidebarMenuButton = ({ children, route }: MenuButtonTypes) => {
	const { handleNavigate, pathname } = useBrowse();
	const className = pathname === route ? "bg-accent" : "";
	return (
		<Button
			onClick={handleNavigate(route)}
			className={`justify-start py-6 text-base capitalize text-gray-300 rounded-none gap-x-2 ${className}`}
			variant="ghost"
		>
			{children}
		</Button>
	);
};
