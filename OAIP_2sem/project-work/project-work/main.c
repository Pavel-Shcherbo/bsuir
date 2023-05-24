#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include "functions.h"


int main(void) {
    int matrix[MAX_STUDENTS][MAX_STUDENTS];
    int team1[MAX_STUDENTS];
    int team2[MAX_STUDENTS];

    int choice;
    char filename[] = "matrix.txt"; // Указать имя файла
    int found;

    do {
        printMenu();
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                fillMatrixRandom(matrix);
                printf("Матрица заполнена случайными значениями.\n");
                printMatrix(matrix);
                break;
            case 2:
                fillMatrixFromFile(matrix, filename);
                printMatrix(matrix);
                break;
            case 3:
                printMatrix(matrix);
                break;
            case 4:
                found = findTeam(matrix, team1, team2);

                if (found) {
                    printf("Команда 1: ");
                    for (int i = 0; i < MAX_STUDENTS; i++) {
                        if (team1[i] != -1)
                            printf("%d ", team1[i] + 1);
                    }
                    printf("\n");

                    printf("Команда 2: ");
                    for (int i = 0; i < MAX_STUDENTS; i++) {
                        if (team2[i] != -1)
                            printf("%d ", team2[i] + 1);
                    }
                    printf("\n");
                } else {
                    printf("Разбиение не найдено.\n");
                }
                break;
            case 5:
                printf("Программа завершена.\n");
                return 0;
            default:
                printf("Неверный выбор. Попробуйте еще раз.\n");
                break;
        }
    } while (1);

    return 0;
}
