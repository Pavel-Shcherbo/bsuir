//Л.Р. 4 задание 2 задача 14
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <time.h>
int main() {
    int n=0, m=0, p=0;
    int a[100][100], sum=0;
    bool negative = false;
    while (n > 100 || n < 2) {
        rewind(stdin);
        printf("enter the number of rows\n");
        scanf("%d",&n);}
    while (m > 100 || m < 2) {
        rewind(stdin);
        printf("enter the number of columns\n");
        scanf("%d",&m);}
    while (p > 2 || p < 1) {
        rewind(stdin);
        printf("Press 1 to manual input, press 2 to random\n");
        scanf("%i", &p);}
    srand(time(0));
    switch (p) {
        case 1:
            for (int j = 0; j < n; j++) {
                for (int k = 0; k < m; k++)
                {
                    printf("arr[%d][%d]=", j, k);
                    scanf("%d", &a[j][k]);
                }
            }
            break;
        case 2:
            for (int j = 0; j < n; j++) {
                for (int k = 0; k < m; k++)
                {
                    a[j][k] = (rand() % 11-5);
                }
            }
            break;
        default:
            printf("stupid");
    }
    for(int j=0;j<n;j++){
        for(int k=0;k<m;k++){
            printf("%d ",a[j][k]);
        }
        printf("\n");
    }
    for(unsigned int j = 0; j < n; j++)
    {
        negative = true;
        sum = 0;
        for(unsigned int k=0;k<n;k++)
        {
            if(a[k][j] >= 0) {
                negative = false;
                break;
            }
        }
        if(negative)
        {
            for(unsigned int k=0;k<n;k++)
                sum =sum + a[k][j];
            sum = sum / n;
            for (int j = 0; j < n; j++)
                for (int k = 0; k < m; k++)
                    a[j][k] -= sum;
            printf("\n\n");
            for(int j=0;j<n;j++){
                for(int k=0;k<m;k++){
                    printf("%d ",a[j][k]);
                }
                printf("\n");
            }
            break;
        }
        else if (j == n - 1)
            printf("There is no negatives columns\n");
    }
    return 0;}
