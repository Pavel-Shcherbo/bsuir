#include "func.h"

int main(void) {

    fd = open(FILENAME, O_RDWR | O_CREAT, 0644);
    if (fd == -1) {
        perror("open");
        return 1;
    }

    if (lseek(fd, 0, SEEK_END) == 0) { 
        char* strings[] = {"A\n", "B\n", "C\n", "D\n", "E\n", 
                        "F\n", "G\n", "H\n", "I\n", "J\n"};
        for (int i = 0; i < NUMBER_OF_RECORDS; i++) {
            write(fd, strings[i], strlen(strings[i]));
        }
    }
    lseek(fd, 0, SEEK_SET);

    char buff[16];
    while(1) {
        menu();
        readInput(buff, sizeof buff);

        char *number = NULL;
        number = strtok (buff," ");
        number = strtok (NULL, " ");

        if (strcmp(buff, "LST") == 0) {
            list();
        }
        if (strcmp(buff, "GET") == 0) {
            int num = atoi(number);
            get(num);
        }
        if (strcmp(buff, "MOD") == 0) {
            int num = atoi(number);
            modification(num);
        }

        if (strcmp(buff, "quit") == 0) {
            break;
        } 
    }

    return 0;
}
