import { ProductCard } from "./ProductCard";

export const ProductList = () => {
	return (
		<main className="grid w-full gap-3 p-3 overflow-y-auto scrollbar-hide grid-cols-responsive">
			{Array.from({ length: 30 }).map((_, index) => (
				<ProductCard key={index} index={index} />
			))}
		</main>
	);
};
