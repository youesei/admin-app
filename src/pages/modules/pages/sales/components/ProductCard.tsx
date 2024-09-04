import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export const ProductCard = ({ index }: { index: number }) => {
	return (
		<Card className="border-none cursor-pointer">
			<CardHeader className="p-0 text-center">
				<img
					className="rounded-tl-lg rounded-tr-lg object-cover aspect-[1.5/1]"
					src="https://images.pexels.com/photos/380954/pexels-photo-380954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="product-image"
				/>
			</CardHeader>

			<CardContent className="pt-3 text-center">
				<CardTitle>Product {index + 1}</CardTitle>
				<CardDescription>Deploy your new project in one-click.</CardDescription>
			</CardContent>
		</Card>
	);
};
