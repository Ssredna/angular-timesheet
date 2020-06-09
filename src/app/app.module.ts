import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TimesheetWidgetComponent } from './timesheet-widget/timesheet-widget.component';
import { WidgetMiddleComponent } from './widget-middle/widget-middle.component';
import { CalDayComponent } from './cal-day/cal-day.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    TimesheetComponent,
    AddTaskComponent,
    TimesheetWidgetComponent,
    WidgetMiddleComponent,
    CalDayComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
