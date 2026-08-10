#include "Rabbit.h"

#include <codecvt>
#include <locale>
#include <regex>
#include <string>
#include <utility>
#include <vector>

namespace rabbit {
namespace {

struct Rule {
    Rule(const wchar_t* pattern, const wchar_t* replacement)
        : pattern(pattern,
                  std::regex_constants::ECMAScript |
                      std::regex_constants::optimize),
          replacement(replacement) {}

    std::wregex pattern;
    std::wstring replacement;
};

std::wstring fromUtf8(const std::string& input) {
    std::wstring_convert<std::codecvt_utf8_utf16<wchar_t> > converter;
    return converter.from_bytes(input);
}

std::string toUtf8(const std::wstring& input) {
    std::wstring_convert<std::codecvt_utf8_utf16<wchar_t> > converter;
    return converter.to_bytes(input);
}

const std::vector<Rule>& uni2zgRules() {
    static const std::vector<Rule> rules = {
{{UNI2ZG}}
    };
    return rules;
}

const std::vector<Rule>& zg2uniRules() {
    static const std::vector<Rule> rules = {
{{ZG2UNI}}
    };
    return rules;
}

std::string applyRules(const std::string& input,
                       const std::vector<Rule>& rules) {
    std::wstring output = fromUtf8(input);
    for (std::vector<Rule>::const_iterator rule = rules.begin();
         rule != rules.end(); ++rule) {
        output = std::regex_replace(output, rule->pattern, rule->replacement);
    }
    return toUtf8(output);
}

}  // namespace

std::string uni2zg(const std::string& input) {
    return applyRules(input, uni2zgRules());
}

std::string zg2uni(const std::string& input) {
    return applyRules(input, zg2uniRules());
}

}  // namespace rabbit
