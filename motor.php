<?php

$tipoSelect = $_POST['type'];


getSelect($tipoSelect);

function getSelect($tipoSelect){
  $data_file = fopen("./data/data-1.json","r");
  $data_readed = fread($data_file, filesize("./data/data-1.json"));
  // echo fread($data_file, filesize("./data/data-1.json"));
  $data = json_decode($data_readed, true);
  fclose($data_file);
  $a = array();
  $b = array();

  foreach ($data as $data) {
    // code...
    $alengtha = count($a);
    $alengthb = count($b);


      foreach ($data as $key => $value) {

      if($key == "Ciudad") {
        $x = 0;
        $existe = 0;

        while($x < $alengtha) {
          if($a[$x] == $value) {
            $existe = 1;
          }
          $x++;
        }
        if($existe == 0){
          $a[$alengtha] = $value;
          if($tipoSelect == 1){
              imprimeCodigo($value);
          }
        }
      }

      if($key == "Tipo") {
        $x = 0;
        $existe = 0;

        while($x < $alengthb) {
          if($b[$x] == $value) {
            $existe = 1;
          }
          $x++;
        }
        if($existe == 0){
          $b[$alengthb] = $value;
          if($tipoSelect == 2){
              imprimeCodigo($value);
          }
        }
      }
    }
  }

  // $jsonobj = array_chunk($a,$alengtha);

  // var_dump(json_encode($jsonobj));
  // $myjson= '{"Ciudad":[' .$a .']}';
  // $myarraya = $a;
  // $myarrayb = array($b);
  // $myjson = $a;
  // $myjson = $b;
  // $myjson = $myarraya;
  // print_r($myjson);
  // print_r($b);
  // print_r( $jsonobj);
  // echo $myjsonb;
}

function imprimeCodigo($valor){

  $codigo = '<option value="'.$valor.'">'.$valor.'</option>';
  echo ($codigo);


}

 ?>
