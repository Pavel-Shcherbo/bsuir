#include "functions.h"
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

void addElement(hash_table_t* hash_table, cache_t* cache) {
    char s[MAX_LINE_LENGTH];
    printf("Введите элемент для добавления: ");
    rewind(stdin);
    fgets(s, MAX_LINE_LENGTH, stdin);
    s[strlen(s) - 1] = '\0';
    char* value = getFromCache(cache, hash_table, s);
    if (value != NULL) {
        printf("Элемент уже существует в кэше.\n");
    } else {
        value = getIP(hash_table, s);
        
        if (value != NULL) {
            addToCache(cache, hash_table, s, value);
            printf("Элемент успешно добавлен в кэш.\n");
        } else {
            printf("Элемент не найден в файле.\n");
            printf("Если вы хотите добавить его, введите 1.\n");
            printf("Если вы хотите ввести другой элемент, введите 2.\n");
            printf("Если вы хотите перезапустить, введите 3.\n");
            
            int option = 0;
            scanf("%d", &option);
            
            switch (option) {
                case 1:
                    addDomainToFile(s);
                    break;
                case 2:
                    break;
                case 3:
                    printf("Введите ваш выбор: ");
                    return;
                default:
                    printf("Неверный выбор. Попробуйте еще раз.\n");
                    break;
            }
        }
    }
}

char* validIP(void) {
    char s[MAX_LINE_LENGTH];
    while (1) {
        rewind(stdin);
        fgets(s, MAX_LINE_LENGTH, stdin);
        s[strlen(s) - 1] = '\0';
        int i = 0;
        int sum = 0;
        int fl = 1;
        int point = 0;
        while (s[i] != '\0') {
            if ((s[i] < '0' || s[i] > '9') && s[i] != '.') {
                fl = 0;
                printf("Введите корректный IP адресс\n");
                break;
            }
            else {
                sum *= 10;
                sum += s[i] - 48;
                if (s[i + 1] == '.') {
                    if (sum > 255) {
                        printf("Число может быть до 255!\n");
                        fl = 0;
                        break;
                    }
                    point++;
                    if (point > 3) {
                        printf("IP адресс должен быть написан в формате 255.255.255.255\n");
                        fl = 0;
                        break;
                    }
                    sum = 0;
                }
            }
            i++;
        }
        if (point < 3 && fl != 0) {
            printf("IP адресс должен быть написан в формате 255.255.255.255\n");
            fl = 0;
            break;
        }
        if (fl == 0) {
            printf("Введите IP адресс: ");
            rewind(stdin);
        }
        else {
            break;
        }
    }
    return strdup(s);
}

void addDomainToFile(char* domain) {
    FILE* file = fopen("dns.txt", "r+");
    char s[MAX_LINE_LENGTH];
    rewind(stdin);
    printf("Это домен или второе название?(1 или 2): ");
    fgets(s, MAX_LINE_LENGTH, stdin);
    s[strlen(s) - 1] = '\0';
    if (strcmp(s, "1") == 0) {
        strncat(domain, " IN A ", 7);
        rewind(stdin);
        printf("Введите IP адресс: ");
        strcpy(s, validIP());
        s[strlen(s) - 1] = '\0';
        strncat(domain, s, MAX_LINE_LENGTH);
    }
    else {
        strncat(domain, " IN CNAME ", 11);
        rewind(stdin);
        printf("Введите домен: ");
        fgets(s, MAX_LINE_LENGTH, stdin);
        s[strlen(s) - 1] = '\0';
        strncat(domain, s, MAX_LINE_LENGTH);
    }
    fseek(file, 0, SEEK_END);
    fputs("\n", file);
    fputs(domain, file);
    fclose(file);
}

