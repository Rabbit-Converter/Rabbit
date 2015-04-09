exports.compile = function(uni2zg,zg2uni,path) {
  
  var fs = require('fs');
  
  var template = fs.readFileSync(__dirname + "/rabbit_template.js");
  template = template + "";//for make sure string
  template = template.replace("{{UNI2ZG}}",uni2zg);
  template = template.replace("{{ZG2UNI}}",zg2uni);
  fs.writeFileSync(path,template);
}

