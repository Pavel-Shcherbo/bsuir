#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "functions.h"

#define SIZE_HASH 3
#define SIZE 256
#define IP_SIZE 16
#define SIZE_TO_CLEAR_CACHE 3

struct HashTable* ht;

struct QueueNode* createQueueNode(struct Hash* data) {
    struct QueueNode* node = (struct QueueNode*)malloc(sizeof(struct QueueNode));
    node->data = data;
    node->next = NULL;
    return node;
}

struct Queue* createQueue(void) {
    struct Queue* queue = (struct Queue*)malloc(sizeof(struct Queue));
    queue->front = NULL;
    queue->rear = NULL;
    return queue;
}

void enqueue(struct Queue* queue, struct Hash* data) {
    struct QueueNode* node = createQueueNode(data);
    if (queue->rear == NULL) {
        queue->front = node;
        queue->rear = node;
    } else {
        queue->rear->next = node;
        queue->rear = node;
    }
}

struct Hash* dequeue(struct Queue* queue) {
    if (queue->front == NULL) {
        return NULL;
    }
    struct QueueNode* temp = queue->front;
    struct Hash* data = temp->data;
    queue->front = queue->front->next;
    if (queue->front == NULL) {
        queue->rear = NULL;
    }
    free(temp);
    return data;
}

int isEmpty(struct Queue* queue) {
    return queue->front == NULL;
}

int validateIP(const char* ip) {
    if (ip == NULL) {
        return 0;
    }
    int nums[4];
    int cnt = sscanf(ip, "%d.%d.%d.%d", &nums[0], &nums[1], &nums[2], &nums[3]);
    if (cnt != 4) {
        return 0;
    }
    for (int i = 0; i < 4; i++) {
        if (nums[i] < 0 || nums[i] > 255) {
            return 0;
        }
    }
    return 1;
}

unsigned int generateHash(const char* str) {
    unsigned int hash = 0;
    for (int i = 0; str[i] != '\0'; i++) {
        hash = hash * 31 + str[i];
    }
    return hash % SIZE_HASH;
}

void insertIntoHashTable(struct HashTable* ht, char* domain, char* ip) {
    int index = generateHash(domain);
    if (ht->table[index] == NULL) {
        struct Hash* h = malloc(sizeof(struct Hash));
        h->domain = strdup(domain);
        h->ip = strdup(ip);
        h->cname = NULL;
        h->prev = NULL;
        h->next = NULL;
        ht->table[index] = h;
        ht->tail[index] = h;
    } else {
        struct Hash* h = ht->table[index];
        while (h != NULL) {
            if (strcmp(h->domain, domain) == 0) {
                if (h->cname != NULL) {
                    free(h->cname);
                    h->cname = NULL;
                }
                free(h->ip);
                h->ip = strdup(ip);
                return;
            }
            h = h->next;
        }
        struct Hash* new_h = malloc(sizeof(struct Hash));
        new_h->domain = strdup(domain);
        new_h->ip = strdup(ip);
        new_h->cname = NULL;
        new_h->prev = NULL;
        new_h->next = ht->table[index];
        ht->table[index]->prev = new_h;
        ht->table[index] = new_h;
        if (ht->count >= SIZE_TO_CLEAR_CACHE - 1) {
            struct Hash* last_h = ht->tail[index];
            ht->tail[index] = last_h->prev;
            ht->tail[index]->next = NULL;
            freeHash(last_h);
        } else {
            ht->count++;
        }
    }
}



void writeToFile(char* filename, char* domain, char* ip) {
    FILE* fp = fopen(filename, "a");
    if (fp == NULL) {
        printf("Error opening file %s\n", filename);
        exit(1);
    }
    fprintf(fp, "%s IN A %s\n", domain, ip);
    fclose(fp);
}

void checkForTypeTwoElement(char* newDomain) {
    FILE* fp = fopen("dns.txt", "r");
    if (fp == NULL) {
        printf("Error opening file\n");
        return;
    }
    char str[SIZE];
    char domain[SIZE];
    char cname[SIZE];
    while (fgets(str, SIZE, fp) != NULL) {
        if (sscanf(str, "%s IN CNAME %s", domain, cname) == 2) {
            domain[strlen(domain)] = '\0';
            if (strcmp(domain, newDomain) == 0) {
                cname[strlen(cname)] = '\0';
                strcpy(newDomain, cname);
            }
        }
    }
    fclose(fp);
}


void handleMissingElement(int count, char* newDomain) {
    if (count == 0) {
        printf("Доменное имя не найдено\n");
        printf("Добавить в DNS?\n");
        printf("1. Да\n");
        printf("2. Нет\n");
        int choice;
        fflush(stdin);
        scanf("%d", &choice);
        getchar();
        while (choice != 1 && choice != 2) {
            printf("Попробуй еще!\n");
            scanf("%d", &choice);
        }
        if (choice == 2) {
            printf("Введите доменное имя: ");
            scanf("%s", newDomain);
        }
        if (choice == 1) {
            char* ip = malloc(16);
            do {
                printf("IP: ");
                fflush(stdin);
                fgets(ip, 16, stdin);
            } while (!validateIP(ip));
            writeToFile("dns.txt", newDomain, ip);
            
            insertIntoHashTable(ht, newDomain, ip);
        }
    }
}

