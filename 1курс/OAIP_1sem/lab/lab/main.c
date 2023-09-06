#include <stdio.h>
#include <stdlib.h>
#include "arrays.h"

int checkinput(int a) {
    while (scanf("%d", &a) != 1 || getchar() != '\n' || a<1) {
        printf("Pls enter a number!\n");
        rewind(stdin);
    }
    return a;
}

int main()
    {
    int n=0, m=0;
    printf("Введите количество строк: ");
    n = checkinput(n);
    printf("Введите количество столбцов: ");
    m = checkinput(m);
    int** a = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++)
    {
        a[i] = (int*)malloc(m * sizeof(int));
        for (int j = 0; j < m; j++)
        {
            printf("a[%d][%d] = ", i, j);
            a[i][j] = checkinput(a[i][j]);
        }
    }
    output(a, n, m);
    poisk(a, n, m);
    free(a);
    return 0;
    }
