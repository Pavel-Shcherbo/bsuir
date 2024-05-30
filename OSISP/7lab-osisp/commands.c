#include "func.h"

void modification(int num) {    
    if(num > NUMBER_OF_RECORDS || num < 1) {
        printf("Incorrect input. Try again!\n");
        return;
    }

    off_t startPosition = (num - 1) * 2;
    lock.l_start = startPosition;
    lock.l_len = 2;
    lock.l_type = F_WRLCK;
    if (fcntl(fd, F_SETLK, &lock) == -1) {
        printf("\nThis record already in modification!\n");
        return;
    }
    
    printf("Enter new record: ");
    char buff[2];
    readInput(buff, sizeof buff);
    lseek(fd, startPosition, SEEK_SET);

    printf("Enter '1' to PUT this modification: ");
    int choice;
    scanf("%d", &choice);

    if(choice == 1) {
        write(fd, buff, strlen(buff));
        printf("\nFile modified\n");
    } else {
        printf("File not modified\n"); 
    }

    lock.l_type = F_UNLCK;
    if (fcntl(fd, F_SETLK, &lock) == -1) {
        perror("Error unlocking file");
    }
}

void list(void) {
    for(int i = 0; i < NUMBER_OF_RECORDS; i++) {
        off_t startPosition = i * 2; 
        lock.l_type = F_WRLCK;
        lock.l_start = startPosition;
        fcntl(fd, F_GETLK, &lock);

        printf("\n%d. ", i + 1);
        if(startPosition == lock.l_start && lock.l_type != F_UNLCK) {
            printf("Sorry this record is being modified\n");
        } else {
            lseek(fd, startPosition, SEEK_SET);
            char record[2];
            read(fd, record, 1);
            printf("%s\n", record);
        }
        memset(&lock, 0, sizeof(struct flock));
    }
}

void get(int num) {
   if(num > NUMBER_OF_RECORDS || num < 1) {
        printf("Incorrect input. Try again!\n");
        return;
    }
    off_t startPosition = (num - 1) * 2; 
    lock.l_type = F_WRLCK; 
    lock.l_start = startPosition;
    fcntl(fd, F_GETLK, &lock);
    
    printf("\n%d. ", num);
    if(startPosition == lock.l_start && lock.l_type != F_UNLCK) {
        printf("Sorry this record is being modified\n");
    } else {
        lseek(fd, startPosition, SEEK_SET);
        char record[2];
        read(fd, record, 1);
        printf("%s\n", record);
    }
    memset(&lock, 0, sizeof(struct flock));
}
