<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5


    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 El ciclo de la venta
      
    .row.mb-4.fnd-2.align-self-center(data-aos="fade-left")
      .col-lg-7.img-c.pll.order-2.order-lg-1 
        p La venta en sí misma es una transacción entre dos agentes económicos, es un proceso voluntario donde una empresa o persona ofrece de manera legal productos a otra denominada: cliente potencial, buscando que ésta pague el precio esperado. De acuerdo con esto para que se realice una venta debe asegurarse: 
        ul.lista-ul.mb-3
          li 
            i.lista-ul__vineta
            | La participación de dos roles (comprador y vendedor).
          li 
            i.lista-ul__vineta
            | Un producto.
          li 
            i.lista-ul__vineta
            | Un valor de intercambio (precio).

      .col-lg-5.align-self-center.order-1.order-lg-2 
        figure
          img.img-400(src='@/assets/tema2/img-1.svg')

    p.mb-5 Sin embargo, para realizar la venta de manera adecuada e influenciar el éxito de la misma, las ventas deben verse de forma integral. Por ello, se han definido, tres momentos secuenciales: <b><span class='txt-1'>preventa, venta y posventa,</span></b> en los cuales se desarrolla el ciclo comercial:

    TabsC.color-acento-contenido.mb-5.fnd-i
      .tarjeta.fnd-3.p-4(titulo="Preventa")
        .row.mb-4.align-self-center(data-aos="fade-left")
          .col-lg-5
            figure
              img.img-350(src='@/assets/tema2/img-2.png')
          .col-lg-7.img-c.pll.align-self-center
            p La preventa es el momento previo a la venta. En esta etapa el vendedor define quiénes son sus clientes potenciales, de allí extrae aquellos con mayor probabilidad de éxito (llamados clientes prospectos), los contacta, genera el acercamiento, detecta su necesidad y prepara el tipo de oferta (portafolio) a presentar.
            p Una buena preventa tiene gran componente de trabajo previo al contacto con el cliente prospecto, dado que se debe tener buen conocimiento del portafolio de productos, se debe investigar sobre el perfil del cliente y se debe propender por generar un acercamiento muy asertivo y respetuoso.

      .tarjeta.fnd-3.p-4(titulo="Venta")
        .row.mb-4.align-self-center(data-aos="fade-left")

          .col-lg-7.img-c.pll.align-self-center
            p Es el famoso “moment of truth” (momento de verdad), es decir, allí se tiene el contacto con el cliente (a través de cualquier medio presencial o virtual), se realiza la presentación del portafolio a ofrecer, se resuelve sus inquietudes y se espera que el vendedor llegue al objetivo de esta etapa: el cierre de la venta, es decir, cuando el cliente acepta adquirir el bien/ servicio. En la venta se aplican las técnicas de ventas, se debaten objeciones se implementan modelos de negociación según cómo se vaya desarrollando el proceso y se realizan todos los esfuerzos comerciales para que el prospecto diga “si” voy a comprar el producto.
          .col-lg-5
            figure
              img.img-350(src='@/assets/tema2/img-3.png')            
      .tarjeta.fnd-3.p-4(titulo="Posventa")
        .row.mb-4.align-self-center(data-aos="fade-left")
          .col-lg-5
            figure
              img.img-350(src='@/assets/tema2/img-4.png')
          .col-lg-7.img-c.pll.align-self-center
            p Es la última etapa del proceso, pero no la menos importante. En este momento del ciclo, es donde se crean verdaderos vínculos con el cliente, fidelizarlo e incluso convertirlo en apóstol de la empresa (es decir, aspirar a un cliente que no solo compre, sino que también recomiende a terceros la marca o servicio). 
            p Si bien esta fase ha estado atribuida más al proceso de servicio al cliente, todos los puntos de contactos son importantes para generar una experiencia positiva con el cliente después de haber realizado la compra.














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
