<?php
class Rabbit {
  static function uni2zg($unicode) {

    $rule = json_decode("{{UNI2ZG}}",true);
    return Rabbit::replace_with_rule($rule,$unicode);
  }

  static function zg2uni($zawgyi) {
  
    $rule = json_decode("{{ZG2UNI}}",true);
    return Rabbit::replace_with_rule($rule,$zawgyi);
  }

  static function replace_with_rule($rule,$output) {
    $max_loop = count($rule);

    for($i=0; $i < $max_loop; $i++) {
      $data = $rule[$i];
      $from = "~".json_decode('"'.$data["from"].'"')."~u";
      $to = json_decode('"'.$data["to"].'"');

      $output = preg_replace($from,$to,$output);
    }

    return $output;
  }
}
