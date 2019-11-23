/*
  Creación de una función personalizada para jQuery que detecta cuando se detiene el scroll en la página
*/
$.fn.scrollEnd = function(callback, timeout) {
  $(this).scroll(function(){
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};
/*
  Función que inicializa el elemento Slider
*/

function inicializarSlider(){
  $("#rangoPrecio").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 100000,
    from: 200,
    to: 80000,
    prefix: "$"
  });
}
/*
  Función que reproduce el video de fondo al hacer scroll, y deteiene la reproducción al detener el scroll
*/
function playVideoOnScroll(){
  var ultimoScroll = 0,
      intervalRewind;
  var video = document.getElementById('vidFondo');
  $(window)
    .scroll((event)=>{
      var scrollActual = $(window).scrollTop();
      if (scrollActual > ultimoScroll){
       video.play();
     } else {
        //this.rewind(1.0, video, intervalRewind);
        video.play();
     }
     ultimoScroll = scrollActual;
    })
    .scrollEnd(()=>{
      video.pause();
    }, 10)
}

inicializarSlider();
playVideoOnScroll();

// Activa select en materialize..
$('select').material_select();

/*
  funcion que muestra todo el contenido de json
*/

$(document).ready(function() {
    $('#formulario').submit(submitButton);
    $('#formulario2').submit(muestratodo);
    $('document').ready(function(){
      cargaCiudad();
      cargaTipo();
    });

  });


function muestratodo(event){
  event.preventDefault();
  var ciudad =  "";
  var tipo = "";
  var rango = "0;0";
  $.ajax({
    url: './buscador.php',
    type: 'POST',
    data: {ciudad: ciudad, tipo: tipo, rango: rango},
    success: function(data){
        // alert(data);
        document.getElementById("dinamic").innerHTML = data;
    },
    error: function(){
      alert("error al enviar el formulario");
    }
  });
}

function submitButton(event){
  event.preventDefault();
  var ciudad =  $('#selectCiudad').val();
  var tipo = $('#selectTipo').val();
  var rango = $('#rangoPrecio').val();
  form_data = new FormData();
  form_data.append('ciudad', ciudad);
  form_data.append('tipo', tipo);
  form_data.append('rango', rango);
  $.ajax({
    url: './buscador.php',
    dataType: 'text',
    cache: false,
    contentType: false,
    processData: false,
    data: form_data,
    type: 'post',
    success: function(data){
        // alert(data);
        if(data == "") {
        document.getElementById("dinamic").innerHTML = "<div><h3 class='rowTitulo center'>No existen registros para esta seleción</h3></div>";
      } else {
        document.getElementById("dinamic").innerHTML = data;
      }
    },
    error: function(){
      alert("error al enviar el formulario");
    }
  })
}


function cargaCiudad(){
  var types = 1;
  form_data = new FormData();
  form_data.append('type', types);
  $.ajax({
    url: './motor.php',
    dataType: 'text',
    cache: false,
    contentType: false,
    processData: false,
    type: 'post',
    data: form_data,
    success: function(myjson){

      var codigo = '<select name="ciudad" id="selectCiudad">';
      codigo = codigo + '<option value="" selected>Elige una ciudad</option>';
      codigo = codigo + myjson;
      codigo = codigo + '</select>';
      // alert(myjson);
      $("#selectCiudad").append(myjson);
      $("select").material_select();
    },
    error: function(){
      alert("error al enviar el formulario");
    }
  })
}
function cargaTipo(){
  var types = 2;
  form_data = new FormData();
  form_data.append('type', types);
  $.ajax({
    url: './motor.php',
    dataType: 'text',
    cache: false,
    contentType: false,
    processData: false,
    type: 'post',
    data: form_data,
    success: function(myjson){

      // alert(myjson);
      $("#selectTipo").append(myjson);
      $("select").material_select();
    },
    error: function(){
      alert("error al enviar el formulario");
    }
  })
}