void findDomain(char* IP) {
    FILE* file = fopen("dns.txt", "r");
    char s[MAX_LINE_LENGTH];
    fseek(file, 0, SEEK_SET);
    int fl = 0;
    char domain[MAX_LINE_LENGTH];
    rewind(stdin);
    while (fgets(s, MAX_LINE_LENGTH, file)) {
        char* buf;
        buf = strtok(s, " \n");
        strcpy(domain, buf);
        buf = strtok(NULL, " \n");
        buf = strtok(NULL, " \n");
        if (strcmp(buf, "A") == 0) {
            buf = strtok(NULL, " \n");
            if (strcmp(buf, IP) == 0) {
                fl = 1;
                break;
            }
        }
    }
    if (fl == 0) {
        printf("Этого IP нет в файле\n");
        return;
    }
    printf("Домен: %s\n", domain);
    fseek(file, 0, SEEK_SET);
    rewind(stdin);
    while (fgets(s, MAX_LINE_LENGTH, file)) {
        char* buf;
        char canonical[MAX_LINE_LENGTH];
        buf = strtok(s, " \n");
        strcpy(canonical, buf);
        buf = strtok(NULL, " \n");
        buf = strtok(NULL, " \n");
        if (strcmp(buf, "CNAME") == 0) {
            buf = strtok(NULL, " \n");
            if (strcmp(buf, domain) == 0) {
                printf("Канонический вид: %s\n", canonical);
            }
        }
    }
}

void freeMemory(cache_t* cache, hash_table_t* hash_table) {
    for (int i = 0; i < TABLE_SIZE; i++) {
        hashNode_t* hash_node = hash_table->table[i];
        while (hash_node != NULL) {
            hashNode_t* temp = hash_node;
            hash_node = hash_node->next;
            free(temp);
        }
    }
    free(hash_table->table);

    cacheNode_t* cache_node = cache->head;
    while (cache_node != NULL) {
        cacheNode_t* temp = cache_node;
        cache_node = cache_node->next;
        free(temp);
    }
}

char* getIP(hash_table_t* hash_table, char* key) {
    int index = hashFunction(key);
    hashNode_t* hash_node = hash_table->table[index];
    while (hash_node != NULL) {
        if (strcmp(hash_node->key, key) == 0) {
            return hash_node->value;
        }
        hash_node = hash_node->next;
    }
    return NULL;
}


cacheNode_t* createNode(char* key, char* value) {
    cacheNode_t* new_node = (cacheNode_t*)malloc(sizeof(cacheNode_t));
    strcpy(new_node->key, key);
    strcpy(new_node->value, value);
    new_node->next = NULL;
    new_node->prev = NULL;
    return new_node;
}


void addNodeToHead(cache_t* cache, cacheNode_t* node) {
    node->next = cache->head;
    node->prev = NULL;
    if (cache->head != NULL) {
        cache->head->prev = node;
    }
    else {
        cache->tail = node;
    }
    cache->head = node;
}

void removeTail(cache_t* cache) {
    cacheNode_t* temp = cache->tail;
    cache->tail = cache->tail->prev;
    if (cache->tail != NULL) {
        cache->tail->next = NULL;
    }
    else {
        cache->head = NULL;
    }
    free(temp);
}

void addToCache(cache_t* cache, hash_table_t* hash_table, char* key, char* value) {
    cacheNode_t* new_node = createNode(key, value);
    addNodeToHead(cache, new_node);
    cache->size++;
    if (cache->size > cache->capacity) {
        hashNode_t* hash_node = hash_table->table[hashFunction(cache->tail->key)];
        if (strcmp(hash_node->key, cache->tail->key) == 0) {
            hash_table->table[hashFunction(cache->tail->key)] = hash_node->next;
        }
        else {
            while (hash_node->next != NULL && strcmp(hash_node->next->key, cache->tail->key) != 0) {
                hash_node = hash_node->next;
            }
            if (hash_node->next != NULL) {
                hashNode_t* temp = hash_node->next;
                hash_node->next = temp->next;
                free(temp);
            }
        }
        removeTail(cache);
        cache->size--;
    }
    hashNode_t* hash_node = hash_table->table[hashFunction(key)];
    while (hash_node->next != NULL && strcmp(hash_node->next->key, key) != 0) {
        hash_node = hash_node->next;
    }
    if (hash_node->next != NULL) {
        free(hash_node->next);
    }
    hash_node->next = createHashNode(key, value);
    hash_table->size++;
}

char* getFromCache(cache_t* cache, hash_table_t* hash_table, char* key) {
    hashNode_t* hash_node = hash_table->table[hashFunction(key)];
    while (hash_node != NULL && strcmp(hash_node->key, key) != 0) {
        hash_node = hash_node->next;
    }
    if (hash_node == NULL) {
        return NULL;
    }
    cacheNode_t* cache_node = cache->head;
    while (cache_node != NULL && strcmp(cache_node->key, key) != 0) {
        cache_node = cache_node->next;
    }
    if (cache_node == NULL) {
        return NULL;
    }
    if (cache_node != cache->head) {
        if (cache_node == cache->tail) {
            cache->tail = cache_node->prev;
            cache->tail->next = NULL;
        }
        else {
            cache_node->prev->next = cache_node->next;
            cache_node->next->prev = cache_node->prev;
        }
        addNodeToHead(cache, cache_node);
    }
    return cache_node->value;
}

