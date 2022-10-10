//Л.Р. 4 задание 1 задача 14
#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int main() {
    int n, m, p;
    int a[100][100];
    printf("enter the size of matrix NxM\n");
    printf("enter the value of the double array (strok)\n");
    scanf("%i", &n);
    printf("enter the value of the double array (stolb)\n");
    scanf("%i", &m);
    printf("choose 1to random and 2for kb input\n");
    scanf("%i", &p);
    switch (p) {
    case 1:
        for (int j = 0; j < m; j++) {
            for (int k = 0; k < n; k++)
            {
                printf("arr[%d][%d]=", j, k);
                scanf("%d", &a[j][k]);
            }

        }
        break;
    case 2:
        for (int j = 0; j < m; j++) {
            for (int k = 0; k < n; k++)
            {
                printf("arr[%d][%d]=", j, k);
                a[j][k] = (rand() % 100-40);
                printf("%d\n", a[j][k]);
            }
        }
        break;
    default:
        printf("stupid");
    }
    
    return 0;}
