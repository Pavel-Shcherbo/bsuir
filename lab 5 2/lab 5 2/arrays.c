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
            for (int i = 0; i < n; i++)
            {
                int counter = 0;
                for (int j = 0; j < n; j++)
                {
                    if (i == n-j-1) {
                        counter++;
                        continue;
                    }
                    b[i][j - counter] = a[i][j];
                }
            }
        }
        else {
            printf("Матрица не симметрична относительно побочной диагонали\n");
            for (int i = 0; i < n; i++) {
                int counter = 0;
                for (int j = 0; j < n; j++) {
                    if (i == j) {
                        counter++;
                        continue;
                    }
                    b[i][j-counter] = a[i][j];
                }
            }
        }
        for (int i = 0; i < n; i++)
        {
            for (int j = 0; j < n - 1; j++)
            {
                printf("%5d ", b[i][j]);
            }
            printf("\n");
        }
    for(int i=0; i<n; i++){
        free(b[i]);
    }
    free(b);
}

