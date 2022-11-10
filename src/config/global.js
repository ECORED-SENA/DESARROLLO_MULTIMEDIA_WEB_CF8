export default {
  global: {
    componenteFormativo: 'Interactividad de los elementos del proyecto',
    descripcionCurso:
      'En este módulo se contextualizará en la utilización de elementos interactivos, sus características principales y cómo se puede crear un producto final a partir de los mismos. Recorriendo las etapas necesarias para su construcción, conceptos base y enfoques de interacción, sus componentes y desarrollo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Elementos interactivos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Elementos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Características de los elementos interactivos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Elementos interactivos de la interfaz de usuario',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Etapas de un producto multimedia interactivo',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Guion Interactivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '¿Cómo elaborar un guion multimedia?',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Editores de código',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Entornos de Desarrollo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Implementación de un entorno de desarrollo',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Construcción del prototipo de un proyecto',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Herramientas para hacer un prototipo interactivo',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: '¿Qué es un prototipo?',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Etapas de prototipado',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'El proyecto',
            hash: 't_3_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Elementos interactivos',
      referencia:
        'Design Thinking 24/7 (s.f.) Fase 4 – prototipar. [video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=khN4JGmmelE',
    },
    {
      tema: 'Elementos interactivos',
      referencia:
        'Digguzz, (s.f.) Como crear botones y animaciones en InDesign y exportación interactiva. [video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=21X1uK5-JHY',
    },
    {
      tema: 'Elementos interactivos',
      referencia:
        'Donno, K., (s.f.) Insertar Imágenes y botones en HTML . [video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=KAtS0JOpHXI',
    },
    {
      tema: 'Entornos de desarrollo',
      referencia:
        'Electrónica y Telecomunicaciones, (2019) Entorno de desarrollo integrado - IDE (Integrated Development Environment). [video]. Youtube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Jdf1xOm_kwI',
    },
    {
      tema: 'Entornos de desarrollo',
      referencia:
        'EduCaixaTV (s.f.) Prototipo: ¿Cómo construir mi propuesta?. [video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=yCOg_O9e6Dg',
    },
    {
      tema: 'Elementos interactivos',
      referencia:
        'Generación Aprende (s.f.) ¿Cómo crear presentaciones en Google Drive Google Slides? [video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=RWeRIhecWZw',
    },
    {
      tema: 'Elementos interactivos',
      referencia:
        'Vásquez, D. (s.f.) Botones de Acción en PowerPoint. [video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=3oU28kxR1lY',
    },
    {
      tema: 'Elementos interactivos',
      referencia:
        'Calderón, J., (s.f.) Creación de botones para un PDF interactivo en Indesign. [video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=klsXOAE8ElM',
    },
    {
      tema: 'Guion interactivo',
      referencia:
        'Niguez, J., (2021) Top5 mejores editores de código. [video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=2mCNj4SSYcA',
    },
  ],
  glosario: [
    {
      termino: 'Aplicación <em>web</em>',
      significado:
        '¿Qué es una <em>web</em> <em>app</em> o aplicación <em>web</em>? Básicamente es un sitio que, tras ser tratado por un programador, se ha podido adaptar para que los usuarios podamos acceder a través de un servidor <em>web</em> utilizando internet mediante un navegador. No importa qué navegador sea (Chrome, Mozilla, Microsoft Edge, etc.) podremos ingresar a ella.',
    },
    {
      termino: 'Diapositivas',
      significado:
        'Es una hoja física o virtual que contiene datos informativos o descriptivos, dentro de una presentación. ',
    },
    {
      termino: '<em>Feedback</em>',
      significado:
        'Es un término inglés que puede traducirse como realimentación o retroalimentación. Se trata de la alimentación de un sistema a través del regreso de un sector o de un porcentaje de su salida. ',
    },
    {
      termino: 'Interactivo',
      significado:
        'Dicho de un programa, que permite una interacción, a modo de diálogo, entre la computadora y el usuario.',
    },
    {
      termino: 'Interfaz',
      significado:
        'Es un término que procede del vocablo inglés <em>interface</em>. En informática, esta noción sirve para señalar a la conexión que se da de manera física y a nivel de utilidad entre dispositivos o sistemas. ',
    },
    {
      termino: 'Programa de diseño',
      significado:
        'Un programa de diseño gráfico es aquel que nos permite retocar o modificar imágenes, realizar dibujos, y guardarlos después en distintos formatos.',
    },
    {
      termino: 'Producto multimedia',
      significado:
        'Se utiliza para referirse a cualquier objeto o sistema que utiliza múltiples medios de expresión (físicos o digitales) para presentar o comunicar información. De allí la expresión multimedios. Los medios pueden ser variados, desde texto e imágenes, hasta animación, sonido, video, etc. ',
    },
    {
      termino: 'Prototipado',
      significado:
        'El prototipado modela el producto final y permite efectuar un test sobre determinados atributos del mismo sin necesidad de que está disponible. Se trata, simplemente, de testear haciendo uso del modelo.',
    },
    {
      termino: 'Usabilidad',
      significado:
        'Medida en la cual un producto puede ser usado por usuarios específicos para conseguir objetivos específicos con efectividad, eficiencia y satisfacción en un contexto de uso especificado. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Aula formativa (2019 octubre 27) Características de los elementos interactivos en un sitio <em>web</em>. [Web log post].',
      link:
        'https://blog.aulaformativa.com/caracteristicas-elementos-interactivos-sitio-web/',
    },
    {
      referencia:
        'Envato-tuts+Bussines (2019) ¿Qué es Google Slides? un excelente <em>software</em> de presentación.',
      link:
        'https://business.tutsplus.com/es/articles/what-is-google-slides--cms-29560',
    },
    {
      referencia:
        'EKON (2020) Entornos de desarrollo: todo lo que sucede en el desarrollo de <em>software</em>.',
      link: 'https://www.ekon.es/entornos-desarrollo-software/',
    },
    {
      referencia:
        'Guionnews.com (2017), Aprende cómo se escribe un guion interactivo.',
      link:
        'http://www.guionnews.com/2017/03/aprende-como-se-escribe-un-guion.html',
    },
    {
      referencia:
        'Huenei IT Services (2020) Herramientas para hacer un prototipo interactivo',
      link:
        'https://www.huenei.com/herramientas-para-hacer-un-prototipo-interactivo/',
    },
    {
      referencia:
        'Rincón, J., (2015) El producto multimedia interactivo. (Etapas)',
      link:
        'https://jairogarciarincon.com/clase/los-productos-multimedia-interactivos/el-producto-multimedia-interactivo-etapas',
    },
    {
      referencia:
        'Torres Burriel Studio (2016) Prototipado interactivo: avances en la presentación de diseños ',
      link:
        'https://www.torresburriel.com/weblog/2016/03/14/prototipado-interactivo/',
    },
    {
      referencia:
        'Microsoft (s.f.) Agregar comandos a la presentación con botones de acción ',
      link:
        'https://support.microsoft.com/es-es/office/agregar-comandos-a-la-presentaci%C3%B3n-con-botones-de-acci%C3%B3n-7db2c0f8-5424-4780-93cb-8ac2b6b5f6ce',
    },
    {
      referencia:
        'Samsing, C. (2021) Cómo crear una presentación de SlideShare fácilmente [Plantillas de PowerPoint gratuitas]',
      link:
        'https://blog.hubspot.es/marketing/como-crear-una-presentacion-slideshare',
    },
    {
      referencia: 'Ucha, F. (2009) Definición de interactivo. [Definición],',
      link: 'https://www.definicionabc.com/general/interactivo.php',
    },
    {
      referencia:
        'Arimetrics (s.f.) Qué es Entorno de desarrollo [Definición],',
      link:
        'https://www.arimetrics.com/glosario-digital/entorno-de-desarrollo#:~:text=Un%20entorno%20de%20desarrollo%20es,un%20c%C3%B3digo%20fuente%20o%20programa',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Eduardo José Velasco Acevedo',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Juan Manuel Reyes Ramírez',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Carlos Andrés Suescun Lesmes',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Olga Lucía Mogollón Carvajal',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Zvi Daniel Grosman Landáez',
        cargo: 'Diseñador instruccional',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Antonio Vecino Valero',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Marcia Elizabeth Solano Alvarez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Caceres Arenales',
        cargo: 'Validación ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
