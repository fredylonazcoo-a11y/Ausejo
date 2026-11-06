const SITE = {
  phone: "51961626778",
  phoneDisplay: "961 626 778",
  email: "ausejoodontologia@gmail.com",
  waMessage: "Hola, quisiera agendar una cita en Centro Odontológico Ausejo.",
  hours: {
    open: "08:00",
    close: "22:00",
    tz: "America/Lima",
    text: "Lunes a Domingo 8:00 a.m. – 10:00 p.m."
  },
  rating: {
    value: 4.7,
    text: "Calificación promedio de 4.7, basada en más de 1200 pacientes"
  },
  heroVideo: {
    mp4: "assets/video/hero.mp4",
    mp4Mobile: "assets/video/hero-vertical.mp4",
    poster: "",
    posterMobile: ""
  },
  heroAvatars: [
    "assets/img/avatar-1.jpg",
    "assets/img/avatar-2.jpg",
    "assets/img/avatar-3.jpg"
  ],
  stats: [
    { value: 1200, suffix: "+", label: "Sonrisas tratadas" },
    { value: 20, suffix: " años", label: "En la práctica" }
  ],
  whyImage: "assets/img/clinica.jpg",
  tour: {
    poster: "assets/img/tour-poster.jpg",
    mp4: "assets/video/recorrido.mp4",
    youtube: ""
  },
  sedes: [
    {
      name: "Sede Jr. Bellido",
      address: "Jr. Bellido N° 227, Ayacucho",
      mapQuery: "Centro Odontológico Ausejo Jr. Bellido 227 Ayacucho"
    },
    {
      name: "Sede Av. Independencia",
      address: "Av. Independencia N° 355, Ayacucho",
      mapQuery: "Av. Independencia 355 Ayacucho Peru"
    }
  ],
  services: [
    {
      id: "implantes",
      name: "Implantes dentales",
      icon: "implant",
      short: "Recupera la funcionalidad y estética de tu boca con raíces artificiales de titanio.",
      desc: "Los implantes dentales reemplazan piezas ausentes mediante una estructura de titanio integrada al hueso maxilar. Permiten recuperar la capacidad de masticación y mantener la estructura facial con un aspecto muy natural.",
      cover: "assets/services/implantes/cover.jpg",
      waText: "Hola, quisiera información sobre implantes dentales en Centro Odontológico Ausejo.",
      // Para agregar un video nuevo, copia una de las líneas con las llaves {...}, pégala debajo y cambia la ruta del archivo y caption.
      videos: [
        { src: "assets/services/implantes/video-1.mp4", poster: "assets/services/implantes/video-1.jpg", orientation: "vertical", caption: "Procedimiento de implante dental" },
        { src: "assets/services/implantes/video-2.mp4", poster: "assets/services/implantes/video-2.jpg", orientation: "horizontal", caption: "Explicación paso a paso" }
      ],
      // Para agregar un par de fotos antes/después, copia una de las líneas con las llaves {...}, pégala debajo y cambia las rutas de las fotos.
      beforeAfter: [
        { before: "assets/services/implantes/antes-1.jpg", after: "assets/services/implantes/despues-1.jpg", label: "Caso de implante único" },
        { before: "assets/services/implantes/antes-2.jpg", after: "assets/services/implantes/despues-2.jpg", label: "Rehabilitación múltiple" }
      ]
    },
    {
      id: "relajacion",
      name: "Relajación dental en niños y adultos, sedación consciente",
      icon: "baby",
      short: "Atención odontológica tranquila y sin ansiedad mediante técnicas de sedación consciente.",
      desc: "Utilizamos métodos de sedación consciente para reducir el estrés y la ansiedad durante los procedimientos dentales. Esto facilita una experiencia mucho más cómoda y llevadera en el consultorio, ideal para pacientes de todas las edades.",
      cover: "assets/services/relajacion/cover.jpg",
      waText: "Hola, quisiera información sobre la sedación consciente en Centro Odontológico Ausejo.",
      videos: [
        { src: "assets/services/relajacion/video-1.mp4", poster: "assets/services/relajacion/video-1.jpg", orientation: "vertical", caption: "Odontopediatría amigable" },
        { src: "assets/services/relajacion/video-2.mp4", poster: "assets/services/relajacion/video-2.jpg", orientation: "horizontal", caption: "Cómo funciona la sedación" }
      ],
      beforeAfter: [
        { before: "assets/services/relajacion/antes-1.jpg", after: "assets/services/relajacion/despues-1.jpg", label: "Tratamiento infantil" },
        { before: "assets/services/relajacion/antes-2.jpg", after: "assets/services/relajacion/despues-2.jpg", label: "Atención en adultos" }
      ]
    },
    {
      id: "cirugia",
      name: "Cirugía bucal: terceras molares retenidas e impactadas",
      icon: "shield",
      short: "Extracción clínica de molares del juicio y procedimientos quirúrgicos bucales especializados.",
      desc: "Realizamos la evaluación minuciosa y extracción de terceras molares que no han erupcionado correctamente o se encuentran impactadas. Las intervenciones quirúrgicas son planificadas detalladamente para cuidar los tejidos adyacentes y minimizar las molestias.",
      cover: "assets/services/cirugia/cover.jpg",
      waText: "Hola, quisiera información sobre cirugía de terceras molares en Centro Odontológico Ausejo.",
      videos: [
        { src: "assets/services/cirugia/video-1.mp4", poster: "assets/services/cirugia/video-1.jpg", orientation: "vertical", caption: "Extracción de tercer molar" },
        { src: "assets/services/cirugia/video-2.mp4", poster: "assets/services/cirugia/video-2.jpg", orientation: "horizontal", caption: "Planificación quirúrgica" }
      ],
      beforeAfter: [
        { before: "assets/services/cirugia/antes-1.jpg", after: "assets/services/cirugia/despues-1.jpg", label: "Radiografía molar impactada" },
        { before: "assets/services/cirugia/antes-2.jpg", after: "assets/services/cirugia/despues-2.jpg", label: "Evaluación de tejido blando" }
      ]
    },
    {
      id: "protesis",
      name: "Prótesis dental removible y fija",
      icon: "tooth",
      short: "Soluciones protésicas diseñadas para reemplazar dientes perdidos y restaurar la mordida.",
      desc: "Diseñamos prótesis tanto removibles como fijas que se adaptan a la anatomía bucal específica de cada paciente. Estas estructuras ayudan a mejorar la fonética, la eficiencia en la masticación y la armonía estética dental.",
      cover: "assets/services/protesis/cover.jpg",
      waText: "Hola, quisiera información sobre prótesis dentales en Centro Odontológico Ausejo.",
      videos: [
        { src: "assets/services/protesis/video-1.mp4", poster: "assets/services/protesis/video-1.jpg", orientation: "vertical", caption: "Ajuste de prótesis fija" },
        { src: "assets/services/protesis/video-2.mp4", poster: "assets/services/protesis/video-2.jpg", orientation: "horizontal", caption: "Tipos de prótesis removibles" }
      ],
      beforeAfter: [
        { before: "assets/services/protesis/antes-1.jpg", after: "assets/services/protesis/despues-1.jpg", label: "Rehabilitación superior" },
        { before: "assets/services/protesis/antes-2.jpg", after: "assets/services/protesis/despues-2.jpg", label: "Prótesis parcial fija" }
      ]
    },
    {
      id: "carillas",
      name: "Carillas dentales y coronas",
      icon: "sparkle",
      short: "Restauraciones estéticas de alta resistencia para modificar la forma y color dental.",
      desc: "Las carillas y coronas recubren la superficie del diente, mejorando su estructura y apariencia externa. Se fabrican con materiales cerámicos y biocompatibles que imitan de cerca la textura y el tono del esmalte natural.",
      cover: "assets/services/carillas/cover.jpg",
      waText: "Hola, quisiera información sobre carillas y coronas en Centro Odontológico Ausejo.",
      videos: [
        { src: "assets/services/carillas/video-1.mp4", poster: "assets/services/carillas/video-1.jpg", orientation: "vertical", caption: "Preparación de carillas" },
        { src: "assets/services/carillas/video-2.mp4", poster: "assets/services/carillas/video-2.jpg", orientation: "horizontal", caption: "Colocación de coronas cerámicas" }
      ],
      beforeAfter: [
        { before: "assets/services/carillas/antes-1.jpg", after: "assets/services/carillas/despues-1.jpg", label: "Carillas estéticas anteriores" },
        { before: "assets/services/carillas/antes-2.jpg", after: "assets/services/carillas/despues-2.jpg", label: "Corona en sector posterior" },
        { before: "assets/services/carillas/antes-3.jpg", after: "assets/services/carillas/despues-3.jpg", label: "Mejora de proporciones dentales" }
      ]
    },
    {
      id: "diseno",
      name: "Diseño de sonrisa computarizado",
      icon: "smile",
      short: "Planificación digital integral para armonizar el tamaño, forma y color de tus dientes.",
      desc: "Analizamos detalladamente las proporciones faciales y dentales mediante un software para previsualizar los cambios estéticos antes de iniciar el tratamiento. Todo se planifica considerando la simetría de tu rostro y tus características únicas.",
      cover: "assets/services/diseno/cover.jpg",
      waText: "Hola, quisiera información sobre el diseño de sonrisa en Centro Odontológico Ausejo.",
      videos: [
        { src: "assets/services/diseno/video-1.mp4", poster: "assets/services/diseno/video-1.jpg", orientation: "vertical", caption: "Análisis digital facial" },
        { src: "assets/services/diseno/video-2.mp4", poster: "assets/services/diseno/video-2.jpg", orientation: "horizontal", caption: "Proyección del diseño de sonrisa" }
      ],
      beforeAfter: [
        { before: "assets/services/diseno/antes-1.jpg", after: "assets/services/diseno/despues-1.jpg", label: "Armonización de sector anterior" },
        { before: "assets/services/diseno/antes-2.jpg", after: "assets/services/diseno/despues-2.jpg", label: "Corrección de márgenes gingivales" },
        { before: "assets/services/diseno/antes-3.jpg", after: "assets/services/diseno/despues-3.jpg", label: "Cambio de textura y color" }
      ]
    },
    {
      id: "endodoncia",
      name: "Endodoncia",
      icon: "pulse",
      short: "Tratamiento de conductos especializado para preservar piezas dentales con daño pulpar severo.",
      desc: "La endodoncia consiste en la limpieza y desinfección profunda del interior del diente cuando el tejido nervioso está afectado. Este procedimiento permite conservar tu propia pieza dental en boca y evitar así la extracción.",
      cover: "assets/services/endodoncia/cover.jpg",
      waText: "Hola, quisiera información sobre tratamientos de endodoncia en Centro Odontológico Ausejo.",
      videos: [
        { src: "assets/services/endodoncia/video-1.mp4", poster: "assets/services/endodoncia/video-1.jpg", orientation: "vertical", caption: "Limpieza del conducto radicular" },
        { src: "assets/services/endodoncia/video-2.mp4", poster: "assets/services/endodoncia/video-2.jpg", orientation: "horizontal", caption: "Proceso de sellado radicular" }
      ],
      beforeAfter: [
        { before: "assets/services/endodoncia/antes-1.jpg", after: "assets/services/endodoncia/despues-1.jpg", label: "Lesión apical tratada" },
        { before: "assets/services/endodoncia/antes-2.jpg", after: "assets/services/endodoncia/despues-2.jpg", label: "Reconstrucción post-endodoncia" }
      ]
    },
    {
      id: "ortodoncia",
      name: "Ortodoncia y ortopedia",
      icon: "braces",
      short: "Corrección de la posición dental y de los maxilares para lograr una mordida adecuada.",
      desc: "Los tratamientos de ortodoncia y ortopedia maxilar alinean los dientes y mejoran significativamente la relación entre los maxilares. Una mordida correcta facilita la higiene oral diaria y optimiza toda la función masticatoria.",
      cover: "assets/services/ortodoncia/cover.jpg",
      waText: "Hola, quisiera información sobre ortodoncia en Centro Odontológico Ausejo.",
      videos: [
        { src: "assets/services/ortodoncia/video-1.mp4", poster: "assets/services/ortodoncia/video-1.jpg", orientation: "vertical", caption: "Ajuste de brackets" },
        { src: "assets/services/ortodoncia/video-2.mp4", poster: "assets/services/ortodoncia/video-2.jpg", orientation: "horizontal", caption: "Progreso de alineación dental" }
      ],
      beforeAfter: [
        { before: "assets/services/ortodoncia/antes-1.jpg", after: "assets/services/ortodoncia/despues-1.jpg", label: "Corrección de apiñamiento" },
        { before: "assets/services/ortodoncia/antes-2.jpg", after: "assets/services/ortodoncia/despues-2.jpg", label: "Cierre de diastemas" }
      ]
    },
    {
      id: "rayosx",
      name: "Rayos X digital y scanner dental",
      icon: "scan",
      short: "Diagnóstico por imágenes de alta precisión y baja radiación para tu evaluación odontológica.",
      desc: "Contamos con modernos equipos de radiología digital y scanner intraoral que proporcionan imágenes tridimensionales con alto nivel de detalle. Estas herramientas tecnológicas son fundamentales para un diagnóstico exacto y una planificación clínica muy segura.",
      cover: "assets/services/rayosx/cover.jpg",
      waText: "Hola, quisiera información sobre exámenes de rayos X y scanner dental en Centro Odontológico Ausejo.",
      videos: [
        { src: "assets/services/rayosx/video-1.mp4", poster: "assets/services/rayosx/video-1.jpg", orientation: "vertical", caption: "Toma de radiografía digital" },
        { src: "assets/services/rayosx/video-2.mp4", poster: "assets/services/rayosx/video-2.jpg", orientation: "horizontal", caption: "Visualización en scanner 3D" }
      ],
      beforeAfter: []
    },
    {
      id: "laboratorio",
      name: "Laboratorio dental y tomografías",
      icon: "lab",
      short: "Fabricación de piezas protésicas e imágenes tomográficas integradas al flujo de trabajo digital.",
      desc: "Nuestro laboratorio dental integrado y el servicio de tomografía nos permiten optimizar los tiempos en la elaboración de estructuras restauradoras. Trabajamos con materiales de gran precisión para asegurar un ajuste clínico óptimo en cada paciente.",
      cover: "assets/services/laboratorio/cover.jpg",
      waText: "Hola, quisiera información sobre los servicios de laboratorio y tomografías en Centro Odontológico Ausejo.",
      videos: [
        { src: "assets/services/laboratorio/video-1.mp4", poster: "assets/services/laboratorio/video-1.jpg", orientation: "vertical", caption: "Diseño protésico en laboratorio" },
        { src: "assets/services/laboratorio/video-2.mp4", poster: "assets/services/laboratorio/video-2.jpg", orientation: "horizontal", caption: "Evaluación tomográfica integral" }
      ],
      beforeAfter: []
    }
  ]
};
// Para usar YouTube en el recorrido, pon solo el ID del video en tour.youtube