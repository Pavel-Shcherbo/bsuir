#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include "functions.h"


// Функция для проверки, является ли студент i знаком с j
int isFriend(int matrix[MAX_STUDENTS][MAX_STUDENTS], int i, int j) {
    return matrix[i][j];
}

// Функция для проверки, все ли студенты в команде знакомы друг с другом
int isAllFriends(int team[MAX_STUDENTS], int size, int matrix[MAX_STUDENTS][MAX_STUDENTS]) {
    for (int i = 0; i < size; i++) {
        for (int j = i + 1; j < size; j++) {
            if (!isFriend(matrix, team[i], team[j]))
                return 0;
        }
    }
    return 1;
}

// Функция для поиска команды с заданными условиями
int findTeam(int matrix[MAX_STUDENTS][MAX_STUDENTS], int team1[MAX_STUDENTS], int team2[MAX_STUDENTS]) {
    for (int mask = 0; mask < (1 << MAX_STUDENTS); mask++) {
        int size1 = 0, size2 = 0;
        int students1[MAX_STUDENTS], students2[MAX_STUDENTS];
        
        // Разбиваем студентов по командам в соответствии с битовой маской
        for (int i = 0; i < MAX_STUDENTS; i++) {
            if (mask & (1 << i)) {
                students1[size1] = i;
                size1++;
            } else {
                students2[size2] = i;
                size2++;
            }
        }
        
        // Проверяем, что размеры команд отличаются не более чем в 2 раза
        if (abs(size1 - size2) <= 2) {
            // Проверяем, что все студенты в командах знакомы друг с другом
            if (isAllFriends(students1, size1, matrix) && isAllFriends(students2, size2, matrix)) {
                // Команда найдена
                for (int i = 0; i < MAX_STUDENTS; i++) {
                    team1[i] = -1;
                    team2[i] = -1;
                }
                
                for (int i = 0; i < size1; i++)
                    team1[i] = students1[i];
                for (int i = 0; i < size2; i++)
                    team2[i] = students2[i];
                
                return 1;
            }
        }
    }
    
    // Команда не найдена
    return 0;
}

// Функция для заполнения матрицы случайными значениями
void fillMatrixRandom(int matrix[MAX_STUDENTS][MAX_STUDENTS]) {
    srand((unsigned int)time(NULL));
    
    for (int i = 0; i < MAX_STUDENTS; i++) {
        for (int j = 0; j < MAX_STUDENTS; j++) {
            if (i == j)
                matrix[i][j] = 1;  // Главная диагональ
            else
                matrix[i][j] = rand() % 2;  // Случайное значение 0 или 1
        }
    }
}

// Функция для заполнения матрицы значениями из файла
void fillMatrixFromFile(int matrix[MAX_STUDENTS][MAX_STUDENTS], const char* filename) {
    FILE* file = fopen(filename, "r");
    
    if (file == NULL) {
        printf("Ошибка открытия файла.\n");
        return;
    }
    
    for (int i = 0; i < MAX_STUDENTS; i++) {
        for (int j = 0; j < MAX_STUDENTS; j++) {
            if (fscanf(file, "%d", &matrix[i][j]) != 1) {
                printf("Ошибка чтения из файла.\n");
                fclose(file);
                return;
            }
        }
    }
    
    fclose(file);
}

// Функция для вывода матрицы
void printMatrix(int matrix[MAX_STUDENTS][MAX_STUDENTS]) {
    printf("Матрица:\n");
    
    for (int i = 0; i < MAX_STUDENTS; i++) {
        for (int j = 0; j < MAX_STUDENTS; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\n");
    }
}

// Функция для вывода меню
void printMenu(void) {
    printf("\nМеню:\n");
    printf("1. Заполнить матрицу случайными значениями\n");
    printf("2. Заполнить матрицу значениями из файла\n");
    printf("3. Вывести матрицу\n");
    printf("4. Найти команду с заданными условиями\n");
    printf("5. Выйти из программы\n");
    printf("Ваш выбор: ");
}
