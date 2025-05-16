export * from './types.d';

export interface Space {
  id: string;
  name: string;
  description: string;
  calendarId: string;
  calendarColor: string;
}

export interface ScheduleProps {
  spaceNumber: string;
  spaceName: string;
  calendarId: string;
  calendarColor: string;
} 