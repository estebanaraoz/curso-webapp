export interface ClassInfo {
  id: string
  title: string
  /** Types of content available in the class */
  content: ('video' | 'text' | 'document' | 'questions')[]
}

export interface ModuleInfo {
  id: string
  title: string
  description: string
  intro: string
  videoUrl: string
  classes?: ClassInfo[]
}

export interface CourseInfo {
  id: string
  title: string
  description: string
  category: string
  image: string
  duration: string
  level: string
  /** Recommended duration in weeks */
  weeks: number
  prerequisites?: {
    courses?: string[]
    other?: string[]
  }
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
    weeks: 4,
    prerequisites: {
      other: ['Ser mayor de 18 años']
    },
    maxAttempts: 2,
    modules: [
      {
        id: '1',
        title: 'Introducción al desarrollo web',
        description:
          'Descubre cómo funcionan los navegadores y las bases del desarrollo web.',
        intro:
          'Conocerás los actores principales de internet y cómo se enlazan para mostrar páginas en tu navegador.',
        videoUrl: '#',
        classes: [
          { id: '1', title: 'Presentación', content: ['video'] },
          { id: '2', title: 'Lecturas recomendadas', content: ['text', 'document'] },
          { id: '3', title: 'Preguntas', content: ['questions'] },
        ],
      },
      {
        id: '2',
        title: 'Estructura con HTML',
        description: 'Aprende a estructurar páginas con etiquetas semánticas.',
        intro:
          'Verás las etiquetas fundamentales para definir encabezados, listas y secciones, creando bases sólidas de tus documentos.',
        videoUrl: '#',
        classes: [
          { id: '1', title: 'Etiquetas básicas', content: ['video', 'text'] },
          { id: '2', title: 'Documento de ejemplo', content: ['document'] },
        ],
      },
      {
        id: '3',
        title: 'Estilos con CSS',
        description:
          'Aplica estilos atractivos utilizando selectores y propiedades de CSS.',
        intro:
          'Aprenderás a cambiar colores, tipografías y disposiciones para lograr sitios atractivos y consistentes en todos los dispositivos.',
        videoUrl: '#',
        classes: [
          { id: '1', title: 'Selectores', content: ['video'] },
          { id: '2', title: 'Ejercicios', content: ['document', 'questions'] },
        ],
      },
      {
        id: '4',
        title: 'Diseño responsive',
        description:
          'Domina las técnicas para adaptar tus diseños a cualquier dispositivo.',
        intro:
          'Descubrirás técnicas con flexbox y media queries que adaptan el contenido a cualquier tamaño de pantalla.',
        videoUrl: '#',
        classes: [
          { id: '1', title: 'Flexbox', content: ['video'] },
          { id: '2', title: 'Media queries', content: ['video', 'text'] },
        ],
      },
      {
        id: '5',
        title: 'Proyecto final',
        description:
          'Pon en práctica todo lo aprendido creando un sitio web completo.',
        intro:
          'Combinaremos todos los temas anteriores para crear desde cero una página completa lista para publicar.',
        videoUrl: '#',
        classes: [
          { id: '1', title: 'Planificación', content: ['text'] },
          { id: '2', title: 'Entrega', content: ['document', 'questions'] },
        ],
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
    weeks: 5,
    prerequisites: {
      courses: ['html-css'],
    },
    maxAttempts: 3,
    modules: [
      {
        id: '1',
        title: 'Sintaxis y variables',
        description:
          'Conoce la sintaxis básica del lenguaje y cómo declarar variables.',
        intro:
          'Repasaremos operadores, palabras clave y cómo almacenar datos para sentar las bases de la programación en JavaScript.',
        videoUrl: '#',
      },
      {
        id: '2',
        title: 'Funciones y objetos',
        description: 'Profundiza en funciones, scopes y creación de objetos.',
        intro:
          'Analizarás cómo encapsular lógica y manipular colecciones de propiedades para estructurar mejor tu código en aplicaciones reales.',
        videoUrl: '#',
      },
      {
        id: '3',
        title: 'DOM y eventos',
        description:
          'Manipula elementos de la página y responde a las acciones del usuario.',
        intro:
          'Interactuarás con los elementos de la página y reaccionarás a las acciones del usuario con manejadores eficientes.',
        videoUrl: '#',
      },
      {
        id: '4',
        title: 'Manejo de asincronía',
        description:
          'Aprende promesas y async/await para controlar operaciones asíncronas.',
        intro:
          'Comprenderás promesas, async y await para coordinar procesos que toman tiempo sin bloquear la interfaz.',
        videoUrl: '#',
      },
      {
        id: '5',
        title: 'Consumo de APIs',
        description:
          'Realiza peticiones HTTP y trabaja con datos externos en tus apps.',
        intro:
          'Aprenderás a realizar peticiones HTTP y procesar respuestas para integrar datos externos de manera sencilla.',
        videoUrl: '#',
      },
      {
        id: '6',
        title: 'Proyecto integrador',
        description: 'Crea una aplicación práctica aplicando todos los conceptos.',
        intro:
          'Elaborarás una pequeña aplicación que combine variables, funciones y peticiones para afianzar tus conocimientos recientes.',
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
    weeks: 6,
    prerequisites: {
      courses: ['javascript-basico'],
    },
    maxAttempts: 2,
    modules: [
      {
        id: '1',
        title: 'Componentes y JSX',
        description: 'Entiende la filosofía de React y crea componentes reutilizables.',
        intro:
          'Exploraremos la estructura de los componentes y cómo usar JSX para describir interfaces de forma declarativa.',
        videoUrl: '#',
      },
      {
        id: '2',
        title: 'Estado y propiedades',
        description: 'Gestiona datos internos y comunica componentes de forma efectiva.',
        intro:
          'Aprenderás a manejar datos dinámicos y pasar información entre componentes para que la interfaz reaccione a los cambios.',
        videoUrl: '#',
      },
      {
        id: '3',
        title: 'Hooks básicos',
        description: 'Aprovecha useState y useEffect para dotar de lógica a tus interfaces.',
        intro:
          'Conocerás useState y useEffect para administrar estado y efectos laterales dentro de tus componentes de manera sencilla.',
        videoUrl: '#',
      },
      {
        id: '4',
        title: 'Ruteo con React Router',
        description: 'Navega entre páginas con enlaces y parámetros dinámicos.',
        intro:
          'Verás cómo configurar rutas y enlaces para navegar entre páginas sin recargar la aplicación de forma fluida.',
        videoUrl: '#',
      },
      {
        id: '5',
        title: 'Proyecto guiado',
        description: 'Construye una pequeña aplicación aplicando todo lo aprendido.',
        intro:
          'Construirás paso a paso una pequeña aplicación que combine todos los conceptos aprendidos en el curso.',
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
    weeks: 5,
    prerequisites: {
      courses: ['javascript-basico'],
    },
    maxAttempts: 4,
    modules: [
      {
        id: '1',
        title: 'Introducción a Node.js',
        description: 'Conoce el entorno de ejecución y sus características principales.',
        intro:
          'Revisaremos qué es Node y por qué permite ejecutar JavaScript fuera del navegador para crear servidores rápidos.',
        videoUrl: '#',
      },
      {
        id: '2',
        title: 'Módulos y NPM',
        description: 'Aprende a organizar tu código y gestionar dependencias.',
        intro:
          'Aprenderás a dividir tu código en módulos y a gestionar dependencias utilizando el sistema de paquetes NPM.',
        videoUrl: '#',
      },
      {
        id: '3',
        title: 'Creación de API con Express',
        description: 'Construye rutas y controladores para exponer servicios REST.',
        intro:
          'Construiremos un servicio REST básico con Express definiendo rutas, controladores y respuestas en formato JSON.',
        videoUrl: '#',
      },
      {
        id: '4',
        title: 'Persistencia con bases de datos',
        description: 'Integra una base de datos para guardar información de forma permanente.',
        intro:
          'Verás cómo conectar tu servidor a una base de datos para almacenar y consultar información de manera persistente.',
        videoUrl: '#',
      },
      {
        id: '5',
        title: 'Despliegue',
        description: 'Prepara y publica tu aplicación en un entorno productivo.',
        intro:
          'Aprenderás a preparar tu aplicación para producción y subirla a un servicio en la nube de forma segura.',
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
    weeks: 6,
    prerequisites: {
      courses: ['javascript-basico'],
    },
    maxAttempts: 5,
    modules: [
      {
        id: '1',
        title: 'Tipos y interfaces',
        description: 'Domina la definición de tipos para crear código más seguro.',
        intro:
          'Descubrirás cómo declarar tipos estrictos e interfaces para mejorar la legibilidad y seguridad de tu código.',
        videoUrl: '#',
      },
      {
        id: '2',
        title: 'Genéricos',
        description: 'Escribe funciones y clases reutilizables mediante genéricos.',
        intro:
          'Aprenderás a utilizar parámetros de tipo que permiten crear componentes y funciones reutilizables con seguridad total.',
        videoUrl: '#',
      },
      {
        id: '3',
        title: 'Decoradores y metadata',
        description: 'Añade funcionalidades mediante decoradores y reflexión.',
        intro:
          'Exploraremos cómo los decoradores agregan comportamiento y almacenan metadata valiosa en clases y métodos de tus aplicaciones.',
        videoUrl: '#',
      },
      {
        id: '4',
        title: 'Configuración avanzada',
        description: 'Configura el compilador y gestiona proyectos de gran escala.',
        intro:
          'Configurarás el compilador y comprenderás opciones que facilitan trabajar con proyectos grandes y monorepos en entornos profesionales.',
        videoUrl: '#',
      },
      {
        id: '5',
        title: 'Integración con librerías',
        description: 'Utiliza TypeScript junto a bibliotecas populares de JavaScript.',
        intro:
          'Verás las mejores prácticas para aprovechar bibliotecas de JavaScript manteniendo la consistencia del tipado en tus proyectos.',
        videoUrl: '#',
      },
      {
        id: '6',
        title: 'Patrones de diseño',
        description: 'Implementa soluciones comunes aplicando patrones en TypeScript.',
        intro:
          'Implementarás soluciones comunes aplicando patrones que ayudan a organizar y escalar aplicaciones TypeScript de manera eficiente.',
        videoUrl: '#',
      },
      {
        id: '7',
        title: 'Proyecto final',
        description: 'Desarrolla una aplicación compleja aplicando buenas prácticas.',
        intro:
          'Desarrollarás una aplicación completa usando técnicas avanzadas y buenas prácticas aprendidas durante el curso para consolidar conocimientos.',
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
    weeks: 8,
    prerequisites: {
      courses: ['react-principiantes', 'node-express'],
    },
    maxAttempts: 3,
    modules: [
      {
        id: '1',
        title: 'Fundamentos de MongoDB',
        description: 'Configura y modela tus datos en la base NoSQL más popular.',
        intro:
          'Aprenderás a instalar MongoDB y diseñar esquemas para almacenar documentos de manera flexible y eficiente.',
        videoUrl: '#',
      },
      {
        id: '2',
        title: 'API REST con Express',
        description: 'Crea un backend robusto y documenta tus rutas HTTP.',
        intro:
          'Construirás un backend manejando rutas y controladores para exponer datos desde la base de forma organizada.',
        videoUrl: '#',
      },
      {
        id: '3',
        title: 'Frontend con React',
        description: 'Conecta la interfaz de usuario con tu servidor utilizando React.',
        intro:
          'Integrarás la interfaz creada en React con tu servidor, consumiendo la API y mostrando los datos.',
        videoUrl: '#',
      },
      {
        id: '4',
        title: 'Autenticación',
        description: 'Implementa registros, login y protección de rutas.',
        intro:
          'Implementarás registro de usuarios y sesiones seguras para proteger las rutas sensibles de tu aplicación.',
        videoUrl: '#',
      },
      {
        id: '5',
        title: 'Testing',
        description: 'Escribe pruebas de extremo a extremo para asegurar la calidad.',
        intro:
          'Configurarás pruebas de extremo a extremo asegurando que cada parte del stack funcione como se espera.',
        videoUrl: '#',
      },
      {
        id: '6',
        title: 'Despliegue continuo',
        description: 'Automatiza la publicación de la aplicación con herramientas CI/CD.',
        intro:
          'Aprenderás a automatizar compilación y publicación utilizando pipelines para entregar nuevas versiones rápidamente en producción.',
        videoUrl: '#',
      },
      {
        id: '7',
        title: 'Proyecto final',
        description: 'Integra todos los componentes en una aplicación completa.',
        intro:
          'Unirás todos los componentes creando una aplicación completa que demuestre tus habilidades fullstack adquiridas en el curso.',
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
    weeks: 4,
    prerequisites: {
      courses: ['javascript-basico'],
    },
    maxAttempts: 2,
    modules: [
      {
        id: '1',
        title: 'Introducción a las pruebas',
        description: 'Comprende los tipos de pruebas y su importancia en el desarrollo.',
        intro:
          'Analizaremos los distintos tipos de pruebas y cuándo aplicarlos para asegurar la calidad de tu proyecto.',
        videoUrl: '#',
      },
      {
        id: '2',
        title: 'Jest en profundidad',
        description: 'Configura y aprovecha al máximo las características de Jest.',
        intro:
          'Verás configuración avanzada y utilidades de Jest para escribir pruebas claras y mantenibles en cualquier entorno.',
        videoUrl: '#',
      },
      {
        id: '3',
        title: 'Pruebas de React',
        description: 'Escribe tests para tus componentes utilizando la Testing Library.',
        intro:
          'Aprenderás a testear componentes usando Testing Library y a simular interacciones de los usuarios en aplicaciones reales.',
        videoUrl: '#',
      },
      {
        id: '4',
        title: 'Cobertura y mocks',
        description: 'Simula dependencias y mide el alcance de tus pruebas.',
        intro:
          'Utilizarás mocks para aislar dependencias y medirás la cobertura para mejorar tus pruebas de forma continua.',
        videoUrl: '#',
      },
      {
        id: '5',
        title: 'Integración continua',
        description: 'Automatiza la ejecución de tests en cada actualización.',
        intro:
          'Configurarás pipelines que ejecutan las pruebas automáticamente en cada actualización del repositorio garantizando calidad constante.',
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
    weeks: 7,
    prerequisites: {
      courses: ['react-principiantes'],
    },
    maxAttempts: 4,
    modules: [
      {
        id: '1',
        title: 'Bases de React Native',
        description: 'Configura tu entorno y crea tu primera aplicación móvil.',
        intro:
          'Instalarás las herramientas necesarias y crearás un proyecto inicial para comenzar a desarrollar aplicaciones móviles.',
        videoUrl: '#',
      },
      {
        id: '2',
        title: 'Componentes y estilos',
        description: 'Construye interfaces móviles y aplica estilos flexibles.',
        intro:
          'Explorarás componentes básicos y aplicarás estilos flexibles utilizando el sistema de diseño de React Native.',
        videoUrl: '#',
      },
      {
        id: '3',
        title: 'Navegación en la app',
        description: 'Gestiona pantallas y transiciones con React Navigation.',
        intro:
          'Configurarás pilas de navegación y pestañas para moverte entre pantallas de forma intuitiva en tus proyectos.',
        videoUrl: '#',
      },
      {
        id: '4',
        title: 'Consumo de APIs',
        description: 'Conecta tu aplicación con servicios externos para obtener datos.',
        intro:
          'Aprenderás a realizar peticiones y manejar respuestas para mostrar datos actualizados en la aplicación móvil.',
        videoUrl: '#',
      },
      {
        id: '5',
        title: 'Distribución en tiendas',
        description: 'Prepara tu app para publicarla en Google Play y App Store.',
        intro:
          'Revisaremos los pasos necesarios para compilar y publicar tu app en Google Play y App Store.',
        videoUrl: '#',
      },
      {
        id: '6',
        title: 'Proyecto final',
        description: 'Desarrolla una app completa aplicando todos los conocimientos.',
        intro:
          'Desarrollarás una aplicación completa aplicando todo lo aprendido durante el curso de React Native para demostrar tus habilidades.',
        videoUrl: '#',
      },
    ],
  },
]
