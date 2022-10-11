//Л.Р. 4 задание 1 задача 14
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
                    a[j][k] = (rand() % 10-4);
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
      for(unsigned int j = 0; j < n; j++)
      { sum = 0;
         for(unsigned int k=0;k<n;k++)
         {
             sum =sum + a[j][k];
            if(a[j][k] < 0)
               negative = true;
         }
         if(!negative)
             printf("\nSum of %d row: %d\t", (j+1), sum);

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
    printf("\nminsum = %d\n", minsum);
        return 0;
    }
