import { AuthHeader } from "@pages/auth/layout/AuthHeader";
import { AuthLayout } from "@pages/auth/layout/AuthLayout";
import { RegisterForm } from "../components/RegisterForm";

export const RegisterPage = () => {
	return (
		<AuthLayout className="max-w-sm">
			<AuthHeader title="Registrate" />
			<RegisterForm />
		</AuthLayout>
	);
};
