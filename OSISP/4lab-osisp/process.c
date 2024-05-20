#include "func.h"

void messageProducer(MessageQueue *queue, dispatch_semaphore_t *sem) {
    
    while (1) {
        dispatch_semaphore_wait(*sem, DISPATCH_TIME_FOREVER);
        Message *new_message = (Message *)malloc(sizeof(Message));
        if (new_message == NULL) {
            perror("Error allocating memory for message");
            exit(EXIT_FAILURE);
        }
        generateRandomMessage(new_message);
        push(queue, new_message);
        sleep(1);
        dispatch_semaphore_signal(*sem);
    }
}

void messageConsumer(MessageQueue *queue, dispatch_semaphore_t *sem) {
  
    while (1) {
        dispatch_semaphore_wait(*sem, DISPATCH_TIME_FOREVER);
        pop(queue);
        sleep(1);
        dispatch_semaphore_signal(*sem);
    }
}
