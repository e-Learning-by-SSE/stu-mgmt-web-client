import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { throwError } from "rxjs";
import { catchError, map, switchMap, take } from "rxjs/operators";
import { AuthenticationService } from "../../../../../api";
import { AuthControllerService } from "../../../../../api_auth";
import { UnsubscribeOnDestroy } from "../../../shared/components/unsubscribe-on-destroy.component";
import { AuthService } from "../../services/auth.service";
import { ToastService } from "../../../shared/services/toast.service";

/**
 * Dialogs that allows the user to login to the Student-Management-System using the Sparkyservice as authentication provider.
 * @returns `True`, if user logged in successfully.
 */
@Component({
	selector: "app-login",
	templateUrl: "./login.dialog.html",
	styleUrls: ["./login.dialog.scss"]
})
export class LoginDialog extends UnsubscribeOnDestroy implements OnInit {

	username: string;
	password: string;
	errorMessage: string;

	loading = false;

	constructor(
		private dialogRef: MatDialogRef<LoginDialog, boolean>,
		private authProvider: AuthControllerService,
		private mgmtAuthApi: AuthenticationService,
		private auth: AuthService,
		private toast: ToastService
	) { super(); }

	ngOnInit(): void {
	}

	onLogin(): void {
		this.loading = true;

		const username = this.username.trim();
		const password = this.password.trim();

		this.authProvider.authenticate({ username, password }).pipe(
			take(1),
			switchMap(authInfo => {
				//console.log("authInfo:", authInfo);
				return this.mgmtAuthApi.loginWithToken({ token: authInfo.token.token });
			}),
			map(authToken => {
				//console.log("authToken:", authToken);
				this.auth.storeToken(authToken);
				this.loading = false;
				this.toast.success(authToken.user.displayName, "Common.Welcome");
				this.dialogRef.close(true);
			}),
			catchError(error => {
				console.log(error);
				this.loading = false;
				
				switch(error.status) {
				case 0:
					this.errorMessage = "Error.ConnectionRefused";
					break;
				case 401:
					this.errorMessage = "Error.InvalidCredentials";
					break;
				default:
					this.errorMessage = "Login failed (Reason: Unknown).";
					break;
				}
				return throwError(error);
			})
		).subscribe();
	}

}
