import { Button } from "@/components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";

export const ClearCart = () => {
	return (
		<div className="sticky text-center bottom-4">
			<Button className="bg-gray-100 hover:bg-destructive hover:text-white">
				<TrashIcon />
				Vaciar Carrito
			</Button>
		</div>
	);
};
