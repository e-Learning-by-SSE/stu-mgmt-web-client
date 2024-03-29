import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AssignmentListComponent } from "./components/assignment-list/assignment-list.component";

// courses/:courseId/assignments/
const routes: Routes = [
	{
		path: ":assignmentId/assessments",
		loadChildren: () => import("../assessment/assessment.module").then(m => m.AssessmentModule)
	},
	{
		path: ":assignmentId/edit",
		loadChildren: () =>
			import("../assignment-edit/assignment-edit.module").then(m => m.AssignmentEditModule)
	},
	{ path: "", component: AssignmentListComponent, pathMatch: "full" }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AssignmentRoutingModule {}
