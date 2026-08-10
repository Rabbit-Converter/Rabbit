#ifndef RABBIT_CONVERTER_RABBIT_H
#define RABBIT_CONVERTER_RABBIT_H

#include <string>

namespace rabbit {

// Converts a UTF-8 encoded Unicode string to Zawgyi.
std::string uni2zg(const std::string& input);

// Converts a UTF-8 encoded Zawgyi string to Unicode.
std::string zg2uni(const std::string& input);

}  // namespace rabbit

#endif  // RABBIT_CONVERTER_RABBIT_H
