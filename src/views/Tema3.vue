<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Comunicación comercial
    p.mb-5 Es una herramienta donde se apropian los elementos y conceptos básicos del proceso comunicativo de carácter social, para adaptarlos al entorno del mercadeo y las ventas. Los buenos vendedores cada vez se capacitan más y se especializan, entendiendo que para lograr el objetivo: la transacción, deben tenerse en cuenta muchos elementos y uno clave es justamente la comunicación comercial.    

    #t_3_1.titulo-segundo
      h2 3.1  Características de la comunicación
    p Para entender cuáles son las características de la comunicación comercial, es necesario recordar antes cuáles son los principales elementos que intervienen en el proceso comunicacional social, es decir, tener presente que el proceso de venta se da a través de dos seres humanos, donde cada uno es un mundo arraigado a sus principios y comportamientos. 
    p.mb-5 Dado lo anterior, los elementos que intervienen en el proceso de comunicación son:

    .row.justify-content-around.align-items-center
      .col-lg-10.align-self-center
        .row.justify-content-around.align-items-center
            .col-lg-6.mb-5(data-aos="flip-left")
              ImagenInfografica.color-secundario.mb-5
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/tema3/img-1-.svg')

                .tarjeta.color-primario.p-3(x="51.25%" y="5.7%")
                  .h5.mb-2 Contenido 
                  p Es lo que se quiere comunicar, es la información que se desea transmitir. En términos comerciales es la presentación del portafolio y la aplicación del argumentario de venta.
                .tarjeta.color-primario.p-3(x="51.25%" y="25.3%")
                  .h5.mb-2 Código
                  p Son los elementos, estilos e incluso reglas que facilitan la comunicación entre el emisor y el receptor ya que son comunes entre ambos.

                .tarjeta.color-primario.p-3(x="7%" y="89.99%")
                  .h5.mb-2 Emisor
                  p Es la persona, empresa o entidad que emite el mensaje. Usualmente, es la que inicia la comunicación. En términos comerciales, representa a la empresa (el vendedor).

                .tarjeta.color-primario.p-3(x="51.25%" y="89.99%")
                  .h5.mb-2 Canal 
                  p Es el medio a través del cual se emite el mensaje. Los canales pueden variar dependiendo los medios disponibles y el tipo de receptor.


                .tarjeta.color-primario.p-3(x="84.6%" y="89.99%")
                  .h5.mb-2 Receptor 
                  p Es la persona o entidad a la que está dirigida la comunicación. Si se hiciera relación al alcance comercial, hace referencia al cliente


    .row.mb-5.fnd-2-(data-aos="fade-left")
      .col-lg-4.align-self-center
        figure
          img.img-c.img-400(src='@/assets/tema3/img-2.png')    
      .col-lg-8.img-c.pll2
        p Un agente de ventas que trabaja en un Contact Center contacta a un cliente potencial para ofrecerle un seguro. En este caso, el vendedor, es el emisor, el cliente representa el receptor, el canal es el teléfono, el contenido es la propuesta comercial que le presenta y el código son las palabras y tecnicismos que utiliza para transmitir la información de una forma comprensible.

    p.mb-5 A continuación, se referencia una forma de entender las características de la comunicación comercial:
    .row.mb-5.justify-content-around
      .col-md-6.col-lg.t-tabla.p-4(data-aos="slide-up")
        .row.justify-content-center.mb-3
            img.img-100(src='@/assets/tema3/img-3.svg' alt='AvatarTop')

        p En un proceso de comunicación comercial, el emisor es el vendedor y el <b>receptor es el cliente potencial.</b>

      .col-md-6.col-lg.t-tabla.p-4(data-aos="slide-down")
        .row.justify-content-center.mb-3
            img.img-100(src='@/assets/tema3/img-4.svg' alt='AvatarTop')

        p.txt-2 Debe tenerse presente que es tan importante<b> la comunicación verbal</b> como la <b>comunicación no verbal.</b>

      .col-md-6.col-lg.t-tabla.p-4(data-aos="slide-up")
        .row.justify-content-center.mb-3
            img.img-100(src='@/assets/tema3/img-5.svg' alt='AvatarTop')
        
        p El lenguaje que emite el emisor debe basarse en <b>códigos entendibles para el receptor.</b> Se debe prestar especial atención a los tecnicismos.

      .col-md-6.col-lg.t-tabla.p-4(data-aos="slide-down")
        .row.justify-content-center.mb-3
            img.img-100(src='@/assets/tema3/img-6.svg' alt='AvatarTop')

        p.txt-2 Aplicar la <b>empatía</b>, permitirá tener un mejor resultado, ponerse en el lugar del otro, es un buen principio para entablar una comunicación comercial.
      .col-md-6.col-lg.t-tabla.p-4(data-aos="slide-up")
        .row.justify-content-center.mb-3
            img.img-100(src='@/assets/tema3/img-7.svg' alt='AvatarTop')

        p Una buena comunicación comercial debe permitir llegar al <b>cierre de la venta.</b>

    separador
    #t_3_2.titulo-segundo
      h2 3.2 Aplicabilidad
    p.mb-5 La comunicación comercial tiene aplicabilidad en todos los momentos de la venta, dado que mientras exista la relación del cliente con la empresa siempre habrá oportunidad de contacto; es por ello que se debe tener presente que durante todo el ciclo de venta se aplica el proceso comunicativo. A continuación, se presentan ejemplos en cada una de las etapas de este ciclo:

    PasosA.color-acento-contenido.mb-5(tipo="n")
      .row
        .col-md-6.mb-4.mb-md-0.align-self-center
          h3 Preventa
          p La comunicación comercial se da desde el momento en que el vendedor está generando contacto con el cliente prospecto, allí el tacto, el respeto y asertividad son claves.

        .col-md-6
          figure
            img.img-250(src='@/assets/tema3/img-8.svg')

      .row
        .col-md-6.mb-4.mb-md-0
          figure
            img.img-250(src='@/assets/tema3/img-9.svg')

        .col-md-6.align-self-center
          h3 Venta
          p La comunicación comercial se tiene cuando el cliente manifiesta las inquietudes, inseguridad y validaciones a través de cualquier medio (oral o escrito), el rol de un buen vendedor, es entender y canalizar sus dudas de la mejor manera posible.        

      .row
        .col-md-6.mb-4.mb-md-0.align-self-center
          h3 Posventa
          p Tiene sentido una buena comunicación, para preservar la relación entre el cliente y la empresa. En esta etapa del ciclo, la responsabilidad no cae solo en el vendedor, sino también en todos los colaboradores de la compañía.
     
        .col-md-6
          figure
            img.img-250(src='@/assets/tema3/img-10.svg')
      















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

<style lang="sass" scoped></style>
