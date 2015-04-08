<?php
class Rabbit {
  static function uni2zg($unicode) {

    $rule = {{UNI2ZG}};
    return Rabbit::replace_with_rule($rule,$unicode);
  }

  static function zg2uni($zawgyi) {
  
    $rule = {{ZG2UNI}};
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
