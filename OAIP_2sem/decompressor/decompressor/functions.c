#include"functions.h"

void words_output(words** array, const int* size) {
    for (int i = 0; i < (*size); i++) {
        printf("Word1: %s\n", (*array)[i].change_word);
        printf("Word2: %s\n", (*array)[i].changed_word);
    }
}

void push_words_in_array(words word, words** array, int* size) {
    (*size)++;
    if ((*array) == NULL) {
        (*array) = (words*)malloc((*size) * sizeof(word));
    }
    else {
        (*array) = (words*)realloc((*array), (*size) * sizeof(word));
    }
    (*array)[(*size) - 1] = word;
}

int if_letter(char symbol) {
    const char lowercase_a = 'a';
    const char uppercase_a = 'A';
    const char lowercase_z = 'z';
    const char uppercase_z = 'Z';
    const int is_lowercase = (symbol >= lowercase_a && symbol <= lowercase_z);
    const int is_uppercase = (symbol >= uppercase_a && symbol <= uppercase_z);
    return (is_lowercase || is_uppercase);
}


int find_word(char* string, int* index) {
    while (string[*index] != '\0') {
        if (*index == 0 && if_letter(string[*index])) {
            return *index;
        }
        else if (string[*index] == '-' && if_letter(string[*index-1]) && if_letter(string[*index+1])) {
        }
        else if (if_letter(string[*index]) && !if_letter(string[*index-1])) {
            return *index;
        }
        (*index)++;
    }
    return -1;
}

char* take_word(char* str, int start) {
    int index = 0;
    char* buf = (char*)calloc(256, 1);
    while (str[start] != ' ' && str[start] != '\0' && str[start] != '\n' && str[start] != ',' && str[start] != ':' && str[start] != ';' && str[start] != '.' && str[start] != '\"' && str[start] != '!' && str[start] != '?' && str[start] != ')') {
        buf[index] = str[start];
        start++;
        index++;
    }
    buf = (char*)realloc(buf, strlen(buf) + 1);
    return buf;
}

char* word_from_glossary(words** array, char* word, int* size) {
    char* new_word = NULL;
    for (int i = 0; i < (*size); i++) {
        if (!strcmp(word, (*array)[i].change_word)) {
            new_word = (*array)[i].changed_word;
            break;
        }
        if (!strcmp(word, (*array)[i].changed_word)) {
            new_word = (*array)[i].change_word;
            break;
        }
    }
    return new_word;
}

void push_glossary(words** array, char* str, int* size) {
    words word;
    char* word1 = (char*)calloc(256, 1);
    char* word2 = (char*)calloc(256, 1);
    int i = 0, j = 0;
    while (str[i] != '/') {
        word1[i] = str[i];
        i++;
    }
    i++;
    while (str[i] != '\n') {
        word2[j] = str[i];
        i++;
        j++;
    }
    word1 = (char*)realloc(word1, (strlen(word1) + 1));
    word2 = (char*)realloc(word2, (strlen(word2) + 1));
    word.change_word = word1;
    word.changed_word = word2;
    push_words_in_array(word, array, size);
}

void insert_from_glossary(char** str, char* word, char* new_word, int* index) {
    if (new_word == NULL) {
        return;
    }
    int different = strlen(word) - strlen(new_word), count = 0, start = (*index), second_start = 0;
    if (different > 0) {
        while (count != strlen(new_word)) {
            (*str)[start] = new_word[count];
            start++;
            count++;
        }
        second_start = start;
        for (int i = 0; i < different; i++) {
            while ((*str)[start] != '\0') {
                (*str)[start] = (*str)[start + 1];
                start++;
            }
            start = second_start;
        }
        (*index) += strlen(new_word) - 1;
    }
    else {
        different = strlen(new_word) - strlen(word);
        start = (strlen((*str)) + 1);
        for (int i = 0; i < different; i++) {
            while (start != (*index)) {
                (*str)[start] = (*str)[start - 1];
                start--;
            }
            start = strlen((*str)) + 1;
        }
        start = (*index);
        while (count != strlen(new_word)) {
            (*str)[start] = new_word[count];
            start++;
            count++;
        }
        (*index) += strlen(new_word) - 1;
    }
}

void puts_file(char* str) {
    FILE* file = NULL;
    file = fopen("/Users/pavelshcherbo/Desktop/compress/decompress.txt", "a");
    if (file == NULL) {
        printf("Error opening file\n");
        exit(1);
    }
    fputs(str, file);
    fclose(file);
}

void decompress(words** array, int* size) {
    FILE* file = NULL;
    char* buf = (char*)calloc(4096, 1);
    char* word = NULL;
    char* new_word = NULL;
    int index = 0, start = 0;
    file = fopen("/Users/pavelshcherbo/Desktop/compress/compress.txt", "r");
    if (file == NULL) {
        printf("Error opening file\n");
        exit(1);
    }

    fgets(buf, 256, file);
    while (buf[0] != '$') {
        push_glossary(array, buf, size);
        fgets(buf, 256, file);
    }
    fgets(buf, 256, file);
    while (!feof(file)) {
        while ((start = find_word(buf, &index)) != -1) {
            word = take_word(buf, start);
            new_word = word_from_glossary(array, word, size);
            insert_from_glossary(&buf, word, new_word, &index);
            index++;
        }
        puts_file(buf);
        index = 0;
        fgets(buf, 4096, file);
    }
    
    fclose(file);
    free(buf);
    free(word);
    free(new_word);
}
