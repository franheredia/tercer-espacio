import type { Link } from "../src/types/links";

export const linkSections: {title: string, links: Link[]}[] = [
  {
    title: "Información General",
    links: [
      { title: "Talleres en Curso", isExternalLink: false, url: "talleres" },
      { title: "¿Cómo trabajamos?", isExternalLink: true, url: "https://drive.google.com/file/d/1q9fUAtGcjSjz7gNuPGuWBpeu7rSgCCp8/view" },
      { title: "Fotos y dimensiones del espacio", isExternalLink: true, url: "https://drive.google.com/file/d/1rr7gzHakELS6Se6ycWI_bu9gW1nGNzhf/view" }
    ]
  },
  {
    title: "Disponibilidad Horaria",
    links: [
      { title: "Ver horarios disponibles", isExternalLink: false, url: "horarios" }
    ]
  },
  {
    title: "Herramientas para la comunidad cultural",
    links: [
      { title: "Castings abiertos", isExternalLink: false, url: "castings", isSecondary: true },
      { title: "Schejit - Coincidir un horario", isExternalLink: true, url: "https://schej.it/", isSecondary: true },
      { title: "When2meet - Coincidir un horario", isExternalLink: true, url: "https://www.when2meet.com/", isSecondary: true },
      { title: "Trello - Gestionar proyecto/tareas", isExternalLink: true, url: "https://www.trello.com/", isSecondary: true },
      { title: "Splitwise - Gestionar gastos comunes", isExternalLink: true, url: "https://www.splitwise.com/", isSecondary: true }
    ]
  },
  {
    title: "Hacé tu reserva",
    links: [
      {
        title: "Whatsapp",
        isExternalLink: true,
        url: "https://wa.me/+5493518119701?text=Hola%20Tercer%20Espacio!%20Me%20gustar%C3%ADa%20consultarles%20por%20"
      }
    ]
  }
];