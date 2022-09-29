//Л.Р. 3 задание 1 задача 14
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int main()
{
    int a[100], i, n=0, min, idx_min = 0, sum = 0,p;
    bool boolean = 0;
    
    while (n > 100 || n < 2 || n % 1 != 0) {
        rewind(stdin);
        printf("Enter size of the array : ");
        scanf("%d", &n);
    }
    
    printf("Choose 1 to random and 2 for manual input\n");
    scanf("%i", &p);
    switch (p) {
        case 1:
            for (int i = 0; i < n; i++) {
                a[i] = (rand() %10 - 5);
                printf("the %dth element of array is %d\n", i, a[i]);}
            break;
        case 2:
            printf("Enter elements in array : ");
            for (i = 0; i < n; i++){
                boolean = scanf("%d", &a[i]);
                while (boolean != 1) {
                    printf("Pls try again\n");
                    rewind(stdin);
                    boolean = scanf("%d", &a[i]);}
            }
        break;
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
    for (i = 0; i < n; i++){
        if (flag && a[i] < 0) {
            flag = 0;
            break;}
        else if (a[i] < 0) flag = 1;
        else if (flag)sum = sum + a[i];}
    if (!flag)printf("\nSumma el: %d\n", sum);
    else printf("NETY 2 OTRIC");
    return 0;
}

