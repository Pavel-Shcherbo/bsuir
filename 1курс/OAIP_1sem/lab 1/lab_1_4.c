//Л.Р. 1 задание 4 задача 14
#include <stdio.h>
 
int main()
{
    int k;
    
    printf("Введите число age: \n");
    scanf("%d", &k);
    
    if (k >= 2 && k <= 4)
        printf("мне %d года\n" ,k);
    if (k == 1)
        printf("мне %d год\n" ,k);
    if (k > 4 && k <= 9)
        printf("мне %d лет\n" ,k);
    if (k >= 10)
    printf("вы ввели неверное число\n" );
    return 0;
}

