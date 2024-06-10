import { HomeLayout } from "@/pages/home/layout";
import { BusinessList } from "../components";

export const BusinessPage = () => {
	return (
		<HomeLayout title="Seleccionar Negocio">
			<BusinessList />
		</HomeLayout>
	);
};
