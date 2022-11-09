//Л.Р. 2 задание 2 задача 14
#include <stdio.h>

int main()
{
    int n, sum1, i, sum_2;
    printf("Введите количество чисел n\n");
    scanf("%d", &n);
    n = n + 1;
    sum1=0;
    for(i=0;i<n;i++)
       sum1+= i*i;
    printf("Сумма квадратов: %d\n",sum1);
    sum_2 = 0;
    for(i=0;i<n;i++)
       sum_2+= i*i*i;
    printf("Сумма кубов: %d\n",sum_2);
    return 0;
}
