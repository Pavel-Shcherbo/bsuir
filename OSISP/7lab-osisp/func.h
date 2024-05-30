#pragma once
#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>
#include <pthread.h>
#include <sys/mman.h>
#include <fcntl.h>
#include <unistd.h>
#include <time.h>
#include <string.h>

#define FILENAME "data.txt"
#define NUMBER_OF_RECORDS 10

struct flock lock;
int fd;

void readInput(char* buffer, int size);
void menu(void);

void modification(int num);
void list(void);
void get(int num);
