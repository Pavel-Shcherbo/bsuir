//Л.Р. 3 задание 2 задача 14
#include <stdio.h>
#include <stdlib.h>



void arr_rand_input(int a[], int n);

int main()
{
    int a[100],i,n,min,max, idx_min = 0, idx_max = 0,choice=0;
   printf("Enter size of the array : ");
   scanf("%d",&n);
    printf("Print 1 if you want to enter the elements manually or print 2 to fill the arry with  random numbers\n");
    scanf("%i",&choice);
    switch (choice)
    {
        case 1:
            for(i=0; i<n; i++)
            {
                scanf("%d",&a[i]);
            }
            printf("Array: \n");
            for(int i=0; i<n; i++) {
                printf("%d ", a[i]);
            }
            break;
        case 2:
            arr_rand_input(a,n);
            break;
        default:
            return 0;
            break;
    }
    while (n > 100 || n < 2) {
        printf("Pls try again\n");
        rewind(stdin);
        printf("Enter size of the array : ");
        scanf("%d",&n);
    }
   min=max=a[0];
   for(i=1; i<n; i++)
   {
        if(min>a[i])
         min=a[i];
          if(max<a[i])
           max=a[i];
   }
    printf("minimum of array is : %d",min);
    printf("\nmaximum of array is : %d\n",max);
    
   
    printf("Array: \n");
    for(int i=0; i<n; i++) {
         printf("%d ", a[i]);
      }
    for (int i = 0; i < n; ++i) if (a[i] == max) idx_max = i;
    for (int i = 0; i < n; ++i) if (a[i] == min) idx_min = i;
     
       printf("\n%d\n", idx_max);
    if(idx_min < idx_max)
    {
        for(int i = idx_max;i>idx_min+1; i-- )
        {
            a[i -1] = a[i];
            n--;
        }
    }else if (idx_min>idx_max)
    {
        if(idx_min > idx_max)
        {
            for(int i = idx_min;i>idx_max+1; i-- )
            {
                a[i -1] = a[i];
                n--;
            }
        }
    }
    printf("Array: \n");
    for(int i=0; i<n; i++) {
         printf("%d ", a[i]);
      }
    
   return 0;
}

void arr_rand_input(int a[], int n)
{
    for (int i = 0; i < n; i++)
    {
        a[i] = rand();
    }
}
