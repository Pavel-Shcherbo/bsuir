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
int checkinputk(int k) {
    while (scanf("%d", &k) != 1 || getchar() != '\n' || k<1) {
        printf("Pls enter a number!\n");
        rewind(stdin);
    }
    return k;
}

int main()
    {
    int n = 0, m=0, k=0,c=0;

    printf("Введите количество строк: ");
    n = checkinput(n);
   // scanf("%d", &n);
    printf("Введите количество столбцов: ");
    m = checkinput(m);
    //scanf("%d", &m);
    printf("Введите число k: ");
    k = checkinput(k);
    //scanf("%d", &k);
    int* mstring = NULL;
    mstring = (int*)malloc(n * sizeof(int));
    for(int i = 0; i < n; i++) mstring[i] = m;
    int** a = (int**)calloc(n, sizeof(int*));
    for (int i = 0; i < n; i++)
    {
        a[i] = (int*)calloc(m, sizeof(int));
        for (int j = 0; j < m-1; j++)
        {
            printf("a[%d][%d] = ", i, j);
            a[i][j] = checkinputk(a[i][j]);
        }
    }
    // Вывод
    for (int i = 0; i < n; i++)
        {
            for (int j = 0; j < m; j++)
            {
                printf("%5d ", a[i][j]);
            }
            printf("\n");
        }
    poisk(a, n, mstring, k);
    free(a);
    return 0;
    }

