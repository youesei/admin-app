export interface ResetPassStateTypes {
	email: string;
	code: string;
	password: string;
	confirmpassword: string;
	route: "sendCode" | "validateCode" | "changePass";
	sectionTitle: string;
}

export interface ResetPassContextTypes extends ResetPassStateTypes {
	handleChangeState: (data: Partial<ResetPassStateTypes>) => void;
}
