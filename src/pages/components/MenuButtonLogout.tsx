import { Button } from "@/components/ui/button";
import type { MenuButtonLogoutTypes } from "../types/types.d";

export const MenuButtonLogout = ({ children }: MenuButtonLogoutTypes) => {
	const handleLogout = () => {
		console.log("Logout");
	};
	return (
		<Button
			onClick={handleLogout}
			className="justify-start py-6 text-base capitalize rounded-none text-destructive hover:bg-destructive gap-x-2"
			variant="ghost"
		>
			{children}
		</Button>
	);
};
