#include <stdio.h>

int main (){
    int a = 50, b = -5;
    int c;
    c = (--a) / ++b;
    printf("%d\n", c);
    //c = 0;
    //c = (--a) / b++;
   // printf("%d\n", c);
    return 0;
}
