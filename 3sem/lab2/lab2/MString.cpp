// MString.cpp
#include "MString.hpp"
#include <cstring>

MString::MString(const char* s) {
    if (s) {
        str = new char[strlen(s) + 1];
        strcpy(str, s);
    } else {
        str = nullptr;
    }
}

MString::MString(const MString& other) {
    if (other.str) {
        str = new char[strlen(other.str) + 1];
        strcpy(str, other.str);
    } else {
        str = nullptr;
    }
}

MString::~MString() {
    delete[] str;
}

MString& MString::operator=(const MString& other) {
    if (this == &other) {
        return *this;
    }

    delete[] str;

    if (other.str) {
        str = new char[strlen(other.str) + 1];
        strcpy(str, other.str);
    } else {
        str = nullptr;
    }

    return *this;
}

MString MString::operator+(const MString& other) const {
    MString result;
    if (str && other.str) {
        result.str = new char[strlen(str) + strlen(other.str) + 1];
        strcpy(result.str, str);
        strcat(result.str, other.str);
    } else if (str) {
        result = *this;
    } else if (other.str) {
        result = other;
    }
    return result;
}

MString& MString::operator+=(const MString& other) {
    *this = *this + other;
    return *this;
}

bool MString::operator==(const MString& other) const {
    return strcmp(str, other.str) == 0;
}

bool MString::operator!=(const MString& other) const {
    return strcmp(str, other.str) != 0;
}

char MString::operator[](int index) const {
    if (str && index >= 0 && index < strlen(str)) {
        return str[index];
    } else {
        throw std::out_of_range("Индекс вне диапазона");
    }
}

MString MString::operator()(int start, int end) const {
    if (str && start >= 0 && start < strlen(str) && end >= 0 && end < strlen(str) && start <= end) {
        char* sub = new char[end - start + 2];
        strncpy(sub, str + start, end - start + 1);
        sub[end - start + 1] = '\0';
        MString result(sub);
        delete[] sub;
        return result;
    } else {
        std::cout << "Ошибка: индексы вне диапазона" << std::endl;
        return 0;

    }
}

std::ostream& operator<<(std::ostream& os, const MString& mstr) {
    if (mstr.str) {
        os << mstr.str;
    }
    return os;
}
