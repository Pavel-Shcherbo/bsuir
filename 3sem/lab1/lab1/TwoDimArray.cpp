#include "TwoDimArray.hpp"
#include <iostream>

TwoDimArray::TwoDimArray(int n) : size(n) {
    array = new int*[size];
    for (int i = 0; i < size; i++) {
        array[i] = new int[size];
    }
}

TwoDimArray::~TwoDimArray() {
    for (int i = 0; i < size; i++) {
        delete[] array[i];
    }
    delete[] array;
}

TwoDimArray::TwoDimArray(const TwoDimArray& other) : size(other.size) {
    array = new int*[size];
    for (int i = 0; i < size; i++) {
        array[i] = new int[size];
        for (int j = 0; j < size; j++) {
            array[i][j] = other.array[i][j];
        }
    }
}

void TwoDimArray::fillArray() {
    for (int i = 0; i < size; i++) {
        for (int j = 0; j < size; j++) {
            std::cout << "Введите элемент [" << i << "][" << j << "]: ";
            std::cin >> array[i][j];
        }
    }
}

void TwoDimArray::printArray() {
    for (int i = 0; i < size; i++) {
        for (int j = 0; j < size; j++) {
            std::cout << " " << array[i][j];
        }
        std::cout << "\n";
    }
}

int TwoDimArray::findMinBelowDiagonal() const {
    int min = array[1][0];
    for (int i = 2; i < size; i++) {
        for (int j = 0; j < i; j++) {
            if (array[i][j] < min) {
                min = array[i][j];
            }
        }
    }
    return min;
}

int TwoDimArray::findMaxAboveDiagonal() const {
    int max = array[0][1];
    for (int i = 0; i < size; i++) {
        for (int j = i + 1; j < size; j++) {
            if (array[i][j] > max) {
                max = array[i][j];
            }
        }
    }
    return max;
}

// Оператор сложения для двух экземпляров TwoDimArray
TwoDimArray TwoDimArray::operator+(const TwoDimArray& other) const {
    TwoDimArray result(size);
    for (int i = 0; i < size; i++) {
        for (int j = 0; j < size; j++) {
            result.array[i][j] = this->array[i][j] + other.array[i][j];
        }
    }
    return result;
}

// Оператор & для поэлементного умножения матриц
TwoDimArray TwoDimArray::operator&(const TwoDimArray& other) const {
    if (size != other.size) {
        std::cerr << "Размеры матриц не совпадают, возвращена пустая матрица." << std::endl;
        return TwoDimArray(0); 
    }

    TwoDimArray result(size);

    for (int i = 0; i < size; i++) {
        for (int j = 0; j < size; j++) {
            result.array[i][j] = this->array[i][j] * other.array[i][j];
        }
    }

    return result;
}


