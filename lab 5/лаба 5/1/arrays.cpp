#include "arrays.h"
#include <stdio.h>
#include <malloc.h>
void sort_(int* mas, int n) {
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (mas[i] > mas[j]) {
                int a = mas[i];
                mas[i] = mas[j];
                mas[j] = a;
            }

        }
     }
}

int del(int* mas, int* mas2, int n, int m) {
    int l = n;
    for (int j = 0; j < m; j++) {
        for (int i = 0; i < l; i++) {
            if (mas2[j] == mas[i]) {
                l--;
                for (int k = i; k < l; k++) {
                    int a = mas[k];
                    mas[k] = mas[k + 1];
                    mas[k + 1] = a;
                }
                
            }
        }
    }
    return l;
}
void outputmas(int* mas, int n) {
    for (int i = 0; i < n; i++) printf("%d ", mas[i]);
}
void outputmass(int* mas, int n, int m) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++)
            printf("%d ", mas[i][j]);
        printf("\n");
    }
}