#include <stdio.h>
#include <malloc.h>
#include "arrays.h"

#define scanf scanf_s
int main()
{
    int n = 0;
    scanf("%d", &n);
    int* mas;
    mas = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        scanf("%d", &mas[i]);
    }
    int m = 0;
    scanf("%d", &m);
    int* mas2;
    mas2 = (int*)malloc(m*sizeof(int));
    for (int i = 0; i < m; i++) {
        scanf("%d", &mas2[i]);
    }
    n = del(mas, mas2, n, m);
    free(mas2);
    mas = (int*)realloc(mas,n*sizeof(int));
    outputmas(mas, n);
    free(mas);
}
