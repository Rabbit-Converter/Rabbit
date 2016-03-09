var fs = require('fs');
var path = require('path');

// Get Rabbit Converter Version number from version file
var version = fs.readFileSync(__dirname + "/version");

//all language
var js = require(__dirname + "/lang/js/js_template.js");
var php = require(__dirname + "/lang/php/php_template.js");
var java = require(__dirname + "/lang/java/java_template.js");
var objc = require(__dirname + "/lang/objc/objc_template.js");
var python = require(__dirname + "/lang/python/python_template.js");
var ruby = require(__dirname + "/lang/ruby/ruby_template.js");
var swift = require(__dirname + "/lang/swift/swift_template.js");
var swift2 = require(__dirname + "/lang/swift2/swift_template.js");
var csharp = require(__dirname + "/lang/csharp/csharp_template.js");
var elixir = require(__dirname + "/lang/elixir/elixir_template.js");

//rule
var uni2json = fs.readFileSync(__dirname + "/rule/uni2zg.json","utf8");
var zg2uni = fs.readFileSync(__dirname + "/rule/zg2uni.json","utf8");

java.compile(uni2json,zg2uni,__dirname + "/output/java/com/comquas/rabbit/Rabbit.java");
js.compile(uni2json,zg2uni,__dirname + "/output/javascript/rabbit.js");
objc.compile(uni2json,zg2uni,__dirname + "/output/objective-c/Rabbit.m");
swift.compile(uni2json,zg2uni,__dirname + "/output/swift/Rabbit.swift");
swift2.compile(uni2json,zg2uni,__dirname + "/output/swift2/Rabbit.swift");
php.compile(uni2json,zg2uni, version, __dirname + "/output/php/Rabbit.php");
python.compile(uni2json,zg2uni,__dirname + "/output/python/Rabbit.py");
ruby.compile(uni2json,zg2uni,__dirname + "/output/ruby/rabbit.rb");
csharp.compile(uni2json,zg2uni,__dirname + "/output/csharp/Rabbit.cs");
elixir.compile(uni2json,zg2uni,__dirname + "/output/elixir/Rabbit.ex");

//time to move to Packages
copy(__dirname + "/output/ruby/rabbit.rb",path.resolve(__dirname + "/../Packages/ruby/lib/rabbit.rb")); //Ruby
copy(__dirname + "/output/php/Rabbit.php",path.resolve(__dirname + "/../Packages/PHP/src/Rabbit.php")); //PHP
copy(__dirname + "/output/objective-c/Rabbit.m",path.resolve(__dirname + "/../Packages/Objc/Classes/Rabbit.m")); //objc
copy(__dirname + "/output/swift2/Rabbit.swift",path.resolve(__dirname + "/../Packages/Swift/Classes/Rabbit.swift")); //swift
copy(__dirname + "/output/elixir/Rabbit.ex",path.resolve(__dirname + "/../Packages/Elixir/lib/rabbit.ex")); //elixir

//for node, need to append string
copyWithCompletion(__dirname + "/output/javascript/rabbit.js",path.resolve(__dirname + "/../Packages/Node/lib/rabbit.js"),function() {
	
	fs.appendFileSync(path.resolve(__dirname + "/../Packages/Node/lib/rabbit.js"), "\nmodule.exports = Rabbit;\n",encoding='utf8');
	
});

// Move sample.json to tests folder
copy(__dirname + "/res/sample.json", path.resolve(__dirname + "/../Packages/PHP/test/unit/sample.json"));
copy(__dirname + "/res/sample.json", path.resolve(__dirname + "/../Packages/Objc/RabbitConverterTests/sample.json"));
copy(__dirname + "/res/sample.json", path.resolve(__dirname + "/../Packages/ruby/test/sample.json"));
copy(__dirname + "/res/sample.json", path.resolve(__dirname + "/../Packages/Elixir/test/sample.json"));


function copy(from,to) {
  fs.createReadStream(from).pipe(fs.createWriteStream(to));
}

function copyWithCompletion(from,to,callback) {
	var stream =fs.createReadStream(from);
	stream.pipe(fs.createWriteStream(to));
	
	stream.on('close', function(){
		callback();
	});
}