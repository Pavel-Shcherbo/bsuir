//Л.Р. 4 задание 1 задача 14
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <time.h>
int main() {
    int n=0, p=0;
    int a[100][100], sum=0;
    bool negative = false;
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
                    a[j][k] = (rand() % 11-5);
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
    for(unsigned int j = 0; j < n; j++)
    { sum = 0;
        for(unsigned int k=0;k<n;k++)
        {
            sum =sum + a[j][k];
            if(a[j][k] < 0)
                negative = true;
        }
        if(!negative)
            printf("\nSum of %d`s row: %d\t", (j+1), sum);
        else
        {
            negative = false;
            printf("\nLine %d has a negative element\t",(j+1));
        }
    }
    int sumdig1=0,sumdig2=0,minsum1=99999999,minsum2=99999999,minsum;
    for(int h=1;h<n;h++){
        for(int j=h,k=0;j<n;k++,j++)
        {
            sumdig1 += a[j][k];
        }
        if (minsum1>=sumdig1)
        {
            minsum1=sumdig1;
        }
        for(int k=h,j=0;k<n;k++,j++)
        {
            sumdig2 += a[j][k];
        }
        if (minsum2>=sumdig2)
        {
            minsum2=sumdig2;
        }
        sumdig1 -= sumdig1;
        sumdig2 -= sumdig2;
        if (minsum2>=minsum1)
        {
            minsum=minsum1;
        }
        else
        {minsum=minsum2;}
    }
    printf("\nMinimum diagonal sum = %d\n", minsum);
    return 0;}
