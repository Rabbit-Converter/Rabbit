exports.compile = function(uni2zg,zg2uni,path) {
  
  var fs = require('fs');
  
  var template = fs.readFileSync(__dirname + "/rabbit_template.ex");
  
  
  template = template + "";//for make sure string
  template = template.replace("{{UNI2ZG}}",json_to_array(uni2zg));
  template = template.replace("{{ZG2UNI}}",json_to_array(zg2uni));
  fs.writeFileSync(path,template);
}

function json_to_array(json) {
  json = json + "";//make sure for string
  json = json.replace(/\\u([0-9a-fA-F]{4})/g,"\\\\x{$1}");
  
  json = json.replace(/\$1/g,"\\\\1");
  json = json.replace(/\$2/g,"\\\\2");
  json = json.replace(/\$3/g,"\\\\3");
  json = json.replace(/\$4/g,"\\\\4");
  
  ruleArray = JSON.parse(json);
  var exJSON = [];
  for(k=0 ; k < ruleArray.length;k++) {
    var rule = ruleArray[k];

    var from = rule.from;
    var fromTo = {};
    fromTo[from] = rule.to;
    
    exJSON.push(fromTo);
  }
  
  var json = JSON.stringify(exJSON);
  json = json.replace(/\n/g,"");
  json = json.replace(/\r/g,"");
  json = json.replace(/\\\\x/g,"\\x");
  
  ///u","
  json = json.replace(/\":\"/g,"\",\"");
  return json;
}

