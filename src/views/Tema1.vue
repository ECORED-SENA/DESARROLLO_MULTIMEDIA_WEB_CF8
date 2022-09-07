<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1
      h1(data-aos="fade-right") Elementos interactivos
    
    .bg_fondo1
      .row.justify-content-center.align-items-center
        .col-lg-4.mb-4
          img.img-t(src='@/assets/curso/tema1/img01.svg', alt='')    
        .col-lg-8
          .row.justify-content-center   
            .col-auto.d-none.d-lg-block
              img.img-t(src='@/assets/curso/tema1/img02.svg', alt='')       
            .col-lg-11
              p.me-3.mb-4(data-aos="fade-down") Antes de iniciar es conveniente partir desde el concepto mismo, la palabra interactivo se designará a todo aquello que proviene o procede por interacción: 
          .cajon.color-primario.bg_color1.p-3.mb-4
            p.m-0.ms-2 Por interacción entendemos que es aquella acción que se ejerce de manera recíproca entre dos o más sujetos, objetos, agentes, fuerzas o funciones, en tanto, el concepto de interacción es un concepto ampliamente utilizado en diversos ámbitos, como en la comunicación, en la informática, la física, el diseño multimedia y el diseño industrial (Ucha, 2009).

      .row.justify-content-center.align-items-center
        .col-lg-8
          p(data-aos="fade-down") La comunicación es el ejemplo más básico y sencillo de interactividad, pero también esa dualidad entre hombre y máquina, donde como usuarios se produce una manipulación de la otra, lleva a una consecuencia natural producto de esta interacción. 
          .row.justify-content-center       
            .col-auto.d-none.d-lg-block.p-0
              img.img-t.mt-2(data-aos="zoom-in")(src='@/assets/curso/tema1/img03.svg', alt='')       
            .col-lg-10
              p(data-aos="fade-down") <b>Hoy en día, resulta más que común la relación sujeto-máquina, donde lo interactivo se puede manifestar desde el jugar a través de algún dispositivo o bien visualizar diverso contenido por medio de cualquier proveedor de servicios <em>streamming,</em> como si fuera una comida a la carta.</b>   
        .col-lg-4.mb-4
          img.img-t.my-3(data-aos="zoom-in")(src='@/assets/curso/tema1/img05.svg', alt='')  

      #t_1_1.titulo-segundo.color-acento-botones(data-aos="zoom-out-right")
        h2 1.1	Elementos

      .row.justify-content-center.align-items-center
        .col-lg-4
          img.img-t(data-aos="zoom-in")(src='@/assets/curso/tema1/img04.svg', alt='')    
        .col-lg-8
          p A continuación, se hace referencia a los elementos más relevantes a la hora de crear un producto interactivo, un elemento interactivo es un elemento que puede cambiar de acuerdo con lo que el usuario requiera, a continuación se presentan los más comunes:
          h4.mb-4 Elementos de un producto interactivo
          .row.justify-content-center    
            .col-auto.d-none.d-lg-block.p-0
              img.img-t(src='@/assets/curso/tema1/img06.svg', alt='')       
            .col-lg-10
              p(data-aos="fade-down") <b>Todo producto final esta compuesto de diversos elementos constitutivos que le dan vida y personalidad al mismo, es importante conocerlos y usar la gran diversidad que se tiene con relación a los mismos para el proceso creativo. Veamos algunos:</b>
    
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.justify-content-center(titulo="Botón Interactivo")
        .col-lg-12
          p.ms-3 El botón es un elemento interactivo que cumple una operación, la cual, está ligada con el orden en que un usuario da un clic. Pueden ser texto, forma vectorial e imagen, o incluso se puede convertir en un botón interactivo. Son herramientas que pueden ser creadas a partir de una imagen, una caja de texto o un marco rectangular vacío. Luego de convertir la imagen o marco a botón, se podrán agregar diversas labores logrando de esta forma realizar distintas interactividades.
          .row.justify-content-center.align-items-center
            .col-lg-4.mb-4
              img.img-t(src='@/assets/curso/tema1/img07.png', alt='')    
            .col-lg-8
              .row.justify-content-center   
                .col-auto.d-none.d-lg-block
                  img.img-t(src='@/assets/curso/tema1/img12.svg', alt='')       
                .col-lg-11
                  p.me-3.mb-4(data-aos="fade-down") Las propiedades que se pueden definir para un botón interactivo son: Botones, texto, vínculo, fuente, imagen. Realmente su manipulación es relativamente sencilla para cualquier persona, ya que no se requiere ningún tipo de experticia para crear un botón interactivo.  
              .cajon.color-primario.bg_color1.p-3.mb-4
                p.m-0.ms-2 De esta forma los usuarios realizan un entorno interactivo con la manipulación de los diferentes botones que existan en determinado medio, su usabilidad, su resultado y la subsecciones derivadas de cada uno de ellos. Hay muchas herramientas hoy en día para su creación como ThingLink, InDesign, Illustrator, entre otros, cuya documentación de como realizarlos es de fácil consulta en la <em>web</em>.

      .row.justify-content-center(titulo="Menús Desplegables")
        .col-lg-4.mb-4.mb-lg-0
          img.img-t(src='@/assets/curso/tema1/img08.png', alt='')  
        .col-lg-8
          p.mb-4 Son menús que permiten ser manipulados por el usuario, están diseñados para optimizar espacio en la pantalla principal de una <em>web</em> y por lo general cuentan con submenús. Los menús tienen opciones individuales que se ejecutan sólo si se les da la orden, por lo cual, permite ver todo el listado de categorías que se encuentran en un tema específico y la interacción va a ser guiada por el mismo usuario.   
          .row.justify-content-center   
            .col-auto.d-none.d-lg-block
              img.img-t(src='@/assets/curso/tema1/img12.svg', alt='')       
            .col-lg-11
              p.me-3.mb-4 Las listas desplegables son una combinación de cuadros de texto y menús desplegables y un claro ejemplo de las mismas es la barra de direcciones de un navegador <em>web</em> o las ventanas de ayuda de las aplicaciones. En ella, empezamos a escribir en el campo de texto la palabra deseada y automáticamente, nos aparece una lista donde podemos seleccionar la opción que queramos. El punto clave a tener en cuenta es que el usuario debe navegar la lista para encontrar lo que desea. Además, las opciones disponibles deben ser limitadas.

      .row.justify-content-center(titulo="<em>Slides</em>")
        .col-lg-8
          p.mb-5 <em>Slides</em> es instrumento con el cual se pueden crear diapositivas en línea, por intermedio de los <em>slides</em> se pueden observar las presentaciones elaboradas dentro de una interfaz, PowerPoint, documentos de Word, open office, PDF o portafolios. Es decir, subir y compartir información a un público específico con un objetivo de una forma más dinámica.
          .row.justify-content-center  
            .col-auto.d-none.d-lg-block
              img.img-t(src='@/assets/curso/tema1/img12.svg', alt='')       
            .col-lg-11
              p.me-3.mb-4 Con los <em>slides</em> se pueden crear y compartir presentaciones las cuales pueden incluir videos, textos, imágenes, compartir contenidos por redes sociales y facilita la comunicación ya que se pueden realizar reuniones de presentación de proyectos, sustentaciones, entre otros, en tiempo real sin importar que el público esté en un lugar físico.
        .col-lg-4
          img.img-t(src='@/assets/curso/tema1/img09.png', alt='')  

      .row.justify-content-center(titulo="<em>Hotspots</em>")
        .col-lg-12
          p.ms-3 Es un enlace directo que ofrece cobertura por intermedio de un dispositivo con el fin de facilitar una comunicación inalámbrica, es decir un wifi, se activa fácilmente, ya que se hace por medio del nombre del dispositivo anclado, este posee un usuario y contraseña, de igual forma determina algunas características concretas sobre la conexión, una de ellas puede ser delimitar qué tantas personas pueden acceder a la conexión.
          .row.justify-content-center.align-items-center
            .col-lg-8
              .row.justify-content-center   
                .col-auto.d-none.d-lg-block
                  img.img-t.ms-2(src='@/assets/curso/tema1/img12.svg', alt='')       
                .col-lg-11.col-xl-10.col-xxl-11
                  p.me-2.mb-4 Inicialmente solo se encontraban en puntos determinados tales como, cafés, restaurantes locales comerciales con el fin de tarea clientes y vender una experiencia diferente del producto que caracterizaba el punto (café, comida, ropa), con el paso del tiempo este fenómeno se amplió de tal forma que hoy en día es común encontrar un <em>hotspot</em> en cualquier lugar y acceder a una conexión inalámbrica. El ejemplo más claro y común es un smartphone que puede incluso cumplir la función de un <em>hotspot</em>, permitiendo compartir el acceso a internet con otros dispositivos.
            .col-lg-4.mb-4
              img.img-t(src='@/assets/curso/tema1/img10.png', alt='')   
        .row.justify-content-center
          .col-lg-12
            .cajon.color-primario.bg_color1.p-3.mb-4
              p.m-0.ms-2 Se encuentran dos tipos de <em>hotspot</em>, wifi gratuito, por lo general van asociados a un servicio, es decir al momento de ingresar a un establecimiento público o comercial, no se puede acceder con facilidad al wifi, ya que el servicio a internet se permite si el usuario adquiere un servicio del lugar donde este se encuentre, es decir realizar una (compra), wifi portátil, esta conexión se da por intermedio de un dispositivo portátil que tenga servicio de internet el cual es compartido fácilmente, un ejemplo claro es a través de los teléfonos inteligentes o tabletas utilizando un plan de dato.

      .row.justify-content-center(titulo="Formularios")
        .col-lg-4.mb-4.mb-lg-0
          img.img-t(src='@/assets/curso/tema1/img11.png', alt='')  
        .col-lg-8
          p.mb-5 Los formularios interactivos permiten presentar de forma estructurada algún tipo de información, referente a un tema en específico, en él se encuentran una serie espacios los cuales deben ser diligenciados en su totalidad, en muchos casos está predeterminado es decir no se pueden saltar las preguntas ya que si no se responden de manera secuencial es complejo que el sistema le permita continuar con el diligenciamiento.  
          .row.justify-content-center   
            .col-auto.d-none.d-lg-block
              img.img-t(src='@/assets/curso/tema1/img12.svg', alt='')       
            .col-lg-11
              p.me-3.mb-4 Por lo general los formularios no permiten editar información. Un formulario interactivo contiene espacios, para ingresar información, al momento de darle clic en uno de estos campos donde se escribe la información, aparecerá un cuadro en el campo correspondiente. Para la creación de formularios interactivos se pueden crear en diversos programas, formatos o plantillas tales como, PDF, Google Docs, InDesign, entre otros.

    Separador 

    #t_1_2.titulo-segundo.color-acento-botones(data-aos="zoom-out-right")
        h2 1.2 Características de los elementos interactivos 

    p La característica principal del diseño <em>web</em> podría decirse que es la interactividad, ya que por medio de sus interfaces se generan diversas capas de interacción dependiendo si es un sitio <em>web</em> o una aplicación, las animaciones son el estandarte del diseño <em>web</em>, por tal motivo estas deben tener una serie de características que son importantes al crear animaciones y que se podrán ver a continuación:

    .row.justify-content-center.mb-5
      .col-md-4.mb-4.mb-lg-0
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img13.svg')
      .col-md-8.mb-5.mb-md-0(data-aos="fade-left")
        LineaTiempoD.color-acento-botones
          p.text-small.mt-3.mt-lg-0(numero="1" titulo="Sutileza") Esto con el fin de generar una estética y diseño al elemento interactivo, permitiendo que la vista del diseño sea y se vea uniforme, que se perciba como una unidad captando la atención del usuario y su contexto de interfaz <em>web</em>, es decir crear elementos que sean de una misma línea, en textos, colores, formas y demás. 
          
          p.text-small.mt-3.mt-lg-0(numero="2" titulo="Fluidez") Es importante que las animaciones sean fluidas, evitando que la persona que desee interactuar con el contenido se sienta afectado al momento de su interacción y no sea compleja su utilización al momento de la animación. Este es el efecto de cómo pasa de ser una pieza lenta a rápida o viceversa, para tal fin es pertinente realizar una configuración adecuada para el tipo de animación a diseñar, tenga en cuenta siempre la velocidad, su secuencia y el tiempo haciendo referencia al contexto real.
          
          p.text-small.mt-3.mt-lg-0(numero="3" titulo="Informar") Otra característica importante es que la pieza creada sea <b>informativa</b>, dando a conocer el uso de los elementos interactivos de la pieza, por ejemplo, si hay una imagen demasiado grande que ocupe un espacio significativo en la animación es pertinente añadir una flecha, la cual indique que se debe desplazar para el lado que el diseñador determine con el fin brindar información y ser dirigido a una sección diferente con tan solo hacer un clic, así se podrá encontrar un sentido a la creación dentro de la composición, las animaciones brindan información de manera visual a los usuarios, permitiendo reconocer ciertos procesos dentro de la animación.  
          
          p.text-small.mt-3.mt-lg-0(numero="4" titulo="Preciso") Cabe resaltar que no se debe hacer una animación por cada elemento del sitio <em>web</em>, esto primero será muy complejo de entender por parte del usuario y no creará la atención requerida, por ser un contexto saturado. Lo ideal es añadir interfaces de fácil manejo (botones o enlaces), para esta acción es importante determinar los elementos <b>necesarios</b> que realmente deban formar parte de una animación para darle sentido en la página.

          p.text-small(numero="5" titulo="Rapidez") Y no menos importante es la <b>rapidez</b> de carga de la página y su contenido, de lo contrario perderá fácilmente el interés por el contenido, es aquí cuando la experiencia que se desee plasmar en el contenido comienza a ser importante para captar la atención de un público, así que el creador debe asegurar que el diseño planteado se encuentre optimizado para la velocidad, por tal razón al momento de crear los efectos de animación de los elementos interactivos es importante hacerlos fluidos en conjunto y rápidos, debe tener en cuenta en configurarlos con la velocidad indicada permitiendo que los efectos sean notorios por los usuarios, es así como las interacciones comunican un mensaje de forma visual. 
         
    Separador 

    #t_1_3.titulo-segundo.color-acento-botones(data-aos="zoom-out-right")
        h2 1.3 Elementos interactivos de la interfaz de usuario
     
    .bloque-texto-a.color-secundario.p-4.mb-5 
      .row.m-0.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          figure(data-aos="fade-right")
            img.img-t(src='@/assets/curso/tema1/img14.png')
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.m-0 Dentro de la interfaz y su desarrollo es importante antes que nada es ver la usabilidad y funcionalidad de lo que se está creando y de igual forma es importante tener en cuenta las siguientes pautas:
             
    .bg_fondo2
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          .bg_1.p-4
            figure.mb-4.mt-3
              img.img-t(src='@/assets/curso/tema1/img15.svg')
            p <b>Desarrollar un creativo diseño visual,</b> con el fin de generar una comunicación asertiva de interfaz, determinar un conjunto de colores preferiblemente tenues y complementarios de contraste logrando la personalización de las preferencias de color.
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
          .bg_2.p-4
            figure.mb-4.mt-3
              img.img-t(src='@/assets/curso/tema1/img16.svg')
            p <b>La manera en cómo se ubican los componentes</b> es determinante ya que es de la forma en que se pueden ubicar en el contexto, entre más clara y limpia sea la localización de los componentes facilitará la interfaz con el usuario.
        .col-lg-4(data-aos="fade-left")
          .bg_3.p-4
            figure.mb-4
              img.img-t(src='@/assets/curso/tema1/img17.svg')
            p <b>Determinante la brevedad de los textos,</b> estos deben ser precisos y objetivos bloques pequeños, de igual forma el lenguaje coherente a la interfaz, de igual forma claro y determinante.

      .row.justify-content-center.align-items-center
        .col-lg-3.mb-4.mb-lg-0
          img.img-t(data-aos="zoom-in")(src='@/assets/curso/tema1/img18.svg', alt='')    
        .col-lg-9
          p En el diseño interactivo de interfaces, todos los elementos que fomenten la realimentación son fundamentales, ya que el usuario debe estar informado en cada momento de las acciones que realiza, si el sistema tarda más tiempo de lo normal en procesar un comando se debe mostrar un mensaje al usuario informándole del proceso que está teniendo lugar para no provocarle incertidumbre. 
          .row.justify-content-center    
            .col-auto.d-none.d-lg-block.p-0
              img.img-t(src='@/assets/curso/tema1/img12.svg', alt='')       
            .col-lg-11
              p(data-aos="fade-down") <b>Asimismo, es necesario informar de los errores, efectos y confirmación de acciones que se lleven a cabo en cada momento, la realimentación debe ser fácil de leer y entender. Para ello, se debe fomentar su consistencia y el almacenamiento de información adicional para asegurar el <em>feedback</em>.</b>

      Separador 

      #t_1_4.titulo-segundo.color-acento-botones(data-aos="zoom-out-right")
          h2 1.4 Etapas de un producto multimedia interactivo

    .row.mb-5
      .col-lg-12
        figure(data-aos="fade-down")
          img.img-t(src='@/assets/curso/tema1/img19.png')
    .row.justify-content-center
      .col-lg-10
        .bg_4.p-4
          p En este aparte se mencionarán las etapas a seguir para la construcción de un producto de multimedia interactivo, para ello es importante determinar, planteamiento o análisis, diseño, desarrollo, evaluación, documentación e implementación:

    .row.my-5
      .col-auto
        .bg_5.p-3
          h4.text-white.m-0 Planteamiento o análisis

    .row.justify-content-center.mb-5
      .col-md-4.mb-4.mb-lg-0
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img20.svg')
      .col-md-8.mb-5.mb-md-0(data-aos="fade-left")
        LineaTiempoD.color-acento-botones
          p.text-small.mt-3.mt-lg-0(numero="1" titulo="Análisis de necesidades") Se requiere establecer el objetivo y alcance general, tipos de contenidos, tiempos de ejecución y costos. 
          
          p.text-small.mt-3.mt-lg-0(numero="2" titulo="Análisis de usuarios") Se debe considerar el rango de edad al cual va dirigido el contenido, nivel de educación, por intermedio de una encuesta se puede saber qué tanto conocen acerca de tecnología con el fin de darle el enfoque adecuado al contenido.
          
          p.text-small.mt-3.mt-lg-0(numero="3" titulo="Análisis de contenidos") Estos requieren ser claros y objetivos, ya determinados y analizados es importante revisar sus características con el fin de que estos sean acordes a lo que plantea y que tecnología es la más adecuada para su puesta en marcha brindando la interfaz y su funcionalidad del producto de multimedia como resultado final.
          
          p.text-small.mt-3.mt-lg-0(numero="4" titulo="Análisis de recursos") Se deben tener en cuenta tanto los recursos tecnológicos (preferiblemente contar con la tecnología adecuada para el desarrollo de contenidos interactivos) y los humanos (dependiendo de su conocimiento se podrán dividir tareas por áreas, diseño, video, audio, texto, analistas, programadores, caricaturistas, guionistas, entre otros).

    .bg_fondo3
      .row.mb-5
        .col-lg-12
          .cajon.color-primario.bg_color1.p-3.mb-4
            p.m-0.ms-2 <b>Nota: <i>dentro de la creación podrán surgir una serie de preguntas las cuales apoyarán mucho al momento de desarrollar el contenido como:</i></b> ¿Propósito del proyecto?, ¿A quién estará dirigido?, ¿Cuál será el tema central?, ¿Elementos multimedia para su desarrollo?, ¿Qué <em>hardware</em> se necesita?, ¿Qué programa de edición es el más apropiado?, entre muchas otras.

      .row.mb-4
        .col-auto
          .bg_5.p-3
            h4.text-white.m-0 Diseño

      p.mb-5 Ya con el planteamiento claro en todo sentido (tecnologías, contenido, público objetivo) se da paso al diseño, definiendo las tareas puntuales para la interfaz, creación de funcionalidades, creación de contenidos y prototipo, y lo más importante se deben definir los objetivos específicos del proyecto. Se debe tener en cuenta en el diseño:

      .row.mb-5
        .col-lg-7
          .bg_slyder.p-5.mb-5
            SlyderA(tipo="b").color_slyder-a_botones
              .row.justify-content-center
                .col-lg-9.align-self-end
                  h4 Diseño de la interfaz
                  p En esta etapa se determina la estructura de los contenidos, se realizan bocetos, se crean los <em>storyboards</em>, se hace una bitácora almacenando todo lo pertinente del diseño y su interfaz.        
                .col-lg-3.mt-3
                  figure
                    img.img-t.mx-auto.d-none.d-lg-block(src='@/assets/curso/tema1/img21.svg', alt='AvatarTop')

              .row.justify-content-center
                .col-lg-9.align-self-end
                  h4 Diseño de los contenidos
                  p Se deben determinar los tipos de fuentes, colores, elementos, iconos, gráficos, imágenes, sonidos, audio, vídeo, animación.
                .col-lg-3.mt-3
                  figure
                    img.img-t.mx-auto.d-none.d-lg-block(src='@/assets/curso/tema1/img22.svg', alt='AvatarTop')

              .row.justify-content-center
                .col-lg-9.align-self-end
                  h4 Diseño de la interactividad
                  p Se crean los mapas de navegación, se diseñan las animaciones, se plantea como debe ser la interacción con usuarios y funcionalidad de los contenidos.
                .col-lg-3.mt-3
                  figure
                    img.img-t.mx-auto.d-none.d-lg-block(src='@/assets/curso/tema1/img23.svg', alt='AvatarTop')

              .row.justify-content-center
                .col-lg-9.align-self-end
                  h4 Diseño del estilo y redacción
                  p Se elige la presentación final su estilo, se revisa muy detalladamente la redacción, se plasman los contenidos gráficos, se crean los botones, y se determinan los menús.   
                .col-lg-3.mt-3
                  figure
                    img.img-t.mx-auto.d-none.d-lg-block(src='@/assets/curso/tema1/img24.svg', alt='AvatarTop')
        .col-lg-5
          figure
            img.img-t(src='@/assets/curso/tema1/img25.svg', alt='')

    .row.align-items-center.mb-4
      .col-lg-4.mb-4.mb-lg-0
        figure
          img.img-t(src='@/assets/curso/tema1/img26.svg', alt='')
      .col-lg-8
        .row.mb-4
          .col-auto
            .bg_5.p-3
              h4.text-white.m-0 Desarrollo
        p.mb-5 Con la planeación y el diseño determinado se procede a darle estructura a la creación de temas.
        .row.mb-4
          .col-auto
            .bg_5.p-3
              h4.text-white.m-0 Evaluación
        p.mb-5 Todo producto requiere de un proceso de ensayos y evaluación (prueba – error), esto con el fin de esperar <em>feedback</em> para saber que se mejora para el lanzamiento.
        .row.mb-4
          .col-auto
            .bg_5.p-3
              h4.text-white.m-0 Documentación
        p.mb-5 Es importante documentar cada paso del proceso, con el fin de plasmarlo y en caso de olvidar algún paso o procedimiento recurrir a la documentación, de igual forma permite realizar algún tipo de mejora de ser necesario.
        .row.mb-4
          .col-auto
            .bg_5.p-3
              h4.text-white.m-0 Implementación
        p Es la fase final del proceso de creación y la fase inicial de la puesta en marcha buscando conseguir el propósito inicialmente planteado.

    p Con la información de los ítems anteriores, el paso a seguir es realizar las etapas del proyecto interactivo, centrándose en una idea y comenzando a planear, apoyándose en las posibles preguntas de planteamiento para el desarrollo de contenidos, hasta la realización del producto. 


      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
