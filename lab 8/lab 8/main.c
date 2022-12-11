#include "functions.h"
#include <stdio.h>
#include <stdlib.h>

void shortest_words(char** str, int* length, int n, int* min) {
    for (int i = 0; i < n; i++) {
        int k = 0;
        min[i] = 999;

        for (int j = 0; j < length[i]; j++) {
            k++;
            if (str[i][j + 1] == ' ' || str[i][j + 1] == '\0' || str[i][j + 1] == '\n') {
                if (min[i] > k) {
                    min[i] = k;
                }
                k = -1;

            }
        }
    }
}

int main(){
    task();
}


