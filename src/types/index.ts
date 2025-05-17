/**
 * Propiedades de un espacio físico
 * @interface Space
 */
export interface Space {
  /** Identificador único del espacio */
  id: string;
  name: string;
  description: string;
  calendarId: string;
  calendarColor: string;
}

/**
 * Propiedades para el componente Schedule
 * @interface ScheduleProps
 */
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

/**
 * Propiedades para un enlace individual
 * @interface Link
 */
export interface Link {
  /** Indica si el enlace es externo al proyecto */
  isExternalLink: boolean;
  /** Título del enlace */
  title: string;
  /** URL del enlace */
  url: string;
  /** Indica si es un enlace de estilo secundario */
  isSecondary?: boolean;
}

/**
 * Propiedades de la sección de enlaces
 * @interface LinksSectionsProps
 */
export interface LinksSectionsProps {
  title: string;
  links: Link[];
} 
