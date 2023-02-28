#include <stdio.h>
#include <stdlib.h>
#include "arrays.h"

int checkinput(int a) {
    while (scanf("%d", &a) != 1 || getchar() != '\n'|| a<0) {
        printf("Pls enter a number!\n");
        rewind(stdin);
    }
    return a;
}

int main()
    {
    int n = 0, m=0, k=0;
    printf("Введите количество строк: ");
    n = checkinput(n);
    printf("Введите количество столбцов: ");
    m = checkinput(m);
    printf("Введите число k: ");
    k = checkinput(k);
    int* mstring = NULL;
    mstring = (int*)malloc(n * sizeof(int));
    for(int i = 0; i < n; i++) mstring[i] = m;
    int** a = (int**)calloc(n, sizeof(int*));
    for (int i = 0; i < n; i++)
    {
        a[i] = (int*)calloc(m, sizeof(int));
        for (int j = 0; j < m; j++)
        {
            printf("a[%d][%d] = ", i, j);
            a[i][j] = checkinput(a[i][j]);
            if(a[i][j]=='\0'){break;};
        }
    }
    output(a, n, m);
    poisk(a, n, mstring, k);
    free(a);
    return 0;
    }
