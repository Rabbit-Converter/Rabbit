exports.compile = function (uni2zg, zg2uni, path) {
	
	var fs = require('fs');
	
	var template = fs.readFileSync(__dirname + "/rabbit_template.cs");
	template = template + "";//for make sure string
	template = template.replace("{{UNI2ZG}}", get_csharp_rules(uni2zg));
	template = template.replace("{{ZG2UNI}}", get_csharp_rules(zg2uni));
	fs.writeFileSync(path, template);
}

function get_csharp_rules(json) {
	var rules = JSON.parse(json);
	var output = [];
	for (var i = 0; i < rules.length; i++) {
		output.push("new RabbitRule(\"" + escape_char(rules[i].from) + "\",\"" + escape_char(rules[i].to) + "\")");
	}
	return output.join(", ");
}

function escape_char(input) {
	return input.replace(/[\u007f-\uffff]/g,
      function (c) {
		return '\\u' + ('0000' + c.charCodeAt(0).toString(16)).slice(-4);
	}
	);
}