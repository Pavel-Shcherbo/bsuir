#include <stdio.h>
#include <string.h>
#include "functions.h"
#include <stdbool.h>

bool isValidInput() {
    char c;
    while ((c = getchar()) != '\n' && c != EOF);
    return true;
}

void createVacuumCleaners(VacuumCleaner vcArray[], int* size) {
    int numToCreate;
    printf("Enter the number of vacuum cleaners to create: ");
    while (scanf("%d", &numToCreate) != 1 || numToCreate <= 0) {
        printf("Invalid input. Please enter a positive integer: ");
        isValidInput();
    }

    for (int i = 0; i < numToCreate; i++) {
        printf("Vacuum cleaner #%d\n", *size+1);
        printf("Product code: ");
        int productCode;
        while (scanf("%d", &productCode) != 1) {
            printf("Invalid input. Please enter an integer: ");
            isValidInput();
        }
        int codeExists = 0;
        for (int j = 0; j < *size; j++) {
            if (vcArray[j].productCode == productCode) {
                codeExists = 1;
                printf("Product code %d already exists.\n", productCode);
                break;
            }
        }
        if (codeExists) {
            printf("This code already used");
            continue;
        }
        vcArray[*size].productCode = productCode;
        printf("Name: ");
        scanf("%s", vcArray[*size].name);
        printf("Color (0=RED, 1=BLUE, 2=GREEN, 3=YELLOW, 4=PURPLE): ");
        int color;
        while (scanf("%d", &color) != 1 || color < 0 || color > 4) {
            printf("Invalid input. Please enter a number between 0 and 4: ");
            isValidInput();
        }
        vcArray[*size].color = color;
        printf("\nPrice: ");
        while (scanf("%lf", &vcArray[*size].price) != 1) {
            printf("Invalid input. Please enter a number: ");
            isValidInput();
        }
        (*size)++;
    }
    printf("%d vacuum cleaner(s) created successfully.\n", numToCreate);
}


void displayVacuumCleaners(const VacuumCleaner vcArray[], int size) {
    if (size == 0) {
        printf("No vacuum cleaners to display.\n");
        return;
    }
    printf("%-15s %-30s %-15s %-15s\n", "Product code", "Name", "Color", "Price");
    for (int i = 0; i < size; i++) {
        char colorStr[10];
        switch (vcArray[i].color) {
            case RED:
                strcpy(colorStr, "RED");
                break;
            case BLUE:
                strcpy(colorStr, "BLUE");
                break;
            case GREEN:
                strcpy(colorStr, "GREEN");
                break;
            case YELLOW:
                strcpy(colorStr, "YELLOW");
                break;
            case PURPLE:
                strcpy(colorStr, "PURPLE");
                break;
            default:
                strcpy(colorStr, "UNKNOWN");
                break;
        }
        printf("%-15d %-30s %-15s $%-14.2lf\n", vcArray[i].productCode, vcArray[i].name, colorStr, vcArray[i].price);
    }
}

void removeVacuumCleaner(VacuumCleaner vcArray[], int* size) {
    if (*size == 0) {
        printf("No vacuum cleaners to remove.\n");
        return;
    }
    int productCodeToRemove;
    printf("Enter the product code of the vacuum cleaner to remove: ");
    scanf("%d", &productCodeToRemove);
    
    int removeIndex = -1;
    for (int i = 0; i < *size; i++) {
        if (vcArray[i].productCode == productCodeToRemove) {
            removeIndex = i;
            break;
        }
    }
    
    if (removeIndex == -1) {
        printf("Product code %d not found.\n", productCodeToRemove);
    } else {
        for (int i = removeIndex; i < *size - 1; i++) {
            vcArray[i] = vcArray[i+1];
        }
        (*size)--;
        printf("Vacuum cleaner with product code %d removed successfully.\n", productCodeToRemove);
    }
}

void sortByProductCode(VacuumCleaner vcArray[], int size) {
    if (size == 0) {
        printf("No vacuum cleaners to sort.\n");
        return;
    }
    for (int i = 0; i < size - 1; i++) {
        for (int j = i + 1; j < size; j++) {
            if (vcArray[i].productCode > vcArray[j].productCode) {
                VacuumCleaner temp = vcArray[i];
                vcArray[i] = vcArray[j];
                vcArray[j] = temp;
            }
        }
    }
    
    printf("Vacuum cleaners sorted by product code.\n");
}

