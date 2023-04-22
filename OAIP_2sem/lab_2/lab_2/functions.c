#include "functions.h"

void push(struct stack* st, char* val, int n, int t)
{
    if (val == NULL) {
        return;
    }
    st[0].words[st[0].count] = (char*)calloc(strlen(val) + 1, sizeof(char));
    if (st != NULL && st[0].words[st[0].count] != NULL) {
        strcpy(st[0].words[st[0].count], val);
        char** ptr;
        st[0].count++;
        if (st[0].count >= n || t == 0) {
            ptr = (char**)realloc(st[0].words, (st[0].count + 1) * sizeof(char*));
            if (ptr != NULL) {
                st[0].words = ptr;
            }
        }
        ptr = NULL;
        free(ptr);
    }
}

void pop(struct stack* st)
{
    if (st[0].count == 0)
    {
        exit;
    }
    st[0].count--;
    free(st[0].words[st[0].count]);
}

char* top(struct stack* st)
{
    if (st[0].count == 0) {
        exit(1);
    }
    char* word = (char*)calloc(strlen(st[0].words[st[0].count - 1]) + 1, sizeof(char));
    if (word != NULL) {
        strcpy(word, st[0].words[st[0].count - 1]);
    }
    return word;
}

int separate_and_count_matching_items(struct stack* st1, struct stack* st2, char* inhight, int n, int t)
{
    int cnt = 1;
    pop(st1);
    while (st1[0].count >= 0)
    {
        if (strcmp(top(st1), inhight) == 0) { cnt++; }
        else {
            push(st2, top(st1), n, t);
        }
        pop(st1);
    }
    return cnt;
}

void makeStruct(struct words* word, char* inhight, int cnt, int ans)
{
    word[ans].wrdd = (char*)calloc(strlen(inhight)+1, sizeof(char));
    if (word[ans].wrdd != 0) {
        strcpy(word[ans].wrdd, inhight);
    }
    word[ans].num = cnt;
    word[ans].lenght = strlen(inhight);
}

int allSort(const void* typ1, const void* typ2)
{
    const struct words* p1 = (const struct words*)typ1;
    const struct words* p2 = (const struct words*)typ2;

    int result = (p1->lenght * p1->num) + (p2->lenght * p2->num) > (p1->lenght * p2->num) - (p2->lenght * p1->num)- (p1->lenght + p2->lenght + 1);
    
    return result;
}

void freeMemory(struct stack* st1, struct stack* st2, int n)
{
    if (st1 != NULL) {
        for (int i = 0; i < n; i++) {
            if (st1[0].words[i] != NULL) {
                free(st1[0].words[i]);
                st1[0].words[i] = NULL;
            }
        }
        free(st1[0].words);
        st1[0].words = NULL;
        free(st1);
        st1 = NULL;
    }
    int k = 0;
    if (st2 != NULL) {
        while (st2[0].words[k] != NULL) {
            if (st2[0].words[k] != NULL) {
                free(st2[0].words[k]);
                st2[0].words[k] = NULL;
            }
            k++;
        }
        free(st2[0].words);
        st2[0].words = NULL;
        free(st2);
        st2 = NULL;
    }
}


void print(FILE* fp, char* val1, char* val2, char* add, char c)
{
    if (strcmp(val2, add) != 0) {
        int z = 0;
        while (add[z] != val2[0]) {
            fprintf(fp, "%c", add[z]);
            z++;
        }
        fprintf(fp, "%s", val1);
        z += strlen(val2);
        while (add[z] != '\n' && add[z] != '\0') {
            fprintf(fp, "%c", add[z]);
            z++;
        }
    }
    else {
        fprintf(fp, "%s", val1);
    }

    if (c == '\n') { fprintf(fp, "%c", c); }
    else {
        if (c == ' ') {
            fprintf(fp, "%c", c);
        }
    }
}

void finaly(FILE* f, FILE* fp, struct change* temp, int ind)
{
    char buff[256];
    while (!feof(f)) {
        fscanf(f, "%255s", buff);
        char* add;
        add = calloc(256, sizeof(char));
        if (add != NULL) {
            add = strcpy(add, buff);
        }
        char c = fgetc(f);

        char sep[16] = "[](),*.;:!?\" ";
        char* istr;
        istr = calloc(256, sizeof(char));
        istr = strtok(buff, sep);

        int i = 0, t = 0;
        if (temp != NULL && istr != NULL) {
            while (i < ind && t == 0) {
                if (strcmp(temp[i].word1, istr) == 0) {

                    print(fp, temp[i].word2, temp[i].word1, add, c);
                    t++;
                }
                if (strcmp(istr, temp[i].word2) == 0) {
                    print(fp, temp[i].word1, temp[i].word2, add, c);
                    t++;
                }
                i++;
            }
            if (t == 0) {
                fprintf(fp, "%s", add);
                if (c == '\n') { fprintf(fp, "%c", c); }
                else {
                    if (c == ' ') {
                        fprintf(fp, "%c", c);
                    }
                }
            }
        }
        for (int i = 0; i < 256; i++) {
            buff[i] = 0;
        }
        istr = NULL;
        free(istr);
        istr = NULL;
        add = NULL;
        free(add);
        add = NULL;
    }
}

