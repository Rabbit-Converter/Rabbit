exports.compile = function(uni2zg,zg2uni,path) {
  
  var fs = require('fs');
  
  var template = fs.readFileSync(__dirname + "/rabbit_template.m");
  
  
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
  /*
   * In xcode 7 \u0020 is showing error. Cannot be specified by universal character name.
   * So, replace with space instead of \u0020
   */
  json = json.replace(/\\u0020/g," ");
  return json;
}

