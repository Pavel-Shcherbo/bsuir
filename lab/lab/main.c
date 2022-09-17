//Л.Р. 2 задание 3 задача 15
#include <stdio.h>
#include <math.h>

//const float PI = 3.1415926535897932384626;
int main()
{

    int degree;
    double x,sine,term;
    unsigned i = 1;
    printf("Введите значение в градусах: \n");
    scanf("%d", &degree);
    
    x = degree*M_PI/180;
    
    term = x;
    sine = term;
    
    if (term <0){
        term = -term;
        }
    else {
        term = term;
        
    }
    while(fabs(term)>0.00001)
    {
        i=i+2;
        term=-term*x*x/(i*(i-1));
        sine=sine+term;
    }
    printf("%d %lf\n", degree, sine);
    //printf("%d %lf\n", degree, sin(x));
           
return 0;
}
