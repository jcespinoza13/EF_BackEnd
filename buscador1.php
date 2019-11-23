<?php
$ciudad = $_POST['ciudad'];
$tipo = $_POST['tipo'];
$rango =  $_POST['rango'];

  getData();

  function getData(){
    $data_file = fopen("./data/data-1.json","r");
    $data_readed = fread($data_file, filesize("./data/data-1.json"));
    // echo fread($data_file, filesize("./data/data-1.json"));
    $data = json_decode($data_readed, true);
    fclose($data_file);

    $codigo1 = '<div class="row">';
    $codigo1 = $codigo1 .'<div class="col s12 m12 l12">';
    $codigo1 = $codigo1 .'<div class="card horizontal large" id="inmuebles">';
    $codigo1 = $codigo1 .'<div class="card-image left">';
    $codigo1 = $codigo1 .'<img src="img/home.jpg">';
    $codigo1 = $codigo1 .'</div>';
    $codigo1 = $codigo1 .'<div class="card-stacked right">';
    $codigo1 = $codigo1 .'<div class="card-content">';
    $codigo1 = $codigo1 .'<section>';


    $codigo2 = '   </section>';
    $codigo2 = $codigo2 .'</div>';
    $codigo2 = $codigo2 .'<div class="card-action">';
    $codigo2 = $codigo2 .'<a href="#">Ver más</a>';
    $codigo2 = $codigo2 .'</div>';
    $codigo2 = $codigo2 .'</div>';
    $codigo2 = $codigo2 .'</div>';
    $codigo2 = $codigo2 .'</div>';
    $codigo2 = $codigo2 .'</div>';

    $index = 0;
    $text = '';
    foreach ($data as $data) {
      // code...

        foreach ($data as $key => $value) {
          $text = $text ."<strong>" .$key .": </strong>" .$value . "<br>";
      }

      $array[$index] = $text;

      $index = $index + 1;
      return $codigo1 .$text .$codigo2;
    }
    // echo $codigo1 .$text .$codigo2;
    // print_r($array);
    // return $array;
  }

// function imprimeText(key, value) {
//   $text =
//
// }

// function  imprimeHtml(titulo, dato){
//
// $codigo = '<div class="row">' +
//             '<div class="col s12 m12 l12">' +
//               '<div class="card horizontal large" id="inmuebles">' +
//                 '<div class="card-image left">' +
//                   '<img src="img/home.jpg">' +
//                   '</div>' +
//                   '<div class="card-stacked right">' +
//                   '<div class="card-content">' +
//                     '<section>' +
//                       '<strong>' .$titulo:</strong> "347-866 Laoreet Road" <br>'
//
//               <strong>Ciudad:</strong> "Los Angeles" <br>
//               <strong>Telefono:</strong> "997-640-8188"<br>
//               <strong>Codigo_Postal:</strong> "94526-134" <br>
//               <strong>Tipo:</strong> "Casa de Campo" <br>
//               <strong>Precio:</strong> "$16,048"
//             </section>
//           </div>
//           <div class="card-action">
//             <a href="#">Ver más</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//
//
// }

 ?>
