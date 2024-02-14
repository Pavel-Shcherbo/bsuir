// MString.h
#pragma once

#include <iostream>

class MString {
private:
    char* str;

public:
    MString(const char* s = nullptr);
    MString(const MString& other);
    ~MString();
    MString& operator=(const MString& other);
    MString operator+(const MString& other) const;
    MString& operator+=(const MString& other);
    bool operator==(const MString& other) const;
    bool operator!=(const MString& other) const;
    char operator[](int index) const;
    MString operator()(int start, int end) const;
    friend std::ostream& operator<<(std::ostream& os, const MString& mstr);
};
