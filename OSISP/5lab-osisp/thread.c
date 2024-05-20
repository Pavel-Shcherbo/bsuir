#include "func.h"

void* threadMessageProducer(void* arg) {
    ThreadArgs* threadArgs = (ThreadArgs*)arg;
    messageProducer(threadArgs->queue, threadArgs->sem);
    pthread_exit(NULL);
}

void* threadMessageConsumer(void* arg) {
    ThreadArgs* threadArgs = (ThreadArgs*)arg;
    messageConsumer(threadArgs->queue, threadArgs->sem);
    pthread_exit(NULL);
}
