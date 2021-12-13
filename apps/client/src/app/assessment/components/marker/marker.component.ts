import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input, NgModule, OnInit } from "@angular/core";
import { ChipComponentModule } from "@student-mgmt-client/shared-ui";
import { MarkerDto } from "@student-mgmt/api-client";

@Component({
	selector: "app-marker",
	templateUrl: "./marker.component.html",
	styleUrls: ["./marker.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarkerComponent implements OnInit {
	@Input() marker: MarkerDto;
	severityEnum = MarkerDto.SeverityEnum;

	constructor() {}

	ngOnInit(): void {}
}

@NgModule({
	declarations: [MarkerComponent],
	exports: [MarkerComponent],
	imports: [CommonModule, ChipComponentModule]
})
export class MarkerComponentModule {}
