#include"functions.h"

#define MAX_BUF 4096
#define MIN_BUF 256


void push_node(stack** head, char* word, long long size) {
    stack* tmp = malloc(sizeof(stack));
    if (tmp == NULL) {
        return;
    }
    (*tmp).next = (*head);
    (*tmp).word = word;
    (*tmp).size = size;
    (*head) = tmp;
}


stack* pop_node(stack** head) {
    if (!(*head)) {
        return NULL;
    }
    if ((*head)->word) {
        free((*head)->word);
    }
    stack* buf = (*head)->next;
    free((*head));
    return buf;
}

void free_stack(stack** head) {
    while ((*head)) {
        (*head) = pop_node(head);
    }
}


int compare_words(const void* word_A, const void* word_B) {
    const words* first_word = (const words*)word_A;
    const words* second_word = (const words*)word_B;
    if ((*first_word).size > (*second_word).size) {
        return 1;
    }
    else if ((*first_word).size < (*second_word).size) {
        return -1;
    }
    else {
        return 0;
    }
}

void output(words** array, const int* size) {
    for (int i = 0; i < (*size); i++) {
        printf("Word: %s\n", (*array)[i].word);
        printf("Size: %d\n", (*array)[i].size);
    }
}

void glossary_output(    glossary** array, const int* size) {
    for (int i = 0; i < (*size); i++) {
        printf("Word A: %s\n", (*array)[i].change_word);
        printf("Word B: %s\n", (*array)[i].changed_word);
    }
}

void insert_to_array(words lap, words** array, int* size) {
    (*size)++;
    if ((*array) == NULL) {
        (*array) = (words*)malloc((*size) * sizeof(lap));
    }
    else {
        (*array) = (words*)realloc((*array), (*size) * sizeof(lap));
    }
    (*array)[(*size) - 1] = lap;
}

void push_dictionary_in_array(glossary word, glossary** array, int* size) {
    (*size)++;
    if ((*array) == NULL) {
        (*array) = (glossary*)malloc((*size) * sizeof(word));
    }
    else {
        (*array) = (glossary*)realloc((*array), (*size) * sizeof(word));
    }
    (*array)[(*size) - 1] = word;
}

char* take_word_after_slash(char* str, int index) {
    char* word = (char*)calloc(MIN_BUF, 1);
    int count = 0;
    while (str[index] != '\n') {
        word[count] = str[index];
        index++;
        count++;
    }
    word = (char*)realloc(word, (strlen(word) + 1));
    return word;
}

char* take_word_up_slash(char* str) {
    char* word = (char*)calloc(MIN_BUF, 1);
    int count = 0;
    while (str[count] != '/') {
        word[count] = str[count];
        count++;
    }
    word = (char*)realloc(word, (strlen(word) + 1));
    return word;
}

char* find_word_in_glossary(char* str, char* ptr_word) {
    int i = 0, j = 0, k = 0;
    char* word = NULL;
    for (i = 0; str[i] != '\0'; i++) {
        for (j = i, k = 0; ptr_word[k] != '\0' && str[j] == ptr_word[k]; j++, k++);
        if (ptr_word[k] == '\0' && ((i == 0 && str[j] == '/') || (str[i - 1] == '/' && str[j] == '\n'))) {
            if (str[i] == str[0] && str[j] == '/') {
                word = take_word_after_slash(str, (j + 1));
                break;
            }
            else {
                word = take_word_up_slash(str);
                break;
            }
        }
    }
    return word;
}

int count_word(char* str, char* ptr, int* index) {
    int counter = 0;

    for (int i = 0; str[i] != '\0'; ++i) {
        if (i < (*index)) {
            continue;
        }

        int j = i;
        int k = 0;
        while (ptr[k] != '\0' && str[j] == ptr[k]) {
            ++j;
            ++k;
        }

        if (ptr[k] == '\0' && (i == 0 || str[i - 1] == ' ' || str[i - 1] == '\"' || str[i - 1] == '\'') && (str[j] == ' ' || str[j] == '\0')) {
            ++counter;
        }
    }

    return counter > 0 ? counter : 0;
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
    char* buf = (char*)calloc(MIN_BUF, 1);
    while (str[start] != '\0') {
        if (str[start] == ' ' || str[start] == '\n' || str[start] == ',' || str[start] == ':' || str[start] == ';' || str[start] == '.' || str[start] == '\"' || str[start] == '!' || str[start] == '?' || str[start] == ')') {
            buf[index] = '\0';
            buf = (char*)realloc(buf, strlen(buf) + 1);
            return buf;
        }
        buf[index] = str[start];
        start++;
        index++;
    }
    buf[index] = '\0';
    buf = (char*)realloc(buf, strlen(buf) + 1);
    return buf;
}

stack* check_stack(stack* head, char* word, int size_of_word) {
    stack* p = head;
    while (p) {
        if (!strcmp(word, p->word)) {
            p->size += size_of_word;
            return head;
        }
        p = p->next;
    }
    return NULL;
}

void check_words(stack** head, words** array, int* size, char* word, int counter) {
    stack* check = NULL;
    long long size_of_word = strlen(word);

    if (size_of_word < 2) {
        return;
    }

    if (counter > 0) {
        size_of_word *= counter;
    }

    if (counter == 0) {
        check = check_stack(*head, word, size_of_word);
    } else {
        check = check_stack(*head, word, 0);
    }

    if (check != NULL) {
        *head = check;
        return;
    }

    push_node(head, word, (size_of_word + 1));
}


