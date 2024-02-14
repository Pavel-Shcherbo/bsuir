#include <iostream>
#include "queue.h"
using namespace std;

int main() {
    int choice;
    cout << "1. Type int" << endl << "2. Type double" << endl;
    cout << "Choose your type: ";
    validation(&choice, 2);
    int size;
    cout << "Enter size: ";
    validation(&size, 1000000);

    if (choice == 1) {
        Queue<int> firstQueue;
        int* arr = new int[size];
        for (int i = 0; i < size; i++) {
            cin >> arr[i];
            firstQueue.push(arr[i]);
        }

        processQueue(firstQueue, arr, size);
    }
    else if (choice == 2) {
        Queue<double> firstQueue;
        double* arr = new double[size];
        for (int i = 0; i < size; i++) {
            cin >> arr[i];
            firstQueue.push(arr[i]);
        }

        processQueue(firstQueue, arr, size);
    }

    return 0;
}
