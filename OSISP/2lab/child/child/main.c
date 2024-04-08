#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
extern char **environ;

int main(int argc, char * argv[], char * envp[]) {
    
    pid_t pid = getpid();
    pid_t ppid = getppid();
    
    printf("Process name: %s\n", argv[0]);
    printf("PID: %d\n", pid);
    printf("PPID: %d\n", ppid);
    
    const char *filename = argv[1];
    FILE *file = fopen(filename, "r");
    
    if (file == NULL) {
        printf("file not found\n");
        exit(1);
    }
    
    char line[256];
    
    
    while (fgets(line, sizeof(line), file) != NULL) {
        
        char *new_line = strchr(line, '\n');
        if (new_line != NULL) {
            *new_line = '\0';
        }
        
        if (strcmp(argv[2], "+") == 0) {
            char *value = getenv(line);
            
            if (value != NULL) {
                printf("%s=%s\n", line, value);
            } else {
                printf("%s - not found\n", line);
            }
        }
        
        if (strcmp(argv[2], "%") == 0) {
            int count = 0;
            for (int i = 0; envp[i] != NULL; i++) {
                
                char *name = malloc(256);
                strcpy(name, envp[i]);
                char *new_name = strchr(name, '=');
                *new_name = '\0';
                
                if (strcmp(line, name) == 0) {
                    count++;
                    printf("%s\n", envp[i]);
                }
                free(name);
            }
            if(!count) {
                printf("%s - not found\n", line);
            }
        }
        
        if (strcmp(argv[2], "@") == 0) {
            
            int count = 0;
            for (char **env = environ; *env != NULL; env++) {
                
                char *name = malloc(256);
                strcpy(name, *env);
                char *new_name = strchr(name, '=');
                *new_name = '\0';
                
                if (strcmp(line, name) == 0) {
                    count++;
                    printf("%s\n", *env);
                }
                
                free(name);
            }
            if (!count) {
                printf("%s - not found\n", line);
            }
        }
        
    }
    
    fclose(file);
    
    return 0;
}
