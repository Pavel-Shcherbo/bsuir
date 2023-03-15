//
//  main.c
//  archive
//
//  Created by Pavel Shcherbo on 7.03.23.
//

#include <stdio.h>

int main(int argc, const char * argv[]) {
    int num = 0;
    FILE *fptr;
    fptr = fopen("/Users/pavelshcherbo/Desktop/bsuir/OAIP_2sem/archive/archive/test_data.txt","r");
    
    if(fptr == NULL)
    {
       printf("Error!");
        return 0;
    }

    printf("Enter num: ");
    scanf("%d",&num);

    fprintf(fptr,"%d",num);
    fclose(fptr);
    return 0;
}
