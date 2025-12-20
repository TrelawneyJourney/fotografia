export const photos = [
  {
    id: 1,
    titulo: "Medano Blanco",
    slug: "medano-blanco",
    portada: `${import.meta.env.BASE_URL}photos/1.jpg`,
  },
  {
    id: 3,
    titulo: "Atardecer en la playa",
    slug: "atardecer-en-la-playa",
    portada: `${import.meta.env.BASE_URL}photos/3.jpg`,
  },
  {
    id: 5,
    titulo: "Noche en la playa",
    slug: "noche-en-la-playa",
    portada: `${import.meta.env.BASE_URL}photos/5.jpg`,
  },
  {
    id: 6,
    titulo: "Buzios",
    slug: "buzios",
    portada: `${import.meta.env.BASE_URL}photos/6.jpg`,
  },
  {
    id: 8,
    titulo: "En algun lado",
    slug: "pato",
    portada: `${import.meta.env.BASE_URL}photos/8.jpg`,
  },
];

export const navigation = [
  {
    titulo: "Proyectos",
    url: "/projects",
  },
  {
    titulo: "Estudio",
    url: "/estudio",
  },
  {
    titulo: "Contacto",
    url: "/contact",
  },
];

export const proyectos = [
  {
    id: 1,
    titulo: "Nubes",
    url: "nube",
    portada: `${import.meta.env.BASE_URL}photos/nubes/nube.jpg`,
    fotos: [
      `${import.meta.env.BASE_URL}photos/nubes/nube-1.jpg`,
      `${import.meta.env.BASE_URL}photos/nubes/nube-2.jpg`,
      `${import.meta.env.BASE_URL}photos/nubes/nube-3.jpg`,
      `${import.meta.env.BASE_URL}photos/nubes/nube-4.jpg`,
    ],
  },
  {
    id: 2,
    titulo: "Mar",
    url: "mar",
    portada: `${import.meta.env.BASE_URL}photos/mar/mar.jpg`,
    fotos: [
      `${import.meta.env.BASE_URL}photos/mar/mar-1.jpg`,
      `${import.meta.env.BASE_URL}photos/mar/mar-2.jpg`,
      `${import.meta.env.BASE_URL}photos/mar/mar-3.jpg`,
      `${import.meta.env.BASE_URL}photos/mar/mar-4.jpg`,
    ],
  },
  {
    id: 3,
    titulo: "Noche",
    url: "noche",
    portada: `${import.meta.env.BASE_URL}photos/noche/noche.jpg`,
    fotos: [
      `${import.meta.env.BASE_URL}photos/noche/noche-1.jpg`,
      `${import.meta.env.BASE_URL}photos/noche/noche-2.jpg`,
      `${import.meta.env.BASE_URL}photos/noche/noche-3.jpg`,
      `${import.meta.env.BASE_URL}photos/noche/noche-4.jpg`,
    ],
  },
  {
    id: 4,
    titulo: "Gala",
    url: "gala",
    portada: `${import.meta.env.BASE_URL}photos/gala/1.jpg`,
    fotos: [
      `${import.meta.env.BASE_URL}photos/gala/2.jpg`,
      `${import.meta.env.BASE_URL}photos/gala/3.jpg`,
      `${import.meta.env.BASE_URL}photos/gala/4.jpg`,
      `${import.meta.env.BASE_URL}photos/gala/5.jpg`,
      `${import.meta.env.BASE_URL}photos/gala/6.jpg`,
      `${import.meta.env.BASE_URL}photos/gala/7.jpg`,
      `${import.meta.env.BASE_URL}photos/gala/8.jpg`,
      `${import.meta.env.BASE_URL}photos/gala/9.jpg`,
    ],
  },
];
