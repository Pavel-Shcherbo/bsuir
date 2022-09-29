//Л.Р. 3 задание 2 задача 14
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>


int main()
{
    int a[100],i,n = 0,min,max, idx_min = 0, idx_max = 0, p;
    bool boolean = 0;

    while (n > 100 || n < 2) {
        rewind(stdin);
        printf("Enter size of the array : ");
        scanf("%d",&n);}
    printf("Choose 1 to random and 2 for manual input\n");
    scanf("%i", &p);
    switch (p) {
        case 1:
            for (int i = 0; i < n; i++) {
                a[i] = (rand() % 10 );
                printf("the %dth element of array is %d\n", i, a[i]);}
            break;
        case 2:
            printf("Enter elements in array : ");
            for (i = 0; i < n; i++){
                boolean = scanf("%d", &a[i]);
                while (boolean != 1) {
                    printf("Pls try again\n");
                    rewind(stdin);
                    boolean = scanf("%d", &a[i]);}}
        break;}
    
    min=max=a[0];
    for(i=1; i<n; i++){
        if(min>a[i])
            min=a[i];
        if(max<a[i])
            max=a[i];}
    
    printf("Array: \n");
    for(int i=0; i<n; i++) {
        printf("%d ", a[i]);}
    
    for (int i = 0; i < n; ++i) if (a[i] == max) idx_max = i;
    for (int i = 0; i < n; ++i) if (a[i] == min) idx_min = i;
    
    if(idx_min < idx_max)
    {
        for(int i = idx_max;i>idx_min+1; i-- )
        {
            a[i -1] = a[i];
            n--;
        }
    }
    else if (idx_min>idx_max)
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
    printf("\nArray_new: \n");
    for(int i=0; i<n; i++) {
        printf("%d ", a[i]);
    }
    return 0;
    
}


