var fs = require('fs');
var path = require('path');
var ncp = require('ncp').ncp;

// Get Rabbit Converter Version number from version file
var version = fs.readFileSync(__dirname + "/version");

//all language
var js = require(__dirname + "/lang/js/js_template.js");
var php = require(__dirname + "/lang/php/php_template.js");
var java = require(__dirname + "/lang/java/java_template.js");
var objc = require(__dirname + "/lang/objc/objc_template.js");
var python = require(__dirname + "/lang/python/python_template.js");
var ruby = require(__dirname + "/lang/ruby/ruby_template.js");
var swift4 = require(__dirname + "/lang/swift4/swift_template.js");
var csharp = require(__dirname + "/lang/csharp/csharp_template.js");
var elixir = require(__dirname + "/lang/elixir/elixir_template.js");
var kotlin = require(__dirname + "/lang/kotlin/kotlin_template.js");
var go = require(__dirname + "/lang/go/go_template.js");
var dart = require(__dirname + "/lang/dart/dart_template.js");
//rule
var uni2json = fs.readFileSync(__dirname + "/rule/uni2zg.json","utf8");
var zg2uni = fs.readFileSync(__dirname + "/rule/zg2uni.json","utf8");

console.log("Compile Languages ...");

java.compile(uni2json,zg2uni,__dirname + "/output/java/com/comquas/rabbit/Rabbit.java");
js.compile(uni2json,zg2uni,__dirname + "/output/javascript/rabbit.js");
objc.compile(uni2json,zg2uni,__dirname + "/output/objective-c/Rabbit.m");
swift4.compile(uni2json,zg2uni,__dirname + "/output/swift4/Rabbit.swift");
php.compile(uni2json,zg2uni, version, __dirname + "/output/php/Rabbit.php");
python.compile(uni2json,zg2uni,__dirname + "/output/python/Rabbit.py");
ruby.compile(uni2json,zg2uni,__dirname + "/output/ruby/rabbit.rb");
csharp.compile(uni2json,zg2uni,__dirname + "/output/csharp/Rabbit.cs");
elixir.compile(uni2json,zg2uni,__dirname + "/output/elixir/Rabbit.ex");
kotlin.compile(uni2json,zg2uni,__dirname + "/output/kotlin/Rabbit.kt");
go.compile(uni2json,zg2uni,__dirname + "/output/go/rabbit.go");
dart.compile(uni2json,zg2uni,__dirname + "/output/dart/rabbit.dart");

console.log("Moving To Package ...");
//time to move to Packages
copy(__dirname + "/output/ruby/rabbit.rb",path.resolve(__dirname + "/../Packages/ruby/lib/rabbit.rb")); //Ruby
copy(__dirname + "/output/php/Rabbit.php",path.resolve(__dirname + "/../Packages/PHP/src/Rabbit.php")); //PHP
copy(__dirname + "/output/objective-c/Rabbit.m",path.resolve(__dirname + "/../Packages/Objc/Classes/Rabbit.m")); //objc
copy(__dirname + "/output/swift4/Rabbit.swift",path.resolve(__dirname + "/../Packages/Swift/Classes/Rabbit.swift")); //swift
copy(__dirname + "/output/elixir/Rabbit.ex",path.resolve(__dirname + "/../Packages/Elixir/lib/rabbit.ex")); //elixir
copy(__dirname + "/output/go/rabbit.go",path.resolve(__dirname + "/../Packages/Go/rabbit.go")); //elixir

//for node, need to append string
copyWithCompletion(__dirname + "/output/javascript/rabbit.js",path.resolve(__dirname + "/../Packages/Node/lib/rabbit.js"),function() {
	
	fs.appendFileSync(path.resolve(__dirname + "/../Packages/Node/lib/rabbit.js"), "\nmodule.exports = Rabbit;\n",encoding='utf8');
	
});

console.log("moving folder to source");
console.log(__dirname + "/output/");
console.log("To");
console.log(path.resolve(__dirname + "/../other-lang/"));

ncp(__dirname + "/output/",path.resolve(__dirname + "/../other-lang/"),function (err) {
	if (err) {
	  return console.error(err);
	}
	console.log('Copied lang folder');
});


console.log("Copy js to root folder");
copy(__dirname + "/output/javascript/rabbit.js",path.resolve(__dirname + "/../rabbit.js"));

console.log("Moving To Test ...");
// Move sample.json to tests folder
copy(__dirname + "/res/sample.json", path.resolve(__dirname + "/../Packages/PHP/test/unit/sample.json"));
copy(__dirname + "/res/sample.json", path.resolve(__dirname + "/../Packages/Objc/RabbitConverterTests/sample.json"));
copy(__dirname + "/res/sample.json", path.resolve(__dirname + "/../Packages/ruby/test/sample.json"));
copy(__dirname + "/res/sample.json", path.resolve(__dirname + "/../Packages/Elixir/test/sample.json"));

console.log("Done.");

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