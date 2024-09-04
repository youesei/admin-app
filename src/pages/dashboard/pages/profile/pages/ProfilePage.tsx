import { DashboardLayout } from "@pages/dashboard/layout/DashboardLayout";
import { ProfileImage } from "../components/ProfileImage";
import { UpdatePassForm } from "../components/UpdatePassForm";
import { UpdateProfileForm } from "../components/UpdateProfileForm";

export const ProfilePage = () => {
	return (
		<DashboardLayout>
			<main className="grid items-center grid-cols-3 px-2 gap-x-4">
				<ProfileImage />
				<UpdateProfileForm />
				<UpdatePassForm />
			</main>
		</DashboardLayout>
	);
};
