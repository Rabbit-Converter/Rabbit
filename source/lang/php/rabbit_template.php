<?php

/**
 * Rabbit is Another Zawgyi <=> Unicode Converter.
 * 
 * @author Saturngod <me@saturngod.net>
 */
class Rabbit
{
    /**
     * Convert unicode string to zawgyi.
     *
     * @param  string $unicode
     * @return string
     */
    public static function uni2zg($unicode)
    {
        $rule = json_decode("{{UNI2ZG}}", true);

        return self::replaceWithRule($rule, $unicode);
    }

    /**
     * Convert zawgyi string to unicode.
     *
     * @param  string $unicode
     * @return string
     */
    public static function zg2uni($zawgyi)
    {
        $rule = json_decode("{{ZG2UNI}}", true);

        return self::replaceWithRule($rule, $zawgyi);
    }

    /**
     * Replace the string with rules.
     *
     * @param  array $rule
     * @param  string $output
     * @return string
     */
    protected static function replaceWithRule($rule, $output)
    {
        foreach ($rule as $data) {
            $from = "~".json_decode('"'.$data["from"].'"')."~u";
            $to = json_decode('"'.$data["to"].'"');
            $output = preg_replace($from, $to, $output);
        }

        return $output;
    }
}
