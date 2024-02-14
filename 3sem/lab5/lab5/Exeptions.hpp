
#ifndef Exeptions_hpp
#define Exeptions_hpp
#include <iostream>
class Exceptions {
private:
    int code;
    char message[80];
public:
    Exceptions();
    Exceptions(int error_code, const char* error_message);
    void show() const;
};

class menuException : public Exceptions {
public:
    menuException(const char* errorMessage);
};

class cardException : public Exceptions {
public:
    cardException(const char* errorMessage);
};

class dateException : public Exceptions {
public:
    dateException(const char* errorMessage);
};




#endif
