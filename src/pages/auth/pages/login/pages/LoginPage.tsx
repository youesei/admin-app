import { AuthHeader } from "@pages/auth/layout/AuthHeader";
import { AuthLayout } from "@pages/auth/layout/AuthLayout";
import { LoginForm } from "../components/LoginForm";

export const LoginPage = () => {
	return (
		<AuthLayout className="max-w-sm">
			<AuthHeader title="Iniciar Sesión" />
			<LoginForm />
		</AuthLayout>
	);
};
