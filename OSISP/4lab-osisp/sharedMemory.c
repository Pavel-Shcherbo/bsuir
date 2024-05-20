#include "func.h"

MessageQueue *initSharedMemoryQueue(void) {
    int shm_id = shmget(8888, sizeof(MessageQueue), IPC_CREAT | 0666);
    if (shm_id == -1) {
        perror("shmget");
        exit(EXIT_FAILURE);
    }

    void *shared_memory = shmat(shm_id, NULL, 0);
    if (shared_memory == (void *)-1) {
        perror("shmat");
        exit(EXIT_FAILURE);
    }

    MessageQueue *queue = (MessageQueue *)shared_memory;

    return queue;
}

dispatch_semaphore_t *initSharedMemorySem(int key) {
    int shm_id = shmget(key, sizeof(dispatch_semaphore_t), IPC_CREAT | 0666);
    if (shm_id == -1) {
        perror("shmget");
        exit(EXIT_FAILURE);
    }

    void *shared_memory = shmat(shm_id, NULL, 0);
    if (shared_memory == (void *)-1) {
        perror("shmat");
        exit(EXIT_FAILURE);
    }

    dispatch_semaphore_t *sem = (dispatch_semaphore_t *)shared_memory;

    *sem = dispatch_semaphore_create(MAX_SEM_COUNT);

    return sem;
}


void cleanupSharedMemory(MessageQueue *queue, dispatch_semaphore_t *sem_prod, dispatch_semaphore_t *sem_con) {

    if (shmdt(queue) == -1) {
        perror("shmdt");
        exit(EXIT_FAILURE);
    }

    int shm_id = shmget(8888, sizeof(MessageQueue), 0666);
    if (shm_id == -1) {
        perror("shmget");
        exit(EXIT_FAILURE);
    }

    if (shmctl(shm_id, IPC_RMID, NULL) == -1) {
        perror("shmctl");
        exit(EXIT_FAILURE);
    }



    if (shmdt(sem_prod) == -1) {
        perror("shmdt");
        exit(EXIT_FAILURE);
    }

    int shm_id_sem_prod = shmget(7777, sizeof(dispatch_semaphore_t), 0666);
    if (shm_id_sem_prod == -1) {
        perror("shmget");
        exit(EXIT_FAILURE);
    }

    if (shmctl(shm_id_sem_prod, IPC_RMID, NULL) == -1) {
        perror("shmctl");
        exit(EXIT_FAILURE);
    }



    if (shmdt(sem_con) == -1) {
        perror("shmdt");
        exit(EXIT_FAILURE);
    }

    int shm_id_sem_con = shmget(6666, sizeof(dispatch_semaphore_t), 0666);
    if (shm_id_sem_con == -1) {
        perror("shmget");
        exit(EXIT_FAILURE);
    }

    if (shmctl(shm_id_sem_con, IPC_RMID, NULL) == -1) {
        perror("shmctl");
        exit(EXIT_FAILURE);
    }

}

