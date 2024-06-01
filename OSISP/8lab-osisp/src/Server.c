#define _GNU_SOURCE

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <arpa/inet.h>
#include <pthread.h>
#include <dirent.h>
#include <errno.h>
#include <signal.h>
#include <sys/types.h>
#include <sys/stat.h>


#define BUFFER_SIZE 1024
#define INFO_FILE "/home/pahan/tar_working_dir/Hvesco/OSISP/lab08-my/src/server_info.txt" // Имя файла с информацией о сервере

int server_socket;
char root_dir[BUFFER_SIZE];
char server_info[BUFFER_SIZE]; // Буфер для хранения информации о сервере

// Обработчик сигнала для корректного завершения работы сервера
void handle_signal(int signal) {
    if (signal == SIGINT) {
        printf("\nОстановка сервера...\n");
        close(server_socket);
        exit(0);
    }
}

// Функция для обработки клиентских запросов
void* handle_client(void* arg) {
    int client_socket = *(int*)arg;
    free(arg);

    ssize_t bytes_sent = send(client_socket, server_info, strlen(server_info), 0);
    if (bytes_sent == -1) {
        perror("send");
    } else {
        printf("Информация о сервере отправлена клиенту (%zd байт)\n", bytes_sent);
    }

    char buffer[BUFFER_SIZE];

    while (1) {
        ssize_t bytes_received = recv(client_socket, buffer, sizeof(buffer) - 1, 0);
        if (bytes_received <= 0) {
            break;
        }

        buffer[bytes_received] = '\0';
        printf("Получено: %s\n", buffer);

        if (strncmp(buffer, "ECHO ", 5) == 0) {
            send(client_socket, buffer + 5, bytes_received - 5, 0);
        } else if (strcmp(buffer, "QUIT") == 0) {
            break;
        } else if (strcmp(buffer, "INFO") == 0) {
            send(client_socket, server_info, strlen(server_info), 0);
        } else if (strncmp(buffer, "CD ", 3) == 0) {
            char* new_dir = buffer + 3;
            new_dir[strcspn(new_dir, "\n")] = '\0';
            if (chdir(new_dir) == 0) {
                if (getcwd(root_dir, sizeof(root_dir))) {
                    const char* response = "Каталог изменен\n";
                    send(client_socket, response, strlen(response), 0);
                } else {
                    perror("getcwd");
                }
            } else {
                const char* error = "Каталог не найден\n";
                send(client_socket, error, strlen(error), 0);
            }
        } else if (strcmp(buffer, "LIST") == 0) {
            DIR* dir = opendir(root_dir);
            if (dir) {
                struct dirent* entry;
                char list[BUFFER_SIZE] = "";
                while ((entry = readdir(dir)) != NULL) {
                    if (strcmp(entry->d_name, ".") == 0 || strcmp(entry->d_name, "..") == 0) {
                        continue; // Пропускаем текущий и родительский каталоги
                    }

                    // Получаем информацию о файле
                    struct stat file_stat;
                    char file_path[1300];
                    sprintf(file_path, "%s/%s", root_dir, entry->d_name);
                    if (stat(file_path, &file_stat) == -1) {
                        perror("stat");
                        break;
                    }

                    // Формируем строку для отправки клиенту
                    strcat(list, entry->d_name);
                    if (S_ISDIR(file_stat.st_mode)) {
                        strcat(list, "/"); // Добавляем '/' к каталогам
                    } else if (S_ISLNK(file_stat.st_mode)) {
                        char link[BUFFER_SIZE];
                        ssize_t link_size = readlink(file_path, link, sizeof(link) - 1);
                        if (link_size != -1) {
                            link[link_size] = '\0';
                            if (link[0] == '/') {
                                strcat(list, "-->> "); // Симлинк на симлинк
                            } else {
                                strcat(list, "--> "); // Симлинк на файл
                            }
                            strcat(list, link);
                        }
                    }
                    strcat(list, "\n");
                }
                closedir(dir);

                printf("Hi:%s\n", list);
                // Отправляем список файлов и каталогов клиенту
                if(strlen(list) > 1) {
                    send(client_socket, list, strlen(list), 0);
                } else {
                    send(client_socket, "empty\n", 6, 0);
                }
            } else {
                const char* error = "Не удалось открыть каталог\n";
                send(client_socket, error, strlen(error), 0);
            }
        } else {
            const char* error = "Неизвестная команда\n";
            send(client_socket, error, strlen(error), 0);
        }
    }

    close(client_socket);
    return NULL;
}

int main(int argc, char* argv[]) {
    if (argc != 3) {
        fprintf(stderr, "Использование: %s <корневой_каталог> <порт>\n", argv[0]);
        return 1;
    }

    strncpy(root_dir, argv[1], sizeof(root_dir) - 1);
    root_dir[sizeof(root_dir) - 1] = '\0';
    chdir(root_dir);

    // Загрузка информации о сервере из файла
    FILE* info_file = fopen(INFO_FILE, "r");
    if (info_file == NULL) {
        perror("fopen");
        return 1;
    }
    fread(server_info, sizeof(char), sizeof(server_info) - 1, info_file);
    fclose(info_file);

    int port = atoi(argv[2]);
    server_socket = socket(AF_INET, SOCK_STREAM, 0);
    if (server_socket == -1) {
        perror("socket");
        return 1;
    }

    struct sockaddr_in server_addr;
    memset(&server_addr, 0, sizeof(server_addr));
    server_addr.sin_family = AF_INET;
    server_addr.sin_addr.s_addr = INADDR_ANY;
    server_addr.sin_port = htons(port);

    if (bind(server_socket, (struct sockaddr*)&server_addr, sizeof(server_addr)) == -1) {
        perror("bind");
        close(server_socket);
        return 1;
    }

    if (listen(server_socket, 10) == -1) {
        perror("listen");
        close(server_socket);
        return 1;
    }

    signal(SIGINT, handle_signal);

    printf("Сервер слушает на порту %d\n", port);

    while (1) {
        struct sockaddr_in client_addr;
        socklen_t client_len = sizeof(client_addr);
        int client_socket = accept(server_socket, (struct sockaddr*)&client_addr, &client_len);
        if (client_socket == -1) {
            perror("accept");
            continue;
        }

        int* client_socket_ptr = malloc(sizeof(int));
        if (client_socket_ptr == NULL) {
            perror("malloc");
            close(client_socket);
            continue;
        }
        *client_socket_ptr = client_socket;

        pthread_t thread;
        if (pthread_create(&thread, NULL, handle_client, client_socket_ptr) != 0) {
            perror("pthread_create");
            free(client_socket_ptr);
            close(client_socket);
            continue;
        }
        pthread_detach(thread);
    }

    close(server_socket);
    return 0;
}

