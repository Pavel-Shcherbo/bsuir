#include "arrays.h"
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <stdbool.h>

void poisk(int** a, int n, int m){
    bool flag = false;
    for(unsigned int i = 0; i < n; i++)
    {
        int sum = 0;
        for(unsigned int j=0;j<m;j++)
        {
            sum += a[i][j];
        }
        for(unsigned int j=0;j<n;j++)
        {
            if (a[i][j] > sum-a[i][j])
            {
                flag = true;
            }
        }
    }
    flag == true ? printf("Yes\n") : printf("No\n");
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
