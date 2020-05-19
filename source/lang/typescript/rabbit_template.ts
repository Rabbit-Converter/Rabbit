interface RabbitRule {
  from: string;
  to: string;
}
export class Rabbit {
  
  static uni2zg(unicode: string) {
    var rule: Array<RabbitRule> = JSON.parse("{{UNI2ZG}}")
    return this.replaceWithRule(rule,unicode);
  }

  static zg2uni(unicode: string) {
    var rule: Array<RabbitRule> = JSON.parse("{{ZG2UNI}}")
    return this.replaceWithRule(rule,unicode);
  }
  
  static replaceWithRule(rule: Array<RabbitRule>,output: string) {
    rule.forEach(function (value) {
        let from = new RegExp(value.from,"g");
        output = output.replace(from,value.to);
    });
    return output;
  }
}

