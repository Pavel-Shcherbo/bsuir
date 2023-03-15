#include <stdio.h>
#include <string.h>

typedef enum {RED, BLUE, GREEN, YELLOW, PURPLE} Color;

typedef struct {
    int productCode;
    char name[100];
    Color color;
    double price;
} VacuumCleaner;

void createVacuumCleaners(VacuumCleaner vcArray[], int* size);
void displayVacuumCleaners(const VacuumCleaner vcArray[], int size);
void removeVacuumCleaner(VacuumCleaner vcArray[], int* size);
void sortByProductCode(VacuumCleaner vcArray[], int size);
void sortByName(VacuumCleaner vcArray[], int size);
void sortByColor(VacuumCleaner vcArray[], int size);
void sortByPrice(VacuumCleaner vcArray[], int size);
void sortByColorAndCode(VacuumCleaner vcArray[], int size);
void sortVacuumCleaners(VacuumCleaner vcArray[], int size);
