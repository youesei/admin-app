import { AuthLayout } from "@pages/auth/layout/AuthLayout";
import { ResetPassForms } from "../components/ResetPassForms";
import { ResetPassProvider } from "../context/ResetPassContext";

export const ResetPassPage = () => {
	return (
		<AuthLayout className="max-w-lg">
			<ResetPassProvider>
				<ResetPassForms />
			</ResetPassProvider>
		</AuthLayout>
	);
};
