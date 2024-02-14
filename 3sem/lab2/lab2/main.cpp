#include "MString.hpp"
#include <iostream>

int main() {
    std::cout << "Введите первую строку: ";
    char input1[100];
    std::cin.getline(input1, sizeof(input1));

    std::cout << "Введите вторую строку: ";
    char input2[100];
    std::cin.getline(input2, sizeof(input2));

    MString a(input1);
    MString b(input2);

    std::cout << "Первая строка: " << a << std::endl;
    std::cout << "Вторая строка: " << b << std::endl;

    bool exitProgram = false;
    while (!exitProgram) {
        std::cout << "Выберите операцию:" << std::endl;
        std::cout << "1. Присвоить одну строку другой (=)" << std::endl;
        std::cout << "2. Объединить строки (+)" << std::endl;
        std::cout << "3. Добавить вторую строку к первой (+=)" << std::endl;
        std::cout << "4. Сравнить строки (==)" << std::endl;
        std::cout << "5. Проверить, что строки не равны (!=)" << std::endl;
        std::cout << "6. Получить символ по индексу (int)" << std::endl;
        std::cout << "7. Получить подстроку (int, int)" << std::endl;
        std::cout << "8. Выход из программы" << std::endl;

        int choice;
        std::cin >> choice;

        switch (choice) {
            case 1:
                a = b; // Присвоить одну строку другой
                std::cout << "Результат: " << a << std::endl;
                break;
            case 2:
                {
                    MString c = a + b; // Объединить строки
                    std::cout << "Результат: " << c << std::endl;
                }
                break;
            case 3:
                a += b; // Добавить вторую строку к первой
                std::cout << "Результат: " << a << std::endl;
                break;
            case 4:
                if (a == b) {
                    std::cout << "Строки равны" << std::endl;
                } else {
                    std::cout << "Строки не равны" << std::endl;
                }
                break;
            case 5:
                if (a != b) {
                    std::cout << "Строки не равны" << std::endl;
                } else {
                    std::cout << "Строки равны" << std::endl;
                }
                break;
            case 6:
                {
                    int charIndex;
                    std::cout << "Введите индекс символа: ";
                    std::cin >> charIndex;
                    try {
                        char ch = a[charIndex];
                        std::cout << "Символ с индексом " << charIndex << " в первой строке: " << ch << std::endl;
                    } catch (const std::out_of_range& e) {
                        std::cerr << "Ошибка: " << e.what() << std::endl;
                    }
                }
                break;
            case 7:
                {
                    int startIndex, endIndex;
                    std::cout << "Введите начальный индекс: ";
                    std::cin >> startIndex;
                    std::cout << "Введите конечный индекс: ";
                    std::cin >> endIndex;
                    MString sub = a(startIndex, endIndex); // Получить подстроку
                    std::cout << "Подстрока: " << sub << std::endl;
                }
                break;
            case 8:
                exitProgram = true; // Выход из программы
                break;
            default:
                std::cout << "Неверный выбор операции." << std::endl;
                break;
        }
    }

    return 0;
}
