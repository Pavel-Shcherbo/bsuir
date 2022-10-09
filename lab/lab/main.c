//Л.Р. 3 задание 3 задача 14
#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int main()
{
    int a[100], b[100], i, n=0, flag = 0, p;
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
                a[i] = (rand() %10);
                printf("the %dth element of array is %d\n", i, a[i]);}
            for (int i = 0; i < n; i++) {
                b[i] = (rand() %10);
                printf("the %dth element of array is %d\n", i, b[i]);}
            break;
        case 2:
            printf("Enter elements in array_1 : ");
            for (i = 0; i < n; i++){
                boolean = scanf("%d", &a[i]);
                while (boolean != 1) {
                    printf("Pls try again\n");
                    rewind(stdin);
                    boolean = scanf("%d", &a[i]);}
            }
            printf("Enter elements in array_2 : ");
            for (i = 0; i < n; i++){
                boolean = scanf("%d", &b[i]);
                while (boolean != 1) {
                    printf("Pls try again\n");
                    rewind(stdin);
                    boolean = scanf("%d", &b[i]);}
            }
        break;}
    
    printf("\nArray_1 : \n");
    for (int i = 0; i < n; i++){
        printf("%d ", a[i]);}
    printf("\nArray_2: \n");
    for (int i = 0; i < n; i++){
        printf("%d ", b[i]);}
    i = 0;
    while (flag != 1) {
        if (a[i] != b[i]) {
            break;
        }
        i++;}
    if (a[i] > b[i]) {
        for (i = n - 1; i >= 0; i--) {
            a[i] = a[i] - b[i];
            if (a[i] < 0) {
                a[i] += 10;
                a[i - 1] -= 1;}
        }
        printf("\nArray_itog: \n");
        for (int i = 0; i < n; i++){
            printf("%d ", a[i]);}
    }
    else {
        for (i = n - 1; i >= 0; i--) {
            b[i] = b[i] - a[i];
            if (b[i] < 0) {
                b[i] += 10;
                b[i - 1] -= 1;}
        }
        printf("\nArray_itog: \n");
        for (int i = 0; i < n; i++){
            printf("%d ", b[i]);}
    }
    return 0;}
