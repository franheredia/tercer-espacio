/**
 * Propiedades de un espacio físico
 * @interface Space
 */
export interface Space {
  /** Identificador único del espacio */
  id: string;
  /** Nombre del espacio */
  name: string;
  /** Descripción detallada del espacio */
  description: string;
  /** ID del calendario asociado al espacio */
  calendarId: string;
  /** Color identificativo del calendario */
  calendarColor: string;
}

/**
 * Propiedades para el componente Schedule
 * @interface ScheduleProps
 */
export interface ScheduleProps {
  /** Número identificativo del espacio */
  spaceNumber: string;
  /** Nombre del espacio */
  spaceName: string;
  /** ID del calendario asociado */
  calendarId: string;
  /** Color identificativo del calendario */
  calendarColor: string;
} 

/**
 * Propiedades para un casting o convocatoria
 * @interface Casting
 */
export interface Casting {
  /** Título de la convocatoria */
  title: string;
  /** Género requerido para el papel */
  gender: Gender;
  /** Características físicas requeridas */
  fisic: string;
  /** Descripción detallada del papel */
  description: string;
  /** Teléfono de contacto */
  phone: string;
  /** Información adicional requerida */
  requiredInfo: string;
  /** URL con información detallada */
  infoUrl: string;
}

export type Gender = 'any' | 'male' | 'female' | 'nonbinary';

/**
 * Propiedades para un taller o workshop
 * @interface Workshop
 */
export interface Workshop {
  /** Título del taller */
  title: string;
  /** Descripción detallada */
  description: string;
  /** Horario del taller */
  schedule: string;
  /** Nombre del instructor */
  instructor: string;
  /** Modalidad del taller (presencial/virtual) */
  modality: string;
  /** Información de contacto */
  contact: {
    /** Teléfono de contacto opcional */
    phone?: string;
    /** URL con información adicional opcional */
    infoUrl?: string;
  };
  /** URL de la imagen del taller */
  image?: string;
  /** Estado actual del taller */
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
  /** Título de la sección */
  title: string;
  /** Lista de enlaces en la sección */
  links: Link[];
} 
