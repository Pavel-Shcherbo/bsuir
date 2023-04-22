#pragma once

#include"struct.h"

#include<stdio.h>
#include<stdlib.h>
#include<string.h>


void push_node(stack** head, char* word, long long size);
stack* pop_node(stack** head);
void free_stack(stack** head);

int compare_words(const void* word_A, const void* word_B);
void output(words** array, const int* size);
void glossary_output( glossary** array, const int* size);
void insert_to_array(words lap, words** array, int* size);
void push_dictionary_in_array(glossary word,glossary** array, int* size);
char* take_word_after_slash(char* str, int index);
char* take_word_up_slash(char* str);
char* find_word_in_glossary(char* str, char* ptr_word);
int count_word(char* str, char* ptr, int* index);
int if_letter(char symbol);
int find_word(char* string, int* index);
char* take_word(char* str, int start);
void check_words(stack** head, words** array, int* size, char* word, int counter);
void words_for_change(words** array,glossary** arr, int* size_of_words, int* size_of_dictionary);
void words_for_glossary(stack** head, words** array,glossary** arr, int* size_of_words, int* size_of_dictionary);
void insert_glossary(glossary** arr, int* size_of_dictionary);
char* word_from_glossary(char* word);
void insert_from_glossary(char** str, char* word, char* new_word, int* index);
void puts_file(char* str);
void compressor(void);
