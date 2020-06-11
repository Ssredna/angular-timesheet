import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { EventData } from './event';
import { MOCK_DATA } from './mock-data';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  private selectedDate = new BehaviorSubject(new Date());
  currentSelectedDate = this.selectedDate.asObservable();
  private hoursEvents = new BehaviorSubject<EventData[]>([]);
  currentHourEvents = this.hoursEvents.asObservable();
  private expenseEvents = new BehaviorSubject<EventData[]>([]);
  currentExpenseEvents = this.expenseEvents.asObservable();
  private additionalHoursEvents = new BehaviorSubject<EventData[]>([]);
  currentAdditionalHoursEvents = this.additionalHoursEvents.asObservable();
  private firstTaskStart = new BehaviorSubject(new Date());
  currentFirstTaskStart = this.firstTaskStart.asObservable();
  private lastTaskEnd = new BehaviorSubject(new Date());
  currentLastTaskEnd = this.lastTaskEnd.asObservable();

  constructor() {}

  getWorkedHours(day: Date): number {
    let hours: number = 0;
    for (const event of MOCK_DATA) {
      if (
        event.date.toDateString() === day.toDateString() &&
        event.isWorkHour
      ) {
        hours += event.quantity;
      }
    }
    return hours;
  }

  getDotColor(day: Date): string {
    let eventList: EventData[] = [];
    for (const event of MOCK_DATA) {
      if (event.date.toDateString() === day.toDateString()) {
        if (event.isRejected) {
          return 'red';
        }
        eventList.push(event);
      }
    }
    if (eventList.length) {
      for (const event of eventList) {
        if (!event.isApproved) {
          return 'grey';
        }
      }
    } else {
      return 'noDot';
    }
    return 'green';
  }

  selectDay(day: Date): void {
    this.selectedDate.next(day);
    this.getHoursEvents(day);
    this.getExpenseEvents(day);
    this.getAdditionalHoursEvents(day);
  }

  getHoursEvents(day: Date): void {
    let hoursEvents: EventData[] = [];
    for (const event of MOCK_DATA) {
      if (
        event.isHoursEventType &&
        event.date.toDateString() === day.toDateString()
      ) {
        hoursEvents.push(event);
      }
    }
    this.getLastAndFirstHours(hoursEvents);
    this.hoursEvents.next(hoursEvents);
  }

  getExpenseEvents(day: Date): void {
    let expenseEvents: EventData[] = [];
    for (const event of MOCK_DATA) {
      if (
        event.isExpenseType &&
        event.date.toDateString() === day.toDateString()
      ) {
        expenseEvents.push(event);
      }
    }
    this.expenseEvents.next(expenseEvents);
  }

  getAdditionalHoursEvents(day: Date): void {
    let additionalHoursEvents: EventData[] = [];
    for (const event of MOCK_DATA) {
      if (
        event.isAdditionalHoursEventType &&
        event.date.toDateString() === day.toDateString()
      ) {
        additionalHoursEvents.push(event);
      }
    }
    this.additionalHoursEvents.next(additionalHoursEvents);
  }

  getLastAndFirstHours(hoursEvents: EventData[]) {
    if (hoursEvents.length) {
      let lastHour = hoursEvents[0].lastTaskEnd;
      let firstHour = hoursEvents[0].firstTaskStart;
      for (const event of hoursEvents) {
        if (event.lastTaskEnd > lastHour) {
          lastHour = event.lastTaskEnd;
        }
        if (event.firstTaskStart < firstHour) {
          firstHour = event.firstTaskStart;
        }
      }
      this.firstTaskStart.next(firstHour);
      this.lastTaskEnd.next(lastHour);
    } else {
      this.firstTaskStart.next(null);
      this.lastTaskEnd.next(null);
    }
  }
}
