#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include "struct.h"
#include "functions.h"


void negative(char* inputFileName, char* outputFileName) {
    FILE* inputFile = fopen(inputFileName, "rb");
    if (!inputFile) {
        printf("Error: could not open input file.\n");
        return;
    }

    BMPFileHeader fileHeader;
    BMPInfoHeader infoHeader;

    fread(&fileHeader, sizeof(BMPFileHeader), 1, inputFile);
    fread(&infoHeader, sizeof(BMPInfoHeader), 1, inputFile);

    if (fileHeader.type != 0x4D42 || infoHeader.bitsPerPixel != 24) {
        printf("Error: invalid file format.\n");
        fclose(inputFile);
        return;
    }

    BMP24BitPixel* pixels = malloc(infoHeader.width * infoHeader.height * sizeof(BMP24BitPixel));
    fread(pixels, sizeof(BMP24BitPixel), infoHeader.width * infoHeader.height, inputFile);

    fclose(inputFile);

    for (int i = 0; i < infoHeader.width * infoHeader.height; i++) {
        pixels[i].color.red = 255 - pixels[i].color.red;
        pixels[i].color.green = 255 - pixels[i].color.green;
        pixels[i].color.blue = 255 - pixels[i].color.blue;
    }

    FILE* outputFile = fopen(outputFileName, "wb");
    if (!outputFile) {
        printf("Error: could not open output file.\n");
        free(pixels);
        return;
    }

    fwrite(&fileHeader, sizeof(BMPFileHeader), 1, outputFile);
    fwrite(&infoHeader, sizeof(BMPInfoHeader), 1, outputFile);
    fwrite(pixels, sizeof(BMP24BitPixel), infoHeader.width * infoHeader.height, outputFile);

    fclose(outputFile);
    free(pixels);
}

void blackAndWhite(char* inputFileName, char* outputFileName) {
    FILE* inputFile = fopen(inputFileName, "rb");
    if (!inputFile) {
        printf("Error: could not open input file.\n");
        return;
    }

    BMPFileHeader fileHeader;
    BMPInfoHeader infoHeader;

    fread(&fileHeader, sizeof(BMPFileHeader), 1, inputFile);
    fread(&infoHeader, sizeof(BMPInfoHeader), 1, inputFile);

    if (fileHeader.type != 0x4D42 || infoHeader.bitsPerPixel != 24) {
        printf("Error: invalid file format.\n");
        fclose(inputFile);
        return;
    }

    BMP24BitPixel* pixels = malloc(infoHeader.width * infoHeader.height * sizeof(BMP24BitPixel));
    fread(pixels, sizeof(BMP24BitPixel), infoHeader.width * infoHeader.height, inputFile);

    fclose(inputFile);

    for (int i = 0; i < infoHeader.width * infoHeader.height; i++) {
        unsigned char gray = (pixels[i].color.red + pixels[i].color.green + pixels[i].color.blue) / 3;
        pixels[i].color.red = gray;
        pixels[i].color.green = gray;
        pixels[i].color.blue = gray;
    }

    FILE* outputFile = fopen(outputFileName, "wb");
    if (!outputFile) {
        printf("Error: could not open output file.\n");
        free(pixels);
        return;
    }

    fwrite(&fileHeader, sizeof(BMPFileHeader), 1, outputFile);
    fwrite(&infoHeader, sizeof(BMPInfoHeader), 1, outputFile);
    fwrite(pixels, sizeof(BMP24BitPixel), infoHeader.width * infoHeader.height, outputFile);

    fclose(outputFile);
    free(pixels);
}

