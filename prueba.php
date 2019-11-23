<?php

// get the q parameter from URL
// $q = $_REQUEST["q"];
$ciudad = $_POST['ciudad'];
$tipo = $_POST['tipo'];
$rango =  $_POST['rango'];

// $ciudad = "Los Angeles";
// $tipo = "Casa";
// $rango = "200;20000";

$pos = strpos($rango, ";");

$ran = str_split($rango,$pos);
$ran1 = (int)$ran[0];
$ran = substr($rango,$pos+1);
// $ran1 = (int)$ran1;
$ran2 = (int)$ran;
// $ran2 = substr($ran2,2);
// $ran2 = (int)$ran2;

  getData($ciudad, $tipo, $ran1, $ran2);

  function getData($ciudad, $tipo, $ran1, $ran2){
    $data_file = fopen("./data/data-1.json","r");
    $data_readed = fread($data_file, filesize("./data/data-1.json"));
    // echo fread($data_file, filesize("./data/data-1.json"));
    $data = json_decode($data_readed, true);
    fclose($data_file);

    // print_r($data);
    foreach ($data as $data) {
      foreach ($data as $key => $value) {

        if($key == "Id") {$id =  $value;}
        if($key == "Direccion") {$dir =  $value;}
        if($key == "Ciudad") {$city =  $value;}
        if($key == "Telefono") {$tel =  $value;}
        if($key == "Codigo_Postal") {$cod =  $value;}
        if($key == "Tipo") {$tip =  $value;}
        if($key == "Precio") {$pre =  $value;}

      if($key == "Precio"){
        $precio = str_replace("$", "", $pre);
        $precio = str_replace(",", "", $pre);
        $pr = $precio;

        // print( "-" .$ciudad ."-" .$tip ."-" .$pr ." -" .$ran1 ." -" .$ran2);

        if ($ciudad == "" && $tipo == "" && $pr >= $ran1 && $pr <= $ran2) {
          printData($id, $dir, $city, $tel, $cod, $tip, $pre);
        } elseif ($ciudad === $city && $tipo === $tip && $pr >= $ran1 && $pr <= $ran2) {
          printData($id, $dir, $city, $tel, $cod, $tip, $pre);
          // print("#2");
          // print( $ciudad ."--" .$city ."/" .$tipo ."--" .$tip ."/" .$ran1 ."--" ."$pr" ."--" .$ran2);
          // echo $id ." " .$dir ." " .$city ." " .$tel ." " .$cod ." " .$tip ." " .$pre;
        } elseif ($ciudad === "" && $tipo === $tip && $pr >= $ran1 && $pr <= $ran2){
          printData($id, $dir, $city, $tel, $cod, $tip, $pre);
        } elseif ($ciudad === $city && $tipo === "" && $pr >= $ran1 && $pr <= $ran2){
          printData($id, $dir, $city, $tel, $cod, $tip, $pre);
        } else {
          // nada
        }
        // print_r($id ." " .$dir ." " .$city ." " .$tel ." " .$cod ." " .$tip ." " .$pre);
        // return $codigo1;

      }


    }
  }
}

function printData($id, $dir, $city, $tel, $cod, $tip, $pre){

  $codigo1 = '<div class="row">';
  $codigo1 = $codigo1 .'<div class="col s12 m12 l12">';
  $codigo1 = $codigo1 .'<div class="card horizontal large" id="inmuebles">';
  $codigo1 = $codigo1 .'<div class="card-image left">';
  $codigo1 = $codigo1 .'<img src="img/home.jpg">';
  $codigo1 = $codigo1 .'</div>';
  $codigo1 = $codigo1 .'<div class="card-stacked right">';
  $codigo1 = $codigo1 .'<div class="card-content">';
  $codigo1 = $codigo1 .'<section>';
  $codigo1 = $codigo1 .'Id:'.$id;
  $codigo1 = $codigo1 .'Dirección:'.$dir;
  $codigo1 = $codigo1 .'Ciudad:'.$city;
  $codigo1 = $codigo1 .'Teléfono:'.$tel;
  $codigo1 = $codigo1 .'Código Postal:'.$cod;
  $codigo1 = $codigo1 .'Tipo:'.$tip;
  $codigo1 = $codigo1 .'Precio:'.$pre;
  $codigo1 = $codigo1 .'</section>';
  $codigo1 = $codigo1 .'</div>';
  $codigo1 = $codigo1 .'<div class="card-action">';
  $codigo1 = $codigo1 .'<a href="#">Ver más</a>';
  $codigo1 = $codigo1 .'</div>';
  $codigo1 = $codigo1 .'</div>';
  $codigo1 = $codigo1 .'</div>';
  $codigo1 = $codigo1 .'</div>';
  $codigo1 = $codigo1 .'</div>';

  return($codigo1);

}

?>
