<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Negociación
      
    .row.mb-4.fnd-2.align-self-center(data-aos="fade-left")
      .col-lg-7.img-c.pll.order-2.order-lg-1.justify-content-around.align-items-center
        p Consiste en la interacción entre dos o más agentes (personas o empresas), con el fin de generar beneficios. Se diferencia de las ventas porque en la negociación el fin es un acuerdo no un producto. Dicho de otra manera, se podría decir que: toda venta implica una negociación, más no toda negociación tiene asociada una venta.

      .col-lg-5.align-self-center.order-1.order-lg-2.justify-content-around.align-items-center 
        figure
          img.mb-md-4.img-400(src='@/assets/tema7/img-1.svg')
    p.mb-5 Conocer de negociación para un vendedor es importante por varias razones, las cuales se describen a continuación:
    .row.mb-5.align-self-center(data-aos="fade-left")
          .col-lg-6.align-self-center
            figure
              img.mb-md-4.img-400(src='@/assets/tema7/img-2.svg')
          .col-lg-6.align-self-center
            ul.lista-ul--color
              li 
                i.iii.fas.fa-circle
                | Suministra al vendedor mayores herramientas comerciales.
              li 
                i.iii.fas.fa-circle
                | La negociación es muy práctica cuando se está abordando ventas empresariales, donde los procesos comerciales tienen un ritmo más lento.
              li 
                i.iii.fas.fa-circle
                | También, es útil, cuando se está tratando con clientes difíciles que no responden bien a las técnicas de ventas vistas previamente.


    p.mb-5 La negociación, al igual que todo proceso tiene sus consideraciones y premisas básicas sobre las cuales se fundamentan los cimientos. A continuación, se enuncian en la figura 5 los principales aspectos que aplican a cualquier escenario, donde se pretenda aplicar un proceso cuyo fin sea llegar a un acuerdo:
    .row.justify-content-around.align-items-center.mb-5.fnd-10
      .col-lg-10.align-self-center
        .row.justify-content-around
          p.r-n.mb-4 Figura 5. Características de negociación
          figure
              img.mb-md-4(src='@/assets/tema7/img-c.svg')

    p Al igual que en las técnicas de ventas, también en negociación existen muchos modelos, cuya aplicación depende de la situación, de los perfiles de los negociadores, del tipo de acuerdo al que se desea llegar e incluso hasta del tiempo que se disponga para la negociación. A continuación, se presentan tres de los modelos más reconocidos en el mercado:

    .tarjeta.fnd-11.mb-5
      SlyderA
        .row.p-4
          .col-md-6.mb-4.mb-md-0.p-4
            h4.py-3 Modelo ZOPA
            p En español conocido como Zona de Posible Acuerdo (Zone of Possible Agreement en inglés). En el ZOPA, se parte del supuesto que el negociador que quiere comprar tiene un límite superior que representa lo máximo que estaría dispuesto a pagar, por otro lado, se tiene un vendedor que tiene un límite inferior, es decir un valor mínimo al que negociaría, el objetivo del modelo es establecer el rango en el cual ambos negocian, por tanto, el modelo pretende encontrar el factor común, es decir, aquel punto en el que los dos coinciden, lo que representa la zona de posible acuerdo.

            p A continuación, estudiemos un ejemplo.

        
          .col-md-6.px-5.py-4
            figure
              img(src='@/assets/tema7/img-3.png')
                 
        .row.p-4
          .col-md-6.mb-4.mb-md-0.p-4
            h4.py-3 Ejemplo
            p El negociador 1, quiere comprar una camisa y tiene un presupuesto máximo de COP $35.000 (límite superior).
            p El vendedor espera vender la camisa en COP $40.000 pero tiene un descuento autorizado del 20 % (es decir, de $8.000), es decir, que lo mínimo en lo que puede vender dicha camisa es COP $32.000 (límite inferior).
            p De acuerdo con este ejercicio, la ZOPA se da entre: COP $32.000 y COP $35.000 y dentro de este rango (incluidos los extremos) ambos están dispuestos a negociar.

        
          .col-md-6.px-5.py-4
            figure
              img(src='@/assets/tema7/img-4.svg')

        .row.p-4
          .col-md-6.mb-4.mb-md-0.p-4
            h4.py-3 Modelo MAAN
            p En español conocido como Mejor Alternativa al Acuerdo Negociado o BATNA  (Best Alternative To a Negotiated Agreement en inglés), en este modelo, acuñado a Roger Fisher  y William Ury, se plantea que el objetivo es tratar de obtener un acuerdo donde se logre el máximo beneficio posible. 
            p Para aplicar el modelo, cada una de las partes debe listar todas las alternativas que considere viables, posteriormente y por separado cada uno evalúa una a una las opciones y a partir de allí establecen dos opciones:
            p La primera la cual se considera la ganadora, es decir, aquella con la cual se va a entrar a negociar y una segunda opción entendida como la que se utilizará sino se logra asegurar la primera opción (lo que comúnmente se denomina el plan B), que a pesar de no ser “el mundo ideal” representa una opción técnicamente viable.
            p A continuación, estudiemos un ejemplo.

        
          .col-md-6.px-5.py-4
            figure
              img(src='@/assets/tema7/img-5.png')

        .row.p-4
          .col-md-6.mb-4.mb-md-0.p-4
            h4.py-3 Ejemplo
            p Se va a entrar a negociar con un nuevo proveedor. El objetivo del comprador es lograr que se le puedan realizar los pagos de facturas a 60 días, sin embargo, por parte de la empresa responden que los pagos deben ser de contado, es decir, que no hay plazo para pagar. 
            p En este escenario, la mejor alternativa al acuerdo es negociar que se pague a un mes (30 días), de esta manera, se logra que si bien no se consiguió lo esperado, se logró llegar a un acuerdo.

        
          .col-md-6.px-5.py-4
            figure
              img(src='@/assets/tema7/img-6.svg')

        .row.p-4
          .col-md-6.mb-4.mb-md-0.p-4
            h4.py-3 Modelo de negociación de Harvard
            p El modelo de negociación de Harvard, ha sido altamente valorado ya que indica “suave con las personas, duro con el problema”, es decir, acá el foco son los intereses más no las posiciones por tanto, acá se propende por buscar soluciones que funcionen para todas las partes implicadas.
            p A continuación, estudiemos un ejemplo.
                
        
          .col-md-6.px-5.py-4
            figure
              img(src='@/assets/tema7/img-7.png')

        .row.p-4
          .col-md-6.mb-4.mb-md-0.p-4
            h4.py-3 Ejemplo
            p A raíz del Covid-19, muchas personas debieron desempeñar sus funciones desde sus hogares, sin embargo, cuando el tema de la pandemia se comenzó a estabilizar muchos ya no querían regresar a trabajar a las sedes. En un caso específico, un sindicato de la empresa XYZ eleva a la compañía una solicitud para continuar laborando desde sus domicilios, dado que se ha mostrado que la mayoría de colaboradores de la compañía son más eficientes desde casa. El Gerente plantea una mesa de trabajo para llegar a un acuerdo, donde después de varias reuniones y aplicando el modelo de negociación de Harvard, se define que se implementará un modelo de alternancia, donde todos estarán tres días trabajando desde casa y dos días irán a laborar a la compañía. Acá se evidencia una buena aplicación del modelo, ya que ambas partes estuvieron de acuerdo y consideraron que era una opción práctica y que daba respuesta a ambas perspectivas.
        
          .col-md-6.px-5.py-4
            figure
              img(src='@/assets/tema7/img-8.svg')


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
