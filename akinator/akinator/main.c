#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>
#include "functions.h"

#define STRING_SIZE 1024

int main(void) {
    FILE *file = fopen("game_log.txt", "a");
    Node *node = NULL;
    FILE *f = fopen("tree.txt", "r");
    if (f) {
        node = readTreeFromFile(f);
        fclose(f);
    } else {
        node = createNode("Is it living?");
        node->left = createNode("Elephant");
        node->right = createNode("Car");
    }
    while (1) {
        printf("Do you want to play a game? (1 - Yes, 2 - No)\n");
        int answer = 0;
        while (scanf("%d", &answer) != 1 || (answer != 1 && answer != 2)) {
            printf("Invalid input. Please enter 1 or 2.\n");
            rewind(stdin);
        }
        if (answer == 1) {
            game(node, file);
        } else {
            break;
        }
    }
    f = fopen("tree.txt", "w");
    writeTreeToFile(f, node);
    fclose(f);
    fclose(file);
    freeTree(node);
    
    return 0;
}
