'use strict';


/* ============================================================
   CONFIGURACION DE LA TIENDA
============================================================ */

const CONFIG = {

  storeName: "Sasami",

  // WhatsApp Perú
  whatsappNumber: "51926637720",

  // Redes sociales — reemplaza estos links por los tuyos
  instagramUrl: "https://instagram.com/sasami.ropa",
  tiktokUrl: "https://www.tiktok.com/@sasami.ropa",
  facebookUrl: "https://www.facebook.com/sasami.ropa"

};


/* ============================================================
   CATEGORIAS
============================================================ */

const CATEGORIAS = {

  elegante: {
    nombre: 'Semielegante',
    lede: 'Para la oficina, una cena o una reunión importante',
    clase: ''
  },

  urbana: {
    nombre: 'Urbana',
    lede: 'Estilo callejero, actitud única',
    clase: 'cat-band--dark'
  },

  deportiva: {
    nombre: 'Deportiva',
    lede: 'Para entrenar o simplemente moverte con libertad',
    clase: ''
  },

  accesorios: {
    nombre: 'Accesorios',
    lede: 'El detalle que termina de armar el look',
    clase: ''
  }

};


/* ============================================================
   CATALOGO DE PRODUCTOS
============================================================ */

const PRODUCTOS = [

  /* ----------------------------------------------------------
     PRODUCTO 1
  ---------------------------------------------------------- */

  {
    id: 1,

    cat: 'elegante',

    nombre: 'Camisa Oversize',

    marca: 'Zara',

    precio: 75,

    tagTipo: 'Segunda mano',

    icono: 'i-camisa',

    imagen: 'camisa-oversize.jpg',

    material: 'Algodón',

    condicion: 'Excelente',

    colores: [
      {
        nombre: 'Negro',
        hex: '#111111'
      },
      {
        nombre: 'Blanco',
        hex: '#f2f2f2'
      }
    ],

    tallas: [
      'S',
      'M',
      'L'
    ],

    desc: 'Camisa oversize de segunda mano en excelente estado, ideal para un look semielegante casual.'
  },


  /* ----------------------------------------------------------
     PRODUCTO 2
  ---------------------------------------------------------- */

  {
    id: 2,

    cat: 'elegante',

    nombre: 'Abrigo Clásico',

    marca: 'Mango',

    precio: 145,

    tagTipo: 'Importación',

    icono: 'i-abrigo',

    imagen: 'abrigo-clasico.jpg',

    material: 'Lana mezcla',

    condicion: 'Como nuevo',

    colores: [
      {
        nombre: 'Beige',
        hex: '#cbb89d'
      },
      {
        nombre: 'Negro',
        hex: '#111111'
      }
    ],

    tallas: [
      'S',
      'M',
      'L'
    ],

    desc: 'Abrigo de importación con corte recto, perfecto para elevar cualquier outfit.'
  },


  /* ----------------------------------------------------------
     PRODUCTO 3
  ---------------------------------------------------------- */

  {
    id: 3,

    cat: 'urbana',

    nombre: 'Polera Oversize',

    marca: 'Nike',

    precio: 120,

    tagTipo: 'Importación',

    icono: 'i-hoodie',

    imagen: 'polera-oversize.jpg',

    material: 'Algodón premium',

    condicion: 'Excelente',

    colores: [
      {
        nombre: 'Negro',
        hex: '#111111'
      }
    ],

    tallas: [
      'S',
      'M',
      'L',
      'XL'
    ],

    desc: 'Polera oversize ideal para un look urbano y cómodo, con diseño moderno.'
  },


  /* ----------------------------------------------------------
     PRODUCTO 4
  ---------------------------------------------------------- */

  {
    id: 4,

    cat: 'urbana',

    nombre: 'Casaca Denim Vintage',

    marca: "Levi's",

    precio: 89,

    tagTipo: 'Segunda mano',

    icono: 'i-casaca',

    imagen: 'casaca-denim.jpg',

    material: 'Denim',

    condicion: 'Buen estado',

    colores: [
      {
        nombre: 'Azul',
        hex: '#1f3fd6'
      }
    ],

    tallas: [
      'M',
      'L'
    ],

    desc: 'Casaca de mezclilla vintage, pieza única con años de historia.'
  },


  /* ----------------------------------------------------------
     PRODUCTO 5
  ---------------------------------------------------------- */

  {
    id: 5,

    cat: 'deportiva',

    nombre: 'Jogger Nike',

    marca: 'Nike',

    precio: 85,

    tagTipo: 'Importación',

    icono: 'i-pantalon',

    imagen: 'jogger-nike.jpg',

    material: 'Poliéster',

    condicion: 'Excelente',

    colores: [
      {
        nombre: 'Negro',
        hex: '#111111'
      }
    ],

    tallas: [
      'S',
      'M',
      'L',
      'XL'
    ],

    desc: 'Jogger deportivo cómodo y resistente, ideal para entrenar o el día a día.'
  },


  /* ----------------------------------------------------------
     PRODUCTO 6
  ---------------------------------------------------------- */

  {
    id: 6,

    cat: 'deportiva',

    nombre: 'Zapatilla Runner',

    marca: 'Adidas',

    precio: 219,

    tagTipo: 'Importación',

    icono: 'i-zapatilla',

    imagen: 'zapatilla-runner.jpg',

    material: 'Malla transpirable',

    condicion: 'Excelente',

    colores: [
      {
        nombre: 'Negro',
        hex: '#111111'
      },
      {
        nombre: 'Blanco',
        hex: '#f2f2f2'
      }
    ],

    tallas: [
      '38',
      '39',
      '40',
      '41',
      '42'
    ],

    desc: 'Zapatilla ligera con buen agarre, perfecta para correr o entrenar.'
  },


  /* ----------------------------------------------------------
     PRODUCTO 7
  ---------------------------------------------------------- */

  {
    id: 7,

    cat: 'accesorios',

    nombre: 'Gorra New York',

    marca: 'New Era',

    precio: 55,

    tagTipo: 'Segunda mano',

    icono: 'i-gorra',

    imagen: 'gorra-new-york.jpg',

    material: 'Algodón',

    condicion: 'Buen estado',

    colores: [
      {
        nombre: 'Negro',
        hex: '#111111'
      }
    ],

    tallas: [
      'Única'
    ],

    desc: 'Gorra clásica con visera curva, un básico que combina con todo.'
  },


  /* ----------------------------------------------------------
     PRODUCTO 8
  ---------------------------------------------------------- */

  {
    id: 8,

    cat: 'accesorios',

    nombre: 'Lentes de Sol',

    marca: 'Ray-Ban',

    precio: 79,

    tagTipo: 'Importación',

    icono: 'i-lentes',

    imagen: 'lentes-sol.jpg',

    material: 'Acetato',

    condicion: 'Excelente',

    colores: [
      {
        nombre: 'Negro',
        hex: '#111111'
      },
      {
        nombre: 'Carey',
        hex: '#a9772f'
      }
    ],

    tallas: [
      'Única'
    ],

    desc: 'Lentes de sol con protección UV400 y marco liviano.'
  }

];


