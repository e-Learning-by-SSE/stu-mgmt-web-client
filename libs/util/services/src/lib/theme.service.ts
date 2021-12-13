import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class ThemeService {
	availableThemes = [
		{
			cssClass: "dark",
			name: "Dark"
		},
		{
			cssClass: "light",
			name: "Light"
		}
	] as const;

	private themeSubject: BehaviorSubject<string>;
	theme$: Observable<string>;

	constructor() {
		const storedTheme = localStorage.getItem("theme");
		let theme: string;

		if (
			!storedTheme &&
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
		) {
			theme = "dark-purple-theme";
		} else if (storedTheme && this.availableThemes.find(t => t.cssClass === storedTheme)) {
			theme = storedTheme;
		} else {
			theme = "light-red-theme";
		}

		this.themeSubject = new BehaviorSubject(theme);
		this.theme$ = this.themeSubject
			.asObservable()
			.pipe(distinctUntilChanged((x, y) => x === y));
	}

	/**
	 * Emits the new theme via `theme$` and stores it in the storage.
	 * Theme must be included in `availableThemes`.
	 */
	setTheme(cssClass: string): void {
		if (this.availableThemes.find(t => t.cssClass === cssClass)) {
			localStorage.setItem("theme", cssClass);
			this.themeSubject.next(cssClass);
		} else {
			console.error(`Theme '${cssClass}' is not a registered theme.`);
		}
	}
}
