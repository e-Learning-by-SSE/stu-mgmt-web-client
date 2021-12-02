import { Component, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
	selector: "app-chip",
	templateUrl: "./chip.component.html",
	styleUrls: ["./chip.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipComponent {
	@Input() icon: string;
	@Input() text: string;
	@Input() color: "primary" | "accent" | "warn" | string;

	constructor() {}
}
