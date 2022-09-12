//Л.Р. 2 задание 1 задача 14
#include <stdio.h>

int main()
{
    int sum, a, b;
    printf("Введи сумму: \n");
    scanf("%d", &sum);
    for (b = 0; b < sum; b++ ){
        a = (sum - (5 * b)) / 3 ;
        if (a >= 0 && b >= 0 && a%1==0 && sum == 3*a+5*b)
            printf("а равно %d, b равно %d\n", a , b);
    }
    return 0;
}
