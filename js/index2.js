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
        document.getElementById("dinamic").innerHTML = "<h3 class='center'>No existen registros para esta seleción</h3>";
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

  var HtmlNode = document.getElementById("selectCiudad");
  $.ajax({
    url: './motor.php',
    dataType: 'text',
    cache: false,
    contentType: false,
    processData: false,
    type: 'post',
    success: function(myjson){
      var myElements = document.querySelectorAll("selCiudad");
      var codigo = '<select name="ciudad" id="selectCiudad">';
      codigo = codigo + '<option value="" selected>Elige una ciudad</option>';
      codigo = codigo + myjson;
      codigo = codigo + '</select>';
      alert(myjson);
      myElements[0].innerHTML = codigo;
      // HtmlNode.innerHTML = codigo;
      $("#selectCiudad").append(myjson);

      // $('#selectCiudad').append(myjson);
      // alert(HtmlNode.innerHTML);
      // var myObj = json_decode(myjson);
      // // var myObj = myjson;
      // var text = "";
      // var i;
      // alert(myObj);
      // for (i = 0; i < myObj.length; i++) {
      //   if(myObj[i] == ',' || myObj[i] == ']'){
      //     alert(i + text);
      //       // $('#selectCiudad').append("<option value=" + text + ">" +  text + "</option>");
      //       // HtmlNode.innerHTML = HtmlNode.innerHTML + "<option value=" + text + ">" +  text + "</option>";
      //
      //       text = "";
      //   } else {
      //     if(myObj[i] !== '"' || myObj[i] !== '(' || myObj[i] !== ')' || myObj[i] !== '[' || myObj[i] !== ']' || myObj[i] !== "'\'") {
      //       alert(text );
      //       text += text + myObj[i];
      //     }
      //
      //   }
      // }


      // myjson.forEach( function(val,i) {
      //   HtmlNode.innerHTML = HtmlNode.innerHTML + "<option value=" + val.Ciudad + ">" +  val.Ciudad + "</option>";
      //   alert(myjson);
      // })


      // var dato = array();
      // dato = $myjsona;
      // var $json = json.parse($myjson);
      // alert($json);
      // myFunc($json);


      // foreach (i = 0; a[i]; i++) {
      //   alert(a[i]);
      //   var option = document.createElement("option");
      //   option.text = a[i];
      //   option.value = a[i];
      //   myElement.appendChild(option);
        // var option = document.createElement("option");
        // option.text = a[i];
        // myElement.add(option);
        // myElement.innerHTML = innerHTML + '"<option value="' + a[i] +  '">"' +  a[i] + '"</option> <br>"';
        // myElement.innerHTML = a[i];

      // }



      // // for (i = 1; i < dato.length; i++) {
      // for (x of a){
      //   text = text + "<option value=" + a[x] +  ">" +  a[x] + "</option> <br>";
      // }
      //   alert(text);
      //   myElement.innerHTML = text;
      $("select").material_select();jQuery
    },
    error: function(){
      alert("error al enviar el formulario");
    }
  })
}

// function myFunc(items) {
//   alert(items);
//   $.each(items, function (i, item) {
//     $('#selectCiudad').append($('<option>', {
//         value: item.value,
//         text : item.text
//     }));
// });
  // var x, txt = "";
  // txt += "<select>"
  // txt += '<option value="" selected> Elige una opción</option>'
  // for (x in myObj) {
  //   txt += "<option value=" + myObj[x] + ">" +  myObj[x] + "</option>";
  // }
  // txt += "</select>"
// var o = new Option('option text', 'value');
// o.innerHTML = 'option text';
// document.getElementById('selectCiudad').appendChild(o);
  /*
  var i = 0;
  var txt = "";

  txt += "<select>"
  txt += '<option value="" selected> Elige una opción</option>'
  for (var i in myObj) {
    txt += "<option value=" + myObj[i].Ciudad + ">" +  myObj[i].Ciudad + "</option>";
  }
  document.getElementById("selectCiudad").innerHTML = txt; */
// }

function llenaSelect(){
var obj, dbParam, xmlhttp, myObj, x, txt = "";
obj = { table: "customers", limit: 20 };
dbParam = JSON.stringify(obj);
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    myObj = JSON.parse(this.responseText);
    txt += "<select>"
    for (x in myObj) {
      txt += "<option>" + myObj[x].name;
    }
    txt += "</select>"
    document.getElementById("demo").innerHTML = txt;
  }
};
xmlhttp.open("POST", "json_demo_db_post.php", true);
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send("x=" + dbParam);
}
