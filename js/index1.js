/*
  Función que inicializa el elemento Slider
*/

$('select').material_select();

$(document).ready(function() {
    $('#formulario').submit(submitButton);
    $('#mostrarTodos').submit(muestratodo);


    // $.getJSON('./data/data-1.json', function(data) {
    //
    //   $.each(data, function(key, value) {
    //
    //     if(key == 'Ciudad'){
    //     $("#selectCiudad").append('<option name="' + value + '">' + value + '</option>');
    //     }
    //     if(key == 'Tipo'){
    //     $("#selectTipo").append('<option name="' + value + '">' + value + '</option>');
    //     }
    //   }); // close each()
    // }); // close getJSON()
  });

  function muestratodo(event){
    event.preventDefault();
    var ciudad =  "";
    var tipo = "";
    var rango = "0;0";
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
        if (data=="true") {
          window.location.href = 'index.html';
        }else {
          alert(data);
          document.getElementById("dinamic").innerHTML = data;
        }
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
        if (data=="true") {
          window.location.href = 'index.html';
        }else {
          alert(data);
          document.getElementById("dinamic").innerHTML = data;
        }
      },
      error: function(){
        alert("error al enviar el formulario");
      }
    })
  }

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
