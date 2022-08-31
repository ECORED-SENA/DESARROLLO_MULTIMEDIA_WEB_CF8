<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 2
      h1 Guion interactivo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        img.img-t(data-aos="fade-right")(src='@/assets/curso/tema2/img01.svg', alt='')    
      .col-lg-8
        p.mb-4 Es un proceso descriptivo que detalla claramente todas las escenas audiovisuales, las cuales se pueden plasmar en un ordenador de escritorio, portátil, móviles o consolas de videojuegos, un guion multimedia es una historia contada a través de imágenes, describe cada pantallazo, es decir que se ve al momento de interactuar con el contexto, por tanto, es importante la narración en orden secuencial que la historia desarrolla en el producto audiovisual, un guion audiovisual permite combinar diferentes representaciones para los contenidos, los cuales pueden ser en imagen, sonido, texto, video, animación e interactividad. 
        .cajon.color-secundario.bg_color2.p-3.mb-4
          p.m-0.ms-2 Nota: El lenguaje adecuado debe ser visual y sonoro, no se debe confundir con un guion literario.

    #t_2_1.titulo-segundo.color-acento-botones(data-aos="zoom-out-right")
        h2 2.1 ¿Cómo elaborar un guion multimedia?
    
    .row.justify-content-center.align-items-center
      .col-lg-8
        p(data-aos="fade-down") Es importante tener un contexto claro para el desarrollo del guion multimedia para ello se debe tener claro el objetivo, la Integración de los elementos, la sinopsis la narración, la organización y el ritmo.
        .row.justify-content-center       
          .col-auto.d-none.d-lg-block.p-0
            img.img-t.mt-2(data-aos="zoom-in")(src='@/assets/curso/tema1/img03.svg', alt='')       
          .col-lg-10
            p(data-aos="fade-down") <b>En el mismo se incluye toda la información relativa al diseño del recurso (storyboard), está conformado por varios elementos o sub-guiones:</b>   
      .col-lg-4.mb-4
        img.img-t.my-3(data-aos="zoom-in")(src='@/assets/curso/tema2/img02.svg', alt='')  

    .row.mb-4
      .col-lg-4.mb-4.mb-lg-0
        figure
          img.img-t(src='@/assets/curso/tema2/img03.svg', alt='')
      .col-lg-8
        .bg_slyder2.py-2.px-4.mb-5
          SlyderA(tipo="b").color_slyder-a_botones
            .row.justify-content-center.align-items-center
              .col-lg-9.align-self-end
                h4 Guion de contenido
                p Enseña el material preciso con el cual se mostrarán las diferentes secuencias, de igual forma el cómo se relacionan entre sí, haciendo énfasis en lo más importante de la historia dejando claro el contenido del guion.       
              .col-lg-3.mt-4
                figure
                  img.img-t.mx-auto.d-none.d-lg-block(src='@/assets/curso/tema2/img04.svg', alt='AvatarTop')

            .row.justify-content-center.align-items-center
              .col-lg-9.align-self-end
                h4 Guion narrativo
                p Determinará cómo se realizará la presentación de la información, se puede decir que es lo mismo que un guion literario, deja claro el enfoque y el estilo con el que se trabajará el guion.
              .col-lg-3.mt-4
                figure
                  img.img-t.mx-auto.d-none.d-lg-block(src='@/assets/curso/tema2/img05.svg', alt='AvatarTop')

            .row.justify-content-center.align-items-center
              .col-lg-9.align-self-end
                h4 Guion icónico
                p Este guion permite ver la marca las imágenes adecuadas para el desarrollo del material, (gráficos, fotos, figuras, imágenes de video o animaciones), dejando claro en qué momento se hacen partícipes del montaje del guion, se recomienda darle un consecutivo con el fin de identificar cada una de las imágenes utilizadas. 
              .col-lg-3.mt-4
                figure
                  img.img-t.mx-auto.d-none.d-lg-block(src='@/assets/curso/tema2/img06.svg', alt='AvatarTop')

            .row.justify-content-center.align-items-center
              .col-lg-9.align-self-end
                h4 Guion de sonido
                p Se debe tener en cuenta que los registros de los sonidos pueden ser directos o indirectos, de acuerdo con la secuencia en imagen que se esté tomando como base, es decir el sonido debe ser secuencial, (ejemplo si se está dando un contexto con una voz de la introducción de la historia se debe utilizar un sonido leve o son sonido, y se debe instalar un sonido diferente a una escena que implique acción, riesgo, drama) el guion del sonido debe ser sincrónico con el guion narrativo.   
              .col-lg-3.mt-3
                figure
                  img.img-t.mx-auto.d-none.d-lg-block(src='@/assets/curso/tema2/img07.svg', alt='AvatarTop')
            
            .row.justify-content-center.align-items-center
              .col-lg-9.align-self-end
                h4 Guion Técnico
                p Permite identificar que metodología se va a realizar, con qué programas se puede desarrollar, define los diseños de pantalla y los formatos de presentación.   
              .col-lg-3.mt-4
                figure
                  img.img-t.mx-auto.d-none.d-lg-block(src='@/assets/curso/tema2/img08.svg', alt='AvatarTop')

    p.mb-5 Al igual que en cualquier tipo de audiovisual, los guiones multimedia también cuentan con la etapa de preproducción, producción y postproducción:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        .bg_1.p-4
          figure.mb-4.mt-3
            img.img-t(src='@/assets/curso/tema2/img09.svg')
          p <b>Preproducción:</b> en esta etapa se definen los objetivos y la idea principal.
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
        .bg_2.p-4
          figure.mb-4.mt-3
            img.img-t(src='@/assets/curso/tema2/img10.svg')
          p <b>Producción:</b> en esta etapa se le da forma puede independiente, simultánea y secuencial al contenido.
      .col-lg-4(data-aos="fade-left")
        .bg_3.p-4
          figure.mb-4
            img.img-t(src='@/assets/curso/tema2/img11.svg')
          p <b>Postproducción:</b> una vez desarrollada la edición, se incluirán en esta etapa los elementos necesarios para el desarrollo óptimo del contenido: gráficos, animaciones, rótulos, efectos de sonido. 

    .row.justify-content-center.align-items-center
      .col-lg-2.mb-4.mb-lg-0
        figure
          img.img-t(src='@/assets/curso/tema2/img12.svg', alt='')
      .col-lg-8
        p.m-0 <b>Dentro de todo este proceso de la creación de elementos interactivos es importante tener siempre presente el título que se dará a producción audiovisual, quien o quienes son los creadores, que tiempo dura la producción, la fecha de creación, a qué público está dirigido el material y una breve descripción de los componentes que hacen parte de la pieza audiovisual.</b>

    Separador 

    #t_2_2.titulo-segundo.color-acento-botones(data-aos="zoom-out-right")
        h2 2.2 Editores de código

    p.mb-4 En este aparte se mencionarán los editores de código más usados por los programadores y diseñadores al momento de crear contenidos interactivos.

    h4.mb-4 ¿Qué es un editor de código?

    .row.justify-content-center.mb-5
      .col-lg-8
        p.mb-4 Es un instrumento diseñado especialmente para desarrollar una acción específica, la cual se trata de editar archivos de escritura y modificación de códigos web. 
        .cajon.color-secundario.bg_color2.p-3.mb-4
          p.m-0.ms-2 Es este aparte se mencionarán los cinco editores de código más utilizados por los diseñadores y programadores web en la actualidad (programas gratuitos), cabe aclarar que no existe un top de editores de código, dejando claro que si se opta por tomar otro tipo de editor lo podrá realizar sin ningún inconveniente, aquí se mencionarán algunas de las características más importantes de las herramientas:
      .col-lg-4
        img.img-t(data-aos="fade-right")(src='@/assets/curso/tema2/img13.svg', alt='')    

    TabsC.color-acento-botones
      .py-3.py-md-4(titulo="Sublime Text")
        .row.align-items-center
          .col-md-3.mb-4.mb-md-0
            figure
              img.verticalLine(src='@/assets/curso/tema2/img14.svg', alt='')
          .col-md-9
            h4 Sublime Text
            p Es un editor de código y texto para Windows, Linux y Mac, cuenta con una variedad de temas incorporados y una personalización total de la interfaz, con soporte para varios lenguajes de marcado y programación.
            p Este editor de código permite realizar ediciones de archivos de forma eficaz y rápida, esto hace que sea muy utilizado por los usuarios en el entorno de la programación, cuenta con una diversidad de plugins aprovechables para instalar, multiplicando la interfaz y su funcionalidad, dentro de sus características principales se encuentran; resaltado de sintaxis, sangría automática, reconocimiento del tipo de archivo, barra lateral con archivos del directorio mencionado, macros, complemento y paquetes, de igual forma ofrece a los usuarios los siguientes beneficios; capacidad para resolver errores del enlazador, realiza seguimiento de todos los archivos y carpetas con los que trabajar, tiene conectividad con sistemas de control de versiones como git, mercurial, mantiene el esquema de color para el esquema de sintaxis.
              
      .py-3.py-md-4(titulo="Visual Studio Code")
        .row.align-items-center
          .col-md-3.mb-4.mb-md-0
            figure
              img.verticalLine(src='@/assets/curso/tema2/img15.svg', alt='') 
          .col-md-9
            h4 Visual Studio Code
            p Este editor de código es diseñado por Windows, y permite ser utilizado por Mac.
            p Este editor de código se recomienda cuando los proyectos presentan demasiada complejidad en contenido y tamaño, sin embargo, su velocidad de trabajo es rápida lo cual lo hace atractivo para los usuarios, como principal característica es que es considerablemente sólido y personalizable, es compatible con HTML, CSS, JavaScript y PHP, lo que hace que la herramienta sea constante y no necesita cambiarse, al mismo tiempo, utiliza Intellisense inteligente para el resaltado de sintaxis y el autocompletado, también permite la manipulación de carpetas alternas y tiene la posibilidad de utilizar más de 30 lenguajes.
        
      .py-3.py-md-4(titulo="Atom")
        .row.align-items-center
          .col-md-3.mb-4.mb-md-0
            figure
              img.verticalLine(src='@/assets/curso/tema2/img16.svg', alt='') 
          .col-md-9
            h4 Atom
            p Este editor de texto es compatible con Windows y Mac
            p Es un editor de texto web de fuente abierta desarrollado por GitHub, Su principal característica es que soporta la colaboración de código en tiempo real, muy similar aun drive ya que los archivos quedan subidos y cargados lo cual permite trabajar en un proyecto unificado y tiene la capacidad de codificar sus propios cambios en la interfaz con HTML y CSS.

      .py-3.py-md-4(titulo="Brackets")
        .row.align-items-center
          .col-md-3.mb-4.mb-md-0
            figure
              img.verticalLine(src='@/assets/curso/tema2/img17.svg', alt='') 
          .col-md-9
            h4 Brackets
            p Desarrollado por Adobe y disponible para Windows, Mac y Linux 
            p Este editor de código es compatible con HTML, CSS, JavaScript, es una herramienta relativamente nueva en el mercado de los programadores, cuenta con algunas características que lo hacen de fácil manejo para los usuarios, permite añadir plugins las cuales permiten un mejor interfaz ya que puede aumentar su funcionalidad, de igual forma incluye una vista previa en vivo que permite ver los cambios que se van realizando en el código de un navegador web y detectar fácilmente posibles errores de código, también se ajusta y brinda soporte para preprocesador, tiene una opción de buscar y reemplazar, puede compartir extensiones y su detalle de sintaxis es óptimo.        
      
      .py-3.py-md-4(titulo="Notepad++")
        .row.align-items-center
          .col-md-3.mb-4.mb-md-0
            figure
              img.verticalLine(src='@/assets/curso/tema2/img18.svg', alt='') 
          .col-md-9
            h4 Notepad++
            p Este editor de código está diseñado directamente para Windows
            p Notepad++ es una herramienta de fácil manejo para los usuarios su interfaz es relativamente sencilla tiene la posibilidad de manejar diversos lenguajes de programación, tiene soporte para HTML, CSS, PHP y JavaScript, tiene la posibilidad de autoguardado, búsqueda avanzada, cuenta con edición sincrónica y permite una división de pantalla para optimizar el trabajo del diseñador o programador.
      




</template>

<script>
export default {
  name: 'Tema2',
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
