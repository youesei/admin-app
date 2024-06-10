import { AuthHeader } from "../../../layout";
import { CodeForm } from "./CodeForm";
import { ChangePassForm } from "./ChangePassForm";
import { SendCodeForm } from "./SendCodeForm";
import { useResetPassContext } from "../hooks";

const RESET_PASS_FORMS = {
	sendCode: <SendCodeForm />,
	validateCode: <CodeForm />,
	changePass: <ChangePassForm />,
};

export const ResetPassForms = () => {
	const { route, sectionTitle } = useResetPassContext();
	return (
		<>
			<AuthHeader title={sectionTitle} />
			{RESET_PASS_FORMS[route]}
		</>
	);
};