void medianFilter(char* inputFileName, char* outputFileName, int median) {
    FILE* inputFile = fopen(inputFileName, "rb");
    if (!inputFile) {
        printf("Error: could not open input file.\n");
        return;
    }
    BMPFileHeader fileHeader;
    BMPInfoHeader infoHeader;
    
    fread(&fileHeader, sizeof(BMPFileHeader), 1, inputFile);
    fread(&infoHeader, sizeof(BMPInfoHeader), 1, inputFile);
    
    if (fileHeader.type != 0x4D42 || infoHeader.bitsPerPixel != 24) {
        printf("Error: invalid file format.\n");
        fclose(inputFile);
        return;
    }
    
    BMP24BitPixel* pixels = malloc(infoHeader.width * infoHeader.height * sizeof(BMP24BitPixel));
    fread(pixels, sizeof(BMP24BitPixel), infoHeader.width * infoHeader.height, inputFile);
    
    fclose(inputFile);
    
    BMP24BitPixel* newPixels = malloc(infoHeader.width * infoHeader.height * sizeof(BMP24BitPixel));
    
    for (int y = 0; y < infoHeader.height; y++) {
        for (int x = 0; x < infoHeader.width; x++) {
            int count = 0;
            BMPColor colors[median];
            
            for (int dy = -1; dy <= sqrt(median)-2; dy++) {
                for (int dx = -1; dx <= sqrt(median)-2; dx++) {
                    int nx = x + dx;
                    int ny = y + dy;
                    
                    if (nx >= 0 && nx < infoHeader.width && ny >= 0 && ny < infoHeader.height) {
                        colors[count] = pixels[ny * infoHeader.width + nx].color;
                        count++;
                    }
                }
            }
            
            for (int i = 0; i < count - 1; i++) {
                for (int j = i + 1; j < count; j++) {
                    if (colors[i].red > colors[j].red) {
                        BMPColor temp = colors[i];
                        colors[i] = colors[j];
                        colors[j] = temp;
                    }
                }
            }
            
            float medianIndex = (count - 1) / 2.0;
            newPixels[y * infoHeader.width + x].color = colors[(int)medianIndex];
        }
    }
    
    FILE* outputFile = fopen(outputFileName, "wb");
    if (!outputFile) {
        printf("Error: could not open output file.\n");
        free(pixels);
        free(newPixels);
        return;
    }
    
    fwrite(&fileHeader, sizeof(BMPFileHeader), 1, outputFile);
    fwrite(&infoHeader, sizeof(BMPInfoHeader), 1, outputFile);
    fwrite(newPixels, sizeof(BMP24BitPixel), infoHeader.width * infoHeader.height, outputFile);
    
    fclose(outputFile);
    free(pixels);
    free(newPixels);
}


void gammaCorrection(char* inputFileName, char* outputFileName, float gamma) {
    FILE* inputFile = fopen(inputFileName, "rb");
    if (!inputFile) {
        printf("Error: could not open input file.\n");
        return;
    }

    BMPFileHeader fileHeader;
    BMPInfoHeader infoHeader;

    fread(&fileHeader, sizeof(BMPFileHeader), 1, inputFile);
    fread(&infoHeader, sizeof(BMPInfoHeader), 1, inputFile);

    if (fileHeader.type != 0x4D42 || infoHeader.bitsPerPixel != 24) {
        printf("Error: invalid file format.\n");
        fclose(inputFile);
        return;
    }

    BMP24BitPixel* pixels = malloc(infoHeader.width * infoHeader.height * sizeof(BMP24BitPixel));
    fread(pixels, sizeof(BMP24BitPixel), infoHeader.width * infoHeader.height, inputFile);

    fclose(inputFile);

    for (int i = 0; i < infoHeader.width * infoHeader.height; i++) {
        pixels[i].color.red = 255 * pow(pixels[i].color.red / 255.0, gamma);
        pixels[i].color.green = 255 * pow(pixels[i].color.green / 255.0, gamma);
        pixels[i].color.blue = 255 * pow(pixels[i].color.blue / 255.0, gamma);
    }

    FILE* outputFile = fopen(outputFileName, "wb");
    if (!outputFile) {
        printf("Error: could not open output file.\n");
        free(pixels);
        return;
    }

    fwrite(&fileHeader, sizeof(BMPFileHeader), 1, outputFile);
    fwrite(&infoHeader, sizeof(BMPInfoHeader), 1, outputFile);
    fwrite(pixels, sizeof(BMP24BitPixel), infoHeader.width * infoHeader.height, outputFile);

    fclose(outputFile);
    free(pixels);
}


