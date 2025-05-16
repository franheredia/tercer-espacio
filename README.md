# Tercer Espacio

Este proyecto está construido con React + TypeScript + Vite y está configurado para ser desplegado en GitHub Pages.

## Estructura del Proyecto

```
├── public/              # Archivos públicos estáticos
├── src/                # Código fuente
│   ├── assets/         # Archivos estáticos
│   │   ├── images/    # Imágenes
│   │   └── icons/     # Iconos
│   ├── components/     # Componentes reutilizables
│   │   ├── common/    # Componentes genéricos (botones, inputs, etc.)
│   │   └── layout/    # Componentes de estructura (header, footer, etc.)
│   ├── pages/         # Páginas/rutas de la aplicación
│   ├── hooks/         # Custom hooks
│   ├── services/      # Servicios y llamadas a APIs
│   ├── utils/         # Funciones utilitarias
│   ├── types/         # Definiciones de tipos TypeScript
│   ├── layouts/       # Layouts de página
│   ├── context/       # Contextos de React
│   ├── constants/     # Constantes y configuraciones
│   ├── styles/        # Estilos SCSS
│   ├── App.tsx        # Componente principal
│   ├── main.tsx       # Punto de entrada
│   └── vite-env.d.ts  # Declaraciones de tipos para Vite
├── index.html         # Archivo HTML principal
├── package.json       # Dependencias y scripts
├── tsconfig.json      # Configuración de TypeScript
├── vite.config.ts     # Configuración de Vite
└── README.md          # Este archivo
```

### Explicación de Directorios

#### Directorios Raíz
- `public/`: Archivos estáticos que se sirven directamente sin procesamiento
- `src/`: Contiene todo el código fuente de la aplicación
- `index.html`: Punto de entrada HTML de la aplicación

#### Dentro de `src/`

##### Componentes y Páginas
- `components/`: Componentes reutilizables de React
  - `common/`: Componentes genéricos como botones, inputs, cards
  - `layout/`: Componentes estructurales como headers, footers, sidebars
- `pages/`: Cada archivo representa una ruta/página de la aplicación
- `layouts/`: Plantillas de página reutilizables

##### Lógica y Datos
- `hooks/`: Custom hooks de React para lógica reutilizable
- `services/`: Funciones para interactuar con APIs externas
- `context/`: Contextos de React para estado global
- `utils/`: Funciones utilitarias y helpers
- `constants/`: Valores constantes y configuraciones

##### Tipos y Assets
- `types/`: Interfaces y tipos de TypeScript
- `assets/`: Archivos estáticos como imágenes e iconos
  - `images/`: Imágenes del proyecto
  - `icons/`: Iconos y SVGs

##### Estilos
- `styles/`: Archivos SCSS globales y variables
  - `variables.scss`: Variables SCSS globales
  - `main.scss`: Estilos globales

##### Archivos Principales
- `App.tsx`: Componente raíz de React
- `main.tsx`: Punto de entrada de JavaScript/TypeScript
- `vite-env.d.ts`: Declaraciones de tipos para el entorno de Vite

#### Archivos de Configuración
- `package.json`: Gestión de dependencias y scripts
- `tsconfig.json`: Configuración de TypeScript
- `vite.config.ts`: Configuración de Vite

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Compila el proyecto para producción
- `npm run preview`: Vista previa de la versión de producción
- `npm run deploy`: Despliega la aplicación en GitHub Pages

## Convenciones de Código

### Componentes
- Usar TypeScript y extensión `.tsx`
- Un componente por archivo
- Nombres en PascalCase
- Estilos en módulos SCSS (`.module.scss`)

### Estilos
- Variables globales en `styles/variables.scss`
- Estilos específicos de componentes en módulos SCSS junto al componente
- Usar las variables SCSS definidas para consistencia

### Imports
- Imports absolutos desde `src/`
- Agrupar imports por tipo (React, componentes, estilos, etc.)

## Despliegue

La aplicación está configurada para desplegarse en GitHub Pages. Para desplegar:

1. Asegúrate de que tus cambios están commiteados
2. Ejecuta `npm run deploy`
3. La aplicación se desplegará en `https://[username].github.io/tercer-espacio`
