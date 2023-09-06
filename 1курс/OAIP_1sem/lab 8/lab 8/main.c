#include <stdio.h>
#include <stdlib.h>
#include "functions.h"

int main(int argc, char** argv) {
    int n= 0;
    int* len = NULL;
    int* max = NULL;
    int* max_ind = NULL;
    char** str = NULL;
    printf("Enter a number of strings\n");
    while (scanf("%d", &n) != 1 || getchar() != '\n') {
        printf("Pls enter a NUMBER\n");
        rewind(stdin);
    }
    str = (char**)calloc(n, 1 * sizeof(char*));
    printf("\nEnter strings\n");
    max = (int*)calloc(n, sizeof(int));
    max_ind = (int*)calloc(n, sizeof(int));
    len = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        max_ind[i] = i;
        str[i] = (char*)calloc(1, 1);
        //printf("%d. ", i + 1);
        input_str(&str[i]);
        len[i] = 0;
        str_len(str[i], &len[i]);
    }
    longest_words(str, len, n, max);
    merge(max_ind, max, 0, n - 1);
    printf("\nSorted array \n");
    for (int i = 0; i < n; i++)
        printf("%s\n", str[max_ind[i]]);
    for (int i = 0; i < n; i++) {
        free(str[i]);
    }
    free(str);
    free(max);
    free(max_ind);
    free(len);
    return 0;
}
