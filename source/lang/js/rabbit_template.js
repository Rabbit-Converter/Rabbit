var Rabbit = {
  "zg2uni" : zg2uni,
  "uni2zg": uni2zg
}

function uni2zg(output) {
  var rule = {{UNI2ZG}};
  return replace_with_rule(rule,output);
}

function zg2uni(output) {
  var rule = {{ZG2UNI}};
  return replace_with_rule(rule,output);
}

function replace_with_rule(rule,output) {

  var max_loop = rule.length;
  for(i=0; i < max_loop; i++) {
    
    var data = rule[i];
    var from = data["from"];
    var to = data["to"];

    var from_regex = new RegExp(from,"g");
    output = output.replace(from_regex,to);
  }

  return output;

}
