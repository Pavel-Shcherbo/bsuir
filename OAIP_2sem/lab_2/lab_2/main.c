#include "functions.h"

int main(void)
{
    struct stack* st1;
    struct stack* st2;
    st1 = (struct stack*)calloc(1, sizeof(struct stack));
    st2 = (struct stack*)calloc(1, sizeof(struct stack));
    if (st1 != NULL)
    {
        st1[0].count = 0;
        st1[0].words = (char**)calloc(1, sizeof(char*));
    }
    if (st2 != NULL)
    {
        st2[0].count = 0;
        st2[0].words = (char**)calloc(1, sizeof(char*));
    }
    int n=0;
    int a = 0;
    FILE* file;
    FILE* fp;
    FILE* f;
    char buffer[256];
    file = fopen("text.txt", "r");
    if (file != NULL)
    {
        while (!feof(file))
        {
            fscanf(file, "%255s", buffer);

            char ignoree[16] = ",.;*:!?()[]\" ";
            char *istr = calloc(256, sizeof(char));
            istr = strtok(buffer, ignoree);
            if (st1 != NULL)
            {
                push(st1, istr, n, a);
                n++;
            }
            istr = NULL;
            free(istr);
            for (int i = 0; i < 256; i++) {
                buffer[i] = 0;
            }
        }
    }
    else {
        printf("try again\n");
        return 0;
    }
    fclose(file);

    struct words* word;
    word = (struct words*)calloc(1, sizeof(struct words));
    int kol = 0;

    if (st1 != NULL)
    {
        int t = st1[0].count;
        st1[0].count = t;
    }

    if (st2 != NULL && st1 != NULL) {
        while (st1[0].count > 0 || st2[0].count > 0)
        {
            int cnt;

            if (st1[0].count >= 0)
            {
                if (st1 != NULL) {
                    st1[0].count--;
                }

                char* inhight;
                inhight = top(st1);
                st2[0].count = 0;
                cnt = separate_and_count_matching_items(st1, st2, inhight,n,a);

                if (word != NULL)
                {
                    makeStruct(word, inhight, cnt, kol);
                    kol++;
                    struct words* ptr;
                    ptr = (struct words*)realloc(word, (kol + 1) * sizeof(struct words));
                    if (ptr != NULL)
                    {
                        word = ptr;
                    }
                    ptr = NULL;
                    free(ptr);
                    ptr = NULL;
                }
                inhight = NULL;
                free(inhight);
                inhight = NULL;
                a++;
            }
            else {
                if (st2[0].count >= 0) {
                    if (st2[0].words != NULL)
                    {
                        if (st2 != NULL) {
                            st2[0].count--;
                        }
                        char* inhight2;
                        inhight2 = top(st2);
                        st1[0].count = 0;
                        cnt = separate_and_count_matching_items(st2, st1, inhight2, n,a);

                        if (word != NULL)
                        {
                            makeStruct(word, inhight2, cnt, kol);
                            kol++;
                            struct words* ptr;
                            ptr = (struct words*)realloc(word, (kol + 1) * sizeof(struct words));
                            if (ptr != NULL)
                            {
                                word = ptr;
                            }
                            ptr = NULL;
                            free(ptr);
                            ptr = NULL;
                        }
                        inhight2 = NULL;
                        free(inhight2);
                        inhight2 = NULL;
                    }
                }
            }
        }
    }

    freeMemory(st1, st2, n);
    
    qsort(word, kol, sizeof(struct words), allSort);

    struct change* temp;
    temp = (struct change*)malloc(1 * sizeof(struct change));

    int ind = 0;
    int s = 0, l = kol - 1;
    if (word != NULL) {
        while (s != l) {
            if (word[l].lenght > word[s].lenght && word[l].num > word[s].num) {
                temp[ind].word1 = (char*)calloc(word[l].lenght + 1, sizeof(char));
                strcpy(temp[ind].word1, word[l].wrdd);

                temp[ind].word2 = (char*)calloc(word[s].lenght + 1, sizeof(char));
                strcpy(temp[ind].word2, word[s].wrdd);

                int free_memory = (word[l].lenght * word[l].num) + (word[s].lenght * word[s].num);
                int need_memory = (word[s].lenght * word[s].num) + (word[l].lenght * word[l].num)+(word[l].lenght + word[s].lenght + 1);

                if (free_memory <= need_memory)
                {
                    l--;
                    continue;
                }

                ind++;
                struct change* ptr;
                ptr = (struct imp*)realloc(temp, (ind + 1) * sizeof(struct change));
                if (ptr != NULL)
                {
                    temp = ptr;
                }
                s++;
                ptr = NULL;
                free(ptr);
                ptr = NULL;
            }
            l--;
        }
    }


    f = fopen("text.txt", "r");
    fp = fopen("ziper.txt", "w");

    if (f != NULL) {
        finaly(f, fp, temp, ind);
        fclose(f);
    }
    else {
        return 0;
    }
    fprintf(fp, "\n/\n");
    for (int i = 0; i < ind; i++) {
        fprintf(fp, "%s ", temp[i].word1);
        fprintf(fp, "%s ", temp[i].word2);
    }
    fclose(f);
    fclose(fp);
    free(word);
    word = NULL;
    free(temp);
    temp = NULL;
    printf("DONEE\n");
    return 0;
}