/* ============================================================
   UTILIDADES
============================================================ */

function formatoPrecio(n) {

  return 'S/ ' + n.toFixed(2);

}


/* ============================================================
   WHATSAPP
============================================================ */

function enlaceWhatsApp(mensaje) {

  return 'https://wa.me/' +
    CONFIG.whatsappNumber +
    '?text=' +
    encodeURIComponent(mensaje);

}


function mensajeGeneral() {

  return 'Hola ' +
    CONFIG.storeName +
    ', quisiera hacer una consulta sobre sus productos.';

}


function mensajeProducto(producto, color, talla) {

  return 'Hola ' +
    CONFIG.storeName +
    ', quiero pedir: "' +
    producto.nombre +
    '"' +
    ' — color ' +
    color +
    ', talla ' +
    talla +
    ' (' +
    formatoPrecio(producto.precio) +
    '). ¿Está disponible?';

}


/* ============================================================
   ETIQUETAS
============================================================ */

function claseTag(tagTipo) {

  return tagTipo === 'Segunda mano'
    ? 'card-tag--segunda'
    : 'card-tag--importacion';

}


/* ============================================================
   ICONOS SVG
============================================================ */

function figura(icono) {

  return '<svg aria-hidden="true">' +
    '<use href="#' +
    icono +
    '"/>' +
    '</svg>';

}


