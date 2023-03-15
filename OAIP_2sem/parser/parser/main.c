#include <stdio.h>
#include <string.h>
#include <stdlib.h>

typedef struct {
    int productCode;
    char* name;
    double price;
} VacuumCleaner;

void memory_allocate(int size, char*** string) {

  (*string) = (char**)calloc(size, sizeof(char*));
  for (int i = 0; i < size; i++) {

    (*string)[i] = (char*)calloc(1, 256);
  }
}

void memory_realloc(int size, char*** string) {

  (*string) = (char**)realloc((*string), size * sizeof(char*));
  for (int i = 0; i < size; i++) {

    (*string)[i] = (char*)realloc((*string)[i], (strlen((*string)[i]) + 1));
  }
}

void push_laptop_in_array(VacuumCleaner cleaner, VacuumCleaner** array, int* size) {
  (*size)++;
  if ((*array) == NULL) {
    (*array) = (VacuumCleaner*)malloc((*size) * sizeof(cleaner));
  }
  else {
    (*array) = (VacuumCleaner*)realloc((*array), (*size) * sizeof(cleaner));
  }
  (*array)[(*size) - 1] = cleaner;
}

int find_pattern(char* str_with_ptr, char ptr[]) {
  int i, j, k;
  for (i = 0; str_with_ptr[i] != '\0'; i++) {
    for (j = i, k = 0; ptr[k] != '\0' && str_with_ptr[j] == ptr[k]; j++, k++)
      ;
    if (ptr[k] == '\0') {
      return j;
    }
  }
  return 0;
}

int len_of_ptr(char* str_with_ptr, int* index, int shift) {
  int fl = 0;
  while (str_with_ptr[(*index)] != '<') {
    (*index)++;
    fl++;
  }
  if (fl == shift) {
    return 1;
  }
  else return 0;
}

int find_pattern_for_fields(char* str_with_ptr, char ptr[], int shift_for_len, int shift_for_pos) {
  int i, j, k, pos;
  for (i = 0; str_with_ptr[i] != '\0'; i++) {
    for (j = i, k = 0; ptr[k] != '\0' && str_with_ptr[j] == ptr[k]; j++, k++)
      ;
    if (ptr[k] == '\0') {
      if (len_of_ptr(str_with_ptr, &j, shift_for_len)) {
        pos = j + shift_for_pos;
        return pos;
      }
    }
  }
  return 0;
}

char* take_ptr(char* buf, int pos) {
  int i = 0, size = 2;
  char* tmp = (char*)malloc(size);
  while (buf[pos] != '<') {
    tmp[i] = buf[pos];
    pos++;
    i++;
    if (i == size - 1) {
      size *= 2;
      tmp = (char*)realloc(tmp, size);
    }
  }
  tmp[i] = '\0';
  return tmp;
}


char* take_ptr_cost(char* buf, int pos) {
  int i = 0;
  char* tmp = (char*)calloc(1, 1);
  while (buf[pos] != '\"') {
    tmp[i] = buf[pos];
    pos++;
    i++;
    tmp = (char*)realloc(tmp, (i + 2));
  }
  tmp[i] = '\0';
  return tmp;
}

int* parse_ram(VacuumCleaner** array, FILE* file) {
  int pos = 0, i = 0;
  char* buf = (char*)calloc(5000, 1);
  char ptr[] = "<td class='result__attr_var  cr-result__attr_odd'>";
  int* arr = (int*)calloc(100, sizeof(int));

  file = fopen("vacuum.txt", "r");

  fgets(buf, 5000, file);
  while (!feof(file)) {
    if ((pos = find_pattern_for_fields(buf, ptr, 46, 55)) != 0) {
      arr[i] = atoi(take_ptr(buf, pos));
      i++;
    }
    fgets(buf, 5000, file);
  }
  arr = (int*)realloc(arr, (i + 1) * sizeof(int));

  fclose(file);
  free(buf);
  return arr;
}

char** parse_name(VacuumCleaner** array, FILE* file, int* size) {
  int pos = 0;
  char* buf = (char*)calloc(5000, 1);
  char** arr = NULL;
  char ptr[] = "<span class=\"result__name\">";
  int max_size = 100;
  arr = (char**)malloc(max_size * sizeof(char*));
  for (int i = 0; i < max_size; i++) {
    arr[i] = (char*)malloc(256);
  }

  file = fopen("vacuum.txt", "r");

  fgets(buf, 5000, file);
  while (!feof(file)) {
    if ((pos = find_pattern(buf, ptr)) != 0) {
      strcpy(arr[*size], take_ptr(buf, pos + 15));
      (*size)++;
      if (*size == max_size) {
        max_size *= 2;
        arr = (char**)realloc(arr, max_size * sizeof(char*));
        for (int i = (*size); i < max_size; i++) {
          arr[i] = (char*)malloc(256);
        }
      }
    }
    fgets(buf, 5000, file);
  }

  arr = (char**)realloc(arr, (*size) * sizeof(char*));
  fclose(file);
  free(buf);
  return arr;
}


