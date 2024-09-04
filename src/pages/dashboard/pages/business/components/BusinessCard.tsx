import { ROUTES } from "@constants/globalConsts";
import { useBrowse } from "@hooks/useBrowse";
import { CardHeader, CardTitle } from "@ui/card";
import { CardLayout } from "../layout/CardLayout";

export const BusinessCard = () => {
	const { handleNavigate } = useBrowse();

	return (
		<CardLayout onClick={handleNavigate(ROUTES.MODULES)} className="bg-card">
			<CardHeader className="flex items-center justify-center p-0 gap-y-2">
				<img
					className="object-cover w-20 h-20 rounded-full aspect-square"
					src="https://images.pexels.com/photos/64613/pexels-photo-64613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="business-image"
				/>
				<CardTitle className="text-base">Tienda</CardTitle>
			</CardHeader>
		</CardLayout>
	);
};