/* ============================================================
   IMAGEN DE PRODUCTO (con respaldo si la foto no existe)
============================================================ */

function imagenProducto(producto) {

  // Si "img/productos/archivo.jpg" todavia no existe en el
  // servidor, el <img> dispara onerror y lo reemplazamos por
  // el icono de la prenda, para no mostrar el cuadro roto.

  return '<img ' +
    'src="img/productos/' +
    producto.imagen +
    '" ' +
    'alt="' +
    producto.nombre +
    '" ' +
    'loading="lazy" ' +
    'onerror="handleImgError(this, \'' +
    producto.icono +
    '\')">';

}


function handleImgError(imgEl, icono) {

  imgEl.onerror = null;

  const wrap = document.createElement('div');

  wrap.className = 'fallback-icon';

  wrap.style.color = 'inherit';

  wrap.innerHTML = figura(icono);

  imgEl.replaceWith(wrap);

}


/* ============================================================
   TARJETA DE PRODUCTO
============================================================ */

function tarjetaProducto(p) {

  return (

    '<a class="col text-decoration-none" href="#/producto/' +
    p.id +
    '">' +

      '<div class="product-card">' +

        '<div class="ratio ratio-4x5 card-thumb">' +

          '<span class="card-tag ' +
          claseTag(p.tagTipo) +
          '">' +

            p.tagTipo +

          '</span>' +

          imagenProducto(p) +

        '</div>' +

        '<div class="card-body">' +

          '<p class="card-name">' +
            p.nombre +
          '</p>' +

          '<p class="card-price">' +
            formatoPrecio(p.precio) +
          '</p>' +

        '</div>' +

      '</div>' +

    '</a>'

  );

}


/* ============================================================
   PAGINA DE INICIO
============================================================ */

