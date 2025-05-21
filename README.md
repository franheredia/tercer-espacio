# Tercer Espacio - Guía para Desarrolladores

Este proyecto está construido con React + TypeScript + Vite y está configurado para ser desplegado en GitHub Pages.

## 🚀 Inicio Rápido

1. Clona el repositorio:
```bash
git clone https://github.com/FranHeredia/tercer-espacio.git
cd tercer-espacio
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## 🛠 Stack Tecnológico

- **Frontend**: React 18.2.0
- **Lenguaje**: TypeScript 5.0.0
- **Bundler**: Vite 4.0.0
- **Estilos**: SCSS con BEM
- **Linting**: ESLint + Prettier
- **Control de Versiones**: Git con Conventional Commits

## 📁 Estructura del Proyecto

```
├── public/              # Archivos públicos estáticos
├── src/                # Código fuente
│   ├── assets/         # Archivos estáticos
│   ├── components/     # Componentes reutilizables
│   ├── pages/         # Páginas/rutas
│   ├── hooks/         # Custom hooks
│   ├── services/      # Servicios y APIs
│   ├── utils/         # Funciones utilitarias
│   ├── types/         # Tipos TypeScript
│   ├── layouts/       # Layouts de página
│   ├── context/       # Contextos de React
│   ├── constants/     # Constantes
│   └── styles/        # Estilos SCSS
```

## 📝 Convenciones de Código

### Nomenclatura
- **Directorios**: kebab-case
- **Componentes**: PascalCase
- **Estilos**: PascalCase o kebab-case
- **Tipos**: PascalCase
- **Constantes**: kebab-case
- **Hooks**: camelCase

### Componentes
```typescript
import React from 'react';
import './ComponentName.scss';

interface ComponentProps {
  // props
}

export const ComponentName: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  return (
    // JSX
  );
};

export default ComponentName;
```

### Estilos (BEM)
```scss
.component {
  &__element {
    // estilos
  }
  
  &--modifier {
    // estilos
  }
}
```

## 🔧 Scripts Disponibles

- `npm run dev`: Desarrollo local
- `npm run build`: Build de producción
- `npm run preview`: Vista previa de producción
- `npm run lint`: Linting del código
- `npm run format`: Formateo del código
- `npm run test`: Ejecuta tests
- `npm run deploy`: Despliegue en GitHub Pages

## 🎨 Sistema de Diseño

### Variables SCSS
```scss
// Colores
$color-primary: #EC7198;
$color-background: #2552F2;

// Breakpoints
$breakpoint-mobile: 480px;
$breakpoint-tablet: 768px;
$breakpoint-desktop: 1024px;

// Espaciado
$spacing-unit: 8px;
```

## 🧪 Testing (TO DO)

- Tests unitarios con Jest
- Tests de integración con React Testing Library
- Cobertura mínima: 80%

## 📦 Gestión de Dependencias

### Producción
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.22.0"
}
```

### Desarrollo
```json
{
  "typescript": "~5.0.0",
  "vite": "^4.0.0",
  "sass": "^1.69.0",
  "eslint": "^8.56.0",
  "prettier": "^3.2.0"
}
```

## 🔄 Flujo de Trabajo Git

1. Crear rama desde `develop`:
```bash
git checkout develop
git pull
git checkout -b feature/nombre-feature
```

2. Desarrollo y commits:
```bash
git add .
git commit -m "feat: descripción del cambio"
```

3. Push y Pull Request:
```bash
git push origin feature/nombre-feature
```

### Convención de Commits
- `feat`: Nueva característica
- `fix`: Corrección de bug
- `docs`: Documentación
- `style`: Formato
- `refactor`: Refactorización
- `test`: Tests
- `chore`: Tareas de mantenimiento

## 🚨 Solución de Problemas Comunes

### Desarrollo
1. **Imágenes no cargan**
   - Verificar ruta en `public/images/`
   - Usar `${import.meta.env.BASE_URL}images/`

2. **Estilos no aplican**
   - Verificar importación de variables
   - Comprobar sintaxis BEM
   - Revisar módulos CSS

3. **TypeScript errors**
   - Ejecutar `npm run type-check`
   - Verificar tipos en `src/types/`

### Despliegue
1. **GitHub Pages**
   - Verificar `homepage` en package.json
   - Comprobar rama `gh-pages`
   - Revisar configuración de GitHub Actions

## 📚 Recursos Adicionales

- [Documentación de React](https://reactjs.org/docs)
- [Guía de TypeScript](https://www.typescriptlang.org/docs)
- [Documentación de Vite](https://vitejs.dev/guide)
- [Guía de SCSS](https://sass-lang.com/guide)
