json = "([\u102D\u102E\u103D\u102F\u1037\u1095])\\1+"

console.log(clear(json));

function clear(json) {
    json = json + "";//make sure for string
    json = json.replace(/\\/g,"\\\\");
    json = json.replace(/\"/g,"\\\"");
    json = json.replace(/\n/g,"");
    json = json.replace(/\r/g,"");
    json = json.replace(/  /g," ");
    json = json.replace(/  /g," ");
    json = json.replace(/  /g," ");
    return json;
  }