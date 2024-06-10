import { HomeLayout } from "@/pages/home/layout";
import { ProfileImage, UpdatePassForm, UpdateProfileForm } from "../components";

export const ProfilePage = () => {
	return (
		<HomeLayout>
			<main className="grid items-center grid-cols-3 px-2 gap-x-4">
				<ProfileImage />
				<UpdateProfileForm />
				<UpdatePassForm />
			</main>
		</HomeLayout>
	);
};
