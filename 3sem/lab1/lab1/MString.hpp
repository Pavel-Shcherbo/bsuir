#ifndef TWODIMARRAY_H
#define TWODIMARRAY_H

class TwoDimArray {
private:
    int** array;
    int size;

public:
    TwoDimArray(int n);
    ~TwoDimArray();
    TwoDimArray(const TwoDimArray& other);
    
    void fillArray();
    void printArray();
    
    int findMinBelowDiagonal() const;
    int findMaxAboveDiagonal() const;

    // Добавьте перегрузку оператора + и & (поведение на ваш выбор)
    TwoDimArray operator+(const TwoDimArray& other) const;
    TwoDimArray operator&(const TwoDimArray& other) const;
};

#endif