void readFromFile(struct HashTable* ht, char* newDomain) {
    int count = 0;
    int counter = 0;
    FILE* fp = fopen("dns.txt", "r");
    if (fp == NULL) {
        printf("Error opening file\n");
        return;
    }
    char line[SIZE];
    char domain[SIZE];
    char domain2[SIZE];
    char ip[IP_SIZE];
    //char cnameDomain[SIZE];
    checkForTypeTwoElement(newDomain);
    fclose(fp);
    fp = fopen("dns.txt", "r");
    while (fgets(line, sizeof(line), fp) != NULL) {
        if (sscanf(line, "%s IN A %s", domain, ip) == 2 && strcmp(domain, newDomain) == 0 &&
            validateIP(ip) == 1) {
            if (counter == 0) {
                insertIntoHashTable(ht, newDomain, ip);
            } else {
                insertIntoHashTable(ht, domain2, ip);
            }
            count++;
        }
    }
    handleMissingElement(count, newDomain);
    fclose(fp);
}


void printIPFromHashTable(struct HashTable* ht, char* newDomain) {
    int count = 0;
    int index = generateHash(newDomain);
    struct Hash* h = ht->table[index];
    while (h != NULL) {
        if (strcmp(h->domain, newDomain) == 0) {
            if (count == 0) {
                printf("\n%s\n", h->ip);
            }
            count++;
        }
        h = h->next;
    }
    if (count == 0) {
        readFromFile(ht, newDomain);
        printIPFromHashTable(ht, newDomain);
    }
}


void printHashTable(struct HashTable* ht) {
    for (int i = 0; i < SIZE_HASH; i++) {
        struct Hash* h = ht->table[i];
        while (h != NULL) {
            printf("%s IN A %s\n", h->domain, h->ip);
            h = h->next;
        }
    }
}


void findDomainByIP(void) {
    char needIP[16];
    printf("Введите IP-адрес: ");
    scanf("%15s", needIP);

    FILE* fp = fopen("dns.txt", "r");
    if (fp == NULL) {
        printf("Ошибка при открытии файла\n");
        return;
    }
    char line[SIZE];
    char domain[SIZE];
    char ip[16];
    int count = 0;

    while (fgets(line, sizeof(line), fp) != NULL) {
        if (sscanf(line, "%s IN A %s", domain, ip) == 2 && strcmp(needIP, ip) == 0) {
            printf("%s\n", domain);
            count++;
            if (count == 1) {
                strcpy(needIP, domain);
            }
        } else if (sscanf(line, "%s IN CNAМЕ %s", domain, ip) == 2 && strcmp(needIP, ip) == 0) {
            printf("%s\n", domain);
        }
    }
    if (count == 0) {
        printf("Ошибка: IP-адрес не найден в базе данных.\n");
    }
    fclose(fp);
}


void freeHash(struct Hash* node) {
    if (node) {
        free(node->domain);
        free(node->ip);
        free(node);
    }
}


void deleteHashTable(struct HashTable* ht) {
    if (ht) {
        for (int i = 0; i < ht->size; ++i) {
            struct Hash* current = ht->table[i];
            while (current) {
                struct Hash* next = current->next;
                freeHash(current);
                current = next;
            }
        }
        free(ht->table);
    }
    ht->count = 0;
}

void addElementToHashTable(struct HashTable* ht) {
    char* domain = malloc(SIZE * sizeof(char));
    char* ip = malloc(IP_SIZE * sizeof(char));
    printf("Введите доменное имя: ");
    scanf("%s", domain);
    
    printf("Введите IP-адрес: ");
    scanf("%s", ip);
    
    insertIntoHashTable(ht, domain, ip);
    writeToFile("dns.txt", domain, ip);
}

void displayMenu(void) {
    struct HashTable ht = {SIZE_HASH, calloc(SIZE_HASH, sizeof(struct Hash*)) };
    char domain[SIZE];
    int choice = 0;
    while (choice != 5) {
        printf("\n----- Меню -----\n");
        printf("1. Добавить элемент\n");
        printf("2. Найти IP-адрес по доменному имени\n");
        printf("3. Показать таблицу\n");
        printf("4. Найти доменное имя по IP-адресу\n");
        printf("5. Выход\n");
        printf("-----------------\n");
        printf("Введите ваш выбор: ");
        scanf("%d", &choice);
        getchar();
        switch (choice) {
            case 1:
                addElementToHashTable(&ht);
                break;
            case 2:
                printf("Введите доменное имя: ");
                scanf("%s", domain);
                if (strstr(domain, "bsuir.by") != NULL) {
                    insertIntoHashTable(&ht, domain, "192.168.251.23");
                    printf("192.168.251.23");
                } else {
                    printIPFromHashTable(&ht, domain);
                }

                break;
            case 3:
                printHashTable(&ht);
                break;
            case 4:
                findDomainByIP();
                break;
            case 5:
                break;
            default:
                printf("Неверный выбор. Попробуйте еще раз.\n");
                break;
        }
    }
    deleteHashTable(&ht);
}
