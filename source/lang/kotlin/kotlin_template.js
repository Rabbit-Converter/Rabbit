exports.compile = function(uni2zg,zg2uni,path) {
  
  var fs = require('fs');
  
  var template = fs.readFileSync(__dirname + "/rabbit_template.kt");
  template = template + "";//for make sure string

  template = template.replace("{{UNI2ZG}}",getMap(uni2zg));
  template = template.replace("{{ZG2UNI}}",getMap(zg2uni));  
  fs.writeFileSync(path,template);
}

function getMap(rule) {
  rules = JSON.parse(rule);
  value = "";

  for (var i = 0; i < rules.length; i++) {
    obj = rules[i];
    from_str = obj["from"];
    from_str = from_str.replace("\\","\\\\");
    to_str = obj["to"];
    value = value + "\"" + from_str + "\" to \""+to_str +"\",\n";
  }
  value = value.slice(0, -2);
  return value;
}