#include"functions.h"
#include"struct.h"
#include"stack.h"

int main(void);

int main(void) {
    stack* head = NULL;
    words* array = NULL;
    glossary* arr = NULL;
    int size_of_words = 0;
    int size_of_glossary = 0;
    words_for_glossary(&head, &array, &arr, &size_of_words, &size_of_glossary);
    insert_glossary(&arr, &size_of_glossary);
    compressor();
    free_stack(&head);
    free(array);
    free(arr);
    return 0;
}
