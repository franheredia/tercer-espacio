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

export interface Casting {
  title: string;
  gender: 'male' | 'female' | 'nonbinary' | 'any';
  fisic: string;
  description: string;
  phone: string;
  requiredInfo: string;
  infoUrl: string;
}

export interface Workshop {
  title: string;
  description: string;
  schedule: string;
  instructor: string;
  modality: string;
  contact: {
    phone?: string;
    infoUrl?: string;
  };
  image?: string;
  status: 'active' | 'coming_soon' | 'finished';
}

export interface Link {
  isExternalLink: boolean;
  title: string;
  url: string;
  isSecondary?: boolean;
}

export interface LinkSection {
  title: string;
  links: Link[];
} 
