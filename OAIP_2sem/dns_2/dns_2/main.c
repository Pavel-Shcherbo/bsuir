#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#include "functions.h"

#define MAX_LINE_LENGTH 256
#define CACHE_SIZE 3
#define TABLE_SIZE 16


int main(void) {
    hash_table_t hash_table = { 0, (hashNode_t**)calloc(TABLE_SIZE, sizeof(hashNode_t*)) };
    cache_t cache = { 0, CACHE_SIZE, NULL, NULL };
    
    menu(&hash_table, &cache);
    
    return 0;
}
