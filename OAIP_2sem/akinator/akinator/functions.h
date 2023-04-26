typedef struct Node {
    char* text;
    struct Node* left;
    struct Node* right;
} Node;


Node *createNode(char *text);
Node *readTreeFromFile(FILE *f);
Node *game(Node *node, FILE *file);


void writeTreeToFile(FILE *f, Node *node);
char isAnswer(Node *node);
void logFile(FILE *log_file, char *string, char *answer);
void freeTree(struct Node *node);
