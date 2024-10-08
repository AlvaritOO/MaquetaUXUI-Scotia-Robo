
//scroll + de  50 cambia nav
    $(window).scroll(function(){
      var scrollTop = $(window).scrollTop();
        if ($(this).scrollTop() >= 40) {
        $('.contenedor-navegacion').addClass('navegacion-white');
        $('.myHeader').addClass('back-white');
        } else {
        $('.contenedor-navegacion').removeClass('navegacion-white');
        $('.myHeader').removeClass('back-white');
        }
    });


//scroll + de  400
    $(window).scroll(function(){
        if ($(this).scrollTop() > 400) {
            $('.logo-cla').addClass('logo-cla-small').removeClass('logo-cla');
            $('.logo-bnp').addClass('logo-bnp-small').removeClass('logo-bnp');
            $('.logo-cslc').addClass('logo-cslc-small').removeClass('logo-cslc');
            $('header').addClass('py-1').removeClass('py-3');
        } else {
            $('.logo-cla-small').addClass('logo-cla').removeClass('logo-cla-small');
            $('.logo-bnp-small').addClass('logo-bnp').removeClass('logo-bnp-small');
            $('.logo-cslc-small').addClass('logo-cslc').removeClass('logo-cslc-small');
            $('header').addClass('py-3').removeClass('py-1');
        }   
    });

  
//ctc
    $('.btn-ayuda-flotante').on('click', function(e) {
        //$(".ctc-open").css("visibility", "visible");
        $(".ctc-open").css("visibility", "visible").addClass("animate__animated animate__bounceInRight");
      
      });

      $('#ContainerCtcDismiss').on('click', function(e) {
        $(".ctc-open").css("visibility", "visible").addClass("animate__animated animate__bounceOutRight");
      });



//modal eliminar beneficiario
$("#confirmarEliminacion").on('click', function (e) {
  $("#exampleModal").modal('hide');
  alert('mostramos un toast que diga "Beneficiario eliminado correctamente."');

})


//modal eliminar beneficiario
$("#pedirAsistencia").on('click', function (e) {
  alert('mostramos un toast que diga "Un ejecutivo se contactará contigo a la brevedad."');

})
          


$(function(){
  // Enables popover
  $("[data-bs-toggle=popover]").popover();
});


//muestra mensaje de encuesta
$("#enviarEncuesta").on('click', function (e) {
 $(".encuesta-ok").show();
 $(".contenedor-encuesta").fadeOut();

})


//toast nuevo beneficiario
var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)
    toast.show();
  
  })
}

var toastTrigger2 = document.getElementById('liveToastBtn2')
var toastLiveExample2 = document.getElementById('liveToast2')
if (toastTrigger2) {
  toastTrigger2.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample2)
    toast.show();
  
  })
}
//toast nuevo beneficiario
var toastTrigger3 = document.getElementById('liveToastBeneficiarioBtn')
var toastLiveExample3 = document.getElementById('liveToastBeneficiario')
if (toastTrigger3) {
  toastTrigger3.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample3)
    toast.show();
  
  })
}
//toast nuevo beneficiario mobile
var toastTrigger3 = document.getElementById('liveToastBeneficiarioBtnM')
var toastLiveExample3 = document.getElementById('liveToastBeneficiarioM')
if (toastTrigger3) {
  toastTrigger3.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample3)
    toast.show();
  
  })
}
//toast Nserie correcto
var toastTrigger4 = document.getElementById('liveToastNserieABtn')
var toastLiveExample4 = document.getElementById('liveToastNserieA')
if (toastTrigger4) {
  toastTrigger4.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample4)
    toast.show();
  
  })
}
//toast Nserie incorrecto
var toastTrigger5 = document.getElementById('liveToastNserieBBtn')
var toastLiveExample5 = document.getElementById('liveToastNserieB')
if (toastTrigger5) {
  toastTrigger5.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample5)
    toast.show();
  
  })
}
//toast encuesta enviada
var toastTrigger6 = document.getElementById('liveToastEncuestaBtn')
var toastLiveExample6 = document.getElementById('liveToastEncuesta')
if (toastTrigger6) {
  toastTrigger6.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample6)
    toast.show();

  })
}

//Cuenta cantidad de beneficiarios

var cantBeneficiarios = document.getElementsByClassName('item-beneficiario').length;
$( ".cantidad-beneficiarios" ).text(cantBeneficiarios);

      

// variables
var $header_top = $('.header-top');
var $nav = $('nav');



// loading
$(function() {
    var n = 0;
    setInterval(function() {
        n = Math.floor((Math.random() * 5));
        $(".cont-loading div").hide();
        $(".cont-loading").find('div:eq('+n+')').fadeIn();
    },8000);
  });

//inicia tooltips
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })


   //scroll reveal 
    ScrollReveal().reveal('#carousel', { duration: 2500 });
    ScrollReveal().reveal('.sub-carrusel', {delay: 800, duration: 3500 });
    ScrollReveal().reveal('#carateristicas', { delay: 1000, duration: 2000 });
    ScrollReveal().reveal('.card-plan', { delay: 200, interval: 200 });
    ScrollReveal().reveal('#letra-chica', { delay: 600, interval: 200 });
    ScrollReveal().reveal('#exclusiones', { delay: 800, interval: 200 });
    ScrollReveal().reveal('.contenedor-plan', { delay: 800, interval: 200 });
    ScrollReveal().reveal('#OfertasProductos', { delay: 800, interval: 200 });
  
    ScrollReveal().reveal('#beneficios', { delay: 600, interval: 200 });
    ScrollReveal().reveal('.title-sabias', { delay: 4000, interval: 200 });
    ScrollReveal().reveal('.imagen-req', { delay: 500, interval: 200 });

    ScrollReveal().reveal('#clictocall', { delay: 100, interval: 200 });
    ScrollReveal().reveal('#siniestro', { delay: 200, interval: 200 });
    ScrollReveal().reveal('#legales', { delay: 200, interval: 200 });
    ScrollReveal().reveal('.cont-felicitaciones', { delay: 1500, interval: 200 });
    

    var splide = new Splide( '.splide', {
      perPage: 2,
      rewind : false,
      gap: 20,
      speed: 400,
      padding: '4rem',
      pagination: "slider",
      width: '100%',
      autoHeight: true,
      height : '350px',
      autoplay: true,
      pauseOnHover: true,
      breakpoints: {
        1024: {
          perPage: 2,
          //height : '10rem',
        },
        834: {
          perPage: 2,
          padding: '0rem',
          width: '50%'
        },
        768: {
          perPage: 2,
          width: '100%',
          height : '850px',
        },
        480: {
          perPage: 1,
          padding: '0rem',
          height : '100%',
        },

          
        },
      } );
    
    splide.mount();



//skeleton

function mostrarOcultar(ids, boton) {
  var cambioAVisible = false;

  // Comprueba si alguno de los elementos está oculto
  for (var i = 0; i < ids.length; i++) {
    var elemento = document.getElementById(ids[i]);
    if (elemento && elemento.style.display == "none") {
      cambioAVisible = true;
      break;
    }
  }

  // Muestra u oculta los elementos y cambia el texto del botón
  for (var i = 0; i < ids.length; i++) {
    var elemento = document.getElementById(ids[i]);
    if (!elemento) {
      continue;
    }
    if (cambioAVisible) {
      elemento.style.display = "inline";
    } else {
      elemento.style.display = "none";
    }
  }

  // Cambia el texto del botón
  if (cambioAVisible) {
    boton.textContent = "Ocultar detalles";
  } else {
    boton.textContent = "Ver todos los detalles";
  }

  return true;
}
