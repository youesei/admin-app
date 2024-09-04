import { Card } from "@/components/ui/card";
import type { CardLayoutTypes } from "../types/types";

export const CardLayout = ({
	children,
	className,
	onClick,
}: CardLayoutTypes) => {
	return (
		<Card
			onClick={onClick}
			className={`${className} h-[13rem] w-[13rem] cursor-pointer grid justify-center border-background card-animation`}
		>
			{children}
		</Card>
	);
};
