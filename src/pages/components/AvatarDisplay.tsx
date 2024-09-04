import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const AvatarDisplay = ({
	name,
	imageUrl,
}: { name: string; imageUrl: string }) => {
	return (
		<>
			<Avatar className="w-full h-auto max-w-[150px] ">
				<AvatarImage
					className="object-cover aspect-[1/1]"
					loading="lazy"
					src={imageUrl}
				/>
				<AvatarFallback className="text-3xl">D</AvatarFallback>
			</Avatar>
			{name}
		</>
	);
};
