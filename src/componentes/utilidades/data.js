const productos = [
  {
    id: "axad1213",
    nombre: "Tarta de Frutas",
    descripcion:
      "Descubrí la perfección de nuestras Tartas Frutales, donde la jugosidad de las frutas se combina con la suavidad de la masa y una suave capa de crema chantilly. Una explosión de sabores en cada rebanada. 🌟¡Hacé tu pedido ahora y llevá la frescura a tu mesa! Podes encargarla de frutillas, durazno, frutos rojos, la que quieras 🍓🍒🍑🍍🥝🍇 ",
    imagen: "/img/tartadefruta.jpg",
  },
  {
    id: "axad657",
    nombre: "Selva Negra",
    descripcion:
      "Nada como el clásico de nuestra tentadora torta Selva Negra. 🍒🍫 Descubrí el equilibrio perfecto entre chocolate, cerezas y crema en cada bocado. 🍰✨¡Hacé tu pedido ahora y dejá que el sabor hable por sí mismo!",
    imagen: "/img/selvanegra.jpg",
  },
  {
    id: "axad658",
    nombre: "Box Brown",
    descripcion:
      "✨Seis Cupcakes de chocolate decorados con un frosting de crema Bariloche!!🤤🤤 Regalá momentos dulces con nuestro encantador Box de Cupcakes! 🧁✨ Descubrí una variedad irresistible de sabores y decoraciones, perfectos para endulzar cualquier ocasión.",
    imagen: "/img/boxbrown.jpg",
  },
  {
    id: "axfghj789",
    nombre: "Box Merry Chrystmas",
    descripcion:
      "✨🎄 Seis Cupcakes de vainilla con frosting de Buttercream/Chantilly, podes pedirlos rellenos de dulce de leche 🤤🤤🧁✨ Descubrí una variedad irresistible de sabores y decoraciones, perfectos para endulzar cualquier ocasión.",
    imagen: "/img/boxmerychrystmas.jpg",
  },
  {
    id: "fdhg54",
    nombre: "Box Alfajores",
    descripcion:
      "Bienvenido al festín de sabores con nuestro exclusivo Box de Alfajores! 🎁🍫 Podes combinarlos como quieras ☺  * Chocolate * Nuez y chocolate * Cordobeses. Este box es una combinación de alfajores con leche y azúcar, perfecto para cualquier ocasión",
    imagen: "/img/boxalfajores.jpg",
  },
  {
    id: "aghh657",
    nombre: "Lemon Pie",
    descripcion:
      "¡Deleitá tu paladar con el exquisito sabor a limón en cada bocado de nuestro Lemon Pie artesanal! 🍋✨ Descubrí la combinación perfecta de la acidez refrescante y la suavidad cremosa en cada porción. ¿Listo para un festín de sabores?¡Hacé tu pedido ahora y sumergite en el placer cítrico! 🥧💛",
    imagen: "/img/lemonpie.jpg",
  },
  {
    id: "kjliu89",
    nombre: "Tarta Cabsha",
    descripcion:
      "¡Dejate envolver por la tentación con nuestras irresistibles Tartas Cabsha! 🍫✨ Experimenta el equilibrio perfecto entre la suavidad del chocolate y la intensidad del dulce de leche en cada exquisita porción.",
    imagen: "/img/cabsha.jpg",
  },
  {
    id: "cvb657",
    nombre: "Tarta de Coco y Dulce de Leche",
    descripcion:
      "¡Sumergite en el dulce placer de nuestras tartas de dulce de leche y coco! 🍰🥥Dejate llevar por la cremosidad del dulce de leche y el exquisito sabor del coco en cada bocado. Perfectas para celebrar cualquier ocasión especial o simplemente endulzar tu día.",
    imagen: "/img/cocomilk.jpg",
  },
  {
    id: "tyu678",
    nombre: "Rogel",
    descripcion:
      "Descubrí la exquisitez del rogel en cada capa! 🍰✨ Nuestros rogeles son una explosión de sabores: dulce de leche sedoso entre capas de masa crocante y el más rico merengue italiano. El postre perfecto.",
    imagen: "/img/rogel.jpg",
  },
  {
    id: "fng678",
    nombre: "Number Cake",
    descripcion:
      "Torta personalizada en tonos rosas💕 Rellena con crema Bariloche, la más rica de todas!      ",
    imagen: "/img/numbercake.jpg",
  },
];

const obtenerProductos = new Promise((resolve, reject) => {
  //Simulamos un retraso de red
  setTimeout(() => {
    resolve(productos);
  }, 2000);
});
export default obtenerProductos;