function paginaInicio() {

  return (

    /* --------------------------------------------------------
       HERO
    -------------------------------------------------------- */

    '<header class="hero" id="inicio">' +

      '<div class="container py-5">' +

        '<div class="row align-items-center g-4">' +

          '<div class="col-lg-7">' +

            '<p class="hero__badge">' +
              'Ropa de segunda mano y ropa de importación' +
            '</p>' +

            '<h1 class="hero__title">' +
              'Estilo importado, historia propia y estilo sin límites' +
            '</h1>' +

            '<p class="hero__lede">' +
              'Moda consciente, calidad y variedad en un solo lugar. ' +
              'Encuentra tu estilo entre prendas semielegantes, urbanas, deportivas y accesorios.' +
            '</p>' +

            '<div class="d-flex gap-3 flex-wrap mt-3">' +

              '<a href="#explora" class="btn btn-pink btn-lg rounded-pill">' +
                'Explora nuestras colecciones' +
              '</a>' +

              '<a class="btn btn-whatsapp btn-lg rounded-pill" ' +
                 'id="wa-hero" ' +
                 'target="_blank" ' +
                 'rel="noopener">' +

                'Pedir por WhatsApp' +

              '</a>' +

            '</div>' +

          '</div>' +


          /* IMAGEN HERO */

          '<div class="col-lg-5">' +

            '<div class="hero__art">' +

              '<img ' +
                'src="img/hero.jpg" ' +
                'alt="Colección de ropa Sasami" ' +
                'onerror="this.style.display=\'none\'">' +

            '</div>' +

          '</div>' +

        '</div>' +

      '</div>' +

    '</header>' +


    /* --------------------------------------------------------
       CARACTERISTICAS
    -------------------------------------------------------- */

    '<section class="features">' +

      '<div class="container">' +

        '<div class="row g-4 text-center">' +

          '<div class="col-md-4">' +

            '<div class="feature">' +

              '<span class="feature__icon">🌱</span>' +

              '<p class="feature__title">' +
                'Moda sostenible' +
              '</p>' +

              '<p class="feature__desc">' +
                'Dale una segunda vida a la ropa' +
              '</p>' +

            '</div>' +

          '</div>' +


          '<div class="col-md-4">' +

            '<div class="feature">' +

              '<span class="feature__icon">✅</span>' +

              '<p class="feature__title">' +
                'Calidad garantizada' +
              '</p>' +

              '<p class="feature__desc">' +
                'Prendas en excelente estado' +
              '</p>' +

            '</div>' +

          '</div>' +


          '<div class="col-md-4">' +

            '<div class="feature">' +

              '<span class="feature__icon">🌍</span>' +

              '<p class="feature__title">' +
                'Ropa de importación' +
              '</p>' +

              '<p class="feature__desc">' +
                'Tendencias de todo el mundo' +
              '</p>' +

            '</div>' +

          '</div>' +

        '</div>' +

      '</div>' +

    '</section>' +


    /* --------------------------------------------------------
       QUIENES SOMOS
    -------------------------------------------------------- */

    '<section class="quienes">' +

      '<div class="container">' +

        '<div class="row align-items-center g-4">' +

          '<div class="col-lg-7">' +

            '<h2 class="section-title">' +
              '¿Quiénes somos?' +
            '</h2>' +

            '<p class="quienes__text">' +
              'En Sasami creemos que la moda no solo se trata de verse bien, sino también de sentirse bien. ' +
              'Somos una tienda dedicada a la venta de ropa de segunda mano y ropa de importación, ' +
              'con el propósito de ofrecer estilos únicos, de calidad y accesibles.' +
            '</p>' +

            '<p class="quienes__text">' +
              'Nos apasiona la moda, la sostenibilidad y la idea de que cada prenda tiene una historia por contar. ' +
              'Únete a nuestra comunidad y encuentra tu estilo.' +
            '</p>' +

          '</div>' +


          /* IMAGEN QUIENES SOMOS */

          '<div class="col-lg-5">' +

            '<div class="quienes__art">' +

              '<img ' +
                'src="img/quienes.jpg" ' +
                'alt="Ropa y accesorios Sasami" ' +
                'loading="lazy" ' +
                'onerror="this.style.display=\'none\'">' +

            '</div>' +

          '</div>' +

        '</div>' +

      '</div>' +

    '</section>' +


    /* --------------------------------------------------------
       EXPLORA POR ESTILO
    -------------------------------------------------------- */

    '<section class="explora" id="explora">' +

      '<div class="container">' +

        '<h2 class="section-title text-center mb-4">' +
          'Explora por estilo' +
        '</h2>' +

        '<div class="row g-3 g-lg-4">' +


          /* SEMIELEGANTE */

          '<div class="col-6 col-lg-3">' +

            '<a href="#/categoria/elegante" class="style-tile style-tile--image">' +

              '<img ' +
                'src="img/categorias/elegante.jpg" ' +
                'alt="Ropa semielegante" ' +
                'loading="lazy" ' +
                'onerror="this.style.display=\'none\'">' +

              '<span>Semielegante</span>' +

            '</a>' +

          '</div>' +


          /* URBANA */

          '<div class="col-6 col-lg-3">' +

            '<a href="#/categoria/urbana" class="style-tile style-tile--image">' +

              '<img ' +
                'src="img/categorias/urbana.jpg" ' +
                'alt="Ropa urbana" ' +
                'loading="lazy" ' +
                'onerror="this.style.display=\'none\'">' +

              '<span>Urbana</span>' +

            '</a>' +

          '</div>' +


          /* DEPORTIVA */

          '<div class="col-6 col-lg-3">' +

            '<a href="#/categoria/deportiva" class="style-tile style-tile--image">' +

              '<img ' +
                'src="img/categorias/deportiva.jpg" ' +
                'alt="Ropa deportiva" ' +
                'loading="lazy" ' +
                'onerror="this.style.display=\'none\'">' +

              '<span>Deportiva</span>' +

            '</a>' +

          '</div>' +


          /* ACCESORIOS */

          '<div class="col-6 col-lg-3">' +

            '<a href="#/categoria/accesorios" class="style-tile style-tile--image">' +

              '<img ' +
                'src="img/categorias/accesorios.jpg" ' +
                'alt="Accesorios de moda" ' +
                'loading="lazy" ' +
                'onerror="this.style.display=\'none\'">' +

              '<span>Accesorios</span>' +

            '</a>' +

          '</div>' +


        '</div>' +

      '</div>' +

    '</section>'

  );

}


