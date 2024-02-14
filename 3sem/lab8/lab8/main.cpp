#include <iostream>
#include <map>
#include <string>

int main() {
    // Создание карты с ключами типа int и значениями типа string
    std::map<int, std::string> myMap;

    // Вставка элементов в карту
    myMap[1] = "Один";
    myMap[2] = "Два";
    myMap[3] = "Три";

    // Доступ к элементам с использованием оператора[]
    std::cout << "Значение по ключу 2: " << myMap[2] << std::endl;

    // Итерация по карте с использованием итераторов
    std::cout << "Итерация по карте:" << std::endl;
    for (const auto& group : myMap) {
        std::cout << group.first << ": " << group.second << std::endl;
    }

    // Проверка, присутствует ли ключ в карте
    int keyToFinder = 2;
    if (myMap.find(keyToFinder) != myMap.end()) {
        std::cout << "Ключ " << keyToFinder << " присутствует в карте." << std::endl;
    } else {
        std::cout << "Ключ " << keyToFinder << " отсутствует в карте." << std::endl;
    }

    // Удаление элемента из карты
    myMap.erase(2);

    // Проверка, пуста ли карта
    if (myMap.empty()) {
        std::cout << "Карта пуста после удаления элемента." << std::endl;
    } else {
        std::cout << "Карта не пуста." << std::endl;
    }

    // Размер карты
    std::cout << "Размер карты: " << myMap.size() << std::endl;

    // Очистка всех элементов из карты
    myMap.clear();

    // Проверка, пуста ли карта после очистки
    if (myMap.empty()) {
        std::cout << "Карта пуста после очистки." << std::endl;
    } else {
        std::cout << "Карта не пуста." << std::endl;
    }

    return 0;
}
