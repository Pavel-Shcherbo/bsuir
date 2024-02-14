#include "Exeptions.hpp"
Exceptions::Exceptions() {}

Exceptions::Exceptions(int errorCode, const char* errorMessage) {
    code = errorCode;
    strncpy(this->message, errorMessage, 80);
}
void Exceptions::show() const {
    std::cout << "\nError code: " << code << "\nError message: " << message << std::endl;
}
menuException::menuException(const char* errorMessage) : Exceptions(1, errorMessage) {}
cardException::cardException(const char* errorMessage) : Exceptions(2, errorMessage) {}
dateException::dateException(const char* errorMessage) : Exceptions(3, errorMessage) {}
