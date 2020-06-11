import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'app-widget-middle',
  templateUrl: './widget-middle.component.html',
  styleUrls: ['./widget-middle.component.css'],
})
export class WidgetMiddleComponent implements OnInit {
  selectedDay: Date;

  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.calendarService.currentSelectedDate.subscribe(
      (day) => (this.selectedDay = day)
    );
  }
}
