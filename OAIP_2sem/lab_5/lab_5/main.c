#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define CACHE_SIZE 10 // размер кэша
#define MAX_LINE_LENGTH 1024 // максимальная длина строки в файле

// структура для хранения записей в кэше
typedef struct {
    char key[MAX_LINE_LENGTH];
    char value[MAX_LINE_LENGTH];
} cache_entry;

// структура для хранения кэша
typedef struct {
    cache_entry entries[CACHE_SIZE];
    int count;
} cache;

// функция для вычисления хеша доменного имени
unsigned long hash(char *str) {
    unsigned long hash = 5381;
    int c;

    while ((c = *str++)) {
        hash = ((hash << 5) + hash) + c; /* hash * 33 + c */
    }

    return hash;
}

// функция для поиска записи в кэше
int find_cache_entry(cache *c, char *key) {
    int i;

    for (i = 0; i < c->count; i++) {
        if (strcmp(c->entries[i].key, key) == 0) {
            return i;
        }
    }

    return -1;
}

// функция для добавления записи в кэш
void add_cache_entry(cache *c, char *key, char *value) {
    int i;

    // если кэш полный, удаляем самую старую запись
    if (c->count == CACHE_SIZE) {
        for (i = 0; i < CACHE_SIZE - 1; i++) {
            strcpy(c->entries[i].key, c->entries[i + 1].key);
            strcpy(c->entries[i].value, c->entries[i + 1].value);
        }

        c->count--;
    }

    // добавляем новую запись в конец кэша
    strcpy(c->entries[c->count].key, key);
    strcpy(c->entries[c->count].value, value);
    c->count++;
}

// функция для обновления записи в кэше
void update_cache_entry(cache *c, int index) {
    cache_entry temp = c->entries[index];

    // сдвигаем запись в конец кэша
    for (int i = index; i < c->count - 1; i++) {
        c->entries[i] = c->entries[i + 1];
    }

    c->entries[c->count - 1] = temp;
}

// функция для поиска IP адреса по доменному имени в файле
char *find_ip_address(char *domain_name, char *file_name) {
    FILE *fp;
    char line[MAX_LINE_LENGTH];
    char *token;
    char *ip_address = NULL;

    fp = fopen(file_name, "r");

    if (fp == NULL) {
        printf("Error opening file %sn", file_name);
        return NULL;
    }

    while (fgets(line, MAX_LINE_LENGTH, fp) != NULL) {
        // ищем запись типа 1
        if (strstr(line, domain_name) != NULL && strstr(line, "IN A") != NULL) {
            token = strtok(line, " t");
            token = strtok(NULL, " t");
            ip_address = strdup(token);
            break;
        }

        // ищем запись типа 2
        if (strstr(line, domain_name) != NULL && strstr(line, "IN CNAME") != NULL) {
            token = strtok(line, " t");
            token = strtok(NULL, " t");
            char *new_domain_name = strdup(token);
            ip_address = find_ip_address(new_domain_name, file_name);
            free(new_domain_name);
            break;
        }
    }

    fclose(fp);

    return ip_address;
}

// функция для поиска всех доменных имен для IP адреса
void find_domain_names(char *ip_address, char *file_name) {
    FILE *fp;
    char line[MAX_LINE_LENGTH];
    char *token;
    char *ip_address_token;
    int found = 0;

    fp = fopen(file_name, "r");

    if (fp == NULL) {
        printf("Error opening file %sn", file_name);
        return;
    }

    while (fgets(line, MAX_LINE_LENGTH, fp) != NULL) {
        token = strtok(line, " t");

        if (strcmp(token, ip_address) == 0) {
            found = 1;
            printf("%sn", strtok(NULL, " t"));
        }
    }

    fclose(fp);

    if (!found) {
        printf("No domain names found for IP address %sn", ip_address);
    }
}

// функция для добавления записи в файл
void add_record(char *domain_name, char *ip_address, char *file_name) {
    FILE *fp;
    char line[MAX