/* ============================================================
   PAGINA DE CATEGORIA
============================================================ */

function paginaCategoria(catKey) {

  const cat = CATEGORIAS[catKey];

  if (!cat) {

    return paginaNoEncontrado();

  }


  const productos = PRODUCTOS.filter(function (p) {

    return p.cat === catKey;

  });


  return (

    /* BREADCRUMB */

    '<div class="breadcrumb-bar">' +

      '<div class="container">' +

        '<nav class="breadcrumb">' +

          '<a href="#/">' +
            'Inicio' +
          '</a>' +

          '<span class="mx-2">/</span>' +

          '<span class="breadcrumb-item active">' +
            cat.nombre +
          '</span>' +

        '</nav>' +

      '</div>' +

    '</div>' +


    /* CABECERA */

    '<section class="cat-band ' +
      cat.clase +
    '">' +

      '<div class="container py-4">' +

        '<h2 class="cat-band__title">' +
          cat.nombre +
        '</h2>' +

        '<p class="cat-band__lede">' +
          cat.lede +
        '</p>' +

      '</div>' +

    '</section>' +


    /* PRODUCTOS */

    '<section class="container py-4 pb-5">' +

      '<div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3 g-lg-4">' +

        productos
          .map(tarjetaProducto)
          .join('') +

      '</div>' +

    '</section>'

  );

}


/* ============================================================
   PAGINA DE PRODUCTO
============================================================ */

let colorSeleccionado = null;

let tallaSeleccionada = null;


function paginaProducto(id) {

  const producto = PRODUCTOS.find(function (p) {

    return p.id === id;

  });


  if (!producto) {

    return paginaNoEncontrado();

  }


  const cat = CATEGORIAS[producto.cat];


  colorSeleccionado =
    producto.colores[0].nombre;


  tallaSeleccionada =
    producto.tallas[0];


  const relacionados = PRODUCTOS
    .filter(function (p) {

      return p.cat === producto.cat &&
             p.id !== producto.id;

    })
    .slice(0, 4);


  return (

    /* BREADCRUMB */

    '<div class="breadcrumb-bar">' +

      '<div class="container">' +

        '<nav class="breadcrumb">' +

          '<a href="#/">' +
            'Inicio' +
          '</a>' +

          '<span class="mx-2">/</span>' +

          '<a href="#/categoria/' +
            producto.cat +
          '">' +

            cat.nombre +

          '</a>' +

          '<span class="mx-2">/</span>' +

          '<span class="breadcrumb-item active">' +
            producto.nombre +
          '</span>' +

        '</nav>' +

      '</div>' +

    '</div>' +


    /* PRODUCTO */

    '<section class="container py-5">' +

      '<div class="row g-4">' +


        /* IMAGEN */

        '<div class="col-md-6">' +

          '<div class="detail-thumb ratio ratio-4x5">' +

            '<span class="card-tag ' +
              claseTag(producto.tagTipo) +
            '">' +

              producto.tagTipo +

            '</span>' +

            imagenProducto(producto) +

          '</div>' +

        '</div>' +


        /* INFORMACION */

        '<div class="col-md-6">' +

          '<p class="text-uppercase small text-muted mb-1" style="letter-spacing:.08em">' +
            cat.nombre +
          '</p>' +

          '<h1 class="h3 mb-2">' +
            producto.nombre +
          '</h1>' +

          '<p class="fw-bold fs-3 mb-3">' +
            formatoPrecio(producto.precio) +
          '</p>' +

          '<p class="mb-3">' +
            producto.desc +
          '</p>' +


          /* DETALLES */

          '<ul class="detail-detalles">' +

            '<li>' +
              '<b>Marca:</b> ' +
              producto.marca +
            '</li>' +

            '<li>' +
              '<b>Material:</b> ' +
              producto.material +
            '</li>' +

            '<li>' +
              '<b>Condición:</b> ' +
              producto.condicion +
            '</li>' +

          '</ul>' +


          /* COLORES */

          '<p class="fw-semibold mb-2 small text-uppercase">' +
            'Color' +
          '</p>' +

          '<div class="d-flex gap-2 mb-3" id="det-colores">' +

            producto.colores.map(function (c, i) {

              return (

                '<button ' +

                  'type="button" ' +

                  'class="swatch' +

                  (i === 0
                    ? ' is-active'
                    : '') +

                  '" ' +

                  'style="background:' +
                    c.hex +
                  '" ' +

                  'data-color="' +
                    c.nombre +
                  '" ' +

                  'title="' +
                    c.nombre +
                  '" ' +

                  'aria-label="Color ' +
                    c.nombre +
                  '">' +

                '</button>'

              );

            }).join('') +

          '</div>' +


          /* TALLAS */

          '<p class="fw-semibold mb-2 small text-uppercase">' +
            'Talla' +
          '</p>' +

          '<div class="d-flex gap-2 mb-4 flex-wrap" id="det-tallas">' +

            producto.tallas.map(function (t, i) {

              return (

                '<button ' +

                  'type="button" ' +

                  'class="size-btn' +

                  (i === 0
                    ? ' is-active'
                    : '') +

                  '" ' +

                  'data-talla="' +
                    t +
                  '">' +

                  t +

                '</button>'

              );

            }).join('') +

          '</div>' +


          /* WHATSAPP */

          '<button ' +

            'type="button" ' +

            'class="btn btn-whatsapp btn-lg" ' +

            'id="det-whatsapp">' +

            'Pedir por WhatsApp' +

          '</button>' +

        '</div>' +

      '</div>' +


      /* PRODUCTOS RELACIONADOS */

      (

        relacionados.length

        ?

        '<div class="mt-5">' +

          '<h2 class="h5 mb-3">' +
            'También te puede interesar' +
          '</h2>' +

          '<div class="row row-cols-2 row-cols-md-4 g-3">' +

            relacionados
              .map(tarjetaProducto)
              .join('') +

          '</div>' +

        '</div>'

        : ''

      ) +

    '</section>'

  );

}


