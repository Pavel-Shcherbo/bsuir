#include <stdio.h>
#include <dirent.h>
#include <string.h>
#include <stdlib.h>
#include <locale.h>

struct Options
{
    int list;
    int directories;
    int files;
    int sort;
};

struct Options find_options_and_path(int argc, char* argv[], char* dir_path)
{
    struct Options options = { 0, 0, 0, 0 };
    for(int i = 1; i < argc; i++)
    {
        if(argv[i][0] == '-')
        {
            for(size_t j = 0; j < strlen(argv[i]); j++)
            {
                if(argv[i][j] == 'l') options.list = 1;
                if(argv[i][j] == 'd') options.directories = 1;
                if(argv[i][j] == 'f') options.files = 1;
                if(argv[i][j] == 's') options.sort = 1;
            }
        }
        if(argv[i][0] == '/' || argv[i][0] == '.') strcpy(dir_path, argv[i]);
    }
    if(!options.list && !options.directories && !options.files)
    {
        options.list = 1;
        options.directories = 1;
        options.files = 1;
    }
    return options;
}

int compare(const struct dirent **a, const struct dirent **b) {
    setlocale(LC_COLLATE, "");
    return strcoll((*a)->d_name, (*b)->d_name);
}

void list_directory(const char* path, struct Options options)
{
    struct dirent** file_list;
    int n = scandir(path, &file_list, NULL, options.sort ? compare : NULL);
    
    if(n == -1) {
        printf("Error reading directory: %s\n", path);
        return;
    }

    for (int i = 0; i < n; i++)
    {
        char full_path[256];
        snprintf(full_path, sizeof(full_path), "%s/%s", path, file_list[i]->d_name);

        if(options.directories && file_list[i]->d_type == DT_DIR) printf("%s\n", full_path);
        if(options.files && file_list[i]->d_type == DT_REG) printf("%s\n", full_path);
        if(options.list && file_list[i]->d_type == DT_LNK) printf("%s\n", full_path);

        if(file_list[i]->d_type == DT_DIR && strcmp(file_list[i]->d_name, ".") != 0 && strcmp(file_list[i]->d_name, "..") != 0) {
            list_directory(full_path, options);
        }
    }

    for (int i = 0; i < n; i++) {
        free(file_list[i]);
    }
    free(file_list);
}

int main(int argc, char* argv[])
{
    char directory_path[256] = "./";
    struct Options options = find_options_and_path(argc, argv, directory_path);
    
    list_directory(directory_path, options);
    
    return 0;
}
