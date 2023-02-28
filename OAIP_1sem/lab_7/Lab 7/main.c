#include "functions.h"
#include <stdio.h>
#include <stdlib.h>

int main(){
    printf("What task you want to solve 1 or 2?");
    void(*function[2])(void) = {task1, task2};
    int num = 0;
    scanf("%d", &num);
    function[num-1]();
}


