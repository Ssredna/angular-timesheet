import { Injectable } from '@angular/core';

import { Event } from './event';
import { MOCK_DATA } from './mock-data';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor() {}

  getWorkedHours(day: Date): number {
    console.log('GET HOURS');
    let hours: number = 0;
    for (const event of MOCK_DATA) {
      if (
        event.date.toDateString() === day.toDateString() &&
        event.eventTypeName === 'arbeidstid'
      ) {
        hours += event.quantity;
      }
    }
    return hours;
  }
}
