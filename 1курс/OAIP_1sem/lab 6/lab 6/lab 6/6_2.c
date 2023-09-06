#include <stdio.h>
#include <stdlib.h>
#include "arrays.h" 

void free2(int **mas,int **sum_m, int n ){
    for (int i = 0; i < n; i++) {
        free(mas[i]);
        free(sum_m[i]);
    }
    free(sum_m);
    free(mas);
}

void input(int n, int**mas, int** sum_m, int m){
    for (int i = 0; i < n; i++) {
        mas[i] = (int*)malloc(m * sizeof(int));
        sum_m[i] = (int*)malloc(3 * sizeof(int));
        for (int j = 0; j < m; j++) {
            printf("mas[%d][%d] = ", i, j);
    mas[i][j] = checkinput(mas[i][j], -2147483648, 2147483647);
        }
    }
}

int** init_array(int **mas, int n, int m ){
    mas = (int**)malloc(n * sizeof(int*));
    return mas;
}

int main()
{
    int n = 0, m = 0;
    printf("Enter number of strings in array ");
    n = checkinput(n, 0, 2147483647);
    printf("Enter number of columns in array ");
    m = checkinput(m, 0, 2147483647);
    int** mas = init_array(mas, n, m);
    int** sum_m = init_array(sum_m, n, m);
    input(n, mas, sum_m, m);
    printf("\nYour array\n");
    outputmas(mas, n, m);
    sum_st(sum_m, mas, n, m);
    qs(sum_m, 0, m-1);
    swap_column(sum_m, mas, n, m);
    printf("\nArray with sorted odd strings in descending sum order\n");
    outputmas(mas, n, m);
    free2(mas, sum_m,n);
    return 0;
}