void printCache(cache_t* cache) {
    cacheNode_t* current_node = cache->head;
    printf("Cache:\n");
    while (current_node != NULL) {
        printf("%s %s\n", current_node->key, current_node->value);
        current_node = current_node->next;
    }
}

void initHashTable(hash_table_t* hash_table, cache_t* cache, char* s) {
    FILE* file = fopen("dns.txt", "r");
    char line[MAX_LINE_LENGTH];
    char key[MAX_LINE_LENGTH];
    char value[MAX_LINE_LENGTH];
    char* token;
    while (fgets(line, MAX_LINE_LENGTH, file)) {
        token = strtok(line, " \n");
        strcpy(key, token);
        if (strcmp(s,key)== 0){
            token = strtok(NULL, " \n");
            token = strtok(NULL, " \n");
            if (strcmp(token, "A") == 0) {
                token = strtok(NULL, " \n");
                strcpy(value, token);
                hashNode_t* new_node = createHashNode(key, value);
                int hash = hashFunction(key);
                new_node->next = hash_table->table[hash];
                hash_table->table[hash] = new_node;
                hash_table->size++;
            }
            else {
                if (strcmp(token, "CNAME") == 0) {
                    token = strtok(NULL, " \n");
                    initHashTable(hash_table, cache, token);
                    char* IP = getIP(hash_table, token);
                    hashNode_t* new_node = createHashNode(key, IP);
                    int hash = hashFunction(key);
                    new_node->next = hash_table->table[hash];
                    hash_table->table[hash] = new_node;
                }
            }
        }

    }
    fclose(file);
}

hashNode_t* createHashNode(char* key, char* value) {
    hashNode_t* new_node = (hashNode_t*)malloc(sizeof(hashNode_t));
    strcpy(new_node->key, key);
    strcpy(new_node->value, value);
    new_node->next = NULL;
    return new_node;
}

int hashFunction(char* key) {
    int hash = 0;
    for (int i = 0; i < strlen(key); i++) {
        hash += key[i];
    }
    return hash % TABLE_SIZE;
}

void menu(hash_table_t* hash_table, cache_t* cache) {
    int fl = 1;
    int choice = 0;
    
    while (1) {
        char s[MAX_LINE_LENGTH];
        
        printf("\n----- Меню -----\n");
        printf("1. Добавить элемент\n");
        printf("2. Ввести доменное имя для получения IP-адреса\n");
        printf("3. Показать таблицу\n");
        printf("4. Ввести IP-адрес для получения доменного имени\n");
        printf("5. Выход\n");
        printf("-----------------\n");
        printf("Введите ваш выбор: ");
        
        if (fl == 1) {
            choice = 0;
            scanf("%d", &choice);
            rewind(stdin);
        }
        
        if (choice == 1) {
            addElement(hash_table, cache);
        }
        
        else if (choice == 2) {
            printf("Введите доменное имя: ");
            rewind(stdin);
            fgets(s, MAX_LINE_LENGTH, stdin);
            s[strlen(s) - 1] = '\0';
            char* value = getFromCache(cache, hash_table, s);
            
            if (value != NULL) {
                printf("IP-адрес: %s\n", value);
            } else {
                initHashTable(hash_table, cache, s);
                char* IP = getIP(hash_table, s);
                
                if (IP != NULL) {
                    addToCache(cache, hash_table, s, IP);
                    value = getFromCache(cache, hash_table, s);
                    printf("IP-адрес: %s\n", value);
                } else {
                    printf("Доменное имя не найдено.\n");
                }
            }
        }
        
        else if (choice == 3) {
            printCache(cache);
        }
        
        else if (choice == 4) {
            printf("Введите IP-адрес: ");
            rewind(stdin);
            fgets(s, MAX_LINE_LENGTH, stdin);
            s[strlen(s) - 1] = '\0';
            findDomain(s);
        }
        
        else if (choice == 5) {
            freeMemory(cache, hash_table);
            break;
        }
        else{
            printf("Неверный выбор");
        }
        fl = 1;
    }
}
