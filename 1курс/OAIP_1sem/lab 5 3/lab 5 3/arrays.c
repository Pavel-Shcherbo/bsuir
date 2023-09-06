#include "arrays.h"
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

void deleteElement(int** a, int m, int rowIndex, int columnIndex)
{
    for (int i = columnIndex; i < m - 1; i++){
        int b = a[rowIndex][i];
        a[rowIndex][i] = a[rowIndex][i + 1];
        a[rowIndex][i+1] = b;
    }
}

void poisk(int** a, int n, int* mstring, int k){
    for(int i = 0; i < n; i++)
    {
        for(int j=0;j < mstring[i];j+=2)
        {
            if(a[i][j] < k)
            {
                deleteElement(a, mstring[i], i, j);
                mstring[i]--;
                j--;
            }
        }
    }
    
    printf("\n");
    for (int i = 0; i < n; i++)
        {
            for (int j = 0; j < mstring[i]; j++)
            {
                if (a[i][j] == 0) {
                    break;              //вывод без 0
                }
                printf("%5d ", a[i][j]);
            }
            printf("\n");
        }
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

