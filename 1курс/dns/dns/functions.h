#define MAX_LINE_LENGTH 256
#define TABLE_SIZE 16

typedef struct cacheNode {
    char key[MAX_LINE_LENGTH];
    char value[MAX_LINE_LENGTH];
    struct cacheNode* next;
    struct cacheNode* prev;
} cacheNode_t;

typedef struct cache {
    int size;
    int capacity;
    cacheNode_t* head;
    cacheNode_t* tail;
} cache_t;

typedef struct hashNode {
    char key[MAX_LINE_LENGTH];
    char value[MAX_LINE_LENGTH];
    struct hashNode* next;
} hashNode_t;

typedef struct hashTable {
    int size;
    hashNode_t** table;
} hash_table_t;

hashNode_t* createHashNode(char* key, char* value);

cacheNode_t* createNode(char* key, char* value);

void addNodeToHead(cache_t* cache, cacheNode_t* node);

void removeTail(cache_t* cache);

void addToCache(cache_t* cache, hash_table_t* hash_table, char* key, char* value);

char* getFromCache(cache_t* cache, hash_table_t* hash_table, char* key);

void printCache(cache_t* cache);

void initHashTable(hash_table_t* hash_table, cache_t* cache, char* s);

int hashFunction(char* key);

char* validIP(void);

void addDomainToFile(char* domain);

void findDomain(char* IP);

void freeMemory(cache_t* cache, hash_table_t* hash_table);

char* getIP(hash_table_t* hash_table, char* key);

void addElement(hash_table_t* hash_table, cache_t* cache);

void menu(hash_table_t* hash_table, cache_t* cache);
