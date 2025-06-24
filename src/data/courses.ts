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
  category: string
  image: string
  duration: string
  level: string
  modules: ModuleInfo[]
  maxAttempts: number
}

export const courses: CourseInfo[] = [
  {
    id: 'html-css',
    title: 'HTML y CSS desde cero',
    description:
      'Aprende a construir paginas web modernas con HTML5 y CSS3 paso a paso.',
    category: 'Frontend',
    image: '/images/course-html-css.png',
    duration: '4 semanas',
    level: 'Principiante',
    maxAttempts: 3,
    modules: [
      {
        id: '1',
        title: 'Introducción al desarrollo web',
        description:
          'Descubre cómo funcionan los navegadores y las bases del desarrollo web.',
        videoUrl: '#',
      },
      {
        id: '2',
        title: 'Estructura con HTML',
        description: 'Aprende a estructurar páginas con etiquetas semánticas.',
        videoUrl: '#',
      },
      {
        id: '3',
        title: 'Estilos con CSS',
        description:
          'Aplica estilos atractivos utilizando selectores y propiedades de CSS.',
        videoUrl: '#',
      },
      {
        id: '4',
        title: 'Diseño responsive',
        description:
          'Domina las técnicas para adaptar tus diseños a cualquier dispositivo.',
        videoUrl: '#',
      },
      {
        id: '5',
        title: 'Proyecto final',
        description:
          'Pon en práctica todo lo aprendido creando un sitio web completo.',
        videoUrl: '#',
      },
    ],
  },
  {
    id: 'javascript-basico',
    title: 'JavaScript desde cero',
    description:
      'Domina los fundamentos del lenguaje que impulsa la web moderna.',
    category: 'Programación',
    image: '/images/course-js.png',
    duration: '5 semanas',
    level: 'Principiante',
    maxAttempts: 3,
    modules: [
      {
        id: '1',
        title: 'Sintaxis y variables',
        description:
          'Conoce la sintaxis básica del lenguaje y cómo declarar variables.',
        videoUrl: '#',
      },
      {
        id: '2',
        title: 'Funciones y objetos',
        description: 'Profundiza en funciones, scopes y creación de objetos.',
        videoUrl: '#',
      },
      {
        id: '3',
        title: 'DOM y eventos',
        description:
          'Manipula elementos de la página y responde a las acciones del usuario.',
        videoUrl: '#',
      },
      {
        id: '4',
        title: 'Manejo de asincronía',
        description:
          'Aprende promesas y async/await para controlar operaciones asíncronas.',
        videoUrl: '#',
      },
      {
        id: '5',
        title: 'Consumo de APIs',
        description:
          'Realiza peticiones HTTP y trabaja con datos externos en tus apps.',
        videoUrl: '#',
      },
      {
        id: '6',
        title: 'Proyecto integrador',
        description: 'Crea una aplicación práctica aplicando todos los conceptos.',
        videoUrl: '#',
      },
    ],
  },
  {
    id: 'react-principiantes',
    title: 'React para principiantes',
    description: 'Crea interfaces interactivas con la librería más popular.',
    category: 'Frontend',
    image: '/images/course-react.png',
    duration: '6 semanas',
    level: 'Intermedio',
    maxAttempts: 3,
    modules: [
      {
        id: '1',
        title: 'Componentes y JSX',
        description: 'Entiende la filosofía de React y crea componentes reutilizables.',
        videoUrl: '#',
      },
      {
        id: '2',
        title: 'Estado y propiedades',
        description: 'Gestiona datos internos y comunica componentes de forma efectiva.',
        videoUrl: '#',
      },
      {
        id: '3',
        title: 'Hooks básicos',
        description: 'Aprovecha useState y useEffect para dotar de lógica a tus interfaces.',
        videoUrl: '#',
      },
      {
        id: '4',
        title: 'Ruteo con React Router',
        description: 'Navega entre páginas con enlaces y parámetros dinámicos.',
        videoUrl: '#',
      },
      {
        id: '5',
        title: 'Proyecto guiado',
        description: 'Construye una pequeña aplicación aplicando todo lo aprendido.',
        videoUrl: '#',
      },
    ],
  },
  {
    id: 'node-express',
    title: 'Node.js y Express',
    description: 'Construye servidores y APIs con JavaScript del lado del servidor.',
    category: 'Backend',
    image: '/images/course-node.png',
    duration: '5 semanas',
    level: 'Intermedio',
    maxAttempts: 3,
    modules: [
      {
        id: '1',
        title: 'Introducción a Node.js',
        description: 'Conoce el entorno de ejecución y sus características principales.',
        videoUrl: '#',
      },
      {
        id: '2',
        title: 'Módulos y NPM',
        description: 'Aprende a organizar tu código y gestionar dependencias.',
        videoUrl: '#',
      },
      {
        id: '3',
        title: 'Creación de API con Express',
        description: 'Construye rutas y controladores para exponer servicios REST.',
        videoUrl: '#',
      },
      {
        id: '4',
        title: 'Persistencia con bases de datos',
        description: 'Integra una base de datos para guardar información de forma permanente.',
        videoUrl: '#',
      },
      {
        id: '5',
        title: 'Despliegue',
        description: 'Prepara y publica tu aplicación en un entorno productivo.',
        videoUrl: '#',
      },
    ],
  },
  {
    id: 'typescript-avanzado',
    title: 'TypeScript avanzado',
    description: 'Lleva tu código JavaScript al siguiente nivel con tipado fuerte.',
    category: 'Programación',
    image: '/images/course-ts.png',
    duration: '6 semanas',
    level: 'Avanzado',
    maxAttempts: 3,
    modules: [
      {
        id: '1',
        title: 'Tipos y interfaces',
        description: 'Domina la definición de tipos para crear código más seguro.',
        videoUrl: '#',
      },
      {
        id: '2',
        title: 'Genéricos',
        description: 'Escribe funciones y clases reutilizables mediante genéricos.',
        videoUrl: '#',
      },
      {
        id: '3',
        title: 'Decoradores y metadata',
        description: 'Añade funcionalidades mediante decoradores y reflexión.',
        videoUrl: '#',
      },
      {
        id: '4',
        title: 'Configuración avanzada',
        description: 'Configura el compilador y gestiona proyectos de gran escala.',
        videoUrl: '#',
      },
      {
        id: '5',
        title: 'Integración con librerías',
        description: 'Utiliza TypeScript junto a bibliotecas populares de JavaScript.',
        videoUrl: '#',
      },
      {
        id: '6',
        title: 'Patrones de diseño',
        description: 'Implementa soluciones comunes aplicando patrones en TypeScript.',
        videoUrl: '#',
      },
      {
        id: '7',
        title: 'Proyecto final',
        description: 'Desarrolla una aplicación compleja aplicando buenas prácticas.',
        videoUrl: '#',
      },
    ],
  },
  {
    id: 'mern-fullstack',
    title: 'Desarrollo Fullstack con MERN',
    description: 'Aprende a crear aplicaciones completas con Mongo, Express, React y Node.',
    category: 'Fullstack',
    image: '/images/course-mern.png',
    duration: '8 semanas',
    level: 'Avanzado',
    maxAttempts: 3,
    modules: [
      {
        id: '1',
        title: 'Fundamentos de MongoDB',
        description: 'Configura y modela tus datos en la base NoSQL más popular.',
        videoUrl: '#',
      },
      {
        id: '2',
        title: 'API REST con Express',
        description: 'Crea un backend robusto y documenta tus rutas HTTP.',
        videoUrl: '#',
      },
      {
        id: '3',
        title: 'Frontend con React',
        description: 'Conecta la interfaz de usuario con tu servidor utilizando React.',
        videoUrl: '#',
      },
      {
        id: '4',
        title: 'Autenticación',
        description: 'Implementa registros, login y protección de rutas.',
        videoUrl: '#',
      },
      {
        id: '5',
        title: 'Testing',
        description: 'Escribe pruebas de extremo a extremo para asegurar la calidad.',
        videoUrl: '#',
      },
      {
        id: '6',
        title: 'Despliegue continuo',
        description: 'Automatiza la publicación de la aplicación con herramientas CI/CD.',
        videoUrl: '#',
      },
      {
        id: '7',
        title: 'Proyecto final',
        description: 'Integra todos los componentes en una aplicación completa.',
        videoUrl: '#',
      },
    ],
  },
  {
    id: 'testing-jest',
    title: 'Testing con Jest',
    description: 'Garantiza la calidad de tus aplicaciones con pruebas unitarias y de integración.',
    category: 'Testing',
    image: '/images/course-jest.png',
    duration: '4 semanas',
    level: 'Intermedio',
    maxAttempts: 3,
    modules: [
      {
        id: '1',
        title: 'Introducción a las pruebas',
        description: 'Comprende los tipos de pruebas y su importancia en el desarrollo.',
        videoUrl: '#',
      },
      {
        id: '2',
        title: 'Jest en profundidad',
        description: 'Configura y aprovecha al máximo las características de Jest.',
        videoUrl: '#',
      },
      {
        id: '3',
        title: 'Pruebas de React',
        description: 'Escribe tests para tus componentes utilizando la Testing Library.',
        videoUrl: '#',
      },
      {
        id: '4',
        title: 'Cobertura y mocks',
        description: 'Simula dependencias y mide el alcance de tus pruebas.',
        videoUrl: '#',
      },
      {
        id: '5',
        title: 'Integración continua',
        description: 'Automatiza la ejecución de tests en cada actualización.',
        videoUrl: '#',
      },
    ],
  },
  {
    id: 'react-native',
    title: 'Aplicaciones móviles con React Native',
    description: 'Desarrolla apps nativas para iOS y Android usando JavaScript.',
    category: 'Mobile',
    image: '/images/course-react-native.png',
    duration: '7 semanas',
    level: 'Intermedio',
    maxAttempts: 3,
    modules: [
      {
        id: '1',
        title: 'Bases de React Native',
        description: 'Configura tu entorno y crea tu primera aplicación móvil.',
        videoUrl: '#',
      },
      {
        id: '2',
        title: 'Componentes y estilos',
        description: 'Construye interfaces móviles y aplica estilos flexibles.',
        videoUrl: '#',
      },
      {
        id: '3',
        title: 'Navegación en la app',
        description: 'Gestiona pantallas y transiciones con React Navigation.',
        videoUrl: '#',
      },
      {
        id: '4',
        title: 'Consumo de APIs',
        description: 'Conecta tu aplicación con servicios externos para obtener datos.',
        videoUrl: '#',
      },
      {
        id: '5',
        title: 'Distribución en tiendas',
        description: 'Prepara tu app para publicarla en Google Play y App Store.',
        videoUrl: '#',
      },
      {
        id: '6',
        title: 'Proyecto final',
        description: 'Desarrolla una app completa aplicando todos los conocimientos.',
        videoUrl: '#',
      },
    ],
  },
]
