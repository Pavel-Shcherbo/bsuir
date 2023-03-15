#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_WORD_LENGTH 50

typedef struct Node {
    char word[MAX_WORD_LENGTH];
    int count;
    struct Node* next;
} Node;

Node* createNode(char* word) {
    Node* node = (Node*)malloc(sizeof(Node));
    strcpy(node->word, word);
    node->count = 1;
    node->next = NULL;
    return node;
}

void insertNode(Node** head, char* word) {
    Node* curr = *head;
    Node* prev = NULL;
    while (curr != NULL) {
        if (strcmp(curr->word, word) == 0) {
            curr->count++;
            return;
        }
        prev = curr;
        curr = curr->next;
    }
    Node* node = createNode(word);
    if (prev == NULL) {
        *head = node;
    } else {
        prev->next = node;
    }
}

void printList(Node* head) {
    printf("Word\tCount\n");
    printf("----\t-----\n");
    Node* curr = head;
    while (curr != NULL) {
        printf("%s\t%d\n", curr->word, curr->count);
        curr = curr->next;
    }
}

void freeList(Node* head) {
    Node* curr = head;
    while (curr != NULL) {
        Node* temp = curr;
        curr = curr->next;
        free(temp);
    }
}

void compress(char* inputFile, char* compressedFile) {
    FILE* input = fopen(inputFile, "r");
    if (input == NULL) {
        printf("Error opening input file\n");
        return;
    }
    FILE* output = fopen(compressedFile, "w");
    if (output == NULL) {
        printf("Error opening output file\n");
        fclose(input);
        return;
    }
    Node* longWord = NULL;
    Node* shortWord = NULL;
    char word[MAX_WORD_LENGTH];
    while (fscanf(input, "%s", word) == 1) {
        insertNode(&longWord, word);
        insertNode(&shortWord, word);
    }
    Node* curr = longWord;
    while (curr != NULL) {
        if (curr->count > longWord->count) {
            longWord = curr;
        }
        curr = curr->next;
    }
    curr = shortWord;
    while (curr != NULL) {
        if (curr->count < shortWord->count) {
            shortWord = curr;
        }
        curr = curr->next;
    }
    fseek(input, 0, SEEK_SET);
    while (fscanf(input, "%s", word) == 1) {
        if (strcmp(word, longWord->word) == 0) {
            fprintf(output, "%s ", shortWord->word);
        } else if (strcmp(word, shortWord->word) == 0) {
            fprintf(output, "%s ", longWord->word);
        } else {
            fprintf(output, "%s ", word);
        }
    }
    fclose(input);
    fclose(output);
    printf("File compressed successfully.\n");
}

void decompress(char* compressedFile, char* outputFile) {
    FILE* input = fopen(compressedFile, "r");
    if (input == NULL) {
        printf("Error opening input file\n");
        return;
    }
    FILE* output = fopen(outputFile, "w");
    if (output == NULL) {
        printf("Error opening output file\n");
        fclose(input);
        return;
    }
    Node* longWord = NULL;
    Node* shortWord = NULL;
    char word[MAX_WORD_LENGTH];
        while (fscanf(input, "%s", word) == 1) {
        insertNode(&longWord, word);
        insertNode(&shortWord, word);
    }
    Node* curr = longWord;
    while (curr != NULL) {
        if (curr->count > longWord->count) {
            longWord = curr;
        }
    curr = curr->next;
    }
    curr = shortWord;
    while (curr != NULL) {
        if (curr->count < shortWord->count) {
            shortWord = curr;
        }
        curr = curr->next;
    }
    fseek(input, 0, SEEK_SET);
    while (fscanf(input, "%s", word) == 1) {
        if (strcmp(word, longWord->word) == 0) {
            fprintf(output, "%s ", shortWord->word);
        } else if (strcmp(word, shortWord->word) == 0) {
            fprintf(output, "%s ", longWord->word);
        } else {
            fprintf(output, "%s ", word);
        }
    }
    fclose(input);
    fclose(output);
    printf("File decompressed successfully.\n");
}

int main() {
    char inputFileName[] = "/Users/pavelshcherbo/Desktop/bsuir/OAIP_2sem/lab_2/lab_2/input.txt";
    char compressedFileName[] = "/Users/pavelshcherbo/Desktop/bsuir/OAIP_2sem/lab_2lab_2/compressed.txt";
    char decompressedFileName[] = "/Users/pavelshcherbo/Desktop/bsuir/OAIP_2sem/lab_2lab_2/decompressed.txt";
    compress(inputFileName, compressedFileName);
    decompress(compressedFileName, decompressedFileName);
    return 0;
}
