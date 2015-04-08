exports.compile = function(uni2zg,zg2uni,path) {
  
  var fs = require('fs');
  
  var template = fs.readFileSync(__dirname + "/rabbit_template.m");
  
  
  template = template + "";//for make sure string
  template = template.replace("{{UNI2ZG}}",json_to_objc_array(uni2zg));
  template = template.replace("{{ZG2UNI}}",json_to_objc_array(zg2uni));
  fs.writeFileSync(path,template);
}

function json_to_objc_array(json) {
  json = json + "";//make sure for string
  
  var objc_array = json.replace(/\[/g,"@[");
  objc_array = objc_array.replace(/{/g,"@{");
  
  objc_array = objc_array.replace(/a/g,"A");
  objc_array = objc_array.replace(/b/g,"B");
  objc_array = objc_array.replace(/c/g,"C");
  objc_array = objc_array.replace(/d/g,"D");
  objc_array = objc_array.replace(/e/g,"E");      
  objc_array = objc_array.replace(/f/g,"F");
  
  objc_array = objc_array.replace(/\"From\": \"/g,"@\"from\": @\"");
  objc_array = objc_array.replace(/\"to\": \"/g,"@\"to\": @\"");

  objc_array = objc_array.replace(/\?=@\[/g,"?=[");  
  objc_array = objc_array.replace(/\?=@\{/g,"?={");  
  objc_array = objc_array.replace(/\(@\[/g,"([");  
  objc_array = objc_array.replace(/\(@\[/g,"([");  
  
  objc_array = objc_array.replace(/\]@\{/g,"]{");  
  objc_array = objc_array.replace(/@\[\\u/g,"[\\u"); 
  
    
  return objc_array;
}

