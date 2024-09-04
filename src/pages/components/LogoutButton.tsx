import { LogoutIcon } from "@/components/icons/components/Icons";
import { Button } from "@/components/ui/button";

export const LogoutButton = () => {
	return (
		<Button
			variant="ghost"
			className="px-3 py-6 text-destructive hover:bg-transparent"
		>
			<LogoutIcon stroke="currentcolor" width="1.8rem" height="1.8rem" />
		</Button>
	);
};
