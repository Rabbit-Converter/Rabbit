class Rabbit {
    companion object {
        fun uni2zg(input: String): String {
           val rules = mapOf<String,String>(
                   {{UNI2ZG}}
           )

            return replaceWithRule(rules,input)
        }

        fun zg2uni(input: String): String {
            val rules = mapOf<String,String>(
                   {{ZG2UNI}}
            )

            return replaceWithRule(rules,input)
        }

        private fun replaceWithRule(rules: Map<String,String>, input: String): String {
            var output = input

            rules.forEach {(from,to) ->
                val reg = Regex(from)
                output = output.replace(reg,to)
            }

            return output
        }

    }
}