# Funciones de Aula Digital Ciudadana

Este documento resume las características principales que ofrece la aplicación web desarrollada en React.

## Navegación general
- **Home**: página de inicio con descripción del proyecto, testimonios e invitación a explorar los cursos.
- **Cursos**: catálogo completo con filtros por categoría, nivel y duración. Para usuarios con sesión iniciada se muestran los cursos en curso y los completados.
- **Detalle del curso**: información detallada, requisitos, instructor y progreso. Desde aquí se accede al formulario de inscripción o a las clases del curso.
- **Flujo de usuario**: ruta `/flujo` que explica paso a paso cómo avanzar desde el inicio hasta aprobar un curso.
- **Wireframes**: listado de plantillas HTML en `/wireframes` para visualizar las maquetas de cada página.

## Gestión de usuario
- **Registro**: formulario para crear una cuenta.
- **Inicio de sesión**: autenticación con un usuario de ejemplo incluido en el código (`usuario@cursos.com.ar` / `usuario`).
- **Perfil**: edición básica de nombre y correo electrónico.
- **Dashboard**: panel principal con menú lateral para acceder a cursos, calificaciones, certificados y opción para cerrar sesión.

## Funciones de los cursos
- **Inscripción**: formulario que muestra requisitos y condiciones. Solo disponible para usuarios con sesión iniciada.
- **Clases y módulos**: contenido de cada curso dividido por módulos y clases. Se verifica el avance y se bloquean módulos hasta completar los anteriores.
- **Progreso**: la tienda `zustand` guarda los cursos inscritos, clases completadas y calificaciones usando `localStorage`.
- **Examen final**: cuestionario por curso con límite de intentos y espera de 24 h para volver a rendir si se desaprueba.
- **Certificados**: al aprobar un curso se registra la calificación (sección prevista en el dashboard).

## Comunidad y soporte
- **Foro**: espacio para publicar y responder dudas relacionado a un curso. Las publicaciones de ejemplo se encuentran en `src/data/forum.ts`.
- **Contacto**: formulario de consulta que puede recibir como parámetro el curso al que pertenece la duda.
- **Página de error y 404**: pantallas dedicadas para manejar rutas inexistentes y errores genéricos.

## Personalización
- **Modo oscuro**: conmutador incluido en la barra de navegación para alternar entre modo claro y oscuro.
- **Contenido estático**: imágenes, ilustraciones y wireframes disponibles en la carpeta `public`.

## Scripts disponibles
- `pnpm install` — instala las dependencias del proyecto.
- `pnpm dev` — inicia el servidor de desarrollo en Vite.
- `pnpm build` — produce la versión optimizada para producción.

## Tecnologías utilizadas

- **React 19**: biblioteca principal para construir la interfaz mediante
  componentes reutilizables.
- **TypeScript**: tipado estático para detectar errores y facilitar el
  mantenimiento. Todo el código de `src/` está escrito en este lenguaje.
- **Vite**: herramienta de desarrollo elegida por su rapidez en el arranque
  y la recarga. También genera los archivos de producción.
- **Tailwind CSS**: framework de utilidades integrado con PostCSS y
  Autoprefixer. Permite aplicar estilos directamente desde las clases en los
  componentes.
- **React Router DOM**: gestiona la navegación de la SPA. Las rutas están
  definidas en `src/App.tsx` y permiten cambiar de página sin recargar.
- **Zustand**: librería ligera para el estado global. En `src/store/auth.ts`
  guarda la sesión, el avance de los cursos y los persiste en `localStorage`.
- **Swiper**: slider usado en la portada y en `CourseSlider` para mostrar
  cursos destacados de manera responsiva.
- **Heroicons** y **React Icons**: colecciones de íconos listas para usar en
  menús, botones y mensajes.
- **Recharts**: biblioteca de gráficos incluida para futuras estadísticas en el
  panel de usuario.
- **ESLint** junto con TypeScript ESLint: verifican el código y aplican reglas
  comunes a todo el repositorio.
- **PNPM**: gestor de paquetes rápido que maneja la instalación de todas las
  dependencias.

