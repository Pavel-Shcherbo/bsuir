#include "functions.h"
#include <stdio.h>
#include <stdlib.h>

char* get_str(char *s, int k)
{
  int c, i=0;
  while(--k > 0 && (c = getchar())!=EOF && c != '\n')
      s[i++] = c; 
  s[i] = '\0';
  return s;
}

int str_len(char *s)
{
    int i=0;
    while (s[i]!='\0')
        i++;
    return i;
}

int checkinput(int a) {
    while (scanf("%d", &a) != 1 || getchar() != '\n') {
        printf("Pls enter a NUMBER\n");
        rewind(stdin);
    }
    return a;
}


void *task(void){
    int n = 100,len_s,k, i;
    char *s = (char *)malloc(sizeof(char) * n);
    printf("enter s\n");
    get_str(s, n);
    len_s = str_len(s);
    printf("%d", len_s);
    printf("\nnew s\n");
    for (i=0; i < len_s; i++){
        printf("X");
    }
    printf("\n%s\n", s);
    free(s);
    return task;
}
