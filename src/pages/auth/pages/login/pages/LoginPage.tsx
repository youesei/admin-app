import { LoginForm } from "../components";
import { AuthHeader, AuthLayout } from "../../../layout";

export const LoginPage = () => {
	return (
		<AuthLayout className="max-w-sm">
			<AuthHeader title="Iniciar Sesión" />
			<LoginForm />
		</AuthLayout>
	);
};
