import { NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { SharedModule } from "../shared/shared.module";
import { GroupCardComponent } from "./components/group-card/group-card.component";
import { GroupDetailComponent } from "./components/group-detail/group-detail.component";
import { GroupListComponent } from "./components/group-list/group-list.component";
import { CreateGroupStudentDialog } from "./dialogs/create-group-student/create-group-student.dialog";
import { CreateGroupMultipleComponent } from "./dialogs/create-group/create-group-multiple/create-group-multiple.component";
import { CreateGroupDialog } from "./dialogs/create-group/create-group.dialog";
import { EditGroupDialog } from "./dialogs/edit-group/edit-group.dialog";
import { JoinGroupDialog } from "./dialogs/join-group/join-group.dialog";
import { SearchGroupDialog } from "./dialogs/search-group/search-group.dialog";
import { GroupRoutingModule } from "./group-routing.module";

@NgModule({
	declarations: [
		CreateGroupDialog,
		CreateGroupMultipleComponent,
		CreateGroupStudentDialog,
		GroupListComponent,
		JoinGroupDialog,
		GroupDetailComponent,
		GroupCardComponent,
		EditGroupDialog,
		SearchGroupDialog
	],
	imports: [SharedModule, GroupRoutingModule, TranslateModule.forChild({ extend: true })],
	exports: [GroupListComponent]
})
export class GroupModule {}
