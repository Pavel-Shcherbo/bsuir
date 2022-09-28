//Л.Р. 3 задание 1 задача 14
#include <stdio.h>

int main()
{
    int a[100], i, n, min, idx_min = 0, sum = 0;
  
    printf("Enter size of the array : ");
    scanf("%d", &n);

    while (n > 100 || n < 2 || n % 1 != 0) {
        printf("Pls try again\n");
        rewind(stdin);
        printf("Enter size of the array : ");
        scanf("%d", &n);
    }
    
    printf("Enter elements in array : ");
    for (i = 0; i < n; i++)
    {
        scanf("%d", &a[i]);
    }

    printf("Array: \n");
    for (int i = 0; i < n; i++)
    {
        printf("%d ", a[i]);
    }

    min = a[0];

    for (i = 1; i < n; i++)
    {
        if (min > a[i])
        {
            min = a[i];
            idx_min = i;
        }
    }
    printf("\nminimum of array is : %d",min);
    printf("\n Position of min el: %d\n", idx_min);



    int flag = 0;
    for (i = 0; i < n; i++)
    {
        if (flag && a[i] < 0)
        {
            flag = 0;
            break;
        }
        else if (a[i] < 0) flag = 1;
        else if (flag)sum = sum + a[i];
    }

    if (!flag)printf("\nSumma el: %d\n", sum);
    else printf("NETY 2 OTRIC");
  
   return 0;
}
