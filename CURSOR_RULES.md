# Reglas de Consistencia para Tercer Espacio

## 1. Estructura de Archivos y Directorios

### 1.1 Organización de Directorios
```
src/
├── assets/         # Archivos estáticos (imágenes, iconos)
├── components/     # Componentes React reutilizables
├── constants/      # Constantes y configuraciones
├── data/          # Datos estáticos (workshops, links, etc.)
├── pages/         # Componentes de página
├── styles/        # Estilos globales y variables
└── types/         # Definiciones de tipos TypeScript
```

### 1.2 Convenciones de Nombres
- Directorios: `kebab-case`
- Archivos de componentes: `PascalCase.tsx`
- Archivos de estilos: `PascalCase.scss` o `kebab-case.scss`
- Archivos de tipos: `kebab-case.ts`
- Archivos de constantes: `kebab-case.ts`

## 2. Componentes React

### 2.1 Estructura de Componentes
```typescript
// imports
import React from 'react';
import './ComponentName.scss';

// types (si son específicos del componente)
interface ComponentProps {
  // props
}

// componente
export const ComponentName: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  return (
    // JSX
  );
};

export default ComponentName;
```

### 2.2 Organización de Carpetas de Componentes
```
ComponentName/
├── index.ts           # Exportación del componente
├── ComponentName.tsx  # Implementación del componente
└── ComponentName.scss # Estilos del componente
```

## 3. Estilos

### 3.1 Variables SCSS
- Usar las variables definidas en `styles/_variables.scss`
- No hardcodear valores de colores, espaciados o tipografía
- Mantener la consistencia con el sistema de diseño

### 3.2 Nomenclatura BEM
```scss
.block {
  &__element {
    &--modifier {
      // estilos
    }
  }
}
```

### 3.3 Orden de Propiedades CSS
1. Posicionamiento (`position`, `top`, `z-index`)
2. Box model (`display`, `width`, `margin`)
3. Tipografía (`font-family`, `font-size`)
4. Visual (`background`, `color`, `box-shadow`)
5. Misceláneos (`cursor`, `transition`)

## 4. TypeScript

### 4.1 Tipos y Interfaces
- Usar `interface` para objetos que pueden ser extendidos
- Usar `type` para uniones, intersecciones y tipos primitivos
- Exportar tipos en archivos separados bajo `/types`
- Nombrar interfaces descriptivamente (ej: `WorkshopData` vs `Workshop`)

### 4.2 Props de Componentes
- Definir interfaces para props con el sufijo `Props`
- Hacer props opcionales explícitamente con `?`
- Usar tipos específicos en lugar de `any`

## 5. Imágenes y Assets

### 5.1 Rutas de Imágenes
```typescript
// Correcto
src={`${import.meta.env.BASE_URL}images/nombre-imagen.webp`}

// Incorrecto
src="/images/nombre-imagen.webp"
```

### 5.2 Formatos de Imagen
- WebP para imágenes generales
- SVG para iconos y logos
- PNG solo cuando se necesite transparencia
- Optimizar imágenes antes de commit

## 6. Gestión de Estado

### 6.1 Hooks
- Preferir hooks personalizados para lógica reutilizable
- Mantener hooks simples y con una única responsabilidad
- Nombrar hooks con el prefijo `use`

### 6.2 Props Drilling
- Evitar prop drilling más allá de 2 niveles
- Usar Context para estado global cuando sea necesario
- Considerar el uso de reducers para lógica compleja

## 7. Rendimiento

### 7.1 Optimizaciones
- Usar React.memo para componentes que reciben props estables
- Implementar lazy loading para rutas
- Optimizar re-renders con useMemo y useCallback cuando sea necesario

### 7.2 Imágenes
- Usar lazy loading para imágenes
- Proporcionar atributos width y height
- Incluir alt text descriptivo

## 8. GitHub Pages

### 8.1 Configuración
- Mantener base URL en vite.config.ts: `base: '/tercer-espacio/'`
- Usar rutas relativas a la base URL
- Actualizar homepage en package.json según necesidad

### 8.2 Assets
- Ubicar assets estáticos en `/public`
- Referenciar assets usando `import.meta.env.BASE_URL`
- Mantener rutas consistentes en todo el proyecto

## 9. Dependencias

### 9.1 Versiones
- Mantener versiones fijas para dependencias críticas
- Documentar cambios de versión en CHANGELOG.md
- Revisar regularmente actualizaciones de seguridad

### 9.2 Package.json
- Mantener scripts descriptivos y documentados
- Separar claramente dependencias de desarrollo
- Mantener el archivo ordenado y limpio

## 10. Commits y Control de Versiones

### 10.1 Mensajes de Commit
```
feat: añadir nuevo componente de workshop
fix: corregir rutas de imágenes para GitHub Pages
style: actualizar variables SCSS
docs: actualizar README con nuevas instrucciones
```

### 10.2 Ramas
- `main`: código de producción
- `develop`: desarrollo activo
- `feature/*`: nuevas características
- `fix/*`: correcciones de bugs

## 11. Documentación

### 11.1 Comentarios
- Usar JSDoc para funciones y componentes importantes
- Mantener comentarios actualizados y relevantes
- Documentar decisiones de diseño no obvias

### 11.2 README
- Mantener actualizada la documentación de instalación
- Documentar nuevas características
- Incluir ejemplos de uso cuando sea relevante 