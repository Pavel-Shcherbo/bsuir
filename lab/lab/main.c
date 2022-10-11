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
                    a[j][k] = (rand() % 10-3);
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
        return 0;
    }
