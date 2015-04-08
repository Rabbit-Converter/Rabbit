var fs = require('fs');

//Language Template Compiler
var js = require(__dirname + "/lang/js/js_template.js");
var php = require(__dirname + "/lang/php/php_template.js");
var java = require(__dirname + "/lang/java/java_template.js");
var objc = require(__dirname + "/lang/objc/objc_template.js");

var uni2json = fs.readFileSync(__dirname + "/json/uni2zg.json");
var zg2uni = fs.readFileSync(__dirname + "/json/zg2uni.json");

js.compile(uni2json,zg2uni,__dirname + "/output/rabbit.js");
php.compile(uni2json,zg2uni,__dirname + "/output/Rabbit.php");
java.compile(uni2json,zg2uni,__dirname + "/output/Rabbit.java");
objc.compile(uni2json,zg2uni,__dirname + "/output/Rabbit.m");
