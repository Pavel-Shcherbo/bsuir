#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>
#include "functions.h"


#define STRING_SIZE 1024


Node *createNode(char *text) {
    Node *node = malloc(sizeof(Node));
    
    node->text = strdup(text);
    node->right = NULL;
    node->left = NULL;
    
    return node;
}

Node *readTreeFromFile(FILE *f) {
    char *line = NULL;
    size_t len = 0;
    ssize_t read;
    
    if ((read = getline(&line, &len, f)) == -1) {
        free(line);
        return NULL;
    }
    
    line[read - 1] = '\0';
    
    if (strcmp(line, "NULL") == 0) {
        free(line);
        return NULL;
    }
    
    Node *root = createNode(line);
    
    root->left = readTreeFromFile(f);
    root->right = readTreeFromFile(f);
    
    free(line);
    
    return root;
}


void writeTreeToFile(FILE *f, Node *root) {
    if (root == NULL) {
        fprintf(f, "NULL\n");
        return;
    }
    
    fprintf(f, "%s\n", root->text);
    writeTreeToFile(f, root->left);
    writeTreeToFile(f, root->right);
}


char isAnswer(Node *node) {
    if (node->left == NULL && node->right == NULL) return 1;
    return 0;
}


void logFile(FILE *log_file, char *string, char *answer) {
    fseek(log_file, 0, SEEK_END);
    char buffer[64];
    time_t t = time(NULL);
    struct tm *tm_info = localtime(&t);
    
    strftime(buffer, 64, "%Y-%m-%d %H:%M:%S", tm_info);
    char *log_message = (char *)malloc(sizeof(char) * (strlen(string) + strlen(answer) + 64));
    
    if (answer == NULL) sprintf(log_message, "TIME : %s : %s : \n", buffer, string);
    else sprintf(log_message, "TIME : %s : %s : %s\n", buffer, string, answer);
    fprintf(log_file, "%s", log_message);
    free(log_message);
}


Node* game(Node* node, FILE* file) {
    int answer = -1;
    printf("%s ?\n", node->text);
    
    if (isAnswer(node)) {
        do {
            printf("1 - Yes, 2 - No\n");
            while (scanf("%d", &answer) != 1 || (answer != 1 && answer != 2)) {
                printf("Invalid input. Please enter 1 or 2.\n");
                rewind(stdin);
            }
            rewind(stdin);
        } while (answer != 1 && answer != 2);
        
        const char* answer_str = (answer == 1) ? "YES" : "NO";
        logFile(file, answer_str, node->text);
        
        if (answer == 1) {
            printf("Goodbye!\n");
            return NULL;
        } else {
            printf("I don't know what it is.\n");
            printf("What is the answer?\n");
            
            char* stringAn = (char*)malloc(sizeof(char) * STRING_SIZE);
            fgets(stringAn, STRING_SIZE, stdin);
            stringAn[strcspn(stringAn, "\n")] = '\0';
            logFile(file, "NEW ANSWER", stringAn);
            
            printf("What is the difference?\n");
            char* string = (char*)malloc(sizeof(char) * STRING_SIZE);
            fgets(string, STRING_SIZE, stdin);
            string[strcspn(string, "\n")] = '\0';
            logFile(file, "DIFFERENCE", string);
            
            Node* node1 = createNode(stringAn);
            Node* node2 = createNode(node->text);
            
            free(node->text);
            node->text = string;
            node->right = node1;
            node->left = node2;
            
            free(stringAn);
            free(string);
            return NULL;
        }
    } else {
        do {
            printf("1 - Yes, 2 - No\n");
            while (scanf("%d", &answer) != 1 || (answer != 1 && answer != 2)) {
                printf("Invalid input. Please enter 1 or 2.\n");
                rewind(stdin);
                            }
                            rewind(stdin);
                        } while (answer != 1 && answer != 2);
                        
                        const char* answer_str = (answer == 1) ? "YES" : "NO";
                        logFile(file, answer_str, node->text);
                        
                        if (answer == 1) {
                            return game(node->right, file);
                        } else {
                            return game(node->left, file);
                        }
                    }
                }



void freeTree(struct Node *node) {
    if (node == NULL) {
        return;
    }
    
    freeTree(node->left);
    freeTree(node->right);
    
    free(node);
}
