//Л.Р. 4 задание 3 задача 14
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
int main() {
    int n=0, p=0, min=100;
    int a[100][100];
    while (n > 100 || n < 2) {
        rewind(stdin);
        printf("Enter size of the array : ");
        scanf("%d",&n);}
    while (p > 2 || p < 1) {
        rewind(stdin);
        printf("Press 1 to manual input, press 2 to random\n");
        scanf("%i", &p);}
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
                    a[j][k] = (rand() % 20-10);
                }
            }
            break;
        default:
            printf("stupid");
    }
    for(int j=0;j<n;j++){
        for(int k=0;k<n;k++){
            printf("%d\t",a[j][k]);
        }
        printf("\n");
    }
    printf("\n");
    for(int j=0;j<n/2;j++){
        for(int k=n/2;k<n;k++){
            printf("%d\t",a[j][k]);
        }
        printf("\n");
    }
    printf("\n");
    for(int j=0;j<n/2;++j){
        for(int k=n/2;k<n;++k){
            if (a[j][k] < min)
            {
                min = a[j][k];
            }
        }
    }
    printf("min = %d\n", min);
    return 0;}
