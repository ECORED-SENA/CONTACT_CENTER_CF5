<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Portafolio de la empresa

    .row.mb-5(data-aos="fade-left")

      .col-lg-6.mb-5
        p En lo visto hasta el momento, se ha mostrado información para entender las ventas como un proceso que ha evolucionado conforme avanza el mercado, posteriormente, se enunció el ciclo de la venta, y se hizo mención a la comunicación como elemento clave en las ventas dado que la relación tradicional se da entre dos seres humanos. De allí se dio un contexto sobre las dominancias cerebrales con el fin de reiterar desde un punto de vista científico que todos los seres humanos son diferentes y que, en este orden de ideas, las neuroventas aparecen como herramienta para ayudar a los vendedores a entender cómo el comportamiento humano se ve influenciado incluso por temas inconscientes.

        .bloque-texto-b.color-secundario.p-4.fnd
          .bloque-texto-b__texto
            i.fas.txt.fa-quote-left
            p Para que exista un proceso comercial se debe tener algo que ofrecer al mercado: los productos, es por esta razón que antes de conocer sobre herramientas para vender, debe tenerse claridad en qué es lo que se puede ofrecer a los clientes, dicho de otra manera, se debe tener conocimiento básico sobre producto. El portafolio (en otros escenarios llamado mezcla de productos o cartera de productos), comprende todos los bienes y servicios que la empresa está en capacidad de ofrecer al mercado, incluyendo categorías y líneas de productos.
            i.fas.txt.fa-quote-right



      .col-lg-6
        figure.mb-5
          img.img-450(src='@/assets/tema5/img-1.svg')
    
      p En el siguiente recurso, se identificarán dos ejemplos puntuales de categorías y líneas de producto. 


    TabsC.color-acento-contenido.mb-5.fnd-i
      .tarjeta.p-4(titulo="Categorías de productos")
        .row.mb-4.align-self-center(data-aos="fade-left")
          .col-lg-7.img-c.pll.align-self-center
            p Del portafolio, se desprenden las categorías de productos, entendidas como aquellas agrupaciones de productos, en las cuales la empresa tiene ventajas competitivas y recursos disponibles para producirlos o para prestar los servicios asociados. 

            p Estas permiten una mejor organización y clasificación, además generan mayor posibilidad de llegar a los clientes.
          .col-lg-5
            figure
              img.img-350(src='@/assets/tema5/img-2.svg')

      .tarjeta.p-4(titulo="Líneas de productos")
        .row.mb-4.align-self-center(data-aos="fade-left")
          .col-lg-7.img-c.align-self-center
            p Las líneas de productos son un subconjunto de las categorías, por tanto, tienen características comunes, están relacionados entre sí y los bienes y servicios que las contienen tienen usos semejantes, es decir, también son un agrupador con un alcance más específico.
            p Continuando con el mismo ejemplo anterior, dentro de la categoría granos, se pueden referenciar las siguientes líneas: arvejas, fríjoles y lentejas, etc.

          .col-lg-5
            figure
              img.img-350(src='@/assets/tema5/img-3.svg')      


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
