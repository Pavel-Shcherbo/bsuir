#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Структура узла дерева
typedef struct node {
    char* data;
    struct node* left;
    struct node* right;
} Node;

// Функция создания нового узла
Node* newNode(char* data) {
    Node* node = (Node*)malloc(sizeof(Node));
    node->data = strdup(data);
    node->left = NULL;
    node->right = NULL;
    return node;
}

// Функция добавления нового объекта в дерево
void addNode(Node* root, char* question, char* answer) {
    if (root == NULL) {
        return;
    }

    Node* node = newNode(question);
    Node* ansNode = newNode(answer);

    // Если узел является листом, заменяем его на новый узел
    if (root->left == NULL && root->right == NULL) {
        Node* oldNode = newNode(root->data);
        oldNode->left = root->left;
        oldNode->right = root->right;
        root->data = question;
        root->left = oldNode;
        root->right = ansNode;
        return;
    }

    // Если ответ на вопрос "да", добавляем объект в левое поддерево
    if (strcmp(root->data, "да") == 0) {
        addNode(root->left, question, answer);
    }

    // Если ответ на вопрос "нет", добавляем объект в правое поддерево
    if (strcmp(root->data, "нет") == 0) {
        addNode(root->right, question, answer);
    }
}

// Функция игры в Акинатора
void playGame(Node* root) {
    char answer[10];
    printf("%s\n", root->data);
    scanf("%s", answer);
    
    // Проверка на неправильный ответ
    while (strcmp(answer, "да") != 0 && strcmp(answer, "нет") != 0) {
        printf("Пожалуйста, введите 'да' или 'нет'.\n");
        scanf("%s", answer);
    }
    
    // Если достигли листа - выводим ответ
    if(root->left == NULL && root->right == NULL) {
        printf("Это %s?\n", root->data);
        scanf("%s", answer);
        // Проверка на неправильный ответ
        while (strcmp(answer, "да") != 0 && strcmp(answer, "нет") != 0) {
            printf("Пожалуйста, введите 'да' или 'нет'.\n");
            scanf("%s", answer);
        }
        
        // Если ответ "да", победа, иначе добавляем новый объект в дерево
        if (strcmp(answer, "да") == 0) {
            printf("Я победил!\n");
        } else {
            char newAnswer[100];
            char newQuestion[100];
            printf("Кого вы загадали?\n");
            scanf("%s", newAnswer);
            printf("Введите вопрос, который отличает %s от %s\n", newAnswer, root->data);
            scanf("%s", newQuestion);
            addNode(root, newQuestion, newAnswer);
            printf("Объект добавлен в базу знаний.\n");
        }
    }
    
    // Если ответ "да", переходим в левое поддерево
    if (strcmp(answer, "да") == 0) {
        playGame(root->left);
    }
    
    // Если ответ "нет", переходим в правое поддерево
    if (strcmp(answer, "нет") == 0) {
        playGame(root->right);
    }
}
int main() {
    // Создание корневого узла с начальным вопросом
    Node* root = newNode("Животное, которое вы загадали, может летать?");
    root->left = newNode("Птица");
    root->right = newNode("Млекопитающее");
    // Запуск игры
    printf("Добро пожаловать в игру Акинатор!\n");
    playGame(root);
    
    return 0;
}