/* ============================================================
   EVENTOS DE LA PAGINA DE PRODUCTO
============================================================ */

function conectarPaginaProducto(producto) {

  const btnWa =
    document.getElementById('det-whatsapp');


  const colores =
    document.getElementById('det-colores');


  const tallas =
    document.getElementById('det-tallas');


  /* ----------------------------------------------------------
     COLORES
  ---------------------------------------------------------- */

  if (colores) {

    colores
      .querySelectorAll('.swatch')
      .forEach(function (b) {

        b.addEventListener('click', function () {

          colorSeleccionado =
            b.dataset.color;


          colores
            .querySelectorAll('.swatch')
            .forEach(function (s) {

              s.classList.remove(
                'is-active'
              );

            });


          b.classList.add(
            'is-active'
          );

        });

      });

  }


  /* ----------------------------------------------------------
     TALLAS
  ---------------------------------------------------------- */

  if (tallas) {

    tallas
      .querySelectorAll('.size-btn')
      .forEach(function (b) {

        b.addEventListener('click', function () {

          tallaSeleccionada =
            b.dataset.talla;


          tallas
            .querySelectorAll('.size-btn')
            .forEach(function (s) {

              s.classList.remove(
                'is-active'
              );

            });


          b.classList.add(
            'is-active'
          );

        });

      });

  }


  /* ----------------------------------------------------------
     WHATSAPP PRODUCTO
  ---------------------------------------------------------- */

  if (btnWa) {

    btnWa.addEventListener(
      'click',
      function () {

        window.open(

          enlaceWhatsApp(

            mensajeProducto(
              producto,
              colorSeleccionado,
              tallaSeleccionada
            )

          ),

          '_blank',

          'noopener'

        );

      }
    );

  }

}


/* ============================================================
   PAGINA NO ENCONTRADA
============================================================ */

