import { Input } from "@/components/ui";

export const ProfileImage = () => {
	return (
		<header className="h-[20rem] flex flex-col items-center justify-center p-4 gap-y-3 rounded-xl bg-card">
			<img
				className="object-cover w-40 h-40 aspect-[1/1] rounded-full"
				loading="lazy"
				src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
				alt="profile-image"
			/>
			<p className="text-lg font-bold">Daniel Zoria</p>
			<Input style={{ cursor: "pointer" }} id="picture" type="file" />
		</header>
	);
};
