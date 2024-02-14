#pragma once
#include <iostream>

template <typename T>
class Queue
{
    struct Node
    {
        T data;
        Node* next;
    };

    Node* front;
    Node* rear;

public:
    Queue();
    ~Queue();

    bool isEmpty() const;
    void push(T& item);
    void pop();
    T peek();
    void print();
};

template <typename T>
void validation(T* size, T val)
{
    while (true)
    {
        if (std::cin >> *size && *size > 0 && *size <= val)
        {
            break;
        }
        else
        {
            std::cin.clear();
            std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
            std::cout << "Invalid input. Please enter an integer.\n";
        }
    }
}

template <typename T>
void processQueue(Queue<T>& queue, T* arr, int size)
{
    while (true)
    {
        int ch;
        std::cout << "For delete enter 1" << std::endl;
        std::cout << "For peek enter 2" << std::endl;
        std::cout << "For stop enter 3" << std::endl;
        std::cout << "Choice: ";
        validation(&ch, 3);
        if (ch == 1)
        {
            queue.pop();
            queue.print();
        }
        else if (ch == 2)
        {
            std::cout << queue.peek() << std::endl;
        }
        else if (ch == 3)
        {
            delete[] arr;
            return;
        }
    }
}
