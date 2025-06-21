export interface ModuleInfo {
  id: string
  title: string
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
      { id: '1', title: 'Introducción al desarrollo web' },
      { id: '2', title: 'Estructura con HTML' },
      { id: '3', title: 'Estilos con CSS' },
      { id: '4', title: 'Diseño responsive' },
      { id: '5', title: 'Proyecto final' },
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
      { id: '1', title: 'Sintaxis y variables' },
      { id: '2', title: 'Funciones y objetos' },
      { id: '3', title: 'DOM y eventos' },
      { id: '4', title: 'Manejo de asincronía' },
      { id: '5', title: 'Consumo de APIs' },
      { id: '6', title: 'Proyecto integrador' },
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
      { id: '1', title: 'Componentes y JSX' },
      { id: '2', title: 'Estado y propiedades' },
      { id: '3', title: 'Hooks básicos' },
      { id: '4', title: 'Ruteo con React Router' },
      { id: '5', title: 'Proyecto guiado' },
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
      { id: '1', title: 'Introducción a Node.js' },
      { id: '2', title: 'Módulos y NPM' },
      { id: '3', title: 'Creación de API con Express' },
      { id: '4', title: 'Persistencia con bases de datos' },
      { id: '5', title: 'Despliegue' },
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
      { id: '1', title: 'Tipos y interfaces' },
      { id: '2', title: 'Genéricos' },
      { id: '3', title: 'Decoradores y metadata' },
      { id: '4', title: 'Configuración avanzada' },
      { id: '5', title: 'Integración con librerías' },
      { id: '6', title: 'Patrones de diseño' },
      { id: '7', title: 'Proyecto final' },
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
      { id: '1', title: 'Fundamentos de MongoDB' },
      { id: '2', title: 'API REST con Express' },
      { id: '3', title: 'Frontend con React' },
      { id: '4', title: 'Autenticación' },
      { id: '5', title: 'Testing' },
      { id: '6', title: 'Despliegue continuo' },
      { id: '7', title: 'Proyecto final' },
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
      { id: '1', title: 'Introducción a las pruebas' },
      { id: '2', title: 'Jest en profundidad' },
      { id: '3', title: 'Pruebas de React' },
      { id: '4', title: 'Cobertura y mocks' },
      { id: '5', title: 'Integración continua' },
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
      { id: '1', title: 'Bases de React Native' },
      { id: '2', title: 'Componentes y estilos' },
      { id: '3', title: 'Navegación en la app' },
      { id: '4', title: 'Consumo de APIs' },
      { id: '5', title: 'Distribución en tiendas' },
      { id: '6', title: 'Proyecto final' },
    ],
  },
]