void sortByName(VacuumCleaner vcArray[], int size) {
    for (int i = 0; i < size-1; i++) {
        for (int j = 0; j < size-1-i; j++) {
            if (strcmp(vcArray[j].name, vcArray[j+1].name) > 0) {
                VacuumCleaner temp = vcArray[j];
                vcArray[j] = vcArray[j+1];
                vcArray[j+1] = temp;
            }
        }
    }
}

void sortByColor(VacuumCleaner vcArray[], int size) {
    for (int i = 0; i < size-1; i++) {
        for (int j = 0; j < size-1-i; j++) {
            if (vcArray[j].color > vcArray[j+1].color) {
                VacuumCleaner temp = vcArray[j];
                vcArray[j] = vcArray[j+1];
                vcArray[j+1] = temp;
            }
        }
    }
}

void sortByPrice(VacuumCleaner vcArray[], int size) {
    for (int i = 0; i < size-1; i++) {
        for (int j = 0; j < size-1-i; j++) {
            if (vcArray[j].price > vcArray[j+1].price) {
                VacuumCleaner temp = vcArray[j];
                vcArray[j] = vcArray[j+1];
                vcArray[j+1] = temp;
            }
        }
    }
}

void sortByColorAndCode(VacuumCleaner vcArray[], int size) {
    for (int i = 0; i < size-1; i++) {
        for (int j = 0; j < size-1-i; j++) {
            if (vcArray[j].color > vcArray[j+1].color) {
                VacuumCleaner temp = vcArray[j];
                vcArray[j] = vcArray[j+1];
                vcArray[j+1] = temp;
            }
            else if (vcArray[j].color == vcArray[j+1].color && vcArray[j].productCode > vcArray[j+1].productCode) {
                VacuumCleaner temp = vcArray[j];
                vcArray[j] = vcArray[j+1];
                vcArray[j+1] = temp;
            }
        }
    }
}


void sortVacuumCleaners(VacuumCleaner vcArray[], int size) {
    if (size == 0) {
        printf("No vacuum cleaners to sort.\n");
        return;
    }

    int field1, field2, dir;
    printf("Enter first sorting field (0=product code, 1=name, 2=color, 3=price): ");
    while (scanf("%d", &field1) != 1 || field1 < 0 || field1 > 3) {
        printf("Invalid input. Please enter a number between 0 and 3: ");
        isValidInput();
    }

    printf("Enter second sorting field (0=product code, 1=name, 2=color, 3=price): ");
    while (scanf("%d", &field2) != 1 || field2 < 0 || field2 > 3) {
        printf("Invalid input. Please enter a number between 0 and 3: ");
        isValidInput();
    }

    printf("Enter sorting direction (0=ascending, 1=descending): ");
    while (scanf("%d", &dir) != 1 || dir < 0 || dir > 1) {
        printf("Invalid input. Please enter either 0 or 1: ");
        isValidInput();
    }

    for (int i = 0; i < size - 1; i++) {
        for (int j = 0; j < size - 1 - i; j++) {
            int cmp = 0;
            if (field1 == 0) {
                cmp = vcArray[j].productCode - vcArray[j+1].productCode;
            } else if (field1 == 1) {
                cmp = strcmp(vcArray[j].name, vcArray[j+1].name);
            } else if (field1 == 2) {
                cmp = vcArray[j].color - vcArray[j+1].color;
            } else if (field1 == 3) {
                if (vcArray[j].price < vcArray[j+1].price) {
                    cmp = -1;
                } else if (vcArray[j].price > vcArray[j+1].price) {
                    cmp = 1;
                }
            }
            if (cmp == 0) {
                if (field2 == 0) {
                    cmp = vcArray[j].productCode - vcArray[j+1].productCode;
                } else if (field2 == 1) {
                    cmp = strcmp(vcArray[j].name, vcArray[j+1].name);
                } else if (field2 == 2) {
                    cmp = vcArray[j].color - vcArray[j+1].color;
                } else if (field2 == 3) {
                    if (vcArray[j].price < vcArray[j+1].price) {
                        cmp = -1;
                    } else if (vcArray[j].price > vcArray[j+1].price) {
                        cmp = 1;
                    }
                }
            }
            if ((dir == 0 && cmp > 0) || (dir == 1 && cmp < 0)) {
                VacuumCleaner temp = vcArray[j];
                vcArray[j] = vcArray[j+1];
                vcArray[j+1] = temp;
            }
        }
    }
    printf("Vacuum cleaners sorted.\n");
}
