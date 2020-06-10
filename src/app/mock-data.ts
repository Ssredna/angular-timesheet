import { Event } from './event';

export const MOCK_DATA: Event[] = [
  {
    date: new Date(2020, 5, 8),
    quantity: 5,
    price: null,
    eventTypeName: 'arbeidstid',
    isExpenseType: false,
    isHoursEventType: true,
    isAdditionalHoursEventType: false,
    isWorkHour: true,
    isApproved: true,
    isRejected: false,
    tasksCount: 2,
    firstTaskStart: new Date(2020, 5, 8),
    lastTaskEnd: new Date(2020, 5, 8),
  },
  {
    date: new Date(2020, 5, 9),
    quantity: 6,
    price: null,
    eventTypeName: 'arbeidstid',
    isExpenseType: false,
    isHoursEventType: true,
    isAdditionalHoursEventType: false,
    isWorkHour: true,
    isApproved: false,
    isRejected: false,
    tasksCount: 2,
    firstTaskStart: new Date(2020, 5, 9),
    lastTaskEnd: new Date(2020, 5, 9),
  },
];
