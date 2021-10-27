<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Dominancias cerebrales
      
    .row.mb-4.fnd-2.align-self-center(data-aos="fade-left")
      .col-lg-7.img-c.pll.order-2.order-lg-1.justify-content-around.align-items-center
        p Probablemente se pregunte: 
        h2 <span class='txt-1-'>¿</span> Qué tiene que ver el estudio del cerebro con las ventas<span class='txt-1-'>?</span>
        p La respuesta está asociada a las Neuro ventas, una ciencia que relaciona el conocimiento científico del cerebro humano para entender los comportamientos e incluso predecirlos con el fin de poner en práctica mejores modelos comerciales.

      .col-lg-5.align-self-center.order-1.order-lg-2.justify-content-around.align-items-center 
        figure
          img.mb-md-4.img-400(src='@/assets/tema4/img-1.svg')

    p.mb-5 En lo asociado a las características, desde la ciencia comienzan estudiando la división del cerebro en dos hemisferios, ver la figura 1:
    p.r-n Figura 1. Hemisferios del cerebro
    .row.justify-content-around.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-8.align-self-center
        .row.justify-content-around
          figure
            img(src='@/assets/tema4/img-2.svg')  

    p Cada uno de estos hemisferios tiene unas funciones muy definidas.  Muñoz, J.; Gutiérrez, P. y Serrato, R. (2012), presentan un resumen de forma explícita y sencilla, con los alcances de cada uno de estos:

    .row.justify-content-around.align-items-center.mb-5
      .col-lg-10.align-self-center
        .row.justify-content-around
          figure
            img(src='@/assets/tema4/img-3.png')  
    p.mb-5 Posteriormente, a través del modelo de Paul MacLean, se identifican tres tipos de cerebros, ver la figura 2:
    .row.justify-content-around.align-items-center.mb-5.fnd-3.p-4(data-aos="flip-up")
      .col-lg-10.align-self-center
        .row.justify-content-around
          p.r-n2 Figura 2. Tipos de cerebros
          ImagenInfografica.color-secundario.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/tema4/img-4.svg')

            .tarjeta.color-secundario.p-3(x="25%" y="7.5%")
              .h5.mb-2 Cerebro neocórtex
              p Hace referencia a la racionalidad y el aprendizaje.

            .tarjeta.color-secundario.p-3(x="17.5%" y="30.6%")
              .h5.mb-2 Cerebro límbico
              p El cual está asociado a las emociones.


            .tarjeta.color-secundario.p-3(x="82.8%" y="56.5%")
              .h5.mb-2 Cerebro reptiliano
              p El cual está enfocado en la satisfacción de las necesidades básicas, por tanto, es el enfocado en la supervivencia y, es impulsivo.

    p.mb-5 Y por último, Herrmann hace mención a la existencia de cuatro tipos de dominancias cerebrales: lógico, organizador, creativo y emocional, como se muestra en la siguiente figura 3.
    p.r-n2 Figura 3. Dominancias cerebrales

    .row.justify-content-around.align-items-center.mb-5.px-4(data-aos="flip-up")
      .col-lg-10.align-self-center
        .row.justify-content-around
          ImagenInfografica.color-secundario.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/tema4/img-5-.svg')

            .tarjeta.color-secundario.p-3(x="9%" y="24.5%")
              .h5.mb-2 Perfil Lógico
              p Es racional, analítico, de igual forma es frío, calculador y poco emocional.


            .tarjeta.color-secundario.p-3(x="90.5%" y="24.5%")
              .h5.mb-2 Perfil Creativo
              p Es intuitivo, perspicaz, creativo, innovador y pudiese percibirse como poco orientado al detalle.


            .tarjeta.color-secundario.p-3(x="9%" y="77.5%")
              .h5.mb-2 Perfil Organizador
              p Es disciplinado, secuencial, detallista, conservador y quizá poco innovador.


            .tarjeta.color-secundario.p-3(x="90.5%" y="77.5%")
              .h5.mb-2 Perfil Emocional
              p Es sentimental, espiritual, comunicativo, expresivo y tal vez poco racional, ya que lo emotivo predomina.



      
    .row.mb-4.fnd-4.align-self-center(data-aos="fade-left")
      .col-lg-7.img-c.pll.order-2.order-lg-1 
        p Los estudios del cerebro relacionado con el comportamiento humano y su aplicación en el mercadeo y las ventas, se complementa con el modelo de Cerebro Total de Herrmann.
        p Este modelo ha sido tan utilizado que incluso ha permitido crear pruebas psicotécnicas aplicables en procesos de selección de personal para el área de ventas, por lo que es interesante aplicar el cuestionario para conocer qué tipo de vendedor es.


      .col-lg-5.align-self-center.order-1.order-lg-2 
        figure
          img.img-400(src='@/assets/tema4/img-6.png')


    p.mb-5 El modelo del Cerebro Total de Herrmann es una radiografía completa, la cual muestra a través de cuatro tipos de perfiles diferentes, la dominancia cerebral de la persona. Este enfoque corresponde a uno de los últimos estudios asociados a cómo se comportan las personas según sus dominancias, hecho que no solo es utilizado en el mercadeo, sino también en la psicología, la antropología y muchas otras áreas.

    

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