int* parse_ssd(VacuumCleaner** array, FILE* file) {
  int pos = 0, i = 0;
  char* buf = (char*)calloc(5000, 1);
  char ptr[] = "<td class='result__attr_var '>";
  int* arr = (int*)calloc(100, sizeof(int));

  file = fopen("vacuum.txt", "r");

  fgets(buf, 5000, file);
  while (!feof(file)) {
    if ((pos = find_pattern_for_fields(buf, ptr, 18, 35)) != 0) {
      arr[i] = atoi(take_ptr(buf, pos));
      i++;
    }
    fgets(buf, 5000, file);
  }
  arr = (int*)realloc(arr, (i + 1) * sizeof(int));

  fclose(file);
  free(buf);
  return arr;
}


int* parse_cost(VacuumCleaner** array, FILE* file) {
    int pos = 0, i = 0;
    char* buf = (char*)calloc(5000, 1);
    char ptr[] = "data-labels=\"\" content=\"";
    int* arr = (int*)calloc(100, sizeof(int));
    
   file = fopen("vacuum.txt", "r");
    
    
    fgets(buf, 5000, file);
    while (!feof(file)) {
      if ((pos = find_pattern(buf, ptr)) != 0) {
        arr[i] = atoi(take_ptr_cost(buf, pos));
        i++;
      }
      fgets(buf, 5000, file);
    }
    arr = (int*)realloc(arr, (i + 1) * sizeof(int));

    fclose(file);
    free(buf);
    return arr;
  }

int calculate_size(VacuumCleaner** array) {
  FILE* file = NULL;
  int size_for_parse = 0;
  char* buf = (char*)calloc(5000, 1);
  char ptr[] = "<span class=\"result__name\">";
  file = fopen("vacum.txt", "r");
  fgets(buf, 5000, file);
  while (!feof(file)) {
    if (find_pattern(buf, ptr) != 0) {
      size_for_parse++;
    }
    fgets(buf, 5000, file);
  }
  fclose(file);
  free(buf);
  return size_for_parse;
}

  void memorystr(char** str) {
    (*str) = (char*)malloc(255);
  }

void output(VacuumCleaner** array, const int* size) {
    for (int i = 0; i < (*size); i++) {
        printf("\n------- LAPTOP -------\n");
        printf("%s\n", (*array)[i].name);
        printf("----- PARAMETERS -----\n");
        //printf("Cost: %d$\n", (*array)[i].cost);
       // printf("RAM: %d GB\n", (*array)[i].ram_mem);
       // printf("SSD: %d GB\n", (*array)[i].ssd_mem);
        printf("----------------------\n");
    }
}

  void parse(VacuumCleaner** array, FILE* file, int* size) {
    char** name = parse_name(array, file, size);
   // int* arr1 = parse_cost(array, file);
    //int* arr2 = parse_ram(array, file);
    //int* arr3 = parse_ssd(array, file);
    for (int i = 0; i < (*size); i++) {
      memorystr(&(*array)[i].name);
      (*array)[i].name = name[i];
   //   (*array)[i].cost = arr1[i];
     // (*array)[i].ram_mem = arr2[i];
      //(*array)[i].ssd_mem = arr3[i];
    }
    output(array, size);
  }

VacuumCleaner* mem_for_struct_array(int size) {
    VacuumCleaner* tmp = (VacuumCleaner*)malloc(size * sizeof(VacuumCleaner));
  return tmp;
}

void output_array(char** array){
    for(int i = 0; i < 30;i++){
        printf("%s", array[i]);
    }
}

void memory(char** string) {
    string = (char**)calloc(30,sizeof(char*));
    for (int i = 0; i < 30; i++) {
        string[i] = (char*)calloc(100,1);
    }
}

int main() {
  // parser works only with 21vek.by laptop catalog
    FILE* file = NULL;
    VacuumCleaner* array = NULL;
    char** aarray = NULL;
    memory(aarray);
  int size = 30, size_for_parse = 0;
  size_for_parse = calculate_size(&array);
  array = mem_for_struct_array(size_for_parse);
    aarray = parse_name(&array,file, &size);
    output_array(aarray);
    free(array);
  return 0;
}
