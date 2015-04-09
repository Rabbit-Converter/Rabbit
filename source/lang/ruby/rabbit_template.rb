require 'json'

class Rabbit
  def self.uni2zg(unicode)
    json_data = '{{UNI2ZG}}'
    rule = JSON.parse(json_data)
    return self.replace_with_rule(rule,unicode)

  end

  def self.zg2uni(zawgyi)
    json_data = '{{ZG2UNI}}'
    rule = JSON.parse(json_data)
    return replace_with_rule(rule,zawgyi)

  end

  def self.replace_with_rule(rule,output)

    rule.each do |data|
      from = Regexp.new data["from"]
      output = output.gsub(from,data["to"])
    end

    return output;

  end
end
