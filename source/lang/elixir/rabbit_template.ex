# Rabbit Myanmart font converter
# Author : Arkar Aung for Elixir language

defmodule Rabbit do

	"""
    Unicode to Zawgyi Rules
    """
	defp uni_to_zawgyi_rules() do 
		{{UNI2ZG}}
	end
	
	"""
    Zawgyi to Unicode Rules
    """
	defp zawgyi_to_uni_rules() do
		{{ZG2UNI}}
	end

	"""
    Convert Unicode to Zawgyi
    """
	def uni2zg(text) do
		check(uni_to_zawgyi_rules(), text)
	end

	"""
    Convert Zawgyi to Unicode
    """
	def zg2uni(text) do
		check(zawgyi_to_uni_rules(), text)
	end

	defp check([], text) do
		text
	end

	defp check(rules, text) do
		{_, rule} = Regex.compile(elem(hd(rules), 0), [:unicode])
		text = Regex.replace(rule, text, elem(hd(rules), 1))
		check(tl(rules), text)
	end
end