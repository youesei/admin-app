import { Card } from "@/components/ui";
import type { ReactNode } from "react";

interface CardLayoutTypes {
	children: ReactNode;
	className?: string;
	onClick?: () => void;
}

export const CardLayout = ({
	children,
	className,
	onClick,
}: CardLayoutTypes) => {
	return (
		<Card
			onClick={onClick}
			className={`${className} h-[13rem] w-[13rem] cursor-pointer grid justify-center border-background transition ease-in-out delay-75 hover:scale-110 duration-500`}
		>
			{children}
		</Card>
	);
};
