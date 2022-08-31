<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 3
      h1 Entornos de Desarrollo

    .row.justify-content-center
      .col-lg-12
        figure
          img.img-t(src='@/assets/curso/tema3/img01.png', alt='')
    
    .bloque-texto-d.color-primario.p-4.mb-4
      .bloque-texto-d__texto.mb-2
        i.fas.fa-quote-left
        h4.text-regular Un entorno de desarrollo es un conjunto de procedimientos y herramientas que se utilizan para desarrollar un código fuente o programa. Este término se utiliza a veces como sinónimo de entorno de desarrollo integrado (IDE), que es la herramienta de desarrollo de software utilizado para escribir, generar, probar y depurar un programa. También proporcionan a los desarrolladores una interfaz de usuario común (UI) para desarrollar y depurar en diferentes modos. A la hora de elegir en entorno de desarrollo o IDE (Integrated Development Environment) es fundamental tener definido qué lenguaje de programación se va a utilizar tanto en el Frontend (la parte visible de la web) como en el Backend.”  
        i.fas.fa-quote-right
      .bloque-texto-d__autor 
        .h5.mb-0 Arimetrics (s.f.)
    
    p.mb-5 Se puede afirmar que un entorno de desarrollo es un proceso completo de gestión del progreso de un software.

    #t_3_1.titulo-segundo.color-acento-botones(data-aos="zoom-out-right")
        h2 3.1 Implementación de un entorno de desarrollo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4
        img.img-t(src='@/assets/curso/tema3/img02.svg', alt='')    
      .col-lg-8
        .row.justify-content-center   
          .col-auto.d-none.d-lg-block
            img.img-t(src='@/assets/curso/tema3/img26.svg', alt='')       
          .col-lg-11
            p.mb-4(data-aos="fade-down") Esta herramienta es muy utilizada por los desarrolladores y que por intermedio de ella optimiza el trabajo, ya que a través de ella se podrá actualizar toda la información pertinente de un proyecto de igual forma se podrá hacer control de las versiones, permitiendo tener tiempos más cortos de trabajo y el mejoramiento del software. 
        .cajon.color-secundario.bg_color2.p-3.mb-4
          p.m-0.ms-2 En el proceso de desarrollo de un software se encuentran entornos de desarrollo que se van integrando a la medida que el proceso va avanzando, los cuales se mencionarán a continuación:

    .row.justify-content-center
      .col-lg-10
        PasosA.color-acento-botones.mb-5(tipo="n")
          .row.justify-content-center.align-items-center
            .col-lg-9.mb-4.mb-md-0(data-aos="fade-right")
              p.m-0 <b>Servidor de desarrollo:</b> en esta etapa del proceso el desarrollador está realizando las pruebas de código, comprobando que la aplicación se realiza correctamente con ese código, posterior a esto si la ejecución de la acción es satisfactoria y trabaja de forma acertada, se procede a la etapa de montaje, para ello se debe mover la aplicación al servidor.
            .col-lg-2(data-aos="fade-left")
              figure
                img.img-t(src='@/assets/curso/tema3/img03.svg', alt='Texto que describa la imagen')
                
          .row.justify-content-end.align-items-center
            .col-lg-2.mb-4.mb-md-0(data-aos="fade-right")
              figure
                img.img-t(src='@/assets/curso/tema3/img04.svg', alt='Texto que describa la imagen')                
            .col-lg-9.text-start(data-aos="fade-left")
              p.m-0 <b>Servidor de integración:</b> en esta etapa la aplicación creada pasa por un estado de ensayo con la finalidad comprobar que no existe falla alguna en el servidor de producción real, para que la aplicación pueda ser implementada en el servidor de producción ésta primero debe ser aprobada.
              
          .row.justify-content-center.align-items-center
            .col-lg-9.mb-4.mb-md-0(data-aos="fade-right")
              p.m-0 <b>Servidor de producción:</b> luego de ser aprobada la aplicación, esta comienza en ser un parte importante dentro del servidor, es el entorno donde finalmente se ejecuta el software, si el entorno de producción del proceso está correctamente configurado, y se han pasado todas las pruebas automatizadas, no habrá ninguna incidencia en la ejecución del software final.           
            .col-lg-2(data-aos="fade-left")
              figure
                img.img-t(src='@/assets/curso/tema3/img05.svg', alt='Texto que describa la imagen')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p El entorno de desarrollo habitualmente posee tres niveles de servidores, los cuales se clasifican en desarrollo, montaje y producción, al momento de hacer una sinergia entre ellos se podrán denominar DSP:
        .cajon.color-secundario.bg_color2.p-3.mb-4
          p.m-0.ms-2 En la etapa del proceso de producción se pueden programar testeos automatizados los cuales buscarán evidenciar y corregir la gran mayoría de fallos, esto evita que una persona esté pendiente del testeo, ya que se evidencian y se corrigen automáticamente.
        .row.justify-content-center   
          .col-auto.d-none.d-lg-block
            img.img-t(src='@/assets/curso/tema3/img26.svg', alt='')       
          .col-lg-11
            p.mb-4(data-aos="fade-down") Con un entorno de desarrollo cloud no se necesita descargar el software, ya que el sistema no consume gran cantidad de recursos informáticos, por tal razón no es necesario efectuar configuraciones locales, lo que permite que se pueda utilizar de forma inmediata, haciendo que los proyectos se direccionen y ejecuten de forma eficaz y sin complicaciones.
      .col-lg-4.mb-4
        img.img-t(src='@/assets/curso/tema3/img06.svg', alt='')    

    .row.justify-content-center.align-items-center
      .col-lg-4.mb-4
        img.img-t(src='@/assets/curso/tema3/img07.svg', alt='')    
      .col-lg-8        
        p.mb-4(data-aos="fade-down") Cabe resaltar que no es necesario que los desarrolladores estén en un mismo lugar para ejecutar las acciones del entorno, ya que estos se pueden conectar desde diversos puntos y dispositivos, como ejemplo claro en la actualidad el teletrabajo. 
        .cajon.color-secundario.bg_color2.p-3.mb-4
          p.m-0.ms-2 Optar por un entorno de desarrollo apropiado puede evidenciar un cambio significativo en la ejecución ágil de los proyectos, es importante contar con todos los requerimientos adecuados de los entornos, dependiendo del trabajo a realizar por parte de los desarrolladores, manejando una herramienta adecuada para el equipo.
        .tarjeta.bg_color3.p-3
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.img-t.mx-auto(src="@/assets/curso/tema3/img27.svg")
            .col
              .row.justify-content-around.align-items-center
                .col.mb-3.mb-sm-0.col-lg-8
                  p.text-white.m-0 Entorno de desarrollo integrado - IDE <i>(Integrated Development Environment)</i> 
                  p.text-white Video resumen sobre Entorno de desarrollo integrado
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexo_General_del_RETIE_vigente_actualizado_a_2015-1.pdf')" target="_blank")
                    span Ver video
                    i.fas.fa-file-download

    Separador

    #t_3_2.titulo-segundo.color-acento-botones(data-aos="zoom-out-right")
        h2 3.2 Construcción del prototipo de un proyecto
        
    .row.justify-content-center.align-items-center
      .col-lg-4.mb-4
        img.img-t(src='@/assets/curso/tema3/img08.svg', alt='')    
      .col-lg-8        
        p.mb-4(data-aos="fade-down") Los prototipos son parte elemental del proceso de diseño de experiencia de usuario, ya que por medio de estos se pueden crear ya que permiten crear fácilmente un modelo interactivo en poco tiempo de un proyecto digital, con el fin de identificar cualquier insuficiencia en el diseño, el flujo y la interacción del diseño antes de crear todo el progreso de contenido, cabe resaltar que para la maquetación de un prototipo no se requiere el desarrollar un código, lo que da la posibilidad de tener prueba –error – ajuste y continuación.
        .tarjeta.bg_color3.p-3
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.img-t.mx-auto(src="@/assets/curso/tema3/img27.svg")
            .col
              .row.justify-content-around.align-items-center
                .col.mb-3.mb-sm-0.col-lg-8
                  p.text-white.m-0 Prototipo: ¿Cómo construir mi propuesta?
                  p.text-white Conoce más sobre las tipologías de formato de un prototipo.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexo_General_del_RETIE_vigente_actualizado_a_2015-1.pdf')" target="_blank")
                    span Ver video
                    i.fas.fa-file-download

    Separador

    #t_3_3.titulo-segundo.color-acento-botones(data-aos="zoom-out-right")
        h2 3.3 Herramientas para hacer un prototipo interactivo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p Dentro de los procesos de creación del diseño para un prototipo y su interfaz, lo más relevante es que experiencia se deja al usuario al momento de interactuar con el prototipo, pero para llegar a dicho escenario se requieren de una serie de variables importantes con las cuales el prototipo sin duda alguna alcanzará el resultado esperado por el desarrollador para sus usuarios.
        .row.justify-content-center   
          .col-auto.d-none.d-lg-block
            img.img-t(src='@/assets/curso/tema3/img26.svg', alt='')       
          .col-lg-11
            p.mb-4(data-aos="fade-down") Se puede hablar de que hoy en día se pueden contar con diversas herramientas las cuales brindan la posibilidad de revisar el paso a paso del proyecto esto con el fin de brindar la mejor experiencia para el usuario final del proyecto.
        .cajon.color-secundario.bg_color2.p-3.mb-4
          p.m-0.ms-2 En este aparte se mencionarán las herramientas básicas para el desarrollo de un prototipo interactivo:
      .col-lg-4.mb-4
        img.img-t(src='@/assets/curso/tema3/img09.svg', alt='') 

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.justify-content-center(titulo="Flinto")
        .col-lg-12
          p.ms-3 Flinto es una aplicación creada por MacOS, en realidad es muy utilizada por los desarrolladores en la creación de animaciones de desarrollo de software y prototipos interactivos, cuenta con una serie de características que permiten un óptimo desarrollo en el ejercicio de prototipado, a continuación, se harán referencia de ellas:
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-3
              img.img-t(src='@/assets/curso/tema3/img10.svg', alt='')   
            .col-auto
              .verticalLine2
            .col-lg-8
              ul.lista-ul--color
                li
                  i.fas.fa-caret-right
                  |	Cuenta con la posibilidad de hacer transiciones animadas, siendo un excelente creador de transiciones ya que permite crear animaciones propias de forma bastante sencilla, ya que cuenta con un diseñador de transiciones muy preciso. 
                li
                  i.fas.fa-caret-right
                  |	Puede desarrollar diversos comportamientos: Permitiendo la creación de pequeñas interacciones en multi pantalla, permitiendo agregar al contenido animaciones en bucle, botones, animaciones de desplazamiento o interruptores.
                li
                  i.fas.fa-caret-right
                  |	Su recurso de desplazamiento: Da la posibilidad de crear áreas desplazables simplemente con un clic, es de mucha utilidad ya que facilita la creación de animaciones.

          p.ms-3 <b>Utiliza al máximo sus recursos para dibujo:</b>  ya que cuenta con una serie de herramientas de dibujo que facilitan el proceso de maquetación, y de edición de formas y textos.

      .row.justify-content-center(titulo="JustInMind")
        .col-lg-12
          p.ms-3 JustInMind es una herramienta muy precisa y eficiente al momento de la creación de prototipos, es como un todo en uno, por lo general los desarrolladores la utilizan para el diseño de páginas web, de igual forma su interacción en línea permite que al momento de hacer un proyecto en una amplia gama de elementos creativos, como ejemplo ir desde wireframes clicables hasta prototipos 100% interactivos a fin de tener una idea muy amplia de gestos móviles, cuenta con una serie de características a continuación, se harán referencia de ellas:
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-3
              img.img-t(src='@/assets/curso/tema3/img11.svg', alt='')   
            .col-auto
              .verticalLine
            .col-lg-8
              ul.lista-ul--color
                li
                  i.fas.fa-caret-right
                  |	La herramienta de diseño es muy eficiente: Permitiendo escoger el estilo, el tamaño y cómo distribuir todos los elementos en la interfaz de usuario.  
                li
                  i.fas.fa-caret-right
                  |	Cuenta con interacciones en línea: Permitiendo crear prácticas web a través de un extenso catálogo de interacciones y animaciones.
                li
                  i.fas.fa-caret-right
                  |	No se limita ya que cuenta con una Infinidad de gestos móviles: Facilitando en el proceso de creación determinar movimientos, con los cuales se podrá deslizar, desplazar, tocar, rotar el modelo de una aplicación móvil.
                li
                  i.fas.fa-caret-right
                  |	Permite un ajuste automático de tamaño: con el cual se pueden realizar cambios de los elementos de cada página, los cuales por general se agrupan creando un entorno real para la creación, puede fijar los objetos y su libre desplazamiento en pantalla creando una mejor experiencia receptiva del desarrollador. 

      .row.justify-content-center(titulo="InVision")
        .col-lg-12
          p.ms-3 Con InVision se podrá compartir e ilustrar un proyecto en una línea de tiempo real, esto permite que el proyecto sea más atractivo al cliente, ya que a través de esta gestión el cliente se puede sentir seguro de acuerdo a los tiempos de intervención del proyecto, de igual forma se puede sincronizar con sincronizando Illustrator o Photoshop con la app, lo cual permite tener organizadamente las carpetas y secuencias del proyecto, dentro de sus características principales se encuentran las siguientes:
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-3
              img.img-t(src='@/assets/curso/tema3/img12.svg', alt='')   
            .col-auto
              .verticalLine2
            .col-lg-8
              ul.lista-ul--color
                li
                  i.fas.fa-caret-right
                  |	Hace visible quien interactúa en el proyecto con un solo clic y doble clic: Determinando cuál es flujo de usuarios en el prototipo. 
                li
                  i.fas.fa-caret-right
                  |	Cuenta con puntos de entrada a otras ventanas: Habilitando la configuración de enlaces, las cuales se pueden observar en otras pantallas, avances y estado actual del prototipo.
                li
                  i.fas.fa-caret-right
                  |	Permite interactuar con el diseño de plantillas: Esta función está habilitada para ordenar plantillas que contengan puntos de acceso, las cuales se podrán observar dentro del prototipo con solo un clic.
                li
                  i.fas.fa-caret-right
                  |	Integra unas secuencias de transiciones: Dejando ver que transiciones está teniendo el prototipo con el fin de brindar una experiencia en tiempo real al usuario.

      .row.justify-content-center(titulo="Fluid")
        .col-lg-12
          p.ms-3 Fluid UI es recomendada para la realización de aplicaciones pequeñas, también permite que el equipo de trabajo tenga un contexto diario de los avances del prototipado, permite realizar bocetos de las vistas principales de una app, enlazándolas a controles que se enlazan con otras aplicaciones, permitiendo una experiencia interactiva, dinámica y representativa del posible resultado final, dentro de sus características principales se encuentran las siguientes:
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-3
              img.img-t(src='@/assets/curso/tema3/img13.svg', alt='')   
            .col-auto
              .verticalLine3
            .col-lg-8
              ul.lista-ul--color
                li
                  i.fas.fa-caret-right
                  |	Diseño y creación eficaz de prototipos: Cuenta con un kit de interfaz de usuario, adecuado y preconstruido para diseñar materiales, Wireframing, iOS, entre otros. 
                li
                  i.fas.fa-caret-right
                  |	Permite realizar ajustes en tiempo real: Facilitando el trabajo simultáneo en equipo de un mismo prototipo.
                li
                  i.fas.fa-caret-right
                  |	Cuenta con vistas previas dinámicas: Las cuales permiten agregar interacciones en el prototipo, hace que el prototipo sea eficiente y que el producto sea llamativo por su interacción visual. 
                li
                  i.fas.fa-caret-right
                  |	No tiene restricción de acceso ya que se puede observar e interactuar desde cualquier dispositivo: Dando la posibilidad de interactuar con los prototipos en la app de escritorio, para ello se requiere conexión a la internet.
                li
                  i.fas.fa-caret-right
                  |	Se pueden realizar pruebas en los móviles disponibles: Como ventaja general va a permitir experimentar los prototipos en varios dispositivos móviles, como teléfonos o tablets, para ello se podrán descargar apps de reproducción gratuita.
 
      .row.justify-content-center(titulo="Proto.io")
        .col-lg-12
          p.ms-3 La principal característica de Proto.io es que puede diseñar animaciones para aplicaciones móviles por medio de un TIMELINE, el cual indica cuánto tiempo podrá durar la animación, dentro de sus características principales se encuentran las siguientes:
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-3
              img.img-t(src='@/assets/curso/tema3/img14.svg', alt='')   
            .col-auto
              .verticalLine3
            .col-lg-8
              ul.lista-ul--color
                li
                  i.fas.fa-caret-right
                  |	Es de fácil manejo ya que puede arrastrar y soltar: Permite desplazar archivos fácilmente, desde el escritorio del ordenador al panel determinado por el prototipo para realizar una descarga de forma rápida, permite que los archivos estén organizados y de fácil recordación por su ubicación.
                li
                  i.fas.fa-caret-right
                  |	Permite crear diversas animaciones las cuales están disponibles: Contiene herramientas fáciles de utilizar como: escalar, mover, rotar, cambiar el tamaño y desvanecerse, las cuales podrán aplicarse en cualquier elemento de la creación de contenido.
                li
                  i.fas.fa-caret-right
                  |	Facilita una serie de acciones, Con las cuales permite desplazarse, registrar correos electrónicos, GIF, audios, vídeos, cambiar de pantalla, realizar una llamada, visitar una URL, entre otras.
                li
                  i.fas.fa-caret-right
                  |	Permite exportar como HTML: Es perfecto para conseguir una vista preliminar y almacenar el proyecto, no requiriendo conexión, permite descargar todos los archivos Javascript, CCS y HTML, y de igual forma todos los activos del proyecto.

    Separador

    #t_3_4.titulo-segundo.color-acento-botones(data-aos="zoom-out-right")
        h2 3.4 ¿Qué es un Prototipo? 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4
        img.img-t(src='@/assets/curso/tema3/img15.svg', alt='')  
      .col-lg-8
        p Un prototipo en sentido genérico es una implementación parcial pero concreta de un sistema o una parte del mismo que principalmente se crean para explorar cuestiones sobre aspectos muy diversos del sistema durante el desarrollo del mismo.
        .cajon.color-secundario.bg_color2.p-3.mb-4
          p.m-0.ms-2 En referencia a una interfaz de usuario se realizan prototipos con la finalidad de explorar los aspectos interactivos del sistema [ROS02a] incluyendo la usabilidad, la accesibilidad y/o la funcionalidad de este.
        .row.justify-content-center   
          .col-auto.d-none.d-lg-block
            img.img-t(src='@/assets/curso/tema3/img26.svg', alt='')       
          .col-lg-11
            p.mb-4(data-aos="fade-down") El uso de los prototipos en el desarrollo de sistemas software no se limita sólo a probar las interacciones que los usuarios deben realizar, sino que son útiles también para otras actividades que se realizan durante el proceso, como por ejemplo su gran utilidad en la fase de recogida o análisis de requisitos en cuanto que amplía y mejora y la información necesaria para el desarrollo del sistema [KOT97].
    p.mb-4 El diseño de prototipos interactivos es fundamental a la hora de desarrollar un sitio web o una aplicación móvil. Es importante contemplar todas las variables que esto conlleva, su planificación acorde a los tiempos esperados será el éxito del prototipo, evaluar sus escenarios tanto positivos como negativos, con el fin de no desperdiciar tiempo en un contenido sin planificación. 

    .row.justify-content-center
      .col-lg-10
        figure
          img.img-t(src='@/assets/curso/tema3/img16.svg', alt='')  
    
    Separador

    #t_3_5.titulo-segundo.color-acento-botones(data-aos="zoom-out-right")
        h2 3.5 Etapas de prototipado

    p.mb-5 Al igual que en cualquier tipo de audiovisual, los guiones multimedia también cuentan con la etapa de preproducción, producción y postproducción:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        .bg_6.p-4
          figure.mb-4.mt-3
            img.img-t(src='@/assets/curso/tema3/img17.svg')
          p <b>El árbol de contenidos:</b> aquí se desarrollará en general todo el contexto web del producto final, es importante definir cuál será la estructura de navegación de un sitio web, se le dará forma a la estructura de cada página, cuál es su forma de unión y secuencia, se definirá cual es el diseño óptimo de navegación.
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
        .bg_7.p-4
          figure.mb-4.mt-3
            img.img-t(src='@/assets/curso/tema3/img18.svg')
          p <b>La baja fidelidad:</b> en esta etapa se realizarán los borradores de la propuesta final del producto, se deja claro el soporte de paginación, es decir, que llevará y cómo será su diseño, diseño visual, que colores llevará, se determina la tipografía o iconografía estructurando el producto final. (Para hacer dicho proceso es importante ejecutarlo con Wireframes con el Software InVisión).
      .col-lg-4(data-aos="fade-left")
        .bg_8.p-4
          figure.mb-4
            img.img-t(src='@/assets/curso/tema3/img19.svg')
          p <b>La alta fidelidad:</b> en esta etapa ya se cuenta con el producto final, es la etapa más contigua a la realidad, dándole paso a la interactividad y su funcionalidad dentro del proyecto, para estructurar de manera adecuada el proyecto es recomendable trabajarla con softwares de prototipado (Figma o Zeplin).

    .row.justify-content-center.align-items-center
      .col-lg-2.mb-4.mb-lg-0
        figure
          img.img-t(src='@/assets/curso/tema2/img12.svg', alt='')
      .col-lg-8
        p.m-0 <b>De acuerdo con esta información es importante determinar qué herramientas se va a elegir para el desarrollo de un prototipo y cómo se vinculará las etapas de prototipado en su proyecto, a la hora de trabajar con un programa de diseño de prototipos es muy recomendable el uso de los principios de Atomic Design, esta herramienta permitirá que el desarrollador determine cuál será la interfaz del producto y su prototipo la estructura a seguir y el diseño final.</b>
    
    Separador

    #t_3_6.titulo-segundo.color-acento-botones(data-aos="zoom-out-right")
        h2 3.6 El proyecto 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4
        img.img-t(src='@/assets/curso/tema3/img20.svg', alt='')  
      .col-lg-8
        p El proyecto cuenta con diversos elementos informativos, los cuales de una u otra forma concuerdan en su intención final, la cual es generar una experiencia comunicativa de interacción, de percepción sistémica, y estos elementos informativos cuentan con algunas características al momento de definir la ruta, el diseño y la estrategia a desarrollar dentro del producto de prototipado interactivo.
        .cajon.color-secundario.bg_color2.p-3.mb-4
          p.m-0.ms-2 Se hará referencia a los componentes más importantes a la hora de la ejecución del proyecto.
        .row.justify-content-center   
          .col-auto.d-none.d-lg-block
            img.img-t(src='@/assets/curso/tema3/img26.svg', alt='')       
          .col-lg-11
            p.mb-4(data-aos="fade-down") Todo contenido que haga referencia a multimedia debe contener <b>Elementos Organizativos</b> los cuales permitan que un usuario tenga una interacción adecuada de acuerdo con su contexto y sus elementos, permitiendo que la información sea clara y de fácil comprensión, dicho esto se hace referencia a los elementos interactivos los cuales son:

    .row.mb-4
      .col-lg-7
        ul.lista-ul--color
          li
            i.fas.fa-check-circle.color1
            |	Los menús desplegables son los manuales de instrucciones que tienen los elementos multimedia, con los cuales el usuario puede interactuar en la pantalla por lo general son de fácil uso. 
          hr
          li
            i.fas.fa-check-circle.color1
            |	Las barras de desplazamiento con estas herramientas los usuarios pueden hacer recorridos horizontales y verticales de imágenes o textos, dichas barras de desplazamiento se encuentran en la parte inferior de la pantalla. 
          hr
          li.mb-5
            i.fas.fa-check-circle.color1
            |	Los hipervínculos son enlaces que se pueden conectar entre sí dentro de una presentación multimedia, determinados por símbolos los cuales se activan al pulsarlos.
          .cajon.color-secundario.bg_color2.p-3.mb-4
            p.m-0.ms-2 Dentro de un escenario de diseño y creación de una multimedia los componentes y elementos se corresponden entre sí, cada uno realiza su parte para un funcionamiento óptimo del proceso y el resultado esperado por el desarrollador.
      .col-lg-5
        figure
          img.img-t(src='@/assets/curso/tema3/img21.svg', alt='')

    .bloque-texto-a.color-secundario.p-4.mb-5 
      .row.m-0.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          figure(data-aos="fade-right")
            img.img-t(src='@/assets/curso/tema3/img22.png')
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.m-0 En este punto es importante tener en cuenta lo siguiente para la creación de su prototipo; cabe resaltar que ya se habían nombrado las etapas de creación, sin embargo, se hace preciso recalcarlas nuevamente:

    .row.mb-4
      .col-lg-7
        ul.lista-ul--color
          li
            i.fas.fa-check-circle.color1
            |	Definir claramente el mensaje con las características de lo que se desea comunicar.
          hr
          li.m_block
            i.fas.fa-check-circle.color1
            |	Definir el público objetivo al cual está enfocado el proyecto. 
          hr
          li.m_block
            i.fas.fa-check-circle.color1
            |	Tener claro el guion, el concepto, las herramientas con las que desea trabajar el proyecto, opciones de navegación, funcionalidades y cómo se presentará el resultado.
          hr
          li.m_block
            i.fas.fa-check-circle.color1
            |	Diseñar el prototipo, en este punto se podrán analizar, revisar cada una de las capacidades del prototipo, hacer los posibles cambios y ver su funcionalidad con respecto al resultado esperado. 
          hr
          li.mb-5.m_block
            i.fas.fa-check-circle.color1
            |	Producto final, después de pasar todas las pruebas y los ajustes necesarios del funcionamiento del prototipo se realiza la versión definitiva y lista para su puesta en marcha en el diseño de la multimedia.          
      .col-lg-5
        figure
          img.img-t(src='@/assets/curso/tema3/img23.svg', alt='')

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        img.img-t(src='@/assets/curso/tema3/img24.svg', alt='')  
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        img.img-t(src='@/assets/curso/tema3/img25.svg', alt='')  
    
    .row.justify-content-center.align-items-center
      .col-lg-2.mb-4.mb-lg-0
        figure
          img.img-t(src='@/assets/curso/tema2/img12.svg', alt='')
      .col-lg-8
        p.m-0 <b>Luego de todo lo revisado en el componente, ya  se está en la capacidad de crear un prototipo de proyecto tomando como base la información aquí contenida, teniendo conceptos claros para definir por dónde encaminar su proyecto de multimedia interactivo, determinar las particularidades de cada componente del proceso con el fin de realizar su planificación y programación, de igual forma tendrá claro cuál va a ser su equipo de trabajo y herramientas adecuadas para su creación interactiva. De igual forma determinar todo lo que tiene que ver con la estructura narrativa, tipografías, estética del contenido y tiempo adecuado de creación del proyecto multimedia interactivo.</b>      




</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
