exports.compile = function(uni2zg,zg2uni,path) {
  
  var fs = require('fs');
  
  var template = fs.readFileSync(__dirname + "/rabbit_template.php");
  template = template + "";//for make sure string
  

  //time to change JSON
  var uni2zg_php = json_to_php_array(uni2zg);
  var zg2uni_php = json_to_php_array(zg2uni);
  
  template = template.replace("{{UNI2ZG}}",uni2zg_php);
  template = template.replace("{{ZG2UNI}}",zg2uni_php);  
  fs.writeFileSync(path,template);
}

function json_to_php_array(json) {
  json = json + "";//make sure for string
  var php_array = json.replace(/{/g,"[");
  php_array = php_array.replace(/}/g,"]");
  php_array = php_array.replace(/\"from\":/g,"\"from\" => ");
  php_array = php_array.replace(/\"to\":/g,"\"to\" => ");
  return php_array;
}