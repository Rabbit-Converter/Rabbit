using System.Collections.Generic;
using System.Text.RegularExpressions;

public static class Rabbit
{
    private static readonly List<RabbitRule> _uni2ZgRules;
    private static readonly List<RabbitRule> _zg2UniRules;

    static Rabbit()
    {
        _uni2ZgRules = new List<RabbitRule> { {{UNI2ZG}} };
        _zg2UniRules = new List<RabbitRule> { {{ZG2UNI}} };
    }

    public static string Uni2Zg(string input)
    {
        string output = input;
        if (!string.IsNullOrEmpty(input))
        {
            foreach (var rule in _uni2ZgRules)
            {
                output = rule.Apply(output);
            }
        }
        return output;
    }

    public static string Zg2Uni(string input)
    {
        string output = input;
        if (!string.IsNullOrEmpty(input))
        {
            foreach (var rule in _zg2UniRules)
            {
                output = rule.Apply(output);
            }
        }
        return output;
    }

    private class RabbitRule
    {
        private readonly Regex _regex;
        public RabbitRule(string from, string to)
        {
            From = from;
            To = to;

            _regex = new Regex(from, RegexOptions.Compiled);
        }

        public string From { get; private set; }
        public string To { get; private set; }

        public string Apply(string str)
        {
            return _regex.Replace(str, To);
        }
    }
}