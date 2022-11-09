//Л.Р. 1 задание 3 задача 14
#include <stdio.h>
 
int main()
{
    int  x1,y1,x2,y2,x3,y3,a,b,A,B,C;
    printf("Введите вершину (x1 и y1) через пробел: \n");
    scanf("%d%d", &x1, &y1);
    printf("Введите вершину (x2 и y2) через пробел: \n");
    scanf("%d%d", &x2, &y2);
    printf("Введите вершину (x3 и y3) через пробел: \n");
    scanf("%d%d", &x3, &y3);
    printf("Введите точку (a и b) через пробел: \n");
    scanf("%d%d", &a, &b);
    
    A = (x1 - a) * (y2 - y1) - (x2 - x1) * (y1 - b);
    B = (x2 - a) * (y3 - y2) - (x3 - x2) * (y2 - b);
    C = (x3 - a) * (y1 - y3) - (x1 - x3) * (y3 - b);
    
    if (A >= 0 && B >= 0 && C >= 0)
    printf("Лежит\n");
    if (A <= 0 && B <= 0 && C <= 0)
    printf("Лежит\n");
    else
    printf("Не лежит\n");
    return 0;
}

