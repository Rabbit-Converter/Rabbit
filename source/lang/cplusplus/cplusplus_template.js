exports.compile = function (uni2zg, zg2uni, outputDirectory) {
  var fs = require("fs");
  var path = require("path");

  var header = fs.readFileSync(__dirname + "/rabbit_template.h", "utf8");
  var implementation = fs.readFileSync(__dirname + "/rabbit_template.cpp", "utf8");

  implementation = implementation.replace("{{UNI2ZG}}", getRules(uni2zg));
  implementation = implementation.replace("{{ZG2UNI}}", getRules(zg2uni));

  fs.mkdirSync(outputDirectory, { recursive: true });
  fs.writeFileSync(path.join(outputDirectory, "Rabbit.h"), header);
  fs.writeFileSync(path.join(outputDirectory, "Rabbit.cpp"), implementation);
};

function getRules(json) {
  return JSON.parse(json).map(function (rule) {
    return "        {L\"" + escapeCppString(rule.from) + "\", L\"" +
      escapeCppString(rule.to) + "\"}";
  }).join(",\n");
}

function escapeCppString(input) {
  var output = "";

  for (var i = 0; i < input.length; i++) {
    var code = input.charCodeAt(i);

    if (code === 0x22) {
      output += "\\\"";
    } else if (code === 0x5c) {
      output += "\\\\";
    } else if (code === 0x0a) {
      output += "\\n";
    } else if (code === 0x0d) {
      output += "\\r";
    } else if (code === 0x09) {
      output += "\\t";
    } else if (code < 0x20 || code > 0x7e) {
      output += "\\u" + ("0000" + code.toString(16)).slice(-4);
    } else {
      output += input.charAt(i);
    }
  }

  return output;
}
