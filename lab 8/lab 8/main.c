#include <stdio.h>
#include <stdlib.h>

void str_len(char* str, int* len) {
    int i = 0;
    while (str[i] != '\0') {
        i++;
        (*len)++;
    }
}

void input_str(char** string)
{
    int char_;
    int i = 0;
    rewind(stdin);
    while ((char_ = getchar()) != EOF && char_ != '\n')
    {
        (*string)[i++] = char_;
        (*string) = (char*)realloc((*string), (i + 1) * sizeof(char));
    }
    (*string)[i] = '\0';
}


void merge_sort(int* mas_i, int* mas, int l, int r) {
    int p1 = 0, p2 = 0, mid = (l + r) / 2, pos = 0;
    int* b = NULL;
    int* b_i = NULL;
    b_i = (int*)calloc((r + 1), sizeof(int));
    b = (int*)malloc((r + 1) * sizeof(int));
    int i = 0;
    while (p1 + l <= mid && mid + p2 + 1 <= r) {
        if (p1 > mid || mid + 1 + p2 > r) break;

        if (mas[p1 + l] < mas[mid + 1 + p2]) {
            b[i] = mas[p1 + l];
            b_i[i] = mas_i[p1 + l];
            i++;
            p1++;
        }
        else {
            b[i] = mas[mid + 1 + p2];
            b_i[i] = mas_i[mid + 1 + p2];
            i++;
            p2++;
        }

    }
    while (p1 + l <= mid) {
        b[i] = mas[p1 + l];
        b_i[i] = mas_i[p1 + l];
        i++;
        p1++;
    }
    while (mid + 1 + p2 <= r) {
        b[i] = mas[mid + 1 + p2];
        b_i[i] = mas_i[mid + 1 + p2];
        i++;
        p2++;
    }
    pos = 0;
    for (int i = l; i <= r; i++) {
        mas[i] = b[pos];
        mas_i[i] = b_i[pos];
        pos++;
    }
    free(b);
}

void merge(int* mas_i, int* mas, int left, int right) {
    if (left == right)return;
    int mid = (left + right) / 2;
    merge(mas_i, mas, left, mid);
    merge(mas_i, mas, mid + 1, right);
    merge_sort(mas_i, mas, left, right);
}


void longest_words(char** str, int* length, int n, int* max) {
    for (int i = 0; i < n; i++) {
        int k = 0;
        max[i] = 999;
        for (int j = 0; j < length[i]; j++) {
            k++;
            if (str[i][j + 1] == ' ' || str[i][j + 1] == '\0' || str[i][j + 1] == '\n') {
                if (max[i] > k) {
                    max[i] -= k;
                }
                k = -1;
            }
        }
    }
}


void sort_string(int argc, char** argv) {
    int* len = NULL;
    int* min = NULL;
    int* min_ind = NULL;
    char** str = NULL;
    int n = 0;
    printf("Enter a number of strings\n");
    scanf("%d", &n);
    str = (char**)calloc(n, 1 * sizeof(char*));

    printf("\nEnter strings\n");
    min = (int*)calloc(n, sizeof(int));
    min_ind = (int*)calloc(n, sizeof(int));
    len = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        min_ind[i] = i;
        str[i] = (char*)calloc(1, 1);
        printf("%d. ", i + 1);
        input_str(&str[i]);
        len[i] = 0;
        str_len(str[i], &len[i]);
    }
    longest_words(str, len, n, min);
    merge(min_ind, min, 0, n - 1);
    printf("\nSorted array \n");
    for (int i = 0; i < n; i++)
        printf("%s\n", str[min_ind[i]]);
    for (int i = 0; i < n; i++) {
        free(str[i]);
    }
    free(str);
    free(min);
    free(min_ind);
    free(len);
}


void choose(int n) {
    void (*function[1])(void) = {sort_string };
    int num = 1;
    function[num - 1]();
    
}

int main()
{
    int n = 0;
    choose(n);

}
