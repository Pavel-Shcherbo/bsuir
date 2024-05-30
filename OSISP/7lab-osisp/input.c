#include "func.h"

void readInput(char* buffer, int size)
{
	char *nl = NULL;
	memset(buffer, 0, size);

	if (fgets(buffer, size, stdin) != NULL) {
		nl = strchr(buffer, '\n');
		if (nl) *nl = '\0';
	}
}

void menu(void) {
    printf("\nEnter 'LST' to get a list of records\n");
    printf("Enter 'GET <num>' to get a record\n");
    printf("Enter 'MOD <num>' to modification a record\n");
    printf("Enter 'quit' to quit\n\n");
    printf("Enter choice: ");
}
