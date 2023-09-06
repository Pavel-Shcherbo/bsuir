#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <stdbool.h>

#include "struct.h"
#include "functions.h"

#define MAX_FILE_SIZE 256


int main(void);

int main(void) {
    char inputFileName[MAX_FILE_SIZE];
    char outputFileName[MAX_FILE_SIZE];
    int option;

    printf("Enter input file name: ");
    scanf("%s", inputFileName);

    printf("Enter output file name: ");
    scanf("%s", outputFileName);

    printf("Choose an option:\n");
    printf("1. Negative\n");
    printf("2. Black and white\n");
    printf("3. Median filter\n");
    printf("4. Gamma correction\n");
    scanf("%d", &option);
    float gamma;
    float median;
    switch (option) {
        case 1:
            negative(inputFileName, outputFileName);
            break;
        case 2:
            blackAndWhite(inputFileName, outputFileName);
            break;
        case 3:
            while (true) {
                printf("Enter median value: ");
                scanf("%f", &median);

                if (sqrt(median) == (int)sqrt(median)) {
                    break;
                }

                printf("Error\n");
            }
            medianFilter(inputFileName, outputFileName, median);
            break;
        case 4:
            printf("Enter gamma value: ");
            scanf("%f", &gamma);
            gammaCorrection(inputFileName, outputFileName, gamma);
            break;
        default:
            printf("Error: invalid option.\n");
            break;
    }
    size_t fileHeaderSize = sizeof(BMPFileHeader);
    printf("Size of BMPFileHeader: %zu bytes\n", fileHeaderSize);

    size_t infoHeaderSize = sizeof(BMPInfoHeader);
    printf("Size of BMPInfoHeader: %zu bytes\n", infoHeaderSize);

    return 0;
}
