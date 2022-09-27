//Л.Р. 3 задание 2 задача 14
//Л.Р. 3 задание 3 задача 14
#include <stdio.h>

int main()
{
    int a[100],i,n,min,max, idx_min = 0;
  
   printf("Enter size of the array : ");
   scanf("%d",&n);
    while (n > 100 || n < 2) {
        printf("Pls try again\n");
        rewind(stdin);
        printf("Enter size of the array : ");
        scanf("%d",&n);
    }
    
   printf("Enter elements in array : ");
   for(i=0; i<n; i++)
   {
       scanf("%d",&a[i]);
   }
    printf("Array: \n");
    for(int i=0; i<n; i++) {
         printf("%d ", a[i]);
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
   
    for (int i = 0; i < n; ++i) if (a[i] == min) idx_min = i;
     
       printf("\n%d\n", idx_min);
    
   return 0;
}
