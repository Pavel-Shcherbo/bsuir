#include <stdio.h>
#include <stdlib.h>
#include "arrays.h"

int checkinput(int a, int m, int z) {
    while (scanf("%d", &a) != 1 || getchar() != '\n' || a < m || a > z) {
        printf("Pls enter a NUMBER between %d to %d\n", m, z);
        rewind(stdin);
    }
    return a;
}

void outputmas(int** mas, int n, int m) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            printf("%d\t", mas[i][j]);
        }
        printf("\n");
    }
}

void swap(int *a, int *b) {
    int temp = *b;
    *b = *a;
    *a = temp;
}

void sum_st(int** sum_m, int** mas, int n, int m) {
    int k = 0;
    for (int i = 0; i < n; i++) {
        sum_m[k][1] = i;
        sum_m[k][2] = 0;
        for (int j = 0; j < m; j++) {
            if(mas[j][i] % 2 == 1)
            sum_m[k][2] += mas[j][i];
        }
        k++;
    }
}

int separation(int** sum_m, int start, int end) {
    int piv = sum_m[end][2];
    int piv_ind = start;
    for (int i = start; i < end; i++) {
        if (sum_m[i][2] <= piv) {
            swap(&sum_m[i][2], &sum_m[piv_ind][2]);
            swap(&sum_m[i][1], &sum_m[piv_ind][1]);
            piv_ind++;
        }
    }
    swap(&sum_m[piv_ind][2], &sum_m[end][2]);
    swap(&sum_m[piv_ind][1], &sum_m[end][1]);

    return piv_ind;
}

void qs(int** sum_m, int start, int end) {
    if (start >= end) {
        return;
    }
    int piv_ind = separation(sum_m, start, end);
    qs(sum_m, start, piv_ind - 1);
    qs(sum_m, piv_ind + 1, end);
}

void swap_column(int** sum_m, int** mas, int n, int m) {
    int k = n-1;
    int** buff = NULL;
    buff = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        buff[i] = (int*)malloc(m * sizeof(int));
        for (int j = 0; j < m; j++) {
            buff[i][j] = mas[j][sum_m[k][1]];
        }
        k--;
    }
    for (int i = n - 1; i >= 0; i--) {
        for (int j = 0; j < m; j++) {
            mas[i][j] = buff[j][i];
        }
    }
    for (int i = 0; i < n; i++) {
        free(buff[i]);
    }
    free(buff);
}
