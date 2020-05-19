<?php

/**
 * Rabbit is Another Zawgyi <=> Unicode Converter.
 * 
 * @author Saturngod <me@saturngod.net>
 */
class Rabbit
{
    /**
     * Rabbit Converter version.
     *
     * @var string
     */
    const VERSION = '{{VERSION}}';
    
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
     * Replace the line break to character to parse the data correctly
     * @param string $string
     * @return string
     */
    private static function parseline($string){
        $string = str_replace(chr(10), "\\n", $string);
        $string = str_replace(chr(13), "\\n", $string);
        $string = str_replace("\f", "\\f", $string);
        return $string;
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

            $from_json = $data["from"];

            //search line break.
            //if line break include , need to fix the line
            if (strpos($from_json, chr(13)) !== false) {
                $from_json = self::parseline($from_json);
            }

            $from = "~".json_decode('"'.$from_json.'"')."~u";
            $to = json_decode('"'.$data["to"].'"');
            $output = preg_replace($from, $to, $output);
        }

        return $output;
    }
}
