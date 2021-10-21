<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Técnicas de ventas

    .row.justify-content-around.align-items-center.mb-5.fnd-5
      .col-lg-10.align-self-center
        .row.mb-5.align-self-center(data-aos="fade-left")
          .col-lg-6.align-self-center.order-2.order-lg-1 
            p Son herramientas metodológicas que se han desarrollado con el fin de profesionalizar las ventas y marcar la hoja de ruta en la interacción con los clientes. Si bien, no son camisa de fuerza y cada vendedor es libre de decidir incorporarlas o no, se sugiere utilizarlas con el fin de tener procesos de ventas mejor estructurados, a continuación, se presentan algunos elementos importantes. 
          .col-lg-6.align-self-center.order-1.order-lg-2 
            figure
              img.img-350(src='@/assets/tema6/img-1.svg')
    
    p A continuación, se destaca la importancia de las técnicas de ventas. 
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.fnd-6  
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          .tarjeta.fnd-7
            img.img-100(src='@/assets/tema6/img-2.svg' alt='AvatarTop')
            .p-4
              p Al ser utilizadas por un vendedor, se demuestra mayor especialización en su quehacer.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          .tarjeta.fnd-7
            img.img-100(src='@/assets/tema6/img-3.svg' alt='AvatarTop')
            .p-4
              p Permiten enfocar mejor el proceso comercial.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          .tarjeta.fnd-7
            img.img-100(src='@/assets/tema6/img-4.svg' alt='AvatarTop')
            .p-4
              p Desde su concepción, están diseñadas para acelerar el cierre de ventas.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          .tarjeta.fnd-7
            img.img-100(src='@/assets/tema6/img-5.svg' alt='AvatarTop')
            .p-4
              p La mayoría de las técnicas de ventas, permiten tener procesos más enfocados en el cliente, como centro de la estrategia comercial.

  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    #t_6_1.titulo-segundo
      h2 6.1 Técnicas de ventas más utilizadas
    p Existen muchos tipos de técnicas de ventas, algunas están diseñadas a partir de variables claves del proceso, y otras a partir del enfoque, no obstante, no hay una mejor que otra, ya que la selección de la más idónea a utilizar debe realizarse teniendo en cuenta: cómo es el modelo comercial de la empresa, con qué tipo de clientes se está tratando y cuál es el tipo de portafolio a ofrecer. Las más conocidas en el mercado son:

    .row.mb-5.fnd-2-(data-aos="fade-right")
      .col-lg-4.align-self-center
        figure
          img.img-c.img-400(src='@/assets/tema6/img-6.png')    
      .col-lg-8.img-c.pll2
        p El modelo de Características, ventajas y beneficios, conocido como CBV en español o FAB (features, advantages and benefits en inglés), es conocido por ser una de las técnicas más sencillas y más prácticas. 
        p Dicho modelo consiste en aplicar con el cliente cada una de las variables del acrónimo, porque de esta manera podrá dar el vendedor un panorama muy amplio, iniciando con el producto y terminando con la descripción de las necesidades que satisface. A continuación se muestran algunos elementos importantes en este modelo.
                                
    .row.mb-5
      .col-md-6.mb-5.mb-md-0

        LineaTiempoD.color-primario
          p.text-small(numero="1" titulo="Características") Se describe el bien o servicio que se está ofreciendo, aquí se da respuesta al ¿Qué?.
          
          p.text-small(numero="2" titulo="Ventajas") Consiste en narrar (o demostrar si es posible), siempre desde preceptos éticos, ¿Por qué el producto que se está ofreciendo es mejor que otras opciones que existen en el mercado?, se responde al <b>¿Por qué es mejor?</b>.
          
          p.text-small(numero="3" titulo="Beneficios") El interrogante a resolver es el ¿Para qué?, es decir, que es aquello (tangible o intangible) que obtendrá la persona o empresa que adquiera el producto.
      .col-md-6.mb-5.mb-md-0.align-self-center(data-aos="fade-left")
        figure
          img.img-c.img-400(src='@/assets/tema6/img-7.svg')             
    
    p La técnica de ventas de Características, ventajas y beneficios, se sugiere que sea utilizada en situaciones donde el producto que se está ofreciendo tiene mucha competencia en el mercado. Asimismo, el uso de este modelo implica que el vendedor tenga un conocimiento detallado del portafolio de la empresa, conocer lo que ofrece la competencia y lograr identificar cuáles son las necesidades del cliente.

    p A continuación, se plantea un ejemplo, de la aplicación del modelo. El vendedor del Contact Center, tiene por fin, venderle un celular a un cliente, aplicando el modelo CVB, tendría:

    .row.mb-5
      .col-lg-6.mb-5.mb-md-0.align-self-center(data-aos="fade-right")
        figure
          img.img-c.img-400(src='@/assets/tema6/img-8.svg')     

      .col-lg-6.mb-5.mb-md-0.align-self-center
        hr 
        .crd_02
          .crd_02__icon.mx-4
            .cc1
              h4.cc3 1
          .crd_02__txt
            h4 Características
            p Es un celular de la marca XXX, de 14 pulgadas, con dos cámaras de 10 Megapíxeles cada una, almacenamiento de 5 Gigas, conexión WIFI.
        hr 
        .crd_02
          .crd_02__icon.mx-4
            .cc1
              h4.cc3 2
          .crd_02__txt
            h4 Ventajas
            p Tiene la cámara con mayor resolución del mercado, tiene garantía de un año (que otros no tienen), tiene un seguro anti robo por seis meses, tiene aplicaciones de chat y música incluidas sin costo adicional.
        hr 
        .crd_02
          .crd_02__icon.mx-4
            .cc1
              h4.cc3 3
          .crd_02__txt
            h4 Beneficios
            p Podrá tomar las mejores fotos que usted se pueda imaginar, tiene tanta memoria que no tendrá que borrar fotos, podrá reproducir la música de sus cantantes favoritos y tener acceso al chat cuando quiera.
        hr 

    h3 Atención, Interés, Deseo, Acción.

    p El modelo de Atención, interés, deseo y acción, conocido como AIDA en español o AIDA (attention, interest, desire and action en inglés), también se ha denominado la técnica de los “Estados Mentales”, porque acude a la emocionalidad en su discurso. 
    p.mb-5 El acróstico, Atención, Interés, Deseo y Acción, define cuál es la estructura del modelo. A continuación, se describen cada uno de ellos.

    .row.mb-5
      .col-md-6.mb-5.mb-md-0
        LineaTiempoD.color-primario
          p.text-small(numero="1" titulo="Atención") Se deben realizar las tácticas o actividades necesarias para lograr que la marca y el producto sean visibles para el cliente potencial. Acá, la clave es la comunicación, es decir, sentar las condiciones para que se cree el canal con el prospecto.
          
          p.text-small(numero="2" titulo="Interés") El objetivo es despertar en el cliente potencial la conciencia sobre el producto que se está ofreciendo, que él quiera saber más.
          
          p.text-small(numero="3" titulo="Deseo") El reto del vendedor, se centra en convertir en necesario y/o aspiracional el producto, alentar al cliente a que quiera adquirir el portafolio que se está ofreciendo.

          p.text-small(numero="4" titulo="Acción") Es concretar el proceso, es decir, lograr el cierre de la venta, hacer que el receptor del mensaje (nuestro cliente prospecto) haga lo que espera el vendedor, que no es más que comprar el producto.          
      .col-md-6.mb-5.mb-md-0.align-self-center(data-aos="fade-left")
        figure
          img.img-c.img-400(src='@/assets/tema6/img-9.png')      

    p Ahora, con un ejemplo, se analizará cómo el agente de Contact Center, debe realizar la venta de un seguro de vida, aplicando el modelo AIDA. Se plantea el siguiente discurso de ventas:


    .row.mb-5
      .col-lg-6.mb-5.mb-md-0.align-self-center(data-aos="fade-right")
        figure
          img.img-c.img-400(src='@/assets/tema6/img-10.svg')     

      .col-lg-6.mb-5.mb-md-0.align-self-center
        hr 
        .crd_02
          .crd_02__icon.mx-4
            .cc1
              h4.cc3 1
          .crd_02__txt
            h4 Atención
            p Señor, ¿se ha preguntado que pasaría con su familia si lastimosamente e inesperadamente usted falleciera? O ¿Si de pronto sufriera algún tipo de accidente que lo dejara con alguna secuela y afectará su desempeño laboral?
        hr 
        .crd_02
          .crd_02__icon.mx-4
            .cc1
              h4.cc3 2
          .crd_02__txt
            h4 Interés
            p Nadie tiene la vida comprada, ¿sabe usted que los seguros de vida hoy en día son la mejor opción para planear el futuro para sus seres queridos?
        hr 
        .crd_02
          .crd_02__icon.mx-4
            .cc1
              h4.cc3 3
          .crd_02__txt
            h4 Deseo
            p Y si le digo que a través de su nómina usted podrá asegurarse a usted y a su familia, con un costo tan bajo que ni lo percibirá.
        hr 
        .crd_02
          .crd_02__icon.mx-4
            .cc1
              h4.cc3 4
          .crd_02__txt
            h4 Acción
            p Indíqueme si está de acuerdo con esta oferta y si está dispuesto a que usted y su familia estén protegidos por tan solo COP $20.000 quincenales, la compañía XYZ Ltda., le da la seguridad que a partir de este momento usted tendrá el servicio, aunque la deducción solo será efectiva el próximo mes. Cuénteme, ¿quiénes desean que queden como sus beneficiarios?
        hr                 

    p.mb-5 En el ejemplo anterior, se evidencia, cómo el agente logró captar la atención del cliente potencial con una pregunta que lo puso a pensar, y a partir de ahí establece un discurso de interés, deseo y acción centrado en la protección ante imprevistos y entregando como beneficio la protección de la familia.

    h3.mb-5 Situación, Problema, Implicación, Necesidad.
    p.mb-5 El modelo de Situación, problema, implicación, necesidad más conocido como SPIN (<em>Situation, Problem, Implication</em> y <em>Need pay off</em> por sus siglas en inglés), es una táctica de ventas interesante porque se basa en la resolución de problemas al cliente, y esto es bastante lógico si se parte del concepto que las necesidades están creadas y que justamente el rol del mercadeo y las ventas es satisfacerlas. Nuevamente, las preguntas aparecen como la clave para la buena aplicación del modelo. Conozca a continuación la descripción de cada una de las etapas.


    .row.mb-5
      .col-md-6.mb-5.mb-md-0
        LineaTiempoD.color-primario
          p.text-small(numero="1" titulo="Situación") Se debe obtener información del cliente para determinar las condiciones que lo rodean.
          
          p.text-small(numero="2" titulo="Problema") El centro de este momento es identificar ¿Cuál es la dificultad que el cliente afronta?, es decir ¿Cuál es la situación que está presentando?.
          
          p.text-small(numero="3" titulo="Deseo") El reto del vendedor, se centra en convertir en necesario y/o aspiracional el producto, alentar al cliente a que quiera adquirir el portafolio que se está ofreciendo.

          p.text-small(numero="4" titulo="Acción") El foco de este momento, es indagar sobre la importancia que tiene para el cliente este acontecimiento, qué pasa si se resuelve y qué efectos tendría si no se da respuesta al problema que enfrenta. <br> Un buen tip para este momento es preguntar por las consecuencias, esta palabra llevará al cliente a pensar con detenimiento sobre la necesidad de dar solución.

          p.text-small(numero="5" titulo="Necesidad de solución") Se deberán formular preguntas que sugieran al cliente cómo el producto que se está ofreciendo puede satisfacer la necesidad que se tiene en el momento. Se debe presentar el producto como la solución.          
  
      .col-md-6.mb-5.mb-md-0.align-self-center(data-aos="fade-left")
        figure
          img.img-c.img-400(src='@/assets/tema6/img-11.png')      

    p Para dar más claridad al tema se analizará  un caso hipotético y se  aplicará el modelo SPIN. Este ejercicio se orienta, en el caso de un agente de Contact Center, cuyo servicio a ofrecer es un servicio de internet en fibra óptica, el cual es muy bueno pero con precios altos.

    .row.mb-5
      .col-lg-6.mb-5.mb-md-0.align-self-center(data-aos="fade-right")
        figure
          img.img-c.img-400(src='@/assets/tema6/img-12.svg')     

      .col-lg-6.mb-5.mb-md-0.align-self-center
        hr 
        .crd_02
          .crd_02__icon.mx-4
            .cc1
              h4.cc3 1
          .crd_02__txt
            p En la situación actual, el cliente tiene un servicio de internet en cobre, una tecnología un tanto obsoleta y que no ofrece anchos de banda superiores a 30 Mbps. Preguntas que haría el vendedor: observe cómo utiliza las preguntas para conocer al cliente. ¿Cuál es su ocupación actual? ¿Para qué utiliza el servicio de internet? ¿Cuántas horas al día requiere tener conectividad a internet en su domicilio?
        hr 
        .crd_02
          .crd_02__icon.mx-4
            .cc1
              h4.cc3 2
          .crd_02__txt
            p El problema es que el cliente tiene actualmente que trabajar desde casa y su conexión a internet no es buena, por lo que su jefe en varias ocasiones, le ha solicitado revisar mejorar este servicio, dado que con frecuencia se desconecta de las reuniones. Preguntas que haría el vendedor: ¿ha fallado su servicio de internet con frecuencia? ¿Cree que la poca disponibilidad del servicio de internet impacta negativamente su productividad?
        hr 
        .crd_02
          .crd_02__icon.mx-4
            .cc1
              h4.cc3 3
          .crd_02__txt
            p La implicación es que, si el señor no resuelve su situación, su jefe, puede pensar que realmente el problema no es del internet, sino de la actitud del empleado por no querer resolver su situación. Pregunta: ¿Se ha puesto a pensar que el internet es ahora una necesidad y no un lujo?
        hr 
        .crd_02
          .crd_02__icon.mx-4
            .cc1
              h4.cc3 4
          .crd_02__txt
            p La necesidad para solucionar, está enfocada en adquirir un servicio de internet en fibra óptica que le ofrezca mayor estabilidad en el servicio, a través de mayores anchos de banda. ¿Y si adquiere el servicio de internet en fibra, con el que no volverá a tener caídas del servicio de forma inesperada?
        hr                 

    h4.mb-5 Simple, invaluable, alineado con sus intereses, de prioridad.
    p.mb-5 La técnica de ventas <em>Simple</em>, invaluable, alineado con sus intereses, de prioridad más conocida como SNAP (en inglés <em>Simple, Invaluable, Align and Priority</em>), es un modelo que se enfoca en la efectividad, porque se centra en “ponerse en la camiseta del cliente” y está dirigido principalmente a las personas que tienen la facultad de decidir si hacen la compra, a continuación se presentan los elementos importantes: 

    .row.mb-5
      .col-md-6.mb-5.mb-md-0
        LineaTiempoD.color-primario
          p.text-small(numero="1" titulo="Simple") Hace referencia a buscar la forma de que todos los procesos asociados a la venta sean claros y fáciles.
          
          p.text-small(numero="2" titulo="Invaluable") Entregarles algo que los clientes valoran mucho, puede ser el servicio o los procesos.
          
          p.text-small(numero="3" titulo="Alineado con sus intereses") Este punto debe asegurar un claro conocimiento del cliente y de sus necesidades, saber que lo que se está ofreciendo es lo que el cliente necesita.

          p.text-small(numero="4" titulo="Prioridad") Consiste en hacer comparaciones con el cliente, ayudarle a diferenciar entre lo importante y lo prioritario asociado a las características que requiere y que necesita del servicio. En este proceso, se valoran la sinceridad y la flexibilidad del vendedor.         
  
      .col-md-6.mb-5.mb-md-0.align-self-center(data-aos="fade-left")
        figure
          img.img-c.img-400(src='@/assets/tema6/img-13.png')    

    p A partir del siguiente ejemplo, quedará más clara la comprensión del modelo SNAP, un agente de Contact Center vende tarjetas de crédito, y desea aplicar la técnica.

    .row.mb-5
      .col-lg-6.mb-5.mb-md-0.align-self-center(data-aos="fade-right")
        figure
          img.img-c.img-400(src='@/assets/tema6/img-14.svg')     

      .col-lg-6.mb-5.mb-md-0.align-self-center
        hr 
        .crd_02
          .crd_02__icon.mx-4
            .cc1
              h4.cc3 1
          .crd_02__txt
            h4 Relacionado con lo simple
            p El vendedor le pregunta al cliente potencial, ¿cuál es su profesión? Al escuchar que es docente de música, plantea cómo abordar la venta, sin centrarse en los temas financieros y enfocándose en los beneficios que para esta persona traerá tener una tarjeta de crédito.
        hr 
        .crd_02
          .crd_02__icon.mx-4
            .cc1
              h4.cc3 2
          .crd_02__txt
            h4 Descuentos
            p En este sentido, para hacerlo invaluable, el agente le comenta al prospecto que con esa tarjeta puede acceder a descuentos preferenciales a la mayoría de eventos artísticos y musicales que se realizan en su ciudad por lo que este argumento sensibiliza bastante al cliente.
        hr 
        .crd_02
          .crd_02__icon.mx-4
            .cc1
              h4.cc3 3
          .crd_02__txt
            h4 Alineado con los intereses          
            p El agente de Contact Center, le indica que tendrá débito automático de su cuota de manejo y que tendrá filas preferenciales en los bancos de la entidad.
        hr 
        .crd_02
          .crd_02__icon.mx-4
            .cc1
              h4.cc3 4
          .crd_02__txt
            h4 Prioridad          
            p El agente le indica al cliente que la mejor opción para él, es la tarjeta clásica donde el cupo es bajo, por lo que no le afectará mucho su capacidad de endeudamiento. Además, como entiende los horarios debido a su labor docente, le informa que le recogerán los documentos donde él indique para gestionar el proceso de adquisición.
        hr                 

    separador
    #t_6_2.titulo-segundo
      h2 6.2 Objeciones

    .row.mb-4.fnd-4.align-self-center(data-aos="fade-left")
      .col-lg-7.img-c.pll.order-2.order-lg-1 
        p Es importante tener presente que no todo en el proceso comercial es tan lineal, dado que, al interactuar con el cliente potencial, éste probablemente manifieste no entender lo que se le está explicando, tener dudas o incluso, requerir más información, es por ello que surgen las objeciones.

      .col-lg-5.align-self-center.order-1.order-lg-2 
        figure
          img.img-400(src='@/assets/tema6/img-15.svg')

    p Existen muchas interpretaciones de lo que es una objeción en ventas. Algunos autores consideran que hacen parte del proceso normal, sin embargo, hay otros que indican que la presencia de objeciones puede denotar desconocimiento por parte de alguno de los dos agentes (vendedor o cliente); a pesar de no existir consenso en por qué se dan, si es claro, que es un tema clave que un vendedor debe conocer.
    p.mb-5 A continuación, se enuncian tres definiciones de objeciones:

    .row.mb-5.justify-content-around.align-items-center
      .col-md-6.mb-5.mb-sm-0

        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | La Real Academia de la Lengua Española, (RAE) (2021), referencia que la objeción es la “razón que se propone o dificultad que se presenta en contra de una opinión o designio, o para impugnar una proposición”.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Según      Ardila, E. (1984), “las objeciones son cualquier acto del comprador que de forma real o aparente interrumpe la labor del vendedor” (p. 9).
          li 
            .lista-ol--cuadro__vineta
              span 3
            | En sentido práctico, son los “peros” que expone el cliente potencial al vendedor durante el proceso de la venta.
          
    p Las objeciones desde la perspectiva comercial, al igual que la mayoría de temas vistos, no tienen una única orientación, sin embargo, hay consenso en que existen a nivel general, dos tipos, los cuales se describen a continuación:


  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.fnd-8.mb-5  
    .row.justify-content-around.align-items-center.mb-5
      .col-lg-8.align-self-center
        .row.justify-content-around  
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              .tarjeta.fnd-7
                img.img-100(src='@/assets/tema6/img-v.svg' alt='AvatarTop')
                .p-4
                  h4.text-center Objeciones verdaderas
                  p.text-center Se presentan cuando el cliente está realmente interesado en el producto, sin embargo, manifiesta inquietudes o dudas respecto a si la oferta realmente satisface las necesidades que él tiene, por lo que busca canalizarlas a través del vendedor.

          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              .tarjeta.fnd-7
                img.img-100(src='@/assets/tema6/img-f.svg' alt='AvatarTop')
                .p-4
                  h4.text-center Objeciones falsas         
                  p Se dan cuando el cliente no está interesado en el producto, y lo que busca son pretextos para decirle que no al vendedor.
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5
    p Navarro, M. (2012), en su libro Técnicas de Ventas, propone los siguientes pasos para el manejo correcto de objeciones:

    .row.mb-5.justify-content-around
      .col-md-6.col-lg.t-tabla.p-4(data-aos="slide-up")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/tema6/img-16.svg' alt='AvatarTop')
        h4.text-center Escuchar
        p.text-center No emitir juicios apresurados lo que dice el cliente.

      .col-md-6.col-lg.t-tabla.p-4(data-aos="slide-down")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/tema6/img-17.svg' alt='AvatarTop')
        h4.txt-2.text-center Anticiparse
        p.txt-2.text-center  Si el cliente percibe empatía por parte del vendedor, sentirá confianza para continuar el proceso de negociación.

      .col-md-6.col-lg.t-tabla.p-4(data-aos="slide-up")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/tema6/img-18.svg' alt='AvatarTop')
        h4.text-center Comprender
        p.text-center  Si el cliente percibe empatía por parte del vendedor, sentirá confianza para continuar el proceso de negociación.

      .col-md-6.col-lg.t-tabla.p-4(data-aos="slide-up")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/tema6/img-19.svg' alt='AvatarTop')
        h4.txt-2.text-center Refutar
        p.txt-2.text-center Respeto, paciencia, inteligencia y argumentos o son la clave para responder objeciones.


    figcaption.mb-5 Nota. Adaptado de Navarro (2012).

    p.mb-5 De acuerdo con lo anterior, para realizar un manejo adecuado de las objeciones, se propone, ver figura 4: 


  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.fnd-9.mb-5  
    .row.justify-content-around.align-items-center
      p.r-n Figura 4. Herramientas para el manejo de objeciones
      .col-lg-10.align-self-center
        .row.justify-content-around
          img(src='@/assets/tema6/img-20.svg',alt='AvatarTop' )  









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

<style lang="sass" scoped></style>
