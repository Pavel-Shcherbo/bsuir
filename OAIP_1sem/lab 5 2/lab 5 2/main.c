#include <stdio.h>
#include <stdlib.h>
#include "arrays.h"

int checkinput(int a) {
    while (scanf("%d", &a) != 1 || getchar() != '\n') {
        printf("Pls enter a number!\n");
        rewind(stdin);
    }
    return a;
}

int main()
    {
    int n=0;

    printf("Введите количество строк и столбцов: ");
    n = checkinput(n);
    int** a = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++)
    {
        a[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++)
        {
            printf("a[%d][%d] = ", i, j);
            a[i][j] = checkinput(a[i][j]);        }
    }
    int m = n;
    output(a, n, m);
    bool k = 0;
    k = symmetry(a,n);
    newarr(a,n, k);
    freemas(a, n);
    return 0;
    }
