#include "arrays.h"
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <stdbool.h>

int symmetry(int** a, int n ){
    bool sim = true;
    for (int j = 0; j < n; j++)
    {
        for (int k = 0; k < n; k++)
        {
            if (a[j][k] != a[n - 1 - k][n - 1 - j])
            {
                sim = false;
                break;
            }
        }
        if (!sim)
        {
            break;
        }
    }
    return sim;
}

void newarr(int** a, int n, bool sim){
        int** b = (int**)malloc(n * sizeof(int*));
        for (int i = 0; i < n; i++)
        {
            b[i] = (int*)malloc((n-1) * sizeof(int));
        }
        if (sim == true) {
            printf("Матрица симметрична относительно побочной диагонали\n");
            check(a, b, n, sim);
        }
        else {
            printf("Матрица не симметрична относительно побочной диагонали\n");
            check(a, b, n, sim);
        }
    int m = n;
    output(b, n, m-1);
    freemas(b, n);
}

void check(int** a, int** b, int n, bool sim){
    for (int i = 0; i < n; i++)
    {
        int counter = 0;
        for (int j = 0; j < n; j++)
        {
                if (sim==true ? i == n-j-1 : i == j ) {`
                    counter++;
                    continue;
                }
                b[i][j - counter] = a[i][j];
        }
    }
}

void freemas(int** b, int n){
    for(int i=0; i<n; i++){
        free(b[i]);
    }
    free(b);
}


void output(int** a, int n, int m){
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
        {
            printf("%5d ", a[i][j]);
        }
        printf("\n");
    }
}

