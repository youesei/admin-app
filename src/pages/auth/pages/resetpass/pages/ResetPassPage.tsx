import { AuthLayout } from "../../../layout";
import { ResetPassForms } from "../components";
import { ResetPassProvider } from "../context";

export const ResetPassPage = () => {
	return (
		<AuthLayout className="max-w-lg">
			<ResetPassProvider>
				<ResetPassForms />
			</ResetPassProvider>
		</AuthLayout>
	);
};
