import { CardHeader, CardTitle } from "@/components/ui";
import { useNavigate } from "react-router-dom";
import { CardLayout } from "../layout";

export const BusinessCard = () => {
	const navigate = useNavigate();

	return (
		<CardLayout onClick={() => navigate("/modules")} className="bg-card">
			<CardHeader className="flex items-center justify-center p-0 gap-y-2">
				<img
					className="w-20 h-20 rounded-full aspect-[1/1] object-cover"
					src="https://images.pexels.com/photos/64613/pexels-photo-64613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="business-image"
				/>
				<CardTitle className="text-base">Tienda</CardTitle>
			</CardHeader>
		</CardLayout>
	);
};

// <Card
// 	onClick={() => navigate("/modules")}
// 	className="h-[13rem] cursor-pointer w-[13rem] grid justify-center border-background transition ease-in-out delay-75 hover:scale-110 duration-500"
// >
