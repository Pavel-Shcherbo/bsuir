#include <stdio.h>
#include <stdlib.h>
#include <string.h>


struct change {
    char* word1;
    char* word2;
};

void print(FILE* fp, char* val1, char* val2, char* add, char c);
void finaly(FILE* f, FILE* fp, struct change* temp, int ind);
