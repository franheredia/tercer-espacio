import type { Casting } from '@/types';
import { createDate } from '@/snippets';

export const completeCastings: Casting[] = [
    {
        title: "Personas Chilenas o Mexicanas",
        gender: "any",
        fisic: "Importante que mantengan su tonada y hablen frente a cámara.",
        description: "Es para grabar una serie de videos educativos. Remunerado.",
        requiredInfo: "un audio de presentación y una foto de rostro.",
        infoUrl: "",
        endDate: createDate("31-05-2025"),
        contact: {
            phone: "+5493512394808",
        }
    },
    {
        title: "Rol Fem - Corto Universitaro",
        gender: "female",
        fisic: "Que aparente entre 20 y 25 años.",
        description: "Casting virtual hasta el 31 de mayo. Remuneración y viáticos.",
        requiredInfo: "foto de rostro y de cuerpo completo.",
        infoUrl: "",
        endDate: createDate("31-05-2025"),
        contact: {
            phone: "+5493541695958",
        }
    },
    {
        title: "Rol Infantil Fem - Corto Universitaro",
        gender: "female",
        fisic: "Que aparente entre 10 años.",
        description: "Casting virtual hasta el 31 de mayo. Remuneración y viáticos.",
        requiredInfo: "foto de rostro y de cuerpo completo.",
        infoUrl: "",
        endDate: createDate("31-05-2025"),
        contact: {
            phone: "+5493541695958",
        }
    }
]; 