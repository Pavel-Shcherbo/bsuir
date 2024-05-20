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

#define START_QUEUE_SIZE 25
#define MAX_SEM_COUNT 10

int queueSize;
int threadProdFlag;
int threadConFlag;
int waitFlag;

typedef struct {
   u_int8_t type;
   u_int16_t hash;
   u_int8_t size;
   u_int8_t data[10];
} Message;

typedef struct {
    Message *buffer[256];
    int head; 
    int tail; 
    int count_added; 
    int count_extracted; 
    pthread_mutex_t mutex; 
} MessageQueue;

typedef struct {
    MessageQueue* queue;
    dispatch_semaphore_t *sem;
} ThreadArgs;

void initQueue(MessageQueue *queue);

void push(MessageQueue *queue, Message *message);

Message *pop(MessageQueue *queue);

void generateRandomMessage(Message* message);

uint16_t hashCode(const Message *message);

void messageProducer(MessageQueue *queue, dispatch_semaphore_t *sem);

void messageConsumer(MessageQueue *queue, dispatch_semaphore_t *sem);

void* threadMessageProducer(void* arg);

void* threadMessageConsumer(void* arg);
