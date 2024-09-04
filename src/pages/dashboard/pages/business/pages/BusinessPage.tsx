import { DashboardLayout } from "@pages/dashboard/layout/DashboardLayout";
import { BusinessList } from "../components/BusinessList";

export const BusinessPage = () => {
	return (
		<DashboardLayout title="Seleccionar Negocio">
			<BusinessList />
		</DashboardLayout>
	);
};
