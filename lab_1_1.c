#include <stdio.h>
 
#define PI 3.1415
 
int main() {
    float r, h;
    double area = 0;
    double poln = 0;
    double volume = 0;
    
    printf("Введите радиус цилиндра: \n");
    scanf("%f", &r);
    
    printf("Введите высоту цилиндра: \n");
    scanf("%f", &h);
 
    area = 2 * r * h * PI;
    printf("Площадь боковой поверхности цилиндра: %.2f\n", area);
    
    poln = 2 * PI * r *(r + h);
    printf("Площадь полной поверхности цилиндра: %.2f\n", poln);
    
    volume = PI * r * r * h;
    printf("Объем цилиндра: %.2f\n", volume);
    
    return 0;
}