function paginaNoEncontrado() {

  return (

    '<div class="container py-5 text-center">' +

      '<h1 class="h3">' +
        'No encontramos esa página' +
      '</h1>' +

      '<p>' +

        '<a href="#/">' +

          'Volver al inicio' +

        '</a>' +

      '</p>' +

    '</div>'

  );

}


/* ============================================================
   ROUTER
============================================================ */

function partesRuta() {

  return location.hash
    .replace(/^#\/?/, '')
    .split('/')
    .filter(Boolean);

}


/* ============================================================
   NAV ACTIVA
============================================================ */

function marcarNavActiva(catKey) {

  document
    .querySelectorAll('.cat-nav a')
    .forEach(function (a) {

      a.classList.remove(
        'is-active'
      );

    });


  const activo = catKey

    ?

    document.querySelector(
      '.cat-nav a[href="#/categoria/' +
      catKey +
      '"]'
    )

    :

    document.querySelector(
      '.cat-nav a[href="#/"]'
    );


  if (activo) {

    activo.classList.add(
      'is-active'
    );

  }

}


/* ============================================================
   RENDER
============================================================ */

function render() {

  const partes =
    partesRuta();


  const app =
    document.getElementById('app');


  /* ----------------------------------------------------------
     CATEGORIA
  ---------------------------------------------------------- */

  if (
    partes[0] === 'categoria' &&
    partes[1]
  ) {

    app.innerHTML =
      paginaCategoria(
        partes[1]
      );


    marcarNavActiva(
      partes[1]
    );

  }


  /* ----------------------------------------------------------
     PRODUCTO
  ---------------------------------------------------------- */

  else if (
    partes[0] === 'producto' &&
    partes[1]
  ) {

    const id =
      Number(partes[1]);


    app.innerHTML =
      paginaProducto(id);


    const producto =
      PRODUCTOS.find(
        function (p) {

          return p.id === id;

        }
      );


    if (producto) {

      marcarNavActiva(
        producto.cat
      );


      conectarPaginaProducto(
        producto
      );

    }

  }


  /* ----------------------------------------------------------
     INICIO
  ---------------------------------------------------------- */

  else {

    app.innerHTML =
      paginaInicio();


    marcarNavActiva(
      null
    );


    const waHero =
      document.getElementById(
        'wa-hero'
      );


    if (waHero) {

      waHero.href =
        enlaceWhatsApp(
          mensajeGeneral()
        );

    }

  }


  window.scrollTo({
    top: 0,
    behavior: 'auto'
  });

}


/* ============================================================
   BOTONES GENERALES WHATSAPP Y REDES SOCIALES
============================================================ */

function conectarBotonesGenerales() {

  const linkWa =
    enlaceWhatsApp(
      mensajeGeneral()
    );


  /* BOTON NAV + FLOTANTE (WhatsApp) */

  [
    'wa-nav',
    'wa-fab'
  ].forEach(function (id) {

    const el =
      document.getElementById(id);


    if (el) {

      el.href =
        linkWa;

    }

  });


  /* ICONO INSTAGRAM DEL NAVBAR */

  const igNav =
    document.getElementById('ig-nav');


  if (igNav) {

    igNav.href =
      CONFIG.instagramUrl;

  }


  /* REDES SOCIALES DEL FOOTER */

  const redesFooter = {
    'footer-ig': CONFIG.instagramUrl,
    'footer-tiktok': CONFIG.tiktokUrl,
    'footer-fb': CONFIG.facebookUrl
  };


  Object.keys(redesFooter).forEach(function (id) {

    const el =
      document.getElementById(id);


    if (el) {

      el.href =
        redesFooter[id];

    }

  });


  /* FOOTER */

  const footerWa =
    document.getElementById(
      'footer-whatsapp'
    );


  if (footerWa) {

    footerWa.textContent =
      'WhatsApp: +' +
      CONFIG.whatsappNumber;

  }

}


/* ============================================================
   EVENTOS
============================================================ */

window.addEventListener(
  'hashchange',
  render
);


document.addEventListener(
  'DOMContentLoaded',
  function () {

    conectarBotonesGenerales();

    render();

  }
);