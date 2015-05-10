require 'rabbit/version'
require 'json'

# Rabbit Module
module Rabbit
  # Rabbit Convert Class   +  def uni2zg(unicode)
  # Create an instance as follow  class Converter
  # Rabbit::Converter.new
  class Converter
    def uni2zg(unicode)
      json_data = '{{UNI2ZG}}'
      rule = JSON.parse(json_data)
      return self.replace_with_rule(rule,unicode)
    end

    def zg2uni(zawgyi)
      json_data = '{{ZG2UNI}}'
      rule = JSON.parse(json_data)
      replace_with_rule(rule,zawgyi)
    end

    def replace_with_rule(rule, output)
      rule.each do |data|
        from = Regexp.new data['from']
        output = output.gsub(from, data['to'])
      end
      output
    end
  end
end