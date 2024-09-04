import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { InfoPopupTypes } from "../types/types.d";

export const InfoPopup = ({ children, content, className }: InfoPopupTypes) => {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger
					className={cn("flex w-full gap-1 cursor-default", className)}
				>
					{children}
				</TooltipTrigger>
				<TooltipContent className="bg-white">{content}</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};
