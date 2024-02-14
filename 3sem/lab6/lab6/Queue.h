#include <iostream>
#include <string>
#include "Queue.hpp"
#include "func.hpp"
class Vehicle {
protected:
    std::string brand;
    int year;

public:
    Vehicle(){}
    Vehicle(const std::string& brand, int year) : brand(brand), year(year) {}

    std::string getBrand() const {
        return brand;
    }

    void setBrand(const std::string& newBrand) {
        brand = newBrand;
    }

    int getYear() const {
        return year;
    }

    void setYear(int newYear) {
        year = newYear;
    }
};

class Freight : public Vehicle {
protected:
    int carryingCapacity;

public:
    Freight(){}
    Freight(const std::string& brand, int year, int carryingCapacity)
        : Vehicle(brand, year), carryingCapacity(carryingCapacity) {}
    int getCarryingCapacity() const {
        return carryingCapacity;
    }
};

class DumpTruck : public Freight {
public:
    DumpTruck(){}
    DumpTruck(std::string& brand, int year, int carryingCapacity): Freight(brand, year, carryingCapacity) {}
    friend std::ostream& operator<<(std::ostream& output, const DumpTruck &dumpTruck)
    {
        output << "Brand: " << dumpTruck.brand << std::endl;
        output << "Year: " << dumpTruck.year << std::endl;
        output << "Carrying capacity (kg): " << dumpTruck.carryingCapacity;
        return output;
    }
    
    friend std::ostream& operator>>(std::ostream& output, const DumpTruck &dumpTruck)
    {
        output.write(dumpTruck.brand.data(), dumpTruck.brand.size());
        output.write(reinterpret_cast<const char*>(&dumpTruck.year), sizeof(int));
        output.write(reinterpret_cast<const char*>(&dumpTruck.carryingCapacity), sizeof(int));

        return output;
    }
};

int main() {
    std::string brand;
    int year;
    int carryingCapacity;
    
    std::cout << "Enter DumpTruck brand: ";
    std::cin >> brand;
    std::cout << "Enter DumpTruck year: ";
    std::cin >> year;
    std::cout << "Enter DumpTruck carrying capacity (kg): ";
    std::cin >> carryingCapacity;

    DumpTruck dumpTruck(brand, year, carryingCapacity);
    Queue<DumpTruck> queueDumpTruck;
    queueDumpTruck.push(dumpTruck);
    queueDumpTruck.pushFile();
    std::cout << "\nBinary File:\n";
    printFromBinFile();
    std::cout << "\nText File:\n";
    printFromTxtFile();

    return 0;
}


