#include<stdio.h>
#include<stdlib.h>
#include<string.h>

#include"functions.h"
#include"struct.h"

int main(void);

int main(void) {
    words* arr = NULL;
    int size = 0;
    decompress(&arr, &size);
    free(arr);
    return 0;
}
