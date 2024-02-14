#include <iostream>
#include <string>

class Vehicle {
protected:
    std::string brand;
    int year;

public:
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

    void honkHorn() {
        std::cout << "Honk honk!" << std::endl;
    }
};

class EngineType {
public:
    enum Type {
        Gasoline,
        Diesel,
        Electric,
    };
};

class Passenger :  public Vehicle {
protected:
    int passengerCount;

public:
    Passenger(const std::string& brand, int year, int passengerCount)
        : Vehicle(brand, year), passengerCount(passengerCount) {}

    int getPassengerCount() const {
        return passengerCount;
    }

    void setPassengerCount(int newPassengerCount) {
        passengerCount = newPassengerCount;
    }
};

class Bus : public Passenger {
protected:
    bool electricBus;

public:
    Bus(const std::string& brand, int year, int passengerCount, bool electricBus)
        : Passenger(brand, year, passengerCount), electricBus(electricBus) {}

    bool isElectricBus() const {
        return electricBus;
    }

    void setElectricBus(bool isElectric) {
        electricBus = isElectric;
    }

    void announceNextStop() {
        std::cout << "Next stop: Please prepare to exit." << std::endl;
    }
};

class Trolleybus : public Passenger {
protected:
    bool heating;

public:
    Trolleybus(const std::string& brand, int year, int passengerCount, bool heating)
        : Passenger(brand, year, passengerCount), heating(heating) {}

    bool hasHeating() const {
        return heating;
    }

    void setHeating(bool hasHeating) {
        heating = hasHeating;
    }

    void adjustHeating(bool turnOn) {
        if (turnOn) {
            std::cout << "Heating is turned on." << std::endl;
        } else {
            std::cout << "Heating is turned off." << std::endl;
        }
    }
};

class Freight : public Vehicle {
protected:
    double carryingCapacity; 

public:
    Freight(const std::string& brand, int year, double carryingCapacity)
        : Vehicle(brand, year), carryingCapacity(carryingCapacity) {}

    double getCarryingCapacity() const {
        return carryingCapacity;
    }

    void setCarryingCapacity(double newCapacity) {
        carryingCapacity = newCapacity;
    }

    void loadCargo(double weight) {
        std::cout << "Loaded " << weight << " kg of cargo." << std::endl;
    }
};

class DumpTruck : public Freight {
protected:
    EngineType::Type engineType;

public:
    DumpTruck(const std::string& brand, int year, double carryingCapacity, EngineType::Type engineType)
        : Freight(brand, year, carryingCapacity), engineType(engineType) {}

    EngineType::Type getEngineType() const {
        return engineType;
    }

    void setEngineType(EngineType::Type newEngineType) {
        engineType = newEngineType;
    }

    void dumpCargo() {
        std::cout << "Dumping cargo..." << std::endl;
    }
};

int main() {
    std::string brand;
    int year;
    double carryingCapacity;
    int passengerCount;
    bool electricBus;
    bool heating;
    EngineType::Type engineType;

    std::cout << "Enter DumpTruck brand: ";
    std::cin >> brand;
    std::cout << "Enter DumpTruck year: ";
    std::cin >> year;
    std::cout << "Enter DumpTruck carrying capacity (kg): ";
    std::cin >> carryingCapacity;
    std::cout << "Enter DumpTruck engine type (0 for Gasoline, 1 for Diesel, 2 for Electric): ";
    int engineTypeInput;
    std::cin >> engineTypeInput;
    engineType = static_cast<EngineType::Type>(engineTypeInput);

    DumpTruck dumpTruck(brand, year, carryingCapacity, engineType);

    std::cout << "Enter Bus brand: ";
    std::cin >> brand;
    std::cout << "Enter Bus year: ";
    std::cin >> year;
    std::cout << "Enter Bus passenger count: ";
    std::cin >> passengerCount;
    std::cout << "Is it an electric bus? (0 for No, 1 for Yes): ";
    int electricBusInput;
    std::cin >> electricBusInput;
    electricBus = (electricBusInput == 1);

    Bus bus(brand, year, passengerCount, electricBus);

    std::cout << "Enter Trolleybus brand: ";
    std::cin >> brand;
    std::cout << "Enter Trolleybus year: ";
    std::cin >> year;
    std::cout << "Enter Trolleybus passenger count: ";
    std::cin >> passengerCount;
    std::cout << "Does it have heating? (0 for No, 1 for Yes): ";
    int heatingInput;
    std::cin >> heatingInput;
    heating = (heatingInput == 1);

    Trolleybus trolleybus(brand, year, passengerCount, heating);
    std::cout << std::endl;

    std::cout << "DumpTruck Details:" << std::endl;
    std::cout << "Brand: " << dumpTruck.getBrand() << std::endl;
    std::cout << "Year: " << dumpTruck.getYear() << std::endl;
    std::cout << "Carrying Capacity: " << dumpTruck.getCarryingCapacity() << " kg" << std::endl;
    std::cout << "Engine Type: " << dumpTruck.getEngineType() << std::endl;
    dumpTruck.dumpCargo();
    std::cout << std::endl;

    std::cout << "Bus Details:" << std::endl;
    std::cout << "Brand: " << bus.getBrand() << std::endl;
    std::cout << "Year: " << bus.getYear() << std::endl;
    std::cout << "Passenger Count: " << bus.getPassengerCount() << std::endl;
    std::cout << "Electric Bus: " << (bus.isElectricBus() ? "Yes" : "No") << std::endl;
    bus.announceNextStop();
    std::cout << std::endl;

    std::cout << "Trolleybus Details:" << std::endl;
    std::cout << "Brand: " << trolleybus.getBrand() << std::endl;
    std::cout << "Year: " << trolleybus.getYear() << std::endl;
    std::cout << "Passenger Count: " << trolleybus.getPassengerCount() << std::endl;
    std::cout << "Heating: " << (trolleybus.hasHeating() ? "Yes" : "No") << std::endl;
    trolleybus.adjustHeating(true);

    return 0;
}

