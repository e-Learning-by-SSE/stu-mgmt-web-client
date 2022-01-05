/** Data received by the external authentication system's /authenticate/check-method. */
export interface AuthenticationInfoDto {
	user: User;
	token: Token;
}

interface Token {
	token: string;
	expiration: string;
}

interface User {
	username: string;
	fullName: string;
	realm: string;
	passwordDto: PasswordDto;
	settings: Settings;
	role: "DEFAULT" | "ADMIN" | "SERVICE";
}

interface Settings {
	wantsAi: boolean;
	emailReceive: boolean;
	emailAddress: string;
}

interface PasswordDto {
	oldPassword: string;
	newPassword: string;
}
