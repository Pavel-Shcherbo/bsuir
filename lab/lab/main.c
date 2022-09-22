#include <stdio.h>
int main(){
float x1, y1, x2, y2, x3, y3;
    
    printf("enter the coordinates(like x1, y1, x2, y2, x3, y3)\n");

    if (scanf("%f", &x1) != 1)  (scanf("%f", &y1) != 1)  (scanf("%f", &x2) != 1)  (scanf("%f", &y2) != 1)  (scanf("%f", &x3) != 1)  (scanf("%f", &y3) != 1)  (x1 <= 0)  (x2 <= 0)  (x3 <= 0)  (y1 <= 0)  (y2 <= 0) || (y3 <= 0)
    {
        printf("you entered something wrong");
    }
    else
    {
        float l1 = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
        float l2 = (x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2);
        float l3 = (x3 - x1) * (x3 - x1) + (y3 - y1) * (y3 - y1);
        float temp_max = 0, temp_l2 = 0, temp_l3 = 0;
        if (l1 > l2)
        {
            if (l1 > l3)
            {
                temp_max = l1;
                temp_l2 = l2;
                temp_l3 = l3;
            }
            else
            {
                temp_max = l3;
                temp_l2 = l1;
                temp_l3 = l2;
            }
        }
        else
        {
            if (l2 > l3)
            {
                temp_max = l2;
                temp_l2 = l1;
                temp_l3 = l3;
            }
            else
            {
                temp_max = l3;
                temp_l2 = l1;
                temp_l3 = l2;
            }
        }
        if (temp_max < temp_l2 + temp_l3)
            printf("ostrougolnyi");
        else
        {
            if (temp_max == temp_l2 + temp_l3)
                printf("priamougolnyi");
            else
                printf("tupougolnyi");
        }
    }
    getc(stdin);
    return 0;
}
