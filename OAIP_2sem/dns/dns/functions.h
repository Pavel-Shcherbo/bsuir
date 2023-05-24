#define SIZE_HASH 3

struct Hash {
    char* domain;
    char* ip;
    char* cname;
    struct Hash* prev;
    struct Hash* next;
};

struct HashTable {
    int size;
    struct Hash** table;
    struct Hash* tail[SIZE_HASH];
    int count;
};

struct QueueNode {
    struct Hash* data;
    struct QueueNode* next;
};

struct Queue {
    struct QueueNode* front;
    struct QueueNode* rear;
};


int isEmpty(struct Queue* queue);

int validateIP(const char *ip);

unsigned int generateHash(const char *str);

void insertIntoHashTable(struct HashTable* Hit, char* domain, char* ip);

void writeToFile(char* filename, char* domain, char* ip);

void readFromFile(struct HashTable* Hit, char* newDomain);

void printIPFromHashTable(struct HashTable* Hit, char* newDomain);

void printHashTable(struct HashTable* ht);

void findDomainByIP(void);

void handleMissingElement(int count, char* newDomain);

void checkForTypeTwoElement(char* newDomain);

void deleteHashTable(struct HashTable* Hit);

void addElementToHashTable(struct HashTable* Hit);

void displayMenu(void);

void freeHash(struct Hash* node);
