object Rabbit {

    private val unicodeToZawgyiRules = mapOf<String, String>(
            {{UNI2ZG}}
    )

    private val zawgyiToUnicodeRules = mapOf<String, String>(
            {{ZG2UNI}}
    )

    @JvmStatic
    fun uni2zg(input: String): String {
        return replaceWithRule(unicodeToZawgyiRules, input)
    }

    @JvmStatic
    fun zg2uni(input: String): String {
        return replaceWithRule(zawgyiToUnicodeRules, input)
    }

    private fun replaceWithRule(rules: Map<String, String>, input: String): String {
        var output = input

        rules.forEach { (from, to) ->
            val reg = from.toRegex()
            output = output.replace(reg, to)
        }

        return output
    }

}