<?php

getSelect();

function getSelect(){
  $data_file = fopen("./data/data-1.json","r");
  $data_readed = fread($data_file, filesize("./data/data-1.json"));
  // echo fread($data_file, filesize("./data/data-1.json"));
  $data = json_decode($data_readed, true);
  fclose($data_file);
  $a[0] = 'Elige una Ciudad';
  $b[0] = 'Elige un Tipo';

  foreach ($data as $data) {
    // code...
    $text = '';
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
          // $a[$alengtha] = "<option value=" .$value .">" . $value ."</option>";
          $a[$alengtha] = $value;

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
          // $b[$alengthb] = "<option value=" .$value .">" . $value ."</option>";
          $b[$alengthb] = $value;
        }
      }
    }
  }

  print_r($a);
  // print_r($b);
}

function imprimeSelect($val){
  print($val);
  $codigo = $val;
  return $codigo;

}
 ?>
