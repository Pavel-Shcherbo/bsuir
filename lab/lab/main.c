//Л.Р. 4 задание 2 задача 14
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <time.h>
int main() {
    int n, p;
    int a[100][100], sum=0;
    bool negative = false;
    
    printf("enter the value of the double array (strok)\n");
    scanf("%i", &n);
    printf("1==input, 2==random\n");
    scanf("%i", &p);
    srand(time(0));
    switch (p) {
        case 1:
            for (int j = 0; j < n; j++) {
                for (int k = 0; k < n; k++)
                {
                    printf("arr[%d][%d]=", j, k);
                    scanf("%d", &a[j][k]);
                }
            }
            break;
        case 2:
            for (int j = 0; j < n; j++) {
                for (int k = 0; k < n; k++)
                {
                    printf("arr[%d][%d]=", j, k);
                    a[j][k] = (rand() % 10-5);
                    printf("%d\n", a[j][k]);
                }
            }
            break;
        default:
            printf("stupid");
    }
    for(int j=0;j<n;j++){
        for(int k=0;k<n;k++){
            printf("%d ",a[j][k]);
        }
        printf("\n");
    }
    
    return 0;
}
