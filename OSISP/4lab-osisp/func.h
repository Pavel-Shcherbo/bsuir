#pragma once
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/ipc.h>
#include <sys/shm.h>
#include <sys/sem.h>
#include <sys/mman.h>
#include <fcntl.h>
#include <dispatch/dispatch.h>
#include <signal.h> 

#define MAX_QUEUE_SIZE 15
#define MAX_SEM_COUNT 10

typedef struct {
   u_int8_t type;
   u_int16_t hash;
   u_int8_t size;
   u_int8_t data[10];
} Message;

typedef struct {
    Message *buffer[MAX_QUEUE_SIZE]; 
    int head; 
    int tail; 
    int count_added; 
    int count_extracted; 
    pthread_mutex_t mutex; 

} MessageQueue;

void initQueue(MessageQueue *queue);

void push(MessageQueue *queue, Message *message);

Message *pop(MessageQueue *queue);

void generateRandomMessage(Message* message);

uint16_t hashCode(const Message *message);

MessageQueue *initSharedMemoryQueue(void);

dispatch_semaphore_t *initSharedMemorySem(int key);

void cleanupSharedMemory(MessageQueue *queue, dispatch_semaphore_t *sem_prod, dispatch_semaphore_t *sem_con);

void messageProducer(MessageQueue *queue, dispatch_semaphore_t *sem);

void messageConsumer(MessageQueue *queue, dispatch_semaphore_t *sem);
