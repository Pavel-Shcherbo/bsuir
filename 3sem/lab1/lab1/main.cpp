#include "TwoDimArray.hpp"
#include <iostream>

int main() {
    int size;
    std::cout << "Введите размер двухмерного массива: ";
    std::cin >> size;

    TwoDimArray arr(size);
    arr.fillArray();
    TwoDimArray ar1 = arr;
    
    std::cout << "Исходный массив:" << std::endl;
    arr.printArray();
    
    TwoDimArray result_mult = arr & ar1;

    std::cout << "Результат операции & (поэлементное умножение):" << std::endl;
    result_mult.printArray();

    TwoDimArray result_sum = arr + result_mult;

    std::cout << "Результат операции + (поэлементное сложение):" << std::endl;
    result_sum.printArray(); 

    int minBelowDiagonal = arr.findMinBelowDiagonal();
    int maxAboveDiagonal = arr.findMaxAboveDiagonal();

    std::cout << "Минимальный элемент ниже главной диагонали: " << minBelowDiagonal << std::endl;
    std::cout << "Максимальный элемент выше главной диагонали: " << maxAboveDiagonal << std::endl;

    return 0;
}
