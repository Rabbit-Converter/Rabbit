	
exports.compile = function(uni2zg,zg2uni,path) {

	  var fs = require('fs');

	  var template = fs.readFileSync(__dirname + "/rabbitgo.go");
	      template = template + "";//for make sure string

	        template = template.replace("{{UNI2ZG}}",clear_line_break(uni2zg));
		  template = template.replace("{{ZG2UNI}}",clear_line_break(zg2uni));
		    fs.writeFileSync(path,template);
}

function clear_line_break(json) {
	  json = json + "";
	    json = json.replace(/\r/g,"");
	      json = json.replace(/\n/g,"");
	        json = json.replace(/    /g," ");
		  json = json.replace(/  /g," ");
		    json = json.replace(/\"/g,"\\\"");
		      return json;
}
						return output	
						
					}

