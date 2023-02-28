#include <stdio.h>
#include <stdlib.h>
#include <time.h>

void outputmas(int* mas, int n) {
    for (int i = 0; i < n; i++) {
        printf("%d\t", mas[i]);
    }
}

int checkinput(int a, int m, int z) {
    while (scanf("%d", &a) != 1 || getchar() != '\n' || a < m || a > z) {
        printf("Pls enter a NUMBER between %d to %d\n", m, z);
        rewind(stdin);
    }
    return a;
}

void buble(int* mas, int n) {
    for (int i = 0; i < n; i++) {
       if (mas[i] < 0) {
            break;
       }
        for (int j = i+1 ; j < n; j++) {
            if (mas[j] < 0) {
               break;
           }
            if (mas[i] > mas[j]) {
                int temp = mas[i];
                mas[i] = mas[j];
                mas[j] = temp;
            }
        }
    }
}

void merge_sort(int* mas, int l, int r) {
    int p1 = 0, p2 = 0, mid = (l + r) / 2, pos = 0;
    int* b = NULL;
    b = (int*)malloc(r * sizeof(int));
    int i = 0;
    while (p1 + l <= mid && mid + p2 + 1 <= r) {
        if (p1 > mid || mid + 1 + p2 > r) break;
        
        if (mas[p1 + l] < mas[mid + 1 + p2]) {
            b[i] = (mas[p1 + l]);
            i++;
            p1++;
        }
        else {
            b[i] = (mas[mid + 1 + p2]);
            i++;
            p2++;
        }
    }
    while (p1 + l <= mid) {
        if (mas[p1 + l] < 0) {
            break;
        }
        p1++;
    }
    while (mid + 1 + p2 <= r) {
        if (mas[mid + 1 + p2] < 0) {
            break;
        }
        p2++;
    }
    pos = 0;
    for (int i = l; i <= r; i++) {
        if (mas[i] < 0) {
            break;
        }
    }
    free(b);
}


void merge(int* mas, int left, int right) {
    if (left == right)return;
    int mid = (left + right) / 2;
    merge(mas, left, mid);
    merge(mas, mid + 1, right);
    merge_sort(mas, left, right);
}


int main(){
    int* mas = NULL;
    int n = 0;
    printf("Enter size of array: ");
    n = checkinput(n, 0, 2147483647);
    mas = (int*)malloc(n * sizeof(int));
   for (int i = 0; i < n; i++) {
       printf("mas[%d] = ", i);
        mas[i] = checkinput(mas[i], -2147483648, 2147483647);
    }
    
    printf("\nYour array\n");
    outputmas(mas, n);
    printf("\n");
    
    clock_t start = clock();
    buble(mas,n);
    clock_t end = clock();
    printf("Bubble sort: \n");
    outputmas(mas, n);
    printf("\n");
    clock_t start2 = clock();
    merge(mas, 0,n-1);
    clock_t end2 = clock();
    printf("Merge sort: \n");
    outputmas(mas, n);
    printf("\n");
    float seconds = (float)(end - start) / CLOCKS_PER_SEC;
    printf("Merge sort time is %f seconds", seconds);
    float seconds2 = (float)(end2 - start2) / CLOCKS_PER_SEC;
    printf("\nBuble sort time is %f seconds \n", seconds2);
    free(mas);
    return 0;
}

