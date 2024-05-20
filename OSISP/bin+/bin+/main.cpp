#include <iostream>
#include <fstream>
#include <iomanip>
#include <cstring>
#include <cstdlib>
#include <ctime>
#include <sys/stat.h>
#include <sys/types.h>
#include <unistd.h>
#include <vector>
#include <sstream>

using namespace std;

const string BASKET_FOLDER = "/Users/pavelshcherbo/Desktop/stud/bin";

void createBasketFolder() {
    mkdir(BASKET_FOLDER.c_str(), 0777);
}

void addToBasket(const string& filename) {
    string newFilename = BASKET_FOLDER + "/" + filename.substr(filename.find_last_of("/") + 1);
    if (rename(filename.c_str(), newFilename.c_str()) != 0) {
        cerr << "Ошибка перемещения файла в корзину!" << endl;
        return;
    }

    time_t now = time(0);
    tm* ltm = localtime(&now);

    string infoFilename = BASKET_FOLDER + "/" + "bin.info";
    ofstream basketInfo(infoFilename, ios::app);
    if (!basketInfo) {
        cerr << "Ошибка открытия файла корзины!" << endl;
        return;
    }

    basketInfo << filename << " " << newFilename << " "
               << setw(2) << setfill('0') << ltm->tm_mday << '.'
               << setw(2) << setfill('0') << 1 + ltm->tm_mon << '.'
               << 1900 + ltm->tm_year << endl;

    basketInfo.close();
}

void restoreFromBasket() {
    string infoFilename = BASKET_FOLDER + "/" + "bin.info";
    ifstream basketInfo(infoFilename);
    if (!basketInfo) {
        cerr << "Ошибка открытия файла корзины!" << endl;
        return;
    }

    string originalFilename, newFilename, date;
    while (basketInfo >> originalFilename >> newFilename >> date) {
        cout << "Восстановление файла: " << originalFilename << endl;
        
        date.erase(0, 13);

        if (rename(newFilename.c_str(), originalFilename.c_str()) != 0) {
            cerr << "Ошибка восстановления файла!" << endl;
        }
    }

    basketInfo.close();

    ofstream clearBasketInfo(infoFilename);
    if (!clearBasketInfo) {
        cerr << "Ошибка открытия файла корзины!" << endl;
        return;
    }
    clearBasketInfo.close();
}


void clearBasket() {
    string infoFilename = BASKET_FOLDER + "/" + "bin.info";
    ifstream basketInfo(infoFilename);
    if (!basketInfo) {
        cerr << "Ошибка открытия файла корзины!" << endl;
        return;
    }

    string originalFilename, newFilename, date;
    while (basketInfo >> originalFilename >> newFilename >> date) {
        cout << "Удаление файла из корзины: " << originalFilename << endl;

        if (unlink(newFilename.c_str()) != 0) {
            cerr << "Ошибка удаления файла из корзины!" << endl;
        }
    }

    basketInfo.close();

    ofstream clearBasketInfo(infoFilename);
    if (!clearBasketInfo) {
        cerr << "Ошибка открытия файла корзины!" << endl;
        return;
    }
    clearBasketInfo.close();
}


void displayBasketInfo() {
    string infoFilename = BASKET_FOLDER + "/" + "bin.info";
    ifstream basketInfo(infoFilename);
    if (!basketInfo) {
        cerr << "Ошибка открытия файла корзины!" << endl;
        return;
    }

    string line;
    while (getline(basketInfo, line)) {
        cout << "Файл в корзине: " << line << endl;
    }

    basketInfo.close();
}

int main() {
    createBasketFolder();

    int choice;
    do {
        cout << "Меню:" << endl;
        cout << "1. Удалить файл" << endl;
        cout << "2. Восстановить файлы из корзины" << endl;
        cout << "3. Просмотреть содержимое корзины" << endl;
        cout << "4. Очистить корзину" << endl;
        cout << "0. Выход" << endl;
        cout << "Выберите действие: ";
        cin >> choice;

        switch (choice) {
            case 1: {
                string filename;
                cout << "Введите полный путь к файлу для удаления: ";
                cin.ignore();
                getline(cin, filename);
                addToBasket(filename);
                break;
            }
            case 2: {
                restoreFromBasket();
                break;
            }
            case 3: {
                displayBasketInfo();
                break;
            }
            case 4: {
                clearBasket();
                break;
            }
            case 0: {
                cout << "Выход из программы." << endl;
                break;
            }
            default:
                cout << "Неверный ввод! Пожалуйста, выберите существующий пункт." << endl;
        }
    } while (choice != 0);

    return 0;
}
