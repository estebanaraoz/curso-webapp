export interface ModuleInfo {
  id: string
  title: string
  description: string
  videoUrl: string
}

export interface CourseInfo {
  id: string
  title: string
  description: string
  image: string
  duration: string
  level: string
  modules: ModuleInfo[]
}

export const courses: CourseInfo[] = [
  {
    id: 'html-css',
    title: 'HTML y CSS desde cero',
    description:
      'Aprende a construir paginas web modernas con HTML5 y CSS3 paso a paso.',
    image: '/images/course-html-css.png',
    duration: '4 semanas',
    level: 'Principiante',
    modules: [
      { id: '1', title: 'Introducción al desarrollo web', description: 'Contenido del módulo 1', videoUrl: '#' },
      { id: '2', title: 'Estructura con HTML', description: 'Contenido del módulo 2', videoUrl: '#' },
      { id: '3', title: 'Estilos con CSS', description: 'Contenido del módulo 3', videoUrl: '#' },
      { id: '4', title: 'Diseño responsive', description: 'Contenido del módulo 4', videoUrl: '#' },
      { id: '5', title: 'Proyecto final', description: 'Contenido del módulo 5', videoUrl: '#' },
    ],
  },
  {
    id: 'javascript-basico',
    title: 'JavaScript desde cero',
    description:
      'Domina los fundamentos del lenguaje que impulsa la web moderna.',
    image: '/images/course-js.png',
    duration: '5 semanas',
    level: 'Principiante',
    modules: [
      { id: '1', title: 'Sintaxis y variables', description: 'Contenido del módulo 1', videoUrl: '#' },
      { id: '2', title: 'Funciones y objetos', description: 'Contenido del módulo 2', videoUrl: '#' },
      { id: '3', title: 'DOM y eventos', description: 'Contenido del módulo 3', videoUrl: '#' },
      { id: '4', title: 'Manejo de asincronía', description: 'Contenido del módulo 4', videoUrl: '#' },
      { id: '5', title: 'Consumo de APIs', description: 'Contenido del módulo 5', videoUrl: '#' },
      { id: '6', title: 'Proyecto integrador', description: 'Contenido del módulo 6', videoUrl: '#' },
    ],
  },
  {
    id: 'react-principiantes',
    title: 'React para principiantes',
    description: 'Crea interfaces interactivas con la librería más popular.',
    image: '/images/course-react.png',
    duration: '6 semanas',
    level: 'Intermedio',
    modules: [
      { id: '1', title: 'Componentes y JSX', description: 'Contenido del módulo 1', videoUrl: '#' },
      { id: '2', title: 'Estado y propiedades', description: 'Contenido del módulo 2', videoUrl: '#' },
      { id: '3', title: 'Hooks básicos', description: 'Contenido del módulo 3', videoUrl: '#' },
      { id: '4', title: 'Ruteo con React Router', description: 'Contenido del módulo 4', videoUrl: '#' },
      { id: '5', title: 'Proyecto guiado', description: 'Contenido del módulo 5', videoUrl: '#' },
    ],
  },
  {
    id: 'node-express',
    title: 'Node.js y Express',
    description: 'Construye servidores y APIs con JavaScript del lado del servidor.',
    image: '/images/course-node.png',
    duration: '5 semanas',
    level: 'Intermedio',
    modules: [
      { id: '1', title: 'Introducción a Node.js', description: 'Contenido del módulo 1', videoUrl: '#' },
      { id: '2', title: 'Módulos y NPM', description: 'Contenido del módulo 2', videoUrl: '#' },
      { id: '3', title: 'Creación de API con Express', description: 'Contenido del módulo 3', videoUrl: '#' },
      { id: '4', title: 'Persistencia con bases de datos', description: 'Contenido del módulo 4', videoUrl: '#' },
      { id: '5', title: 'Despliegue', description: 'Contenido del módulo 5', videoUrl: '#' },
    ],
  },
  {
    id: 'typescript-avanzado',
    title: 'TypeScript avanzado',
    description: 'Lleva tu código JavaScript al siguiente nivel con tipado fuerte.',
    image: '/images/course-ts.png',
    duration: '6 semanas',
    level: 'Avanzado',
    modules: [
      { id: '1', title: 'Tipos y interfaces', description: 'Contenido del módulo 1', videoUrl: '#' },
      { id: '2', title: 'Genéricos', description: 'Contenido del módulo 2', videoUrl: '#' },
      { id: '3', title: 'Decoradores y metadata', description: 'Contenido del módulo 3', videoUrl: '#' },
      { id: '4', title: 'Configuración avanzada', description: 'Contenido del módulo 4', videoUrl: '#' },
      { id: '5', title: 'Integración con librerías', description: 'Contenido del módulo 5', videoUrl: '#' },
      { id: '6', title: 'Patrones de diseño', description: 'Contenido del módulo 6', videoUrl: '#' },
      { id: '7', title: 'Proyecto final', description: 'Contenido del módulo 7', videoUrl: '#' },
    ],
  },
  {
    id: 'mern-fullstack',
    title: 'Desarrollo Fullstack con MERN',
    description: 'Aprende a crear aplicaciones completas con Mongo, Express, React y Node.',
    image: '/images/course-mern.png',
    duration: '8 semanas',
    level: 'Avanzado',
    modules: [
      { id: '1', title: 'Fundamentos de MongoDB', description: 'Contenido del módulo 1', videoUrl: '#' },
      { id: '2', title: 'API REST con Express', description: 'Contenido del módulo 2', videoUrl: '#' },
      { id: '3', title: 'Frontend con React', description: 'Contenido del módulo 3', videoUrl: '#' },
      { id: '4', title: 'Autenticación', description: 'Contenido del módulo 4', videoUrl: '#' },
      { id: '5', title: 'Testing', description: 'Contenido del módulo 5', videoUrl: '#' },
      { id: '6', title: 'Despliegue continuo', description: 'Contenido del módulo 6', videoUrl: '#' },
      { id: '7', title: 'Proyecto final', description: 'Contenido del módulo 7', videoUrl: '#' },
    ],
  },
  {
    id: 'testing-jest',
    title: 'Testing con Jest',
    description: 'Garantiza la calidad de tus aplicaciones con pruebas unitarias y de integración.',
    image: '/images/course-jest.png',
    duration: '4 semanas',
    level: 'Intermedio',
    modules: [
      { id: '1', title: 'Introducción a las pruebas', description: 'Contenido del módulo 1', videoUrl: '#' },
      { id: '2', title: 'Jest en profundidad', description: 'Contenido del módulo 2', videoUrl: '#' },
      { id: '3', title: 'Pruebas de React', description: 'Contenido del módulo 3', videoUrl: '#' },
      { id: '4', title: 'Cobertura y mocks', description: 'Contenido del módulo 4', videoUrl: '#' },
      { id: '5', title: 'Integración continua', description: 'Contenido del módulo 5', videoUrl: '#' },
    ],
  },
  {
    id: 'react-native',
    title: 'Aplicaciones móviles con React Native',
    description: 'Desarrolla apps nativas para iOS y Android usando JavaScript.',
    image: '/images/course-react-native.png',
    duration: '7 semanas',
    level: 'Intermedio',
    modules: [
      { id: '1', title: 'Bases de React Native', description: 'Contenido del módulo 1', videoUrl: '#' },
      { id: '2', title: 'Componentes y estilos', description: 'Contenido del módulo 2', videoUrl: '#' },
      { id: '3', title: 'Navegación en la app', description: 'Contenido del módulo 3', videoUrl: '#' },
      { id: '4', title: 'Consumo de APIs', description: 'Contenido del módulo 4', videoUrl: '#' },
      { id: '5', title: 'Distribución en tiendas', description: 'Contenido del módulo 5', videoUrl: '#' },
      { id: '6', title: 'Proyecto final', description: 'Contenido del módulo 6', videoUrl: '#' },
    ],
  },
]
