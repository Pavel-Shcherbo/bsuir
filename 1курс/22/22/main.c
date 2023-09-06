#include "Header.h"

int main(void)
{
    
    char buff[256];
    struct change* temp;
    temp = (struct change*)malloc(1 * sizeof(struct change));
    int ind = 0;
    FILE* stream;
    FILE* fp;
    FILE* f;
    stream = fopen("ziper.txt", "r");
    char st[2] = "/";
    if (stream != NULL) {
        int t = 0;
        while (!feof(stream) && t==0) {
            fscanf(stream, "%255s", buff);
            if (strcmp(buff, st) == 0) {
                 t = 1;
            }
            for (int tt = 0; tt < 256; tt++) {
                buff[tt] = 0;
            }
        }
        if (t == 1) {
            while (!feof(stream)) {
                fscanf(stream, "%255s", buff);
                temp[ind].word2 = (char*)calloc(strlen(buff)+1, sizeof(char));
                if (temp[ind].word2 != NULL) {
                    temp[ind].word2 = strcpy(temp[ind].word2, buff);
                }

                fscanf(stream, "%255s", buff);
                temp[ind].word1 = (char*)calloc(strlen(buff)+1, sizeof(char));
                if (temp[ind].word1 != NULL) {
                    temp[ind].word1 = strcpy(temp[ind].word1, buff);
                }
                ind++;
                struct change* ptr;
                ptr = (struct change*)realloc(temp, (ind + 1) * sizeof(struct change));
                if (ptr != NULL) {
                    temp = ptr;
                }
                ptr = NULL;
                free(ptr);
                ptr = NULL;
                for (int i = 0; i < 256; i++) {
                    buff[i] = 0;
                }
            }
        }
    }
    else {
        printf("try again\n");
        return 0;
    }
    fclose(stream);

    f = fopen("ziper.txt", "r");
    fp = fopen("unzip.txt", "w");

    if (f != NULL) {
        finaly(f, fp, temp, ind);
    }
    else { return 0; }
    fclose(f);
    fclose(fp);
    free(temp);
    temp = NULL;
    printf("DONEE\n");
    return 0;
}
