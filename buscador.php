<?php

$ciudad = $_POST['ciudad'];
$tipo = $_POST['tipo'];
$rango =  $_POST['rango'];

// $ciudad = "Los Angeles";
// $tipo = "Casa";
// $ciudad = "";
// $tipo = "";
// $rango = "36000;40000";

$pos = strpos($rango, ";");

$ran = str_split($rango,$pos);
$ran1 = (int)$ran[0];
$ran = substr($rango,$pos+1);
$ran2 = (int)$ran;

  getData($ciudad, $tipo, $ran1, $ran2);

  function getData($ciudad, $tipo, $ran1, $ran2){
    $data_file = fopen("./data/data-1.json","r");
    $data_readed = fread($data_file, filesize("./data/data-1.json"));
    // echo fread($data_file, filesize("./data/data-1.json"));
    $data = json_decode($data_readed, true);
    fclose($data_file);

    foreach ($data as $data) {
      // code...
      $text = '';

        foreach ($data as $key => $value) {
          // echo '<pre>';
          $text = $text ."<strong>" .$key .": </strong>" .$value . "<br>";

        if($key === "Ciudad") {
            $city = $value;
          }
        if($key === "Tipo") {
            $tip = $value;
          }
        if($key === "Precio") {
          $precio = str_replace("$", "", $value);
          $precio = str_replace(",", "", $precio);
          $pr = $precio;
          imprimeHtml($text, $city, $tip, $pr, $ciudad, $tipo, $ran1, $ran2);
        }

      // echo json_encode($data);

      }
    }

  }


function  imprimeHtml($dato, $city, $tip, $pr, $ciudad, $tipo, $ran1, $ran2){

  $codigo1 = '<div class="row">';
  $codigo1 = $codigo1 .'<div class="col s12 m12 l12">';
  $codigo1 = $codigo1 .'<div class="card horizontal large" id="inmuebles">';
  $codigo1 = $codigo1 .'<div class="card-image left">';
  $codigo1 = $codigo1 .'<img src="img/home.jpg">';
  $codigo1 = $codigo1 .'</div>';
  $codigo1 = $codigo1 .'<div class="card-stacked right">';
  $codigo1 = $codigo1 .'<div class="card-content">';
  $codigo1 = $codigo1 .'<section>';
  $codigo1 = $codigo1 .$dato;
  $codigo1 = $codigo1 .'</section>';
  $codigo1 = $codigo1 .'</div>';
  $codigo1 = $codigo1 .'<div class="card-action">';
  $codigo1 = $codigo1 .'<a href="#">Ver más</a>';
  $codigo1 = $codigo1 .'</div>';
  $codigo1 = $codigo1 .'</div>';
  $codigo1 = $codigo1 .'</div>';
  $codigo1 = $codigo1 .'</div>';
  $codigo1 = $codigo1 .'</div>';

  if($ciudad == "" && $tipo == "" && $ran1 == 0 && $ran2 == 0) {
    print ($codigo1);
  }elseif($ciudad == "" && $tipo == "" && $pr >= $ran1 && $ran2 >= $pr) {
    print ($codigo1);
  } elseif ($ciudad == $city && $tipo == $tip && $pr >= $ran1 && $ran2 >= $pr) {
    print ($codigo1);
  } elseif ($ciudad == "" && $tipo == $tip && $pr >= $ran1 && $ran2 >= $pr) {
    print ($codigo1);
  } elseif ($ciudad == $city && $tipo == "" && $pr >= $ran1 && $ran2 >= $pr) {
    print ($codigo1);
  }
  return $codigo1;
}

 ?>
