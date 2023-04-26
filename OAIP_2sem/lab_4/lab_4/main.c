#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

#define STRINGSIZE 2048

typedef struct Node {
    char* text;
    struct Node* left;
    struct Node* right;
} Node;

Node *createNode(char *text) {
    Node *node = malloc(sizeof(Node));
    node->text = strdup(text);
    node->right = NULL;
    node->left = NULL;
    return node;
}

Node *readTreeFromFile(FILE *f) {
    char *buffer = malloc(sizeof(char) * STRINGSIZE);
    if (!fgets(buffer, STRINGSIZE, f)) {
        return NULL;
    }
    buffer[strlen(buffer) - 1] = '\0';
    if (strcmp(buffer, "NULL") == 0) {
        return NULL;
    }
    Node *root = createNode(buffer);
    root->left = readTreeFromFile(f);
    root->right = readTreeFromFile(f);
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

void log_file(FILE *log_file, char *string, int *i) {
    fseek(log_file, 0, SEEK_END);
    time_t t = time(NULL);
    struct tm *tm_info = localtime(&t);

    char buffer[26];
    strftime(buffer, 26, "%Y-%m-%d %H:%M:%S", tm_info);
    if (i == NULL) fprintf(log_file, "User entered: %s : TIME : %s : \n", string, buffer);
    else if (string == NULL) fprintf(log_file, "User entered: %d : TIME : %s \n", *i, buffer);
}

Node *game(Node *node, FILE *file) {
    int answer = -1;
    printf("%s ?\n", node->text);
    if (isAnswer(node)) {
        while (answer != 1 && answer != 2) {
            printf("1 - Yes, 2 - No\n");
            scanf("%d", &answer);
            rewind(stdin);
        }
        log_file(file, node->text, answer == 1 ? "YES" : "NO");
        if (answer == 1) {
            printf("cool\n");
            return NULL;
        } else {
            printf("I don't know the answer\n");
            printf("Tell me the answer\n");
            char *stringAn = (char *)malloc(sizeof(char) * STRINGSIZE);
            fgets(stringAn, STRINGSIZE, stdin);
            stringAn[strlen(stringAn) - 1] = '\0';
            log_file(file, stringAn, "NEW ANSWER");
            printf("What is the difference between this object\n");
            char *string = (char *)malloc(sizeof(char) * STRINGSIZE);
            fgets(string, STRINGSIZE, stdin);
            string[strlen(string) - 1] = '\0';
            log_file(file, string, "DIFFERENCE");
            Node *node1 = createNode(stringAn);
            Node *node2 = createNode(node->text);
            node->text = string;
            node->right = node1;
            node->left = node2;
            return NULL;
        }
    } else {
        while (answer != 1 && answer != 2) {
            printf("1 - Yes, 2 - No\n");
            scanf("%d", &answer);
            rewind(stdin);
        }
        log_file(file, node->text, answer == 1 ? "YES" : "NO");
        if (answer == 1) return game(node->right, file);
        else return game(node->left, file);
    }
}


void saveTree(Node *root, FILE *file) {
    if (root == NULL) {
        fprintf(file, "NULL ");
        return;
    }
    fprintf(file, "%s ", root->text);
    saveTree(root->left, file);
    saveTree(root->right, file);
}
int main(void) {
    FILE *file = fopen("game_log.txt", "a");
    Node *root = NULL;
    FILE *f = fopen("tree.txt", "r");
    if (f) {
        root = readTreeFromFile(f);
        fclose(f);
    } else {
        root = createNode("Is it an animal?");
        root->left = createNode("Elephant");
        root->right = createNode("Car");
    }
    while (1) {
        printf("Do you want to play a game? (1 - Yes, 2 - No)\n");
        int answer = 0;
        scanf("%d", &answer);
        rewind(stdin);
        if (answer == 1) {
            game(root, file);
        } else {
            break;
        }
    }
    f = fopen("tree.txt", "w");
    writeTreeToFile(f, root);
    fclose(f);
    fclose(file);
    return 0;
}

int main(void);
