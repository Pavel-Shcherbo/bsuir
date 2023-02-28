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
    // Вывод
    for (int i = 0; i < n; i++)
        {
            for (int j = 0; j < n; j++)
            {
                printf("%5d ", a[i][j]);
            }
            printf("\n");
        }
    bool k = 0;
    k = symmetry(a,n);
    newarr(a,n, k);
    
    
    for(int i=0; i<n; i++){
        free(a[i]);
    }
    free(a);
    return 0;
    }
