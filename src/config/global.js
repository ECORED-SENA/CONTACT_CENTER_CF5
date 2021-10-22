export default {
  global: {
    componenteFormativo: 'Técnicas de ventas',
    descripcionCurso:
      'A través de este componente formativo el aprendiz debe apropiar los elementos y conceptos necesarios para abordar el proceso comercial de una forma técnicamente correcta y enfocada en el cliente, soportando su práctica en: las tácticas de ventas, conceptos de negociación y manejo de objeciones.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Contextualización en ventas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'El ciclo de la venta',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Comunicación comercial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Características de la comunicación',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Aplicabilidad',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Dominancias cerebrales',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Portafolio de la empresa',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Técnicas de ventas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Técnicas de ventas más utilizadas',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Objeciones',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Negociación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'La venta telefónica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '8.1',
            titulo: 'Aspectos a tener en cuenta en la venta telefónica',
            hash: 't_8_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.2',
            titulo: 'El guion telefónico',
            hash: 't_8_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ardila, E. (1984), Técnicas de ventas: objeciones.  Servicio Nacional de Aprendizaje. p. 9- 12.    ',
      link: 'https://hdl.handle.net/11404/1900',
    },
    {
      referencia:
        'Diccionario de la Real Academia de la Lengua Española- RAE-.. Término Objeción. objeción | Definición | Diccionario de la lengua española | RAE - ASALE.    ',
      link: 'https://dle.rae.es/?w=objeci%C3%B3n&origen=REDLE',
    },

    {
      referencia:
        'Muñoz, J.; Gutiérrez, P. y Serrato, R. (2012). Los hemisferios cerebrales: dos estilos de pensar, dos modos de enseñar y aprender. Estilos de aprendizaje. Investigaciones y experiencias. Universidad de Córdoba.    ',
      link: 'https://dialnet.unirioja.es/descarga/articulo/4664049.pdf',
    },
    {
      referencia:
        'Navarro, M. (2012). Técnicas de Ventas. Red Tercer Milenio.    ',
      link:
        'http://www.aliat.org.mx/BibliotecasDigitales/economico_administrativo/Tecnicas_de_venta.pdf',
    },
    {
      referencia:
        'Piqueras, C. (2020). El gran libro de la venta telefónica. Profit Editorial.',
    },
  ],
  glosario: [
    {
      termino: 'Agente de ventas telefónicas',
      significado:
        'Es el vendedor que realiza ventas a distancia, utilizando la telefonía como medio de contacto.',
    },
    {
      termino: 'Ciclo de venta',
      significado:
        'Secuencia de procesos en los cuales debe desarrollarse un proceso comercial estructurado. Está compuesto por: preventa, venta y posventa.',
    },
    {
      termino: 'Cliente',
      significado:
        'Es el centro de la estrategia de mercadeo y ventas de una empresa. Representa a la persona o empresa que adquiere los bienes y servicios.',
    },
    {
      termino: 'Comunicación comercial',
      significado:
        'Proceso en el que a partir de un emisor (quien emite el mensaje) y el receptor (quién la recibe) se transmite una oferta de valor comercial.',
    },
    {
      termino: 'Empatía',
      significado:
        'Principio básico de las ventas, consiste en ponerse en el lugar del otro, sin perder la objetividad.',
    },
    {
      termino: 'Guion',
      significado:
        'Herramienta utilizada por los agentes de ventas telefónicas para guiar la conversación con el cliente.',
    },
    {
      termino: 'Negociación',
      significado:
        'Proceso comunicacional entre dos o más partes, cuyo fin es llegar a un acuerdo.',
    },
    {
      termino: 'Neuro ventas',
      significado:
        'Ciencia que relaciona el conocimiento científico del cerebro humano para entender los comportamientos e incluso predecirlos con el fin de poner en práctica mejores modelos comerciales.',
    },
    {
      termino: 'Objeciones',
      significado:
        'Mecanismos utilizados por los clientes para ahondar en el proceso de ventas, ya sea para conocer y validar información o para desistir de la transacción.',
    },
    {
      termino: 'Portafolio',
      significado:
        'Conjunto de bienes y servicios que ofrece una empresa al mercado.',
    },
    {
      termino: 'Técnicas de ventas',
      significado:
        'Herramientas comerciales que dan lineamientos sobre cómo desarrollar un proceso de venta.',
    },
    {
      termino: 'Venta',
      significado:
        'Transacción comercial donde debe darse una relación gana- gana, entre el vendedor y el cliente.',
    },
    {
      termino: 'Venta telefónica',
      significado:
        'Tipo de venta a distancia en donde se hace uso de teléfonos o aplicativos informáticos como canal de venta.',
    },
  ],
  complementario: [
    {
      texto:
        'Dominancias cerebrales. Muñoz, J.; Gutiérrez, P. y Serrato, R. (2012). Los hemisferios cerebrales: dos estilos de pensar, dos modos de enseñar y aprender. Estilos de aprendizaje. Investigaciones y experiencias. Universidad de Córdoba. ',
      tipo: 'PDF',
      link: 'https://dialnet.unirioja.es/descarga/articulo/4664049.pdf',
    },
    {
      texto: 'Portafolio de la empresa. Corporación Diana.  (s.f.).',
      tipo: 'Página web',
      link: 'https://grupodiana.co/',
    },
    {
      texto:
        'Técnicas de ventas. Navarro, M. (2012). Técnicas de Ventas. Red Tercer Milenio.',
      tipo: 'Libro digital',
      link:
        'http://www.aliat.org.mx/BibliotecasDigitales/economico_administrativo/Tecnicas_de_venta.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },

      {
        nombre: 'Diana Carolina Jaramillo Rojas',
        cargo: 'Experta Temática',
        centro: 'Centro de Comercio - Regional Antioquia',
      },
      {
        nombre: 'Adriana López',
        cargo: 'Diseñadora Instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora Metodológica y Pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },

      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Luis Arévalo',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo Lopez ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Andrés Mauricio Santaella ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jorge Leonardo Camacho Pardo',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },

      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
