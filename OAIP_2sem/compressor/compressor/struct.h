#ifndef struct_h
#define struct_h

#include <stdio.h>

#endif /* struct_h */

#pragma once
#include<stdio.h>
#include<stdlib.h>
#include<string.h>

typedef struct words {
    char* word;
    int size;
} words;

typedef struct glossary {
    char* change_word;
    char* changed_word;
}   glossary;

typedef struct stack {
    char* word;
    long long size;
    struct stack* next;
} stack;
