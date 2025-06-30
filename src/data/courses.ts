export interface ClassInfo {
  id: string
  title: string
  /** Types of content available in the class */
  content: ('video' | 'text' | 'document' | 'questions')[]
  /** Estimated duration when the class includes a video */
  duration?: string
  /** Description paragraphs for the class */
  description: string[]
}

export interface ModuleInfo {
  id: string
  title: string
  description: string
  intro: string
  videoUrl: string
  classes?: ClassInfo[]
}

const defaultClasses: ClassInfo[] = [
  {
    id: '1',
    title: 'Clase 1',
    content: ['video'],
    duration: '0m',
    description: ['Contenido no disponible'],
  },
  {
    id: '2',
    title: 'Clase 2',
    content: ['text'],
    description: ['Contenido no disponible'],
  },
  {
    id: '3',
    title: 'Clase 3',
    content: ['questions'],
    description: ['Contenido no disponible'],
  },
]


export interface CourseInfo {
  id: string
  title: string
  description: string
  category: string
  image: string
  duration: string
  level: string
  free: boolean
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
      'Este curso introductorio te guía por los conceptos básicos de HTML y CSS. Aprenderás cómo funcionan los navegadores y las etiquetas que dan estructura a una página. Luego practicarás estilos y distribución para crear diseños adaptables. Finalizarás con un proyecto donde aplicarás todo lo visto. Al terminar podrás construir sitios web modernos desde cero.',
    category: 'Frontend',
    image: '/images/course-html-css.png',
    duration: '4 semanas',
    level: 'Principiante',
    free: true,
    weeks: 4,
    prerequisites: {
      other: ['Ser mayor de 18 años', 'DNI argentino']
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
          {
            id: '1',
            title: 'Presentación',
            content: ['video'],
            duration: '5m',
            description: [
              'En este video daremos la bienvenida al curso y explicaremos la dinámica de trabajo que seguiremos durante las próximas semanas. Repasaremos cómo están organizados los módulos y qué materiales adicionales encontrarás disponibles en la plataforma. También revisaremos qué conocimientos previos son necesarios para aprovechar cada lección y cómo puedes ponerte al día si lo requieres. Al finalizar tendrás una visión clara del recorrido que haremos y podrás planificar tu tiempo de estudio para sacar el mayor provecho del curso.',
            ],
          },
          {
            id: '2',
            title: 'Lecturas recomendadas',
            content: ['text', 'document'],
            description: [
              'Te compartiremos enlaces a artículos y videos que amplían los conceptos vistos en la clase anterior para que puedas profundizar a tu propio ritmo. Además podrás descargar un PDF con material complementario que resume las definiciones más relevantes. Este documento incluye recomendaciones de estilos, buenas prácticas al escribir código y ejercicios adicionales para reforzar lo aprendido. La idea es que dispongas de recursos permanentes que puedas consultar cuando quieras retomar el estudio.',
            ],
          },
          {
            id: '3',
            title: 'Preguntas',
            content: ['questions'],
            description: [
              'Aquí encontrarás un breve cuestionario diseñado para evaluar tu comprensión de los temas iniciales del curso. Cada pregunta busca repasar los conceptos clave de la introducción y detectar puntos que podrían requerir un repaso adicional. No olvides completar este apartado para continuar con el siguiente módulo; los resultados te ayudarán a enfocar mejor tu aprendizaje y asegurar que dominas los conocimientos básicos antes de seguir adelante.',
            ],
          },
        ],
      },
      {
        id: '2',
        title: 'Estructura con HTML',
        description: 'Aprende a estructurar páginas con etiquetas semánticas.',
        intro:
          'Verás las etiquetas fundamentales para definir encabezados, listas y secciones, creando bases sólidas de tus documentos.',
        videoUrl: '#',
        classes: defaultClasses,
        
      },
      {
        id: '3',
        title: 'Estilos con CSS',
        description:
          'Aplica estilos atractivos utilizando selectores y propiedades de CSS.',
        intro:
          'Aprenderás a cambiar colores, tipografías y disposiciones para lograr sitios atractivos y consistentes en todos los dispositivos.',
        videoUrl: '#',
        classes: defaultClasses,
        
      },
      {
        id: '4',
        title: 'Diseño responsive',
        description:
          'Domina las técnicas para adaptar tus diseños a cualquier dispositivo.',
        intro:
          'Descubrirás técnicas con flexbox y media queries que adaptan el contenido a cualquier tamaño de pantalla.',
        videoUrl: '#',
        classes: defaultClasses,
        
      },
      {
        id: '5',
        title: 'Proyecto final',
        description:
          'Pon en práctica todo lo aprendido creando un sitio web completo.',
        intro:
          'Combinaremos todos los temas anteriores para crear desde cero una página completa lista para publicar.',
        videoUrl: '#',
        classes: defaultClasses,
        
      },
    ],
  },
  {
    id: 'javascript-basico',
    title: 'JavaScript desde cero',
    description:
      'Aprenderás paso a paso la sintaxis de JavaScript y sus características fundamentales. Desde la declaración de variables hasta el manejo del DOM, recorrerás ejemplos prácticos en cada módulo. Verás cómo organizar tu código y trabajar con asincronía y consumo de APIs. El curso concluye con un proyecto integrador para afianzar lo aprendido. Al finalizar contarás con las bases necesarias para seguir explorando el desarrollo web.',
    category: 'Programación',
    image: '/images/course-js.png',
    duration: '5 semanas',
    level: 'Principiante',
    free: true,
    weeks: 5,
    prerequisites: {
      courses: ['html-css'],
      other: ['Ser mayor de 18 años', 'DNI argentino'],
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
        classes: defaultClasses,
      },
      {
        id: '2',
        title: 'Funciones y objetos',
        description: 'Profundiza en funciones, scopes y creación de objetos.',
        intro:
          'Analizarás cómo encapsular lógica y manipular colecciones de propiedades para estructurar mejor tu código en aplicaciones reales.',
        videoUrl: '#',
        classes: defaultClasses,
      },
      {
        id: '3',
        title: 'DOM y eventos',
        description:
          'Manipula elementos de la página y responde a las acciones del usuario.',
        intro:
          'Interactuarás con los elementos de la página y reaccionarás a las acciones del usuario con manejadores eficientes.',
        videoUrl: '#',
        classes: defaultClasses,
      },
      {
        id: '4',
        title: 'Manejo de asincronía',
        description:
          'Aprende promesas y async/await para controlar operaciones asíncronas.',
        intro:
          'Comprenderás promesas, async y await para coordinar procesos que toman tiempo sin bloquear la interfaz.',
        videoUrl: '#',
        classes: defaultClasses,
      },
      {
        id: '5',
        title: 'Consumo de APIs',
        description:
          'Realiza peticiones HTTP y trabaja con datos externos en tus apps.',
        intro:
          'Aprenderás a realizar peticiones HTTP y procesar respuestas para integrar datos externos de manera sencilla.',
        videoUrl: '#',
        classes: defaultClasses,
      },
      {
        id: '6',
        title: 'Proyecto integrador',
        description: 'Crea una aplicación práctica aplicando todos los conceptos.',
        intro:
          'Elaborarás una pequeña aplicación que combine variables, funciones y peticiones para afianzar tus conocimientos recientes.',
        videoUrl: '#',
        classes: defaultClasses,
      },
    ],
  },
  {
    id: 'react-principiantes',
    title: 'React para principiantes',
    description: 'Este curso te introduce en el desarrollo de interfaces con React. A lo largo de diversos módulos aprenderás a crear componentes reutilizables y administrar estado de forma efectiva. Revisaremos los hooks más comunes y la configuración de rutas para proyectos de una sola página. Realizarás un proyecto guiado donde pondrás en práctica cada concepto. Al completarlo estarás listo para construir aplicaciones interactivas más complejas.',
    category: 'Frontend',
    image: '/images/course-react.png',
    duration: '8 semanas',
    level: 'Intermedio',
    free: false,
    weeks: 8,
    prerequisites: {
      courses: ['javascript-basico'],
      other: ['Ser mayor de 18 años', 'DNI argentino'],
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
        classes: defaultClasses,
      },
      {
        id: '2',
        title: 'Estado y propiedades',
        description: 'Gestiona datos internos y comunica componentes de forma efectiva.',
        intro:
          'Aprenderás a manejar datos dinámicos y pasar información entre componentes para que la interfaz reaccione a los cambios.',
        videoUrl: '#',
        classes: defaultClasses,
      },
      {
        id: '3',
        title: 'Hooks básicos',
        description: 'Aprovecha useState y useEffect para dotar de lógica a tus interfaces.',
        intro:
          'Conocerás useState y useEffect para administrar estado y efectos laterales dentro de tus componentes de manera sencilla.',
        videoUrl: '#',
        classes: defaultClasses,
      },
      {
        id: '4',
        title: 'Ruteo con React Router',
        description: 'Navega entre páginas con enlaces y parámetros dinámicos.',
        intro:
          'Verás cómo configurar rutas y enlaces para navegar entre páginas sin recargar la aplicación de forma fluida.',
        videoUrl: '#',
        classes: defaultClasses,
      },
      {
        id: '5',
        title: 'Proyecto guiado',
        description: 'Construye una pequeña aplicación aplicando todo lo aprendido.',
        intro:
          'Construirás paso a paso una pequeña aplicación que combine todos los conceptos aprendidos en el curso.',
        videoUrl: '#',
        classes: defaultClasses,
      },
    ],
  },
  {
    id: 'node-express',
    title: 'Node.js y Express',
    description: 'En este curso aprenderás a crear servidores con Node y Express desde cero. Comenzaremos instalando el entorno y explorando el uso de módulos y NPM. Luego construirás una API REST con persistencia en bases de datos y prepararás el proyecto para desplegarlo en la nube. Al finalizar serás capaz de desarrollar y publicar tus propios servicios backend.',
    category: 'Backend',
    image: '/images/course-node.png',
    duration: '8 semanas',
    level: 'Intermedio',
    free: false,
    weeks: 8,
    prerequisites: {
      courses: ['javascript-basico'],
      other: ['Ser mayor de 18 años', 'DNI argentino'],
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
        classes: defaultClasses,
      },
      {
        id: '2',
        title: 'Módulos y NPM',
        description: 'Aprende a organizar tu código y gestionar dependencias.',
        intro:
          'Aprenderás a dividir tu código en módulos y a gestionar dependencias utilizando el sistema de paquetes NPM.',
        videoUrl: '#',
        classes: defaultClasses,
      },
      {
        id: '3',
        title: 'Creación de API con Express',
        description: 'Construye rutas y controladores para exponer servicios REST.',
        intro:
          'Construiremos un servicio REST básico con Express definiendo rutas, controladores y respuestas en formato JSON.',
        videoUrl: '#',
        classes: defaultClasses,
      },
      {
        id: '4',
        title: 'Persistencia con bases de datos',
        description: 'Integra una base de datos para guardar información de forma permanente.',
        intro:
          'Verás cómo conectar tu servidor a una base de datos para almacenar y consultar información de manera persistente.',
        videoUrl: '#',
        classes: defaultClasses,
      },
      {
        id: '5',
        title: 'Despliegue',
        description: 'Prepara y publica tu aplicación en un entorno productivo.',
        intro:
          'Aprenderás a preparar tu aplicación para producción y subirla a un servicio en la nube de forma segura.',
        videoUrl: '#',
        classes: defaultClasses,
      },
    ],
  },
  {
    id: 'typescript-avanzado',
    title: 'TypeScript avanzado',
    description: 'Este curso profundiza en las características avanzadas de TypeScript para que lleves tu código al siguiente nivel. Explorarás la definición de tipos complejos, el uso de genéricos y la aplicación de decoradores para añadir funcionalidades. También revisaremos configuraciones recomendadas para proyectos grandes y la integración con bibliotecas populares. Finalmente aplicarás patrones de diseño y crearás un proyecto completo con buenas prácticas. Al dominar estos temas podrás desarrollar aplicaciones de gran escala con confianza.',
    category: 'Programación',
    image: '/images/course-ts.png',
    duration: '12 semanas',
    level: 'Avanzado',
    free: false,
    weeks: 12,
    prerequisites: {
      courses: ['javascript-basico'],
      other: ['Ser mayor de 18 años', 'DNI argentino'],
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
        classes: defaultClasses,
      },
      {
        id: '2',
        title: 'Genéricos',
        description: 'Escribe funciones y clases reutilizables mediante genéricos.',
        intro:
          'Aprenderás a utilizar parámetros de tipo que permiten crear componentes y funciones reutilizables con seguridad total.',
        videoUrl: '#',
        classes: defaultClasses,
      },
      {
        id: '3',
        title: 'Decoradores y metadata',
        description: 'Añade funcionalidades mediante decoradores y reflexión.',
        intro:
          'Exploraremos cómo los decoradores agregan comportamiento y almacenan metadata valiosa en clases y métodos de tus aplicaciones.',
        videoUrl: '#',
        classes: defaultClasses,
      },
      {
        id: '4',
        title: 'Configuración avanzada',
        description: 'Configura el compilador y gestiona proyectos de gran escala.',
        intro:
          'Configurarás el compilador y comprenderás opciones que facilitan trabajar con proyectos grandes y monorepos en entornos profesionales.',
        videoUrl: '#',
        classes: defaultClasses,
      },
      {
        id: '5',
        title: 'Integración con librerías',
        description: 'Utiliza TypeScript junto a bibliotecas populares de JavaScript.',
        intro:
          'Verás las mejores prácticas para aprovechar bibliotecas de JavaScript manteniendo la consistencia del tipado en tus proyectos.',
        videoUrl: '#',
        classes: defaultClasses,
      },
      {
        id: '6',
        title: 'Patrones de diseño',
        description: 'Implementa soluciones comunes aplicando patrones en TypeScript.',
        intro:
          'Implementarás soluciones comunes aplicando patrones que ayudan a organizar y escalar aplicaciones TypeScript de manera eficiente.',
        videoUrl: '#',
        classes: defaultClasses,
      },
      {
        id: '7',
        title: 'Proyecto final',
        description: 'Desarrolla una aplicación compleja aplicando buenas prácticas.',
        intro:
          'Desarrollarás una aplicación completa usando técnicas avanzadas y buenas prácticas aprendidas durante el curso para consolidar conocimientos.',
        videoUrl: '#',
        classes: defaultClasses,
      },
    ],
  },
  {
    id: 'mern-fullstack',
    title: 'Desarrollo Fullstack con MERN',
    description: 'En esta formación crearás una aplicación completa utilizando MongoDB, Express, React y Node. Partiremos de la configuración de la base de datos y continuaremos desarrollando una API robusta. Después conectarás el frontend en React y añadirás autenticación y pruebas automáticas. También prepararás un flujo de despliegue continuo y culminarás integrando todos los conceptos en un proyecto final. Tras un año de práctica estarás capacitado para afrontar retos fullstack profesionales.',
    category: 'Fullstack',
    image: '/images/course-mern.png',
    duration: '12 semanas',
    level: 'Avanzado',
    free: false,
    weeks: 12,
    prerequisites: {
      courses: ['react-principiantes', 'node-express'],
      other: ['Ser mayor de 18 años', 'DNI argentino'],
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
        classes: defaultClasses,
      },
      {
        id: '2',
        title: 'API REST con Express',
        description: 'Crea un backend robusto y documenta tus rutas HTTP.',
        intro:
          'Construirás un backend manejando rutas y controladores para exponer datos desde la base de forma organizada.',
        videoUrl: '#',
        classes: defaultClasses,
      },
      {
        id: '3',
        title: 'Frontend con React',
        description: 'Conecta la interfaz de usuario con tu servidor utilizando React.',
        intro:
          'Integrarás la interfaz creada en React con tu servidor, consumiendo la API y mostrando los datos.',
        videoUrl: '#',
        classes: defaultClasses,
      },
      {
        id: '4',
        title: 'Autenticación',
        description: 'Implementa registros, login y protección de rutas.',
        intro:
          'Implementarás registro de usuarios y sesiones seguras para proteger las rutas sensibles de tu aplicación.',
        videoUrl: '#',
        classes: defaultClasses,
      },
      {
        id: '5',
        title: 'Testing',
        description: 'Escribe pruebas de extremo a extremo para asegurar la calidad.',
        intro:
          'Configurarás pruebas de extremo a extremo asegurando que cada parte del stack funcione como se espera.',
        videoUrl: '#',
        classes: defaultClasses,
      },
      {
        id: '6',
        title: 'Despliegue continuo',
        description: 'Automatiza la publicación de la aplicación con herramientas CI/CD.',
        intro:
          'Aprenderás a automatizar compilación y publicación utilizando pipelines para entregar nuevas versiones rápidamente en producción.',
        videoUrl: '#',
        classes: defaultClasses,
      },
      {
        id: '7',
        title: 'Proyecto final',
        description: 'Integra todos los componentes en una aplicación completa.',
        intro:
          'Unirás todos los componentes creando una aplicación completa que demuestre tus habilidades fullstack adquiridas en el curso.',
        videoUrl: '#',
        classes: defaultClasses,
      },
    ],
  },
  {
    id: 'testing-jest',
    title: 'Testing con Jest',
    description: 'Con este curso aprenderás a utilizar Jest para asegurar la calidad de tus proyectos. Revisaremos las distintas estrategias de pruebas y cómo configurarlas correctamente. Profundizarás en la API de Jest y practicarás con pruebas de componentes de React. Conocerás técnicas de mocks, medición de cobertura e integración continua. Al finalizar podrás aplicar pruebas automatizadas a cualquier aplicación JavaScript.',
    category: 'Testing',
    image: '/images/course-jest.png',
    duration: '8 semanas',
    level: 'Intermedio',
    free: true,
    weeks: 8,
    prerequisites: {
      courses: ['javascript-basico'],
      other: ['Ser mayor de 18 años', 'DNI argentino'],
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
        classes: defaultClasses,
      },
      {
        id: '2',
        title: 'Jest en profundidad',
        description: 'Configura y aprovecha al máximo las características de Jest.',
        intro:
          'Verás configuración avanzada y utilidades de Jest para escribir pruebas claras y mantenibles en cualquier entorno.',
        videoUrl: '#',
        classes: defaultClasses,
      },
      {
        id: '3',
        title: 'Pruebas de React',
        description: 'Escribe tests para tus componentes utilizando la Testing Library.',
        intro:
          'Aprenderás a testear componentes usando Testing Library y a simular interacciones de los usuarios en aplicaciones reales.',
        videoUrl: '#',
        classes: defaultClasses,
      },
      {
        id: '4',
        title: 'Cobertura y mocks',
        description: 'Simula dependencias y mide el alcance de tus pruebas.',
        intro:
          'Utilizarás mocks para aislar dependencias y medirás la cobertura para mejorar tus pruebas de forma continua.',
        videoUrl: '#',
        classes: defaultClasses,
      },
      {
        id: '5',
        title: 'Integración continua',
        description: 'Automatiza la ejecución de tests en cada actualización.',
        intro:
          'Configurarás pipelines que ejecutan las pruebas automáticamente en cada actualización del repositorio garantizando calidad constante.',
        videoUrl: '#',
        classes: defaultClasses,
      },
    ],
  },
  {
    id: 'react-native',
    title: 'Aplicaciones móviles con React Native',
    description: 'Aprende a crear aplicaciones móviles multiplataforma con React Native. Durante el curso configurarás el entorno de desarrollo y trabajarás con los componentes esenciales de la librería. Practicarás la navegación, el consumo de APIs y la publicación en tiendas, siempre con ejemplos guiados. Cada módulo incluye ejercicios para consolidar lo aprendido y un proyecto final que integra todas las funcionalidades. Al terminar podrás llevar tus ideas a iOS y Android desde un solo código.',
    category: 'Mobile',
    image: '/images/course-react-native.png',
    duration: '8 semanas',
    level: 'Intermedio',
    free: false,
    weeks: 8,
    prerequisites: {
      courses: ['react-principiantes'],
      other: ['Ser mayor de 18 años', 'DNI argentino'],
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
        classes: defaultClasses,
      },
      {
        id: '2',
        title: 'Componentes y estilos',
        description: 'Construye interfaces móviles y aplica estilos flexibles.',
        intro:
          'Explorarás componentes básicos y aplicarás estilos flexibles utilizando el sistema de diseño de React Native.',
        videoUrl: '#',
        classes: defaultClasses,
      },
      {
        id: '3',
        title: 'Navegación en la app',
        description: 'Gestiona pantallas y transiciones con React Navigation.',
        intro:
          'Configurarás pilas de navegación y pestañas para moverte entre pantallas de forma intuitiva en tus proyectos.',
        videoUrl: '#',
        classes: defaultClasses,
      },
      {
        id: '4',
        title: 'Consumo de APIs',
        description: 'Conecta tu aplicación con servicios externos para obtener datos.',
        intro:
          'Aprenderás a realizar peticiones y manejar respuestas para mostrar datos actualizados en la aplicación móvil.',
        videoUrl: '#',
        classes: defaultClasses,
      },
      {
        id: '5',
        title: 'Distribución en tiendas',
        description: 'Prepara tu app para publicarla en Google Play y App Store.',
        intro:
          'Revisaremos los pasos necesarios para compilar y publicar tu app en Google Play y App Store.',
        videoUrl: '#',
        classes: defaultClasses,
      },
      {
        id: '6',
        title: 'Proyecto final',
        description: 'Desarrolla una app completa aplicando todos los conocimientos.',
        intro:
          'Desarrollarás una aplicación completa aplicando todo lo aprendido durante el curso de React Native para demostrar tus habilidades.',
        videoUrl: '#',
        classes: defaultClasses,
      },
    ],
  },
  {
    id: 'python-basico',
    title: 'Python desde cero',
    description: `Este curso te introduce en la programación con Python desde un enfoque práctico. A lo largo de las semanas aprenderás a instalar el intérprete, configurar un entorno de trabajo y utilizar las estructuras del lenguaje para resolver problemas cotidianos. Cada módulo desarrolla ejercicios guiados que consolidan las bases para continuar con proyectos más complejos.

Explorarás las colecciones, las funciones y los módulos integrados para automatizar tareas y manipular archivos. Al finalizar habrás creado scripts útiles y comprenderás la sintaxis necesaria para avanzar en librerías y frameworks de Python. El aprendizaje continuo te permitirá adaptar el lenguaje a tus propias necesidades profesionales.`,
    category: 'Programación',
    image: '/images/course-python.png',
    duration: '6 semanas',
    level: 'Principiante',
    free: true,
    weeks: 6,
    prerequisites: {
      other: ['Ser mayor de 18 años', 'DNI argentino'],
    },
    maxAttempts: 3,
    modules: [
      { id: '1', title: 'Introducción a Python', description: 'Comienza a utilizar el intérprete y escribe tus primeros scripts.', intro: 'Instalarás Python y ejecutarás tus primeras instrucciones desde la terminal.', videoUrl: '#', classes: defaultClasses },
      { id: '2', title: 'Estructuras de control', description: 'Aprende condicionales y bucles para manejar el flujo de tus programas.', intro: 'Verás cómo tomar decisiones y repetir acciones de forma eficiente.', videoUrl: '#', classes: defaultClasses },
      { id: '3', title: 'Funciones y módulos', description: 'Organiza tu código y reutiliza lógica mediante funciones y módulos.', intro: 'Definirás funciones propias y descubrirás módulos de la biblioteca estándar.', videoUrl: '#', classes: defaultClasses },
      { id: '4', title: 'Manejo de archivos', description: 'Lee y escribe datos en el sistema de archivos con Python.', intro: 'Practicarás operaciones de entrada y salida para almacenar información.', videoUrl: '#', classes: defaultClasses },
      { id: '5', title: 'Proyecto final', description: 'Integra todo lo aprendido creando un script de utilidad práctica.', intro: 'Planificarás y desarrollarás un pequeño proyecto que resuelva una tarea real.', videoUrl: '#', classes: defaultClasses },
    ],
  },
  {
    id: 'ux-design',
    title: 'Introducción al UX Design',
    description: `Aprender UX significa entender cómo interactúan las personas con los productos digitales. En este curso analizarás metodologías de investigación y obtendrás herramientas para definir la arquitectura de información. Los módulos combinan ejemplos de la industria con prácticas para estructurar interfaces centradas en el usuario.

A través de ejercicios de observación y prototipado crearás flujos de navegación intuitivos. Incorporarás principios de accesibilidad y realizarás pruebas que validen la usabilidad de tu diseño. Con los conocimientos adquiridos estarás preparado para participar en proyectos que prioricen la experiencia de usuario desde la fase inicial.`,
    category: 'Diseño',
    image: '/images/course-ux.png',
    duration: '5 semanas',
    level: 'Principiante',
    free: false,
    weeks: 5,
    prerequisites: {
      other: ['Ser mayor de 18 años', 'DNI argentino'],
    },
    maxAttempts: 2,
    modules: [
      { id: '1', title: 'Investigación de usuarios', description: 'Aprende métodos para conocer las necesidades de quienes usarán tu producto.', intro: 'Realizarás entrevistas y encuestas para obtener información valiosa.', videoUrl: '#', classes: defaultClasses },
      { id: '2', title: 'Arquitectura de información', description: 'Organiza contenidos y define la navegación de tu interfaz.', intro: 'Usarás técnicas de card sorting para estructurar menús y secciones.', videoUrl: '#', classes: defaultClasses },
      { id: '3', title: 'Prototipado', description: 'Crea maquetas que te permitan validar ideas rápidamente.', intro: 'Trabajarás con herramientas digitales para diseñar bocetos interactivos.', videoUrl: '#', classes: defaultClasses },
      { id: '4', title: 'Pruebas de usabilidad', description: 'Evalúa tus prototipos con personas reales y obtén retroalimentación.', intro: 'Aprenderás a planificar y ejecutar test moderados y no moderados.', videoUrl: '#', classes: defaultClasses },
      { id: '5', title: 'Iteración y entrega', description: 'Refina tu diseño a partir de los resultados obtenidos.', intro: 'Documentarás hallazgos y prepararás la presentación final del proyecto.', videoUrl: '#', classes: defaultClasses },
    ],
  },
  {
    id: 'docker-devops',
    title: 'Docker y DevOps',
    description: `Este programa repasa los fundamentos de la integración y entrega continua utilizando Docker como eje central. Conocerás cómo construir imágenes ligeras y desplegarlas en entornos controlados. Los ejemplos están orientados a mejorar la productividad y simplificar los procesos de desarrollo colaborativo.

Implementarás pipelines automáticos que prueban y publican aplicaciones en contenedores. También explorarás estrategias de monitoreo y escalado para asegurar un rendimiento estable en la nube. Al completar el curso dominarás las técnicas necesarias para poner en producción servicios de forma confiable y repetible.`,
    category: 'DevOps',
    image: '/images/course-docker.png',
    duration: '6 semanas',
    level: 'Intermedio',
    free: false,
    weeks: 6,
    prerequisites: {
      courses: ['javascript-basico'],
      other: ['Ser mayor de 18 años', 'DNI argentino'],
    },
    maxAttempts: 4,
    modules: [
      { id: '1', title: 'Imágenes y contenedores', description: 'Crea y gestiona contenedores portables para tus aplicaciones.', intro: 'Construirás imágenes desde Dockerfile y lanzarás servicios aislados.', videoUrl: '#', classes: defaultClasses },
      { id: '2', title: 'Docker Compose', description: 'Orquesta múltiples servicios de manera sencilla.', intro: 'Definirás pilas de contenedores para entornos de desarrollo reproducibles.', videoUrl: '#', classes: defaultClasses },
      { id: '3', title: 'Integración continua', description: 'Automatiza pruebas y despliegues con pipelines.', intro: 'Configurarás workflows que ejecuten tareas en cada commit.', videoUrl: '#', classes: defaultClasses },
      { id: '4', title: 'Monitoreo', description: 'Supervisa el estado de tus servicios en producción.', intro: 'Implementarás métricas y registros para detectar problemas a tiempo.', videoUrl: '#', classes: defaultClasses },
      { id: '5', title: 'Despliegue final', description: 'Publica tu proyecto usando las mejores prácticas de DevOps.', intro: 'Prepararás tu aplicación para escalar en la nube de forma segura.', videoUrl: '#', classes: defaultClasses },
    ],
  },
  {
    id: 'data-analytics',
    title: 'Fundamentos de Data Analytics',
    description: `Con la explosión de los datos en todas las industrias, saber analizarlos se ha convertido en una habilidad clave. Este curso inicia desde conceptos básicos de estadística y avanza hacia el uso de herramientas para la limpieza y manipulación de grandes volúmenes de información. Cada módulo te prepara para comprender patrones y extraer conclusiones concretas.

Trabajarás con hojas de cálculo, lenguajes de consulta y visualización interactiva. Al finalizar estarás en condiciones de presentar informes claros que respalden la toma de decisiones. La práctica constante durante el programa te permitirá automatizar tareas y aprovechar al máximo los datos disponibles en tu organización.`,
    category: 'Datos',
    image: '/images/course-data.png',
    duration: '7 semanas',
    level: 'Intermedio',
    free: false,
    weeks: 7,
    prerequisites: {
      other: ['Ser mayor de 18 años', 'DNI argentino'],
    },
    maxAttempts: 3,
    modules: [
      { id: '1', title: 'Estadística básica', description: 'Repasa medidas descriptivas y probabilidad para interpretar datos.', intro: 'Aplicarás conceptos de media, mediana y desviación estándar en ejemplos prácticos.', videoUrl: '#', classes: defaultClasses },
      { id: '2', title: 'Limpieza de datos', description: 'Prepara y transforma conjuntos de datos para su análisis.', intro: 'Utilizarás herramientas para detectar valores atípicos y formatear información.', videoUrl: '#', classes: defaultClasses },
      { id: '3', title: 'Consultas y filtros', description: 'Extrae información relevante utilizando lenguajes de consulta.', intro: 'Practicarás SQL básico para obtener métricas de grandes volúmenes.', videoUrl: '#', classes: defaultClasses },
      { id: '4', title: 'Visualización', description: 'Comunica hallazgos mediante gráficos claros y efectivos.', intro: 'Crearás dashboards con librerías de visualización interactivas.', videoUrl: '#', classes: defaultClasses },
      { id: '5', title: 'Informe final', description: 'Presenta tus conclusiones y recomendaciones de negocio.', intro: 'Redactarás un reporte profesional con los resultados obtenidos.', videoUrl: '#', classes: defaultClasses },
    ],
  },
  {
    id: 'seguridad-informatica',
    title: 'Seguridad Informática',
    description: `La seguridad informática es esencial para proteger sistemas y datos frente a amenazas cada vez más sofisticadas. En este curso aprenderás los fundamentos de la criptografía, las vulnerabilidades más comunes y las mejores prácticas para el desarrollo de aplicaciones seguras. Cada módulo aborda casos reales que te ayudarán a reconocer riesgos antes de que se conviertan en problemas.

Mediante ejercicios guiados configurarás herramientas de escaneo y simulaciones de ataque para entender cómo se comprometen los sistemas. Finalizarás diseñando políticas de seguridad y planes de respuesta que minimicen el impacto ante incidentes. Al dominar estos conceptos podrás implementar medidas de defensa en cualquier infraestructura tecnológica.`,
    category: 'Seguridad',
    image: '/images/course-security.png',
    duration: '8 semanas',
    level: 'Avanzado',
    free: false,
    weeks: 8,
    prerequisites: {
      other: ['Ser mayor de 18 años', 'DNI argentino'],
    },
    maxAttempts: 4,
    modules: [
      { id: '1', title: 'Criptografía', description: 'Estudia métodos de encriptación y su aplicación práctica.', intro: 'Analizarás algoritmos que protegen la confidencialidad de la información.', videoUrl: '#', classes: defaultClasses },
      { id: '2', title: 'Vulnerabilidades comunes', description: 'Identifica fallos frecuentes y cómo mitigarlos.', intro: 'Revisarás ejemplos de ataques para comprender sus consecuencias.', videoUrl: '#', classes: defaultClasses },
      { id: '3', title: 'Herramientas de análisis', description: 'Utiliza escáneres y utilidades para evaluar la seguridad.', intro: 'Aprenderás a usar software de auditoría en entornos controlados.', videoUrl: '#', classes: defaultClasses },
      { id: '4', title: 'Respuesta a incidentes', description: 'Diseña planes de acción ante posibles ataques.', intro: 'Definirás procedimientos para actuar rápidamente y minimizar daños.', videoUrl: '#', classes: defaultClasses },
      { id: '5', title: 'Buenas prácticas', description: 'Establece políticas y controles para un entorno seguro.', intro: 'Implementarás estrategias de seguridad continuas en tus proyectos.', videoUrl: '#', classes: defaultClasses },
    ],
  },
  {
    id: 'marketing-digital',
    title: 'Marketing Digital',
    description: `El marketing digital reúne estrategias para posicionar marcas en medios online y captar nuevos clientes. Este curso explica cómo funcionan los principales canales de difusión y enseña a diseñar campañas segmentadas de alto impacto. Los módulos abordan desde la optimización en motores de búsqueda hasta la gestión de redes sociales.

Medirás resultados con herramientas analíticas y adaptarás las acciones según el comportamiento de tu audiencia. Al finalizar, estarás preparado para elaborar planes de marketing que integren distintos formatos de contenido y generen conversiones sostenidas en el tiempo. El curso combina ejercicios reales con las tendencias más actuales del sector.`,
    category: 'Marketing',
    image: '/images/course-marketing.png',
    duration: '5 semanas',
    level: 'Intermedio',
    free: true,
    weeks: 5,
    prerequisites: {
      other: ['Ser mayor de 18 años', 'DNI argentino'],
    },
    maxAttempts: 3,
    modules: [
      { id: '1', title: 'SEO', description: 'Optimiza tu presencia en buscadores para aumentar visitas.', intro: 'Aplicarás técnicas de posicionamiento orgánico y análisis de palabras clave.', videoUrl: '#', classes: defaultClasses },
      { id: '2', title: 'Publicidad en línea', description: 'Gestiona campañas pagas en distintas plataformas.', intro: 'Configurarás anuncios segmentados y medirás su rendimiento.', videoUrl: '#', classes: defaultClasses },
      { id: '3', title: 'Redes sociales', description: 'Planifica estrategias para interactuar con tu audiencia.', intro: 'Aprenderás a seleccionar contenidos y programar publicaciones efectivas.', videoUrl: '#', classes: defaultClasses },
      { id: '4', title: 'Email marketing', description: 'Crea envíos que conviertan y fidelicen clientes.', intro: 'Diseñarás plantillas atractivas y segmentarás tus listas de contactos.', videoUrl: '#', classes: defaultClasses },
      { id: '5', title: 'Análisis de resultados', description: 'Evalúa el impacto de tus acciones y ajusta tu estrategia.', intro: 'Interpretarás métricas clave para mejorar continuamente tus campañas.', videoUrl: '#', classes: defaultClasses },
    ],
  },
]

function createDefaultClasses(moduleTitle: string): ClassInfo[] {
  return [
    { ...defaultClasses[0], title: `Introducci\u00f3n a ${moduleTitle}` },
    {
      ...defaultClasses[1],
      title: `Material complementario de ${moduleTitle}`,
    },
    { ...defaultClasses[2], title: `Evaluaci\u00f3n de ${moduleTitle}` },
  ]
}

for (const course of courses) {
  for (const module of course.modules) {
    if (module.classes === defaultClasses) {
      module.classes = createDefaultClasses(module.title)
    }
  }
}
