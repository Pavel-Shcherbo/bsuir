//Л.Р. 5 задание 1
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <time.h>
int main() {
    int n=0, p=0, num=0;
    int a[100][100];
    while (n > 100 || n < 2) {
        rewind(stdin);
        printf("Enter size of the array : ");
        scanf("%d",&n);}
    while (p > 2 || p < 1) {
        rewind(stdin);
        printf("Press 1 to manual input, press 2 to random\n");
        scanf("%i", &p);}
    srand(time(0));
    switch (p) {
        case 1:
            for (int j = 0; j < n; j++) {
                for (int k = 0; k < n; k++)
                {
                    printf("arr[%d][%d]=", j, k);
                    scanf("%d", &a[j][k]);
                }
            }
            break;
        case 2:
            for (int j = 0; j < n; j++) {
                for (int k = 0; k < n; k++)
                {
                    a[j][k] = (rand() % 9+1);
                }
            }
            break;
        default:
            printf("stupid");
    }
    printf("vvedite k ");
    scanf("%d", &num);

    for(int j=0;j<n;j++){
        for(int k=0;k<n;k++){
            printf("%d\t",a[j][k]);
        }
        printf("\n");
    }

    return 0;}

void bubblesort(int *a, int n)
{
  int j, nn;

  do {
    nn = 0;
    for (j = 1; j < n; ++j)
      if (a[j] < num) {
          a[j] = 0;
      }
    n = nn;
  } while (n);
}

