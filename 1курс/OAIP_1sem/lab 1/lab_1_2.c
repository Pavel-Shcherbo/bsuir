//Л.Р. 1 задание 2 задача 14
#include <stdio.h>
 
int main()
{
    int m, n, p, s = 0;
    
    printf("Введите число m: \n");
    scanf("%d", &m);
    printf("Введите число n: \n");
    scanf("%d", &n);
    printf("Введите число p: \n");
    scanf("%d", &p);
    if(m < 0)
        ++s;
    if(n < 0)
        ++s;
    if(p < 0)
        ++s;
    
    printf("Отрицательных чисел: %d\n", s);
    
    return 0;
}

