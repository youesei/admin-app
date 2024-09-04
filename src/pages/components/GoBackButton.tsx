import { ArrowLeftIcon } from "@/components/icons/components/Icons";
import { Button } from "@/components/ui/button";
import { useBrowse } from "@/pages/hooks/useBrowse";
import type { GoBackButtonTypes } from "../types/types.d";

export const GoBackButton = ({ route }: GoBackButtonTypes) => {
	const { handleNavigate } = useBrowse();
	return (
		<Button
			onClick={handleNavigate(route)}
			className="hover:bg-transparent"
			variant="ghost"
		>
			<ArrowLeftIcon width="1.8rem" height="1.8rem" />
		</Button>
	);
};
