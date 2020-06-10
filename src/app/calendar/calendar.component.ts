import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  lastWeekDays: Date[] = [];
  currentDay: Date;
  selectedDay: Date;

  constructor() {}

  ngOnInit(): void {
    this.getWeekDays();
    this.currentDay = this.lastWeekDays[6];
    this.selectedDay = this.currentDay;
  }

  getWeekDays() {
    for (let i = 0; i < 7; i++) {
      let dt = new Date();
      dt.setDate(dt.getDate() - i);
      this.lastWeekDays.unshift(dt);
    }
  }

  selectDay(day: Date) {
    this.selectedDay = day;
  }

  isItCurrentDay(day: Date): boolean {
    return day.toDateString() == this.currentDay.toDateString();
  }

  isItSelected(day: Date): boolean {
    return day.toDateString() == this.selectedDay.toDateString();
  }
}
