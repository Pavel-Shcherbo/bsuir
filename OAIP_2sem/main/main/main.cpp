#include <iostream>
#include <fstream>
#include <string>

using namespace std;

int main() {
    ifstream file("input.txt"); // открываем файл для чтения

    if (!file.is_open()) { // проверяем, удалось ли открыть файл
        cout << "Ошибка открытия файла" << endl;
        return 1;
    }

    string content; // переменная для хранения содержимого файла
    getline(file, content, '\0'); // считываем содержимое файла в строку

    file.close(); // закрываем файл

    string delimiter = ".?!"; // символы, которые разделяют предложения

    size_t pos = 0;
    string sentence;

    while ((pos = content.find_first_of(delimiter)) != string::npos) { // разбиваем содержимое файла на предложения
        sentence = content.substr(0, pos + 1);
        content.erase(0, pos + 1);

        if (sentence.find('"') != string::npos) { // проверяем, содержит ли предложение кавычки
            cout << sentence << endl; // выводим предложение на экран
        }
    }

    return 0;
}
