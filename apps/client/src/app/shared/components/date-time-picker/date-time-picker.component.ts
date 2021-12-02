import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { UnsubscribeOnDestroy } from "../unsubscribe-on-destroy.component";

@Component({
	selector: "app-date-time-picker",
	templateUrl: "./date-time-picker.component.html",
	styleUrls: ["./date-time-picker.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateTimePickerComponent extends UnsubscribeOnDestroy implements OnInit {
	@Input() control: FormControl;
	@Input() label: string;
	time: string;

	constructor() {
		super();
	}

	ngOnInit(): void {
		this.subs.sink = this.control.valueChanges.subscribe(dateAsIso => {
			if (dateAsIso) {
				const current = new Date(dateAsIso);
				const hours = this.withLeadingZero(current.getHours());
				const minutes = this.withLeadingZero(current.getMinutes());
				this.time = hours + ":" + minutes;
			} else {
				this.time = null;
			}
		});
	}

	onTimeChanged(time: string): void {
		const timeRegex = /^(\d\d):(\d\d)$/;

		if (timeRegex.test(time)) {
			const [, hours, minutes] = timeRegex.exec(time);
			this.updateDate(new Date(this.control.value), Number(hours), Number(minutes));
		} else {
			this.updateDate(new Date(this.control.value), 0, 0);
		}
	}

	withLeadingZero(num: number): string {
		if (num < 10) {
			return "0" + num;
		}

		return num.toString();
	}

	updateDate(current: Date, hours: number, minutes: number): void {
		const year = current.getFullYear();
		const month = current.getMonth();
		const date = current.getDate();
		const newDate = new Date(year, month, date, hours, minutes);
		this.control.setValue(newDate.toISOString());
	}
}
