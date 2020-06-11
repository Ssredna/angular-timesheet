import { Component, OnInit, Input } from '@angular/core';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'app-cal-day',
  templateUrl: './cal-day.component.html',
  styleUrls: ['./cal-day.component.css'],
})
export class CalDayComponent implements OnInit {
  @Input() day: Date;
  @Input() selectedDay: boolean;
  @Input() currentDay: boolean;
  hours: number = 0;
  hoursString: string;
  dotColor: string;

  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.getHours();
    this.getDot();
    console.log(this.dotColor);
  }

  getHours(): void {
    this.hours = this.calendarService.getWorkedHours(this.day);
    if (this.hours > 0) {
      this.hoursString = this.setTohhmm(this.hours);
    } else {
      this.hoursString = '-';
    }
  }

  getDot(): void {
    this.dotColor = this.calendarService.getDotColor(this.day);
  }

  setTohhmm(hours: number): string {
    let sign = hours < 0 ? '-' : '';
    let wholeHours = Math.floor(Math.abs(hours));
    let minutes = Math.floor((Math.abs(hours) * 60) % 60);
    return sign + wholeHours + ':' + (minutes < 10 ? '0' : '') + minutes;
  }
}
