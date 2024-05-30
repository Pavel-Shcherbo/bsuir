#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>
#include <pthread.h>
#include <sys/mman.h>
#include <fcntl.h>
#include <unistd.h>
#include <time.h>

int count = 0;
int  countSecond = 0;

pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;
pthread_mutex_t mutexSecond = PTHREAD_MUTEX_INITIALIZER;
int* mapBlocks;
int check = 0;

void fillFileWithRandomChars(const char* filename, int numChars) {
    int fd = open(filename, O_RDWR | O_CREAT, 0666);
    if (fd == -1) {
        printf("error 6\n");
        return;
    }
    
    size_t fileSize = sizeof(char) * numChars;
    if (ftruncate(fd, fileSize) == -1) {
        printf("error 5\n");
        close(fd);
        return;
    }

    char* fileData = mmap(NULL, fileSize, PROT_WRITE, MAP_SHARED, fd, 0);
    if (fileData == MAP_FAILED) {
        printf("error 4\n");
        close(fd);
        return;
    }

    srand(time(NULL));
    for (int i = 0; i < numChars; i++) {
        fileData[i] = 'A' + rand() % 26;
    }

    if (munmap(fileData, fileSize) == -1) {
        printf("error 3\n");
    }
    close(fd);
}

typedef struct {
    int fileSize;
    int blockAmount;
    int threadAmount;
    const char* filename;
} ThreadArgs;

int compare(const void* a, const void* b) {
    char char1 = *((char*)a);
    char char2 = *((char*)b);
    return char1 - char2;
}

void sortBlock(int block, int fileSize, int blockAmount, const char* filename) {
    if(block == -1) return;

    size_t offset = (fileSize/blockAmount) * (block - 1);
    size_t endBlock = (fileSize/blockAmount) * block;

    FILE* file = fopen(filename, "r+");
    if (file == NULL) {
        printf("error 1\n");
        return;
    }

    fseek(file, 0, SEEK_SET); 
    if (fseek(file, offset, SEEK_SET) != 0) {
        printf("error 2\n");
        fclose(file);
        return;
    }

    size_t blockElements = (endBlock - offset);
    char* blockData = (char*)malloc(blockElements * sizeof(char));
    if (blockData == NULL) {
        printf("error 7\n");
        fclose(file);
        return;
    }

    fread(blockData, sizeof(char), blockElements, file);
    qsort(blockData, blockElements, sizeof(char), compare);
    fseek(file, offset, SEEK_SET);
    fwrite(blockData, sizeof(char), blockElements, file);

    free(blockData);
    fclose(file);
}

void mergeBlocks(int block, int fileSize, int blockAmount, const char* filename) {
    if(block == -1) return; 
   
    size_t offset = (fileSize/blockAmount) * (block - 1);
    size_t endBlock = (fileSize/blockAmount) * block;

    FILE* file = fopen(filename, "r+");
    if (file == NULL) {
        printf("error 1\n");
        return;
    }

    fseek(file, 0, SEEK_SET); 
    if (fseek(file, offset, SEEK_SET) != 0) {
        printf("error 2\n");
        fclose(file);
        return;
    }

    size_t blockElements = (endBlock - offset);

    char* blockDataFirst = (char*)malloc(blockElements * sizeof(char));
    if (blockDataFirst == NULL) {
        printf("error 7\n");
        fclose(file);
        return;
    }
    fread(blockDataFirst, sizeof(char), blockElements, file);


    if (fseek(file, offset + blockElements, SEEK_SET) != 0) {
        printf("error 2\n");
        fclose(file);
        return;
    }
    char* blockDataSecond = (char*)malloc(blockElements * sizeof(char));
    if (blockDataSecond == NULL) {
        printf("error 7\n");
        fclose(file);
        return;
    }
    fread(blockDataSecond, sizeof(char), blockElements, file);

    char* blockDataFinal = (char*)malloc(2 * blockElements * sizeof(char));
    int j = 0;
    size_t first = 0;
    size_t second = 0;
    while (first < blockElements && second < blockElements) {
        if (blockDataFirst[first] < blockDataSecond[second]) {
            blockDataFinal[j++] = blockDataFirst[first++];
        } else {
            blockDataFinal[j++] = blockDataSecond[second++];
        }
    }

    while (first < blockElements) {
        blockDataFinal[j++] = blockDataFirst[first++];
    }

    while (second < blockElements) {
        blockDataFinal[j++] = blockDataSecond[second++];
    }
    fseek(file, offset, SEEK_SET);
    fwrite(blockDataFinal, sizeof(char), 2 * blockElements, file);

    free(blockDataFirst);
    free(blockDataSecond);
    free(blockDataFinal);
    fclose(file);

}

