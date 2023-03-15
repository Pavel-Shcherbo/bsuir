#include "functions.h"
#include <stdio.h>
#include <string.h>

int main() {
    VacuumCleaner vcArray[100];
    int vcArraySize = 0;

    int choice = -1;
    while (choice != 0) {
        printf("1. Create vacuum cleaners\n");
        printf("2. Display vacuum cleaners\n");
        printf("3. Remove a vacuum cleaner\n");
        printf("4. Sort by product code\n");
        printf("5. Sort by name\n");
        printf("6. Sort by color\n");
        printf("7. Sort by price\n");
        printf("8. Sort by two fields\n");
        printf("0. Exit\n");
        printf("Enter your choice: ");
        int result = scanf("%d", &choice);
        if (result != 1) {
            printf("Invalid input. Please enter a number.\n");
            while (getchar() != '\n');
            continue;
        }
        switch (choice) {
            case 1:
                createVacuumCleaners(vcArray, &vcArraySize);
                break;
            case 2:
                displayVacuumCleaners(vcArray, vcArraySize);
                break;
            case 3:
                removeVacuumCleaner(vcArray, &vcArraySize);
                break;
            case 4:
                sortByProductCode(vcArray, vcArraySize);
                break;
            case 5:
                sortByName(vcArray, vcArraySize);
                break;
            case 6:
                sortByColor(vcArray, vcArraySize);
                break;
            case 7:
                sortByPrice(vcArray, vcArraySize);
                break;
            case 8:
                sortVacuumCleaners(vcArray, vcArraySize);
                break;
            case 0:
                break;
            default:
                printf("Invalid choice. Please try again.\n");
        }

        printf("\n");
    }

    return 0;
}
