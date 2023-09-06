#include "Header.h"

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
}

void finaly(FILE* f, FILE* fp, struct change* temp, int ind)
{
    int t = 0;
    char buff[256];
    char c;
    while (!feof(f) && t == 0) {
        char st[2] = "/";
        fscanf(f, "%255s", buff);
        if (strcmp(buff, st) == 0) { t = 1; }
        if (t == 0) {
            if (c != 0) {
                if (c == '\n') { fprintf(fp, "%c%c", c, c); }
                else {
                    if (c == ' ') {
                        fprintf(fp, "%c", c);
                    }
                }
            }
            char* add;
            add = calloc(256, sizeof(char));
            if (add != NULL) {
                add = strcpy(add, buff);
            }
            
            c = fgetc(f);

            char sep[16] = "[](),*.;:!?\" ";
            char* istr;
            istr = calloc(256, sizeof(char));
            istr = strtok(buff, sep);

            int i = 0, z = 0;
            if (temp != NULL && istr != NULL) {
                while (i < ind && z == 0) {
                    if (strcmp(temp[i].word1, istr) == 0) {

                        print(fp, temp[i].word2, temp[i].word1, add, c);
                        z++;
                    }
                    if (strcmp(istr, temp[i].word2) == 0) {
                        print(fp, temp[i].word1, temp[i].word2, add, c);
                        z++;
                    }
                    i++;
                }
                if (z == 0) {
                    fprintf(fp, "%s", add);
                }
            }
        }
    }
}