void words_for_change(words** array, glossary** arr, int* size_of_words, int* size_of_dictionary) {
        glossary word;
    int start = ((*size_of_words) - 1);
    int end = 0;
    while (strlen((*array)[end].word) <= 4) {
        if (strlen((*array)[start].word) > strlen((*array)[end].word)) {
            if ((*array)[start].size > (*array)[end].size) {
                word.change_word = (*array)[start].word;
                word.changed_word = (*array)[end].word;
                push_dictionary_in_array(word, arr, size_of_dictionary);
                start--;
                end++;
            }
        }
        if (strlen((*array)[start].word) <= strlen((*array)[end].word)) {
            start--;
        }
    }
    glossary_output(arr, size_of_dictionary);
}

void transfer_words(stack** head, words** array, int* size_of_words) {
    words buf;
    while ((*head)) {
        buf.word = (*head)->word;
        buf.size = (*head)->size;
        insert_to_array(buf, array, size_of_words);
        (*head) = (*head)->next;
    }
}

void words_for_glossary(stack** head, words** array, glossary** arr, int* size_of_words, int* size_of_dictionary) {
    FILE* file = NULL;
    char* word = NULL;
    char* buf = (char*)calloc(MIN_BUF, 1);
    int index = 0, start = 0, counter = 0;
    file = fopen("/Users/pavelshcherbo/Desktop/compress/Zip.txt", "r");
    if (file == NULL) {
        printf("Error opening file\n");
        exit(1);
    }
    fgets(buf, MIN_BUF, file);
    while (!feof(file)) {
        while ((start = find_word(buf, &index)) != -1) {
            word = take_word(buf, start);
            counter = count_word(buf, word, &index);
            check_words(head, array, size_of_words, word, counter);
            index++;
        }
        index = 0;
        fgets(buf, MIN_BUF, file);
    }
    
    fclose(file);

    free(buf);
    free(word);
    transfer_words(head, array, size_of_words);
    qsort((*array), (*size_of_words), sizeof(words), compare_words);
    output(array, size_of_words);
    words_for_change(array, arr, size_of_words, size_of_dictionary);
}

void insert_glossary(glossary** arr, int* size_of_dictionary) {
    FILE* file = NULL;
    file = fopen("/Users/pavelshcherbo/Desktop/compress/compress.txt", "w");
    if (file == NULL) {
        printf("Error opening file\n");
        exit(1);
    }

    for (int i = 0; i < (*size_of_dictionary); i++) {
        fprintf(file, "%s", (*arr)[i].change_word);
        fprintf(file, "%c", '/');
        fprintf(file, "%s\n", (*arr)[i].changed_word);
    }
    fprintf(file, "%c\n", '$');
    
    fclose(file);
}

char* word_from_glossary(char* word) {
    FILE* file = NULL;
    char* buf = (char*)calloc(1024, 1);
    char* new_word = NULL;

    file = fopen("/Users/pavelshcherbo/Desktop/compress/compress.txt", "r");
    if (file == NULL) {
        printf("Error opening file\n");
        exit(1);
    }

    fgets(buf, 1024, file);
    while (buf[0] != '$') {
        if ((new_word = find_word_in_glossary(buf, word)) != NULL) {
            break;
        }
        fgets(buf, 1024, file);
    }
    
    fclose(file);

    free(buf);
    return new_word;
}

void insert_from_glossary(char** str, char* word, char* new_word, int* index) {
    if (new_word == NULL) {
        return;
    }
    int difference = strlen(word) - strlen(new_word), count = 0, start = (*index), second_start = 0;
    if (difference > 0) {
        while (count != strlen(new_word)) {
            (*str)[start] = new_word[count];
            start++;
            count++;
        }
        second_start = start;
        for (int i = 0; i < difference; i++) {
            while ((*str)[start] != '\0') {
                (*str)[start] = (*str)[start + 1];
                start++;
            }
            start = second_start;
        }
        (*index) += strlen(new_word) - 1;
    }
    else {
        difference = strlen(new_word) - strlen(word);
        start = (strlen((*str)) + 1);
        for (int i = 0; i < difference; i++) {
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
    file = fopen("/Users/pavelshcherbo/Desktop/compress/compress.txt", "a");
    if (file == NULL) {
        printf("Error opening file\n");
        exit(1);
    }
    fputs(str, file);

    fclose(file);
}

void compressor(void) {
    FILE* file = NULL;
    char* word = NULL;
    char* new_word = NULL;
    char* buf = (char*)calloc(MAX_BUF, 1);
    int index = 0, start = 0;
    file = fopen("/Users/pavelshcherbo/Desktop/compress/Zip.txt", "r");
    if (file == NULL) {
        printf("Error opening file\n");
        exit(1);
    }

    fgets(buf, MAX_BUF, file);
    while (!feof(file)) {
        while ((start = find_word(buf, &index)) != -1) {
            word = take_word(buf, start);
            new_word = word_from_glossary(word);
            insert_from_glossary(&buf, word, new_word, &index);
            index++;
        }
        puts_file(buf);
        index = 0;
        fgets(buf, MAX_BUF, file);
    }

    fclose(file);
    free(buf);
    free(word);
    free(new_word);
}
