#include <iostream>
#include <fstream>
#include <cstdlib>
#include <cstring>
#include <ctime>
#include <unistd.h>
#include <sys/stat.h>
#include <sys/types.h>
#include <dirent.h>

using namespace std;

const string BASKET_DIRECTORY = "Корзина";
const string INFO_FILE = ".info";

// Функция для создания директории "Корзина"
void createBasketDirectory() {
    mkdir(BASKET_DIRECTORY.c_str(), 0700);
}

// Функция для удаления файла с диска
void deleteFile(const string& filename) {
    unlink(filename.c_str());
}

// Функция для перемещения файла в корзину
void moveToBasket(const string& filename, const string& originalPath) {
    string newFilename = BASKET_DIRECTORY + "/" + filename;
    string infoFilePath = BASKET_DIRECTORY + "/" + INFO_FILE;

    // Записываем информацию о файле в файл .info
    ofstream infoFile(infoFilePath, ios::app);
    if (infoFile.is_open()) {
        time_t now = time(0);
        string timestamp = ctime(&now);
        infoFile << "File: " << filename << " Original Path: " << originalPath << " Deleted at: " << timestamp;
        infoFile.close();
    } else {
        cerr << "Unable to open .info file for writing." << endl;
    }

    // Перемещаем файл в корзину
    if (rename(originalPath.c_str(), newFilename.c_str()) != 0) {
        cerr << "Error moving file to basket." << endl;
    }
}

// Функция для восстановления файла из корзины
void restoreFromBasket(const string& filename, const string& originalPath) {
    string basketFilename = BASKET_DIRECTORY + "/" + filename;
    if (rename(basketFilename.c_str(), originalPath.c_str()) != 0) {
        cerr << "Error restoring file from basket." << endl;
    }
}

// Функция для просмотра содержимого корзины
void viewBasket() {
    string infoFilePath = BASKET_DIRECTORY + "/" + INFO_FILE;
    ifstream infoFile(infoFilePath);
    if (infoFile.is_open()) {
        cout << "Basket Contents:" << endl;
        cout << infoFile.rdbuf() << endl;
        infoFile.close();
    } else {
        cerr << "Basket is empty." << endl;
    }
}

// Функция для очистки корзины (удаление всех файлов из корзины)
void clearBasket() {
    DIR *dir;
    struct dirent *entry;
    dir = opendir(BASKET_DIRECTORY.c_str());
    if (dir != NULL) {
        while ((entry = readdir(dir)) != NULL) {
            string filename = entry->d_name;
            if (filename != "." && filename != ".." && filename != INFO_FILE) {
                string filepath = BASKET_DIRECTORY + "/" + filename;
                deleteFile(filepath);
            }
        }
        closedir(dir);
        cout << "Basket cleared." << endl;
    } else {
        cerr << "Unable to open basket directory." << endl;
    }
}

int main() {
    // Создаем папку "Корзина", если она еще не существует
    createBasketDirectory();

    int choice;
    string filename, originalPath;

    while (true) {
        cout << "1. Удалить файл" << endl;
        cout << "2. Восстановить файл из корзины" << endl;
        cout << "3. Просмотреть содержимое корзины" << endl;
        cout << "4. Очистить корзину" << endl;
        cout << "5. Выйти" << endl;
        cout << "Выберите действие: ";
        cin >> choice;

        switch (choice) {
            case 1:
                cout << "Введите имя файла для удаления: ";
                cin >> filename;
                cout << "Введите оригинальный путь к файлу: ";
                cin >> originalPath;
                moveToBasket(filename, originalPath);
                break;
            case 2:
                cout << "Введите имя файла для восстановления: ";
                cin >> filename;
                cout << "Введите оригинальный путь к файлу: ";
                cin >> originalPath;
                restoreFromBasket(filename, originalPath);
                break;
            case 3:
                viewBasket();
                break;
            case 4:
                clearBasket();
                break;
            case 5:
                exit(0);
            default:
                cerr << "Неверный выбор. Попробуйте еще раз." << endl;
                break;
        }
    }

    return 0;
}
