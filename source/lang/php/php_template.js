exports.compile = function(uni2zg,zg2uni,path) {
  
  var fs = require('fs');
  
  var template = fs.readFileSync(__dirname + "/rabbit_template.php");
  template = template + "";//for make sure string
  template = template.replace("{{UNI2ZG}}",clear(uni2zg));
  template = template.replace("{{ZG2UNI}}",clear(zg2uni));  
  fs.writeFileSync(path,template);
}

function clear(json) {
  json = json + "";//make sure for string
  json = json.replace(/\"/g,"\\\"");
  json = json.replace(/\n/g,"");
  json = json.replace(/\r/g,"");
  json = json.replace(/  /g," ");
  json = json.replace(/  /g," ");
  json = json.replace(/  /g," ");
  return json;
}