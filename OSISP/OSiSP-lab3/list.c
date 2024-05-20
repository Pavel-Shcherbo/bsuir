#include "list.h"
#include <stdio.h>
#include <stdlib.h>
#include <sys/types.h>

Node* constructList(pid_t pid) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    if (!newNode) {
        perror("Memory allocation failed");
        exit(EXIT_FAILURE);
    }
    newNode->pid = pid;
    newNode->next = NULL;
    return newNode;
}

void pushList(Node** head, pid_t pid) {
    if (!head) {
        perror("Invalid head pointer");
        exit(EXIT_FAILURE);
    }
    if (!*head) {
        *head = constructList(pid);
        return;
    }
    Node* cursor = *head;
    while (cursor->next)
        cursor = cursor->next;
    cursor->next = constructList(pid);
}

void displayList(const Node* head) {
    if (!head)
        return;
    printf("Parent PID: %d\n", head->pid);
    size_t childIndex = 1;
    while (head->next) {
        head = head->next;
        printf("Child%lu PID: %d\n", ++childIndex, head->pid);
    }
}

pid_t popList(Node** head) {
    if (!head) {
        perror("Invalid head pointer");
        exit(EXIT_FAILURE);
    }
    if (!*head)
        return -1;
    Node* cursor = *head;
    Node* prev = NULL;
    while (cursor->next) {
        prev = cursor;
        cursor = cursor->next;
    }
    pid_t pid = cursor->pid;
    free(cursor);
    if (!prev)
        *head = NULL;
    else
        prev->next = NULL;
    return pid;
}

void clearList(Node** head) {
    while (*head) {
        Node* temp = *head;
        *head = (*head)->next;
        free(temp);
    }
}
