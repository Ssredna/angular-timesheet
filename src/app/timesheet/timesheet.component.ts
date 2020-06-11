import { Component, OnInit } from '@angular/core';

import { CalendarService } from '../calendar.service';
import { EventData } from '../event';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css'],
})
export class TimesheetComponent implements OnInit {
  selectedDay: Date;
  hoursEvents: EventData[];
  expenseEvents: EventData[];
  additionalHoursEvents: EventData[];
  firstTaskStart: Date;
  lastTaskEnd: Date;

  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.calendarService.currentSelectedDate.subscribe(
      (day) => (this.selectedDay = day)
    );
    this.calendarService.currentHourEvents.subscribe(
      (events) => (this.hoursEvents = events)
    );
    this.calendarService.currentExpenseEvents.subscribe(
      (events) => (this.expenseEvents = events)
    );
    this.calendarService.currentAdditionalHoursEvents.subscribe(
      (events) => (this.additionalHoursEvents = events)
    );
    this.calendarService.currentFirstTaskStart.subscribe(
      (task) => (this.firstTaskStart = task)
    );
    this.calendarService.currentLastTaskEnd.subscribe(
      (task) => (this.lastTaskEnd = task)
    );
  }
}
