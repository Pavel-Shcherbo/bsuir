#include <stdio.h>
#include <string.h>

// Define enum for color
typedef enum {RED, BLUE, GREEN, YELLOW, PURPLE} Color;

// Define structure for vacuum cleaner
typedef struct {
    int productCode;
    char name[100];
    Color color;
    double price;
} VacuumCleaner;

// Function prototypes
void createVacuumCleaners(VacuumCleaner vcArray[], int* size);
void displayVacuumCleaners(const VacuumCleaner vcArray[], int size);
void removeVacuumCleaner(VacuumCleaner vcArray[], int* size);
void sortByProductCode(VacuumCleaner vcArray[], int size);
void sortByName(VacuumCleaner vcArray[], int size);
void sortByColor(VacuumCleaner vcArray[], int size);
void sortByPrice(VacuumCleaner vcArray[], int size);
void sortByColorAndCode(VacuumCleaner vcArray[], int size);

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
        printf("8. Sort by color then year\n");
        printf("0. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

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
                sortByColorAndCode(vcArray, vcArraySize);
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

// Function to create a vacuum cleaner and add it to the array
void createVacuumCleaners(VacuumCleaner vcArray[], int* size) {
    int numToCreate;
    printf("Enter the number of vacuum cleaners to create: ");
    scanf("%d", &numToCreate);

    for (int i = 0; i < numToCreate; i++) {
        printf("Vacuum cleaner #%d\n", *size+1);
        printf("Product code: ");
        scanf("%d", &vcArray[*size].productCode);
        printf("Name: ");
        scanf("%s", vcArray[*size].name);
        printf("Color (0=RED, 1=BLUE, 2=GREEN, 3=YELLOW, 4=PURPLE): ");
        int color;
        scanf("%d", &color);
        vcArray[*size].color = color;
        printf("\nPrice: ");
        scanf("%lf", &vcArray[*size].price);
        (*size)++;
    }
    printf("%d vacuum cleaner(s) created successfully.\n", numToCreate);
}

// Function to display all vacuum cleaners in the array
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

// Function to remove a vacuum cleaner from the array
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

// Function to sort vacuum cleaners by product code in ascending order
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

// Function to sort vacuum cleaners by name in ascending order
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
