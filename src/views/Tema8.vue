<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 La venta telefónica

    .row.justify-content-around.align-items-center.mb-5.fnd-12
      .col-lg-8.col-md-10.col-sm-10.align-self-center
        .row.justify-content-around
          figure
              img.mb-md-4(src='@/assets/tema8/img-1.svg')

    .row.justify-content-around.align-items-center.mb-5.align-self-center
      .col-lg-6
        p Un agente de Contact Center y canales BPO realiza sus actividades usualmente desde un centro de llamadas, debido a que este ha sido por excelencia el sitio donde se desempeña la labor, por ello se hace necesario conocer no solo herramientas comerciales básicas como las vistas previamente (técnicas de ventas y modelos de negociación), sino además tener presente que las transacciones que se realizan en este tipo de escenarios tienen características propias, no solo por el hecho que vendedor y cliente o están cara a cara, sino que además están en medio herramientas tecnológicas que deben saberse usar en beneficio de la labor. Con este contexto, a continuación, se abordará la venta telefónica.
      .col-lg-6.align-self-center
        .bloque-texto-b.color-secundario.p-4.fnd
          .bloque-texto-b__texto
            i.fas.txt.fa-quote-left
            p.text-bold La venta telefónica también conocida como Televentas o Telemercadeo, es aquel tipo de venta a distancia que se realiza a través de medios tecnológicos, es decir, donde no se da un contacto cara a cara con el cliente, dado que se utilizan otros medios de comunicación
            i.fas.txt.fa-quote-right    
    br    
    #t_8_1.titulo-segundo
      h2 8.1 Aspectos a tener en cuenta en la venta telefónica 
    .row.justify-content-around.align-items-center.mb-5.align-self-center
      .col-lg-6
        p En la venta telefónica, el principio del éxito se basa en lograr ganar la atención del prospecto, es decir, que la persona que está al otro lado de la llamada dedique el tiempo necesario para escuchar la oferta que se desea entregar, sin embargo, esto no es lo único porque si se tiene la atención, pero no se dan buenos argumentos, ¿de qué sirve? La respuesta es que va a ser un buen comienzo pero un triste final.
        p Elementos como: saludar, llamar a la persona por su nombre, evitar los silencios antes preguntas del cliente, limitar el uso de muletillas, variar de forma sutil el tono de la voz para evitar la monotonía y el desinterés son elementos mínimos a considerar.      
        p Piqueras, C. (2020), en El gran libro de la venta telefónica, referencia algunas técnicas para aplicar en la venta telefónica, las cuales se enumeran a continuación:
      .col-lg-6
        figure
          img.img-350.mb-md-4(src='@/assets/tema8/img-2.svg')

    .row.justify-content-around.align-items-center.mb-5.fnd-10.py-5
      .col-lg-10.align-self-center
        .row.justify-content-around
          LineaTiempoB.color-acento-botones.mb-5(:datos="datosLineaTiempoB")

    p Adicional a lo anterior, hay otro factor clave, la voz, al igual que la huella digital la voz es única y es la herramienta innata del vendedor, transmite emociones, tiene la capacidad de generar interés y persuasión. Por ello se debe tener en cuenta el lenguaje paraverbal (elementos no verbales de la voz); en este sentido, un agente de ventas debe tener en cuenta: 
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.fnd-10 
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          .tarjeta.fnd-7
            img.img-100(src='@/assets/tema8/img-12.svg' alt='AvatarTop')
            .p-4
              h4.text-center El timbre 
              p.text-center Está asociado a la intensidad y la frecuencia. 

      .col-md-6.col-lg-3.mb-5.mb-lg-0
        .tarjeta-avatar
          .tarjeta.fnd-7
            img.img-100(src='@/assets/tema8/img-13.svg' alt='AvatarTop')
            .p-4
              h4.text-center La velocidad
              p.text-center Si es muy rápido puede ser molesto y transmitir desinterés por el cliente, si es muy despacio va a transmitir debilidad y genera desinterés en el cliente.

      .col-md-6.col-lg-3.mb-5.mb-lg-0
        .tarjeta-avatar
          .tarjeta.fnd-7
            img.img-100(src='@/assets/tema8/img-14.svg' alt='AvatarTop')
            .p-4
              h4.text-center La potencia 
              p.text-center Respirar, tener sonoridad.

      .col-md-6.col-lg-3.mb-5.mb-lg-0
        .tarjeta-avatar
          .tarjeta.fnd-7
            img.img-100(src='@/assets/tema8/img-15.svg' alt='AvatarTop')
            .p-4
              h4.text-center La entonación
              p.text-center La variación en el tono de la voz al hablar. En el caso del vendedor es importante resaltar con el cliente las palabras claves: la marca, las ventajas y todo lo que represente beneficios para el cliente.
    .row.mb-5.fnd-2-.f-2(data-aos="fade-left")
      .col-lg-4.align-self-center
        figure
          img.img-c.img-400(src='@/assets/tema8/img-16.svg')    
      .col-lg-8.img-c.pll2
        p Lo anterior, muestra que vender telefónicamente tiene su estructura y que, por ende, el agente de ventas telefónicas, debe prepararse muy bien para realizar el proceso, ya que no solo debe conocer de ventas, ni solo saber del portafolio de la empresa, sino que además debe tener muy buena comunicación para lograr mantener conectada a una persona que está en otro contexto. 
        p Dicho de otra forma, se debe generar interés para poder entablar la conservación y gestionar así la llamada.

  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    separador
    #t_8_2.titulo-segundo
      h2 8.2 El guion telefónico 
    p.mb-5 El guion también denominado script, es un documento o guía entregado por la empresa, para orientar al vendedor en la conversación con el cliente. El guion detalla los pasos secuenciales sugeridos para desarrollar el proceso comercial. No obstante, la aplicabilidad del guion varía según el tipo de cliente y el modelo de ventas de la empresa contratante, dado que cada empresa según sus tipos de clientes, define si este puede modificarse o si debe trabajarse tal cual.

    h3 Consideraciones con el uso del guion 

    .row.mb-5(data-aos="fade-left")
      .col-lg-6
        p Si bien el guion es una guía, que de modo general es la recopilación de consideraciones necesarias en la interacción con el cliente, deben tenerse algunas apreciaciones respecto al uso del mismo, ya que dado que, aunque éstos plantean una secuencia lógica desde el punto de vista comercial, como se mencionó previamente, ésta puede modificarse según como se desarrolla la conversación. 
        .row.py-5.bv.px-4 
          p <b>Los elementos sugeridos para un script son:</b> saludo, presentación del agente e indicación de la empresa de la cual se contacta, <b>en Colombia adicional se sugiere (por temas de protección de datos: Ley 1581 de 2012), referenciar brevemente a través de qué medio se obtuvieron los datos para contactar a la persona, referenciar el motivo de la llamada, desarrollar la llamada </b>(según sea el asunto), validar que la información sea clara y despedirse. 
      .col-lg-6     
        figure
          img.img-c.img-400(src='@/assets/tema8/img-17.png')    


    p.mb-5 Con base en lo anterior, se podrían listar los siguientes pasos secuenciales de un guion:
    .row.mb-5(data-aos="fade-right")
      .col-lg-6     
        figure.mb-5
          img.img-c.img-400(src='@/assets/tema8/img-18.svg') 

      .col-lg-6.align-self-center

        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Presentarse: indicando claramente la empresa que se está representando y el nombre- apellidos del agente.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Acercarse: tratar de generar cercanía, preguntar cómo se encuentra el cliente, si tiene la disponibilidad de atender la llamada.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Explorar: validar que tan interesado está el cliente en escuchar la propuesta.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Proponer: realizar la propuesta comercial.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Manejar objeciones: dar respuesta a las inquietudes y “peros” que manifieste el cliente prospecto.
          li 
            .lista-ol--cuadro__vineta
              span 6
            | Cierre: terminar el proceso de la venta, apuntando a la venta del producto.
          li 
            .lista-ol--cuadro__vineta
              span 7
            | Despedirse y recordar el nombre de la empresa y del agente de ventas.

    p Para un mayor entendimiento, se mencionan algunos aspectos generales en relación con el uso de los guiones: 

    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          .tarjeta.fnd-10
            img.img-100(src='@/assets/tema8/img-19.svg' alt='AvatarTop')
            .p-4
              p Para el receptor de la llamada, el uso del guion debe ser “transparente”, es decir, no se debe percibir que se está dando lectura a un documento, y bajo ninguna circunstancia debe sentirse que se está leyendo porque le quita la naturalidad a la interacción. 
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          .tarjeta.fnd-10
            img.img-100(src='@/assets/tema8/img-20.svg' alt='AvatarTop')
            .p-4
              p Es útil porque permite al agente de ventas telefónicas no olvidar puntos claves, ya sean asociados a la empresa que está representando, al producto o a las políticas comerciales.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          .tarjeta.fnd-10
            img.img-100(src='@/assets/tema8/img-21.svg' alt='AvatarTop')
            .p-4
              p Los guiones son elaborados siguiendo un orden, por tanto, se sugiere seguir la estructura propuesta para garantizar la calidad de la llamada, en caso de modificarse, tener presente que ítems. no se han desarrollado y abordarlos antes de finalizar la llamada
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          .tarjeta.fnd-10
            img.img-100(src='@/assets/tema8/img-22.svg' alt='AvatarTop')
            .p-4
              p El guion sirve como herramienta para disminuir la improvisación y la inseguridad, por ende, se convierte en un mecanismo de preparación. 
    br                                          
    h3.mb-5 Ejemplo de la aplicación de un guion: 
    .row.justify-content-around.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10.align-self-center.fnd-10
        .row.justify-content-around.p-3
          .col-lg-6.align-self-center
            .bloque-texto-b.color-secundario.p-4.fnd
              .bloque-texto-b__texto
                i.fas.txt.fa-quote-left
                p Buen día, Sra. Ana Vela, mi nombre es Diana Jaramillo y la estoy llamando de la compañía de telecomunicaciones ABC de la cual usted es cliente actualmente. ¿Cómo se encuentra el día de hoy? El motivo de mi llamada es para ofrecerle un ancho de banda mayor en su servicio de internet, hemos detectado que usted pasa gran cantidad del tiempo conectada y consideramos que tener mayor capacidad en su servicio le brindaría mejores prestaciones en su trabajo, por tanto, usted pasaría de tener 50 Mbps. a tener 100 Mbps. solo pagando COP$10.000 más en su factura. ¿Está usted de acuerdo? ¿Tiene alguna inquietud? Recuerde que se comunicó con Diana Jaramillo de la empresa ABC, que tenga un feliz día.
                i.fas.txt.fa-quote-right  
          .col-lg-6.align-self-center
            figure.mb-5
              img.img-c.img-300(src='@/assets/tema8/img-23.svg')                             
    p.mb-5 Como se evidencia en el ejemplo anterior, un guion es simple y sencillo, ya que se debe tener en cuenta que las personas tienen muchas ocupaciones y no están dispuestas o no va a ser de su agrado pasar mucho tiempo conectada en un teléfono en un tema que puede no ser su prioridad. La invitación es entonces, a realizar procesos siempre desde la empatía, poniéndose en el papel de la persona que está al otro lado del teléfono, aunque por supuesto, sin quitarse la “camiseta” de la empresa para la cual se trabaja.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosLineaTiempoB: [
      {
        titulo: 'Cada venta telefónica es distinta',
        texto:
          'Se debe entender que cada cliente es un mundo diferente, y, por tanto, no habrá dos llamadas iguales, por ende, el consejo es “ponerse en el lugar del cliente”, es decir, aplicar el principio de la empatía.',
        icono: require('@/assets/tema8/img-3.svg'),
      },
      {
        titulo: 'Diseña el proceso de venta',
        texto:
          'de este punto se resalta lo que ya se ha mencionado, vender requiere estructura, en este punto es clave el guion de la llamada.',
        icono: require('@/assets/tema8/img-4.svg'),
      },
      {
        titulo: 'Buen tono',
        texto:
          'Se debe propender por tener un tono comunicacional adaptado a cada cliente y a cada producto. ',
        icono: require('@/assets/tema8/img-5.svg'),
      },
      {
        titulo: 'Generar conexión desde el principio',
        texto: 'El tip básico es saludar y llamar a la persona por su nombre.',
        icono: require('@/assets/tema8/img-6.svg'),
      },
      {
        titulo: 'Aplicar el principio de la reafirmación',
        texto:
          'Dicho principio se refiere a que la persona diga dos “si” lo más pronto posible de haber generado el contacto.',
        icono: require('@/assets/tema8/img-7.svg'),
      },
      {
        titulo: 'Identificar la necesidad',
        texto:
          'Se recuerde que es en este punto dado que las necesidades ya están creadas, lo que debe hacer un buen vendedor telefónico, es identificar esa necesidad, de modo que se pueda posteriormente plantear una buena opción comercial al cliente.',
        icono: require('@/assets/tema8/img-8.svg'),
      },
      {
        titulo: 'Ofrecer la solución',
        texto:
          'Hace referencia a mostrarle las opciones del portafolio que aplican para el cliente prospecto.',
        icono: require('@/assets/tema8/img-9.svg'),
      },
      {
        titulo: 'Utilizar soportes e información',
        texto:
          'Este ítem hace referencia a que el vendedor telefónico, debe realizar las acciones necesarias basadas en información con el fin de ganarse la confianza del cliente.',
        icono: require('@/assets/tema8/img-10.svg'),
      },
      {
        titulo: 'Ser flexible',
        texto:
          'Respetando las políticas comerciales de la empresa y de acuerdo con los parámetros generales del guion, el agente de ventas telefónicas, debe permitirse ser flexible',
        icono: require('@/assets/tema8/img-11.svg'),
      },

      {
        titulo: 'No ponerse en contra del cliente',
        texto:
          'Se debe tratar de evitar los “no” y los “pero”, alinearse hasta donde sea posible con el cliente.',
        icono: require('@/assets/tema8/img-5.svg'),
      },
    ],
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
