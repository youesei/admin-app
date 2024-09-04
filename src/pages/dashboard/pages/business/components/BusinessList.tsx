import { ModalProvider } from "@/pages/context/modal/ModalProvider";
import { AddBusinessCard } from "./AddBusinessCard";
import { BusinessCard } from "./BusinessCard";

export const BusinessList = () => {
	return (
		<div className="relative grid px-2 py-4 overflow-y-auto gap-y-7 gap-x-7 grid-cols-responsive scroll-styled">
			<ModalProvider>
				<AddBusinessCard />
			</ModalProvider>

			{Array.from({ length: 10 }).map((_, index) => (
				<BusinessCard key={index} />
			))}
		</div>
	);
};
