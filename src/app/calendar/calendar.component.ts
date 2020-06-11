import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  lastWeekDays: Date[] = [];
  currentDay: Date;
  selectedDay: Date;

  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.getWeekDays();
    this.currentDay = this.lastWeekDays[6];
    this.calendarService.currentSelectedDate.subscribe(
      (day) => (this.selectedDay = day)
    );
  }

  getWeekDays() {
    for (let i = 0; i < 7; i++) {
      let dt = new Date();
      dt.setDate(dt.getDate() - i);
      this.lastWeekDays.unshift(dt);
    }
  }

  selectDay(day: Date) {
    this.calendarService.selectDay(day);
  }

  isItCurrentDay(day: Date): boolean {
    return day.toDateString() == this.currentDay.toDateString();
  }

  isItSelected(day: Date): boolean {
    return day.toDateString() == this.selectedDay.toDateString();
  }
}
