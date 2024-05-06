#include <stdbool.h>
#include <stdlib.h>
#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>
#include <signal.h>
#include <time.h>
#include "list.h"

#define COUNT_OF_REPEATS 116
#define SEC_TIMER 16116
#define ARR_SIZE 4
#define SEC_FOR_PREFF_G 5

typedef struct Pair {
    int first;
    int second;
} Pair;

size_t count = 0;
size_t size = 0;
Pair arrOfStatistic[COUNT_OF_REPEATS];
Pair valStatistic;
bool continueCollect = true;
bool collect = true;
bool flagP = false;
pid_t pidParent;
Node* head;

void allowStatisticOutput();
void disableStatisticOutput();
void showStatistic();
void takeStatistic();
void deleteLastProc();
void makeStatistic();
void createProc();
void deleteAllChildProc();
void commandToStatForNProc(size_t, bool, bool);
void commandToShowStatForAllProc(bool);
void allowAllAfterP();

int main() {
    int num = 0;
    signal(SIGINT, showStatistic);
    signal(SIGUSR1, allowStatisticOutput);
    signal(SIGUSR2, disableStatisticOutput);
    bool flagContinue = true;
    pidParent = getpid();
    pushList(&head, pidParent);
    do {
        int ch = getchar();
        switch(ch) {
            case '+' : { createProc(); break; }
            case '-' : { deleteLastProc(); break; }
            case 'l' : { displayList(head); break;}
            case 'k' : { deleteAllChildProc(); break; }
            case 's' : {
                printf("Enter 0 for all processes, or another number for <num> process: ");
                scanf("%d", &num);
                if (num == 0)
                    commandToShowStatForAllProc(false);
                else commandToStatForNProc(num, false, false);
                break;
            }
            case 'g' : {
                flagP = false;
                printf("Enter 0 for all processes, or another number for <num> process: ");
                scanf("%d", &num);
                if (num == 0)
                    commandToShowStatForAllProc(true);
                else commandToStatForNProc(num, true, false);
                break;
            }
            case 'p' : {
                commandToShowStatForAllProc(false);
                printf("Enter the number of the process that will display statistics: ");
                scanf("%d", &num);
                commandToStatForNProc(num, true, true);
                flagP = true;
                signal(SIGALRM, allowAllAfterP);
                alarm(SEC_FOR_PREFF_G);
                break;
            }
            case 'q' : { deleteAllChildProc(), flagContinue = false; break; }
                //add wait for zombie_process
            default : { flagContinue = false; break; }
        }
        getchar();
    }while(flagContinue);
    //free memory from list
    clearList(&head);
    return 0;
}

void commandToStatForNProc(size_t n, bool allowFlag, bool queryFlag) {
    if (count >= n) {
        size_t i = 1;
        Node* cursor = head->next;
        while(i++ != n)
            cursor = cursor->next;
        if (queryFlag) {
            kill(cursor->pid, SIGINT);
            return;
        }
        if (allowFlag)
            kill(cursor->pid, SIGUSR1);
        kill(cursor->pid, SIGUSR2);
    }else printf("There is no child process with this number.\n");
}

void allowStatisticOutput() {
    collect = true;
}

void disableStatisticOutput() {
    collect = false;
}

void showStatistic() {
    printf("Statistic of child process with PID = %d, PPID = %d All values: ", getpid(), getppid());
    for (size_t i = 0; i < ARR_SIZE; ++i) {
        printf("{%d, %d} ", arrOfStatistic[i].first, arrOfStatistic[i].second);
    }
    printf("\n");
}

void takeStatistic() {
    arrOfStatistic[size].first = valStatistic.first;
    arrOfStatistic[size++].second = valStatistic.second;
    continueCollect = false;
}

void deleteLastProc() {
    if (!head->next) {
        printf("No child processes.\n");
        return;
    }
    pid_t pid = popList(&head);
    kill(pid, SIGKILL);
    printf("Child process with PID = %d successfully deleted.\n", pid);
    printf("Remaining number of child processes: %lu\n", --count);
}

void makeStatistic() {
    do {
        for (size_t i = 0; i < COUNT_OF_REPEATS; ++i) {
            if (size == ARR_SIZE)
                size = 0;
            ualarm(SEC_TIMER, 0);
            size_t j = 0;
            do {
                valStatistic.first = j % 2;
                valStatistic.second = j % 2;
                j++;
            }while(continueCollect);
            continueCollect = true;
        }
        if (collect)
            showStatistic();
    }while(1);
}

void createProc() {
    pid_t pid = fork();
    if (pid == 0) {
        signal(SIGALRM, takeStatistic);
        makeStatistic();
    }
    else if (pid > 0) {
        pushList(&head, pid);
        count++;
        printf("Child process with PID = %d spawned successfully.\n", pid);
    }
}

void commandToShowStatForAllProc(bool allowFlag) {
    if (head->next) {
        Node* cursor = head->next;
        while(cursor) {
            if (allowFlag)
                kill(cursor->pid, SIGUSR1);
            else kill(cursor->pid, SIGUSR2);
            cursor = cursor->next;
        }
    }
}

void deleteAllChildProc() {
    while(head->next) {
        pid_t pid = popList(&head);
        kill(pid, SIGKILL);
        count--;
    }
    printf("All child processes are deleted.\n");
}

void allowAllAfterP() {
    if (flagP == true)
        commandToShowStatForAllProc(true);
}