void* threadFunc(void* args) {
    ThreadArgs* threadArgs = (ThreadArgs*)args;

    for(int i = 0; i < threadArgs->blockAmount; i++) {
        mapBlocks[i] = 0;
    }

    pthread_mutex_lock(&mutex);
    count++;
    pthread_mutex_unlock(&mutex);
    while (count != threadArgs->threadAmount);
    int current = -1;
    while (1)
    {   
        pthread_mutex_lock(&mutex); 
        for(int i = 0; i < threadArgs->blockAmount; i++) {
            if(mapBlocks[i] == 0) {
                check++;
                mapBlocks[i] = 1;
                current = i + 1;
                break;
            }
            else current = -1;
        }
        pthread_mutex_unlock(&mutex);

        sortBlock(current, threadArgs->fileSize, threadArgs->blockAmount, threadArgs->filename);
        if(check == threadArgs->blockAmount) break;
    }
  

    pthread_mutex_lock(&mutexSecond);
    countSecond++;

    pthread_mutex_unlock(&mutexSecond); 
    while (countSecond != threadArgs->threadAmount); 
    current = -1;
    int notDone = 1 ;
    while (1) {
        while(1) 
        {

            pthread_mutex_lock(&mutex); 
            for(int i = 0; i < threadArgs->blockAmount; i++) {

                if(mapBlocks[i] == notDone) {

                    mapBlocks[i] = notDone + 1;
                    mapBlocks[i+1] = notDone + 1;
                    current = i + 1;
                    break;
                }
                else current = -1;
            }
            pthread_mutex_unlock(&mutex); 
            mergeBlocks(current, threadArgs->fileSize, threadArgs->blockAmount, threadArgs->filename);
            if(current == -1) break;
        } 
        threadArgs->blockAmount = threadArgs->blockAmount/2;
        notDone++;

        if(threadArgs->blockAmount == 1) break;
    }

    pthread_exit(NULL);
}

int main(int argc, char *argv[]) {
    char command[256];
    snprintf(command, sizeof(command), "%s %s", "cat", argv[4]);
    mapBlocks = malloc(atoi(argv[2]) * 4);

    const char* filename = argv[4];
    int numChars = atoi(argv[1]);

    fillFileWithRandomChars(filename, numChars);
    printf("file before sort:\n\n");
    system(command);
    pthread_t threads[atoi(argv[3])];
    for(int i = 0; i < atoi(argv[3]); i++) {

        ThreadArgs* args = malloc(sizeof(ThreadArgs));
        args->fileSize = atoi(argv[1]);
        args->blockAmount = atoi(argv[2]);
        args->threadAmount = atoi(argv[3]);
        args->filename = filename;

        pthread_t thread;
        int result = pthread_create(&thread, NULL, threadFunc, (void*)args);

        if (result != 0) {
            perror("pthread_create");
            exit(EXIT_FAILURE);
        }
        threads[i] = thread;
    }

    for(int i = 0; i < atoi(argv[3]); i++) {
        pthread_join(threads[i], NULL);
    }

    printf("\n\nfile after sort:\n\n");

    system(command);
    return 0;
}
