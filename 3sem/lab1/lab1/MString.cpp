// MString.cpp
#include "MSstring.h"
#include <cstring>

MString::MString(const char* s) {
    // Реализация конструктора
}

MString::MString(const MString& other) {
    // Реализация конструктора копирования
}

MString::~MString() {
    // Реализация деструктора
}

MString& MString::operator=(const MString& other) {
    // Реализация оператора присваивания
}

MString MString::operator+(const MString& other) const {
    // Реализация оператора сложения
}

MString& MString::operator+=(const MString& other) {
    // Реализация оператора сложения с присваиванием
}

bool MString::operator==(const MString& other) const {
    // Реализация оператора сравнения на равенство
}

bool MString::operator!=(const MString& other) const {
    // Реализация оператора сравнения на неравенство
}

char MString::operator[](int index) const {
    // Реализация оператора доступа к символу по индексу
}

MString MString::operator()(int start, int end) const {
    // Реализация оператора () для получения подстроки
}

std::ostream& operator<<(std::ostream& os, const MString& mstr) {
    // Реализация оператора вывода в поток
}
