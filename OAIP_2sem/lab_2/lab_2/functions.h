#include <stdio.h>
#include <stdlib.h>
#include <string.h>


typedef struct stack {
    char** words;
    int count;
} stack;

typedef struct words {
    char* wrdd;
    int num;
    int lenght;
    int size;
} words;

typedef struct change {
    char* word1;
    char* word2;
} change;

void push(struct stack* st, char* val, int n, int t);
void pop(struct stack* st);
char* top(struct stack* st);
int separate_and_count_matching_items(struct stack* st1, struct stack* st2, char* inhight, int n, int t);
void makeStruct(struct words* word, char* inhight, int cnt, int kol);
int allSort(const void* typ1, const void* typ2);
void freeMemory(struct stack* st1, struct stack* st2, int n);
void print(FILE* fp, char* word1, char* word2, char* add, char c);
void finaly(FILE* f, FILE* fp, struct change* temp, int ind);
