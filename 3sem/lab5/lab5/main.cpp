#include <iostream>
#include "func.hpp"
#include "Exeptions.hpp"
int main() {
    
    
    printMenu();
    int choice;
    std::cout << "\nChoice: ";
    try {
        validation(&choice, 2);
    } catch (Exceptions& ex) {
        ex.show();
        exit(-1);
    }
    
    if(choice == 1)
    {
        char card[17];
        std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
        std::cin.getline(card, sizeof(card));
        try {
            checkCard(card);
        } catch (Exceptions& ex) {
            ex.show();
            return -1;
        }
    }
    if(choice == 2)
    {
        char date[11];
        std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
        std::cin.getline(date, sizeof(date));
        try {
            checkDate(date);
        } catch (Exceptions& ex) {
            ex.show();
            return -1;
        }
        
    }
    
    std::cout << "Entered correctly!\n";
    return 0;
}
