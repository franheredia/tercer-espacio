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

## Sistema de Diseño

### Colores
- **Primarios**
  - Principal: `#EC7198`
  - Claro: `#F4B3CB`
  - Oscuro: `#CC3366`
- **Fondos**
  - Base: `#2552F2`
  - Claro: `#7A9AF4`
  - Oscuro: `#003399`
  - Más Oscuro: `#002266`
  - Acento: `#B29BF9`

### Tipografía
- **Fuentes**
  - Marca: Brice (sans-serif)
  - Principal: Gotham (sans-serif)
- **Tamaños**
  - Base: 16px (1rem)
  - Rangos: desde 12px (0.75rem) hasta 36px (2.25rem)

### Espaciado
- Unidad base: 8px
- Pequeño: 8px
- Medio: 16px
- Grande: 24px

### Breakpoints
- Móvil: 480px
- Tablet: 768px
- Desktop: 1024px

## Requisitos del Sistema

- Node.js >= 18.0.0
- npm >= 9.0.0

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/FranHeredia/tercer-espacio.git
```

2. Instala las dependencias:
```bash
cd tercer-espacio
npm install
```

3. Configura las variables de entorno:
   - Copia `.env.example` a `.env`
   - Ajusta las variables según tu entorno

## Manejo de Imágenes

### Ubicación de Imágenes
- Las imágenes estáticas deben colocarse en `public/images/`
- Para rutas de imágenes en componentes, usar:
```typescript
src={`${import.meta.env.BASE_URL}images/nombre-imagen.png`}
```

### Formatos Recomendados
- Usar WebP para mejor rendimiento
- PNG para imágenes con transparencia
- JPG para fotografías
- SVG para iconos y logos

## Componentes Principales

### Profile
- Muestra información principal y redes sociales
- Soporta imagen de perfil circular
- Enlaces a redes sociales con iconos SVG
- Totalmente responsivo

### LinkSection
- Sección de enlaces tipo Linktree
- Soporta enlaces primarios y secundarios
- Animaciones en hover
- Adaptable a diferentes tamaños de pantalla

## Scripts Adicionales

- `npm run lint`: Ejecuta el linter para verificar el código
- `npm run preview`: Vista previa de la versión de producción local
- `npm run predeploy`: Prepara la aplicación para despliegue
- `npm run deploy`: Despliega en GitHub Pages

## Versiones de Dependencias

### Producción
- React: ^19.1.0
- React DOM: ^19.1.0

### Desarrollo
- TypeScript: ~5.8.3
- Vite: ^6.3.5
- Sass: ^1.89.0
- ESLint: ^9.25.0

## Solución de Problemas Comunes

### Imágenes no cargan en desarrollo
- Verificar que las imágenes estén en `public/images/`
- Usar rutas relativas sin `/public`
- Utilizar `import.meta.env.BASE_URL` para rutas absolutas

### Estilos no se aplican
- Verificar importación de variables SCSS
- Comprobar la sintaxis de módulos CSS
- Asegurar que los nombres de clase son únicos

### Problemas de Despliegue
1. Verificar la configuración de `homepage` en package.json
2. Asegurar que el repositorio tiene permisos de GitHub Pages
3. Comprobar que la rama gh-pages existe y está actualizada
