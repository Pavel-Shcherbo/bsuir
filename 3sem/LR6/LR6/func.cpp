#include "func.hpp"
#include <fstream>
#include <iostream>
#include <iomanip>

void printFromBinFile() {
    std::ifstream inputFile(("output.dat"), std::ios::binary);
    
    inputFile.seekg(0, std::ios::end);
    std::streampos fileSize = inputFile.tellg();
    inputFile.seekg(0, std::ios::beg);
    
    char* buffer = new char[fileSize];

    inputFile.read(buffer, fileSize);

    for (std::streamsize i = 0; i < fileSize; i++) {
        std::cout << std::setw(2) << std::setfill('0') << (unsigned int)(unsigned char)buffer[i] << " ";
    }
    std::cout << std::endl;

    delete[] buffer;
}

void printFromTxtFile() {
    std::ifstream inputFileTxt("output.txt");

    std::string line;
    while (std::getline(inputFileTxt, line))
    {
        std::cout << line << "\n";
    }
}
