#ifndef LIST_H
#define LIST_H

#include <sys/types.h>

typedef struct Node {
    pid_t pid;
    struct Node* next;
} Node;

Node* constructList(pid_t);
void pushList(Node**, pid_t);
void displayList(const Node*);
pid_t popList(Node**);
void clearList(Node**);

#endif //LIST_H
