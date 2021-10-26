<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Contextualización en ventas

    .row.mb-5(data-aos="fade-left")

      .col-lg-6
        p Las ventas constituyen en sí una transacción comercial y aunque el concepto suena simple, en realidad, estas son responsables en gran medida de la sostenibilidad de la compañía, porque son las que generan los ingresos financieros. Teniendo presente dicha importancia, se requiere que un buen vendedor se prepare, debido a que es un mundo cada vez más competido, donde solo los mejores tendrán resultados; en esta línea, se presenta un contexto sobre cómo se fueron desarrollando las ventas y cuáles son los enfoques con los cuales se trabaja hoy en día.
        p La historia de las ventas ha estado muy ligada a la evolución del mercado, conforme el tiempo avanza se suscitan cambios que quieran o no terminan impactando los modelos comerciales. Por tanto, es relevante antes de emprender en el mundo de las ventas, conocer algunas etapas que han marcado las perspectivas y que incluso, determinan el comportamiento de los vendedores.

      .col-lg-6
        figure.mb-5
          img.img-350(src='@/assets/tema1/img-1.svg')


    .tarjeta.fnd-1.p-4.mb-5

      LineaTiempoC.color-primario(text-small)

        .row.align-self-center(titulo="1900")
          .col-md-6.align-self-center
            figure
              img.img-400(src='@/assets/tema1/img-2.svg')
                     
          .col-md-6.mb-4.mb-md-0.align-self-center
            h4 Orientación al producto
            p La orientación al producto, se da alrededor de los años 1900, con el auge del fordismo; en ese momento la preocupación era cómo producir y luego se resolvía el a quién y el cómo vender. En esa época el enfoque comercial era “salir de inventarios” y los vendedores eran las figuras responsables de hacerlo, dado que para ese entonces el foco de la economía eran las empresas industriales, por tanto, el reto que se planteaba era quién producía más y mejor, dejando a un lado la voz del cliente, que años más tarde se convertiría en el foco de la estrategia.

        .row(titulo="1950")

          .col-md-6.align-self-center
            figure
              img.img-400(src='@/assets/tema1/img-3.svg')
                     
          .col-md-6.mb-4.mb-md-0.align-self-center
            h4 Orientación a las ventas
            p Hacia 1950, las empresas se centraron  en procesos productivos más eficientes, donde el objetivo de los empresarios era vender, por lo que el enfoque para los vendedores en ese momento, era el corto plazo, y tomar pedidos, por ende,  aquellos que eran mejor evaluados eran entonces quiénes más transacciones realizaban sin importar si el producto era requerido por el cliente y si se centraban realmente en las necesidades, por lo que conceptos como fidelización, recompra y usabilidad no eran factores que estuvieran en el discurso.

        .row(titulo="1970")
          .col-md-6.align-self-center
            figure
              img.img-400(src='@/assets/tema1/img-4.svg')
                     
          .col-md-6.mb-4.mb-md-0.align-self-center
            h4 Orientación al consumidor
            p Hacia 1970 con el inicio de la tercera revolución industrial (o revolución científico técnica) se da la mayor apertura a los mercados y los primeros pasos de la tecnología, así nace entonces una corriente centrada en las necesidades de los clientes, donde entender al cliente y pensar en una relación duradera o de largo plazo, es a partir de ese momento la nueva concepción del vendedor.
        div(titulo="Siglo XXI")
          .row
            .col-md-6.align-self-center
              figure
              img.img-400(src='@/assets/tema1/img-5.svg')      
            .col-md-6.mb-4.mb-md-0.align-self-center
              h4 Orientación a las emociones y a la funcionalidad
              p Con la llegada del siglo XXI, la Globalización, las multinacionales, el auge de la tecnología y diversos fenómenos socio-culturales, se dio lugar a un nuevo enfoque en el mercado, donde el cliente y sus necesidades evolucionan;  las emociones, entendidas como la capacidad de transmitir algo más de lo que denota el producto y la funcionalidad asociada a la practicidad, dan lugar a un concepto donde los vendedores avanzan hacia un enfoque de consultores, donde se empieza a  pensar en relaciones de largo plazo y se considera al cliente como generador de valor, no solo como una fuente de ingresos para la compañía.
    
    p.mb-5 Existen muchas formas de lograr llegar al mercado, así como modelos y canales de ventas. Hoy en día con el auge de la tecnología y la pandemia Covid-19, las empresas se han visto abocadas a diversificar sus canales de venta (la forma como venden), es por ello que es parte esencial del proceso de formación de un vendedor, es conocer qué tipos de venta existen.
    .row.justify-content-around.align-items-center.mb-5
      .col-lg-10.align-self-center
        .row.justify-content-around
          .crd_01.mb-4
            .crd_01__icon
              img(src="@/assets/tema1/img-6.svg", alt="alt").class          
            .crd_01__txt
              p.text-bold Venta personal
              p Denominadas también cara a cara, ventas presenciales, o “face to face”, son aquellas en las que los agentes (vendedor y comprador) interactúan de forma directa. Tienen como ventaja que son más cercanas, hay posibilidad de identificar las reacciones y emociones del prospecto e incluso según el tipo de producto es posible que el prospecto tenga acceso al bien, lo que puede facilitar el proceso comercial. La desventaja es que comparativamente con otros canales, pueden requerir gran cantidad de tiempo para concretarse y pueden ser más costosas.
          .crd_01.mb-4
            .crd_01__icon
              img(src="@/assets/tema1/img-7.svg", alt="alt").class          
            .crd_01__txt
              p.text-bold Venta telefónica 
              p Ventas a distancia o ventas generadas a través de canales outbound (aquel donde la llamada saliente es realizada por el vendedor), es muy usada hoy en día y cada vez pareciera tener mayor efectividad. En este modelo, las claves son:  la confianza que se genere con el prospecto y el buen uso del tiempo, ya que las personas no van a estar dispuestas a quedarse conectadas por largos períodos. Como ventaja pueden ser menos costosas frente a las ventas presenciales, son muy efectivas para venta de servicios, la desventaja es que no son tan funcionales para todo tipo de bienes.
          .crd_01.mb-4
            .crd_01__icon
              img(src="@/assets/tema1/img-8.svg", alt="alt").class          
            .crd_01__txt
              p.text-bold Ventas en línea
              p Son hoy en día un canal importante de colocación para muchas empresas, incluso en el caso de los emprendedores pueden ser su único canal. Este modelo es aquel donde no se requiere un vendedor humano, dado que se realizan a través de plataformas de comercio en internet o incluso a través de redes sociales. Tienen como ventaja menores costos y la rapidez en la transacción, quizá la desventaja es que en ocasiones falta el contacto para resolver dudas, ya que si bien en muchos sitios existen chatbots (robots) no van a ser tan claros como si lo fuera un humano.







  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
