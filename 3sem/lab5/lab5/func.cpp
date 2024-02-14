#include "func.hpp"
#include "Exeptions.hpp"
void printMenu()
{
    std::cout << "1.Examination exeption of Card\n";
    std::cout << "2.Examination exeption of Date(format: 00.00.0000)";
}


void validation(int* size, int max) {
    while (true) {
        if (std::cin >> *size && *size > 0 && *size <= max) {
            break;
        } else {
            throw menuException("Error menu");
        }
    }
    
}

void checkCard(char* card) {
  if (strlen(card) != 16) {
      throw cardException("Error card");
  }
  for (int i = 0; i < strlen(card); i++) {
    if (!isdigit(card[i])) {
        throw cardException("Error card");
    }
  }
}

void checkDate(char* date) {
    if (strlen(date) != 10) {
        throw dateException("Error date");
    }
    for (int i = 0; i < strlen(date); i++) {
      if(i == 2 || i == 5) {
          if(date[i] != '.')
          {
             throw dateException("Eror date");
          }
          i++;
        }
        
      if (!isdigit(date[i])) {
          std::cout << date[i] << i;
          throw dateException("Error date");
      }
    }
    std::string day = {date[0], date[1]};
    if(std::stoi(day) > 31) throw dateException("Error date");
    std::string month = {date[3], date[4]};
    if(std::stoi(month) > 12) throw dateException("Error date");
    if(std::stoi(month) == 2 && std::stoi(day) > 28) throw dateException("Error date");
}
