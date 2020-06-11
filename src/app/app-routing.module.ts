import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimesheetWidgetComponent } from './timesheet-widget/timesheet-widget.component';
import { NewTaskComponent } from './new-task/new-task.component';

const routes: Routes = [
  { path: '', component: TimesheetWidgetComponent },
  { path: 'new_task', component: NewTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
