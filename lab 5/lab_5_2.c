//Л.Р. 5 задание 1
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <time.h>
int main() {
    int n=0, p=0;
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
                    a[j][k] = (rand() % 9+1);
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
    bool sim=true;
        for (int j=0; j<n; j++)
        {
            for (int k=0; k<n; k++)
            {
                if (a[j][k]!=a[n-1-k][n-1-j])
                {
                    sim=false;
                    break;
                }
            }
            if (!sim)
            {
                break;
            }
        }
    if (sim == true){
        printf("Матрица симметрична относительно побочной диагонали\n");
        for (int j = 0; j<n; j++){
            *(*(a + j) + j) = 0;
         }
    }
    else {
        for(int j=0;j<n;j++){
            for(int k=0;k<n;k++){
                if(j+k!=n-1)
                    --j;
                    //printf("%d\t", a[j][k]);
            }
            printf("\n");
            
        }

        printf("Матрица не симметрична относительно побочной диагонали\n");
    }
    for(int j=0;j<n;j++){
        for(int k=0;k<n;k++){
            printf("%d\t",a[j][k]);
        }
        printf("\n");
    }
    return 0;}

