import { AvatarDisplay } from "@pages/components/AvatarDisplay";
import { Input } from "@ui/input";

export const ProfileImage = () => {
	return (
		<header className="h-[20rem] flex flex-col items-center justify-center p-4 gap-y-3 rounded-xl bg-card">
			<AvatarDisplay
				name="Daniel Montilla"
				imageUrl="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
			/>
			<Input style={{ cursor: "pointer" }} id="picture" type="file" />
		</header>
	);
};
