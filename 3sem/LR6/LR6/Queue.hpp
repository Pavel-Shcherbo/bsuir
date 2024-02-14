#include <iostream>
#include <fstream>
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
    Queue() : front(nullptr), rear(nullptr) {}
    ~Queue()
    {
        while (!isEmpty())
        {
            pop();
        }
    }

    bool isEmpty() const
    {
        return front == nullptr;
    }

    void push(T& item)
    {
        Node* newNode = new Node;
        newNode->data = item;
        newNode->next = nullptr;

        if (isEmpty())
        {
            front = rear = newNode;
        }
        else
        {
            rear->next = newNode;
            rear = newNode;
        }
    }

    void pop()
    {
        if (isEmpty()) {
            std::cout << "Error, queue is empty!" << std::endl;
            return;
        }

        Node* temp = front;
        front = front->next;
        delete temp;

        if (front == nullptr) {
            rear = nullptr;
        }
    }

    T peek()
    {
        if (isEmpty()) {
            std::cout << "Error, queue is empty!" << std::endl;
            return 1;
        }
        return front->data;
    }

    void print()
    {
        if (isEmpty())
        {
            std::cout << "Error, queue is empty!" << std::endl;
            return;
        }

        Node* current = front;
        while (current != nullptr)
        {
            std::cout << current->data << " ";
            current = current->next;
        }
        std::cout << std::endl;
    }
    void writeToBinFile(std::string newString) {
            std::ofstream binaryWrite("output.dat", std::ios::binary | std::ios::app);
            if (!binaryWrite.is_open()) {
                throw std::runtime_error("Error opening binary file for writing.");
            }

            newString += '\n';
            binaryWrite.write(newString.c_str(), newString.size());
            binaryWrite.close();
    }
    void pushFile(){
        std::ofstream("output.txt") << (front->data);
        std::ofstream("output.dat", std::ios::binary) >> (front->data);
    }


};

template <typename T>
void processQueue(Queue<T>& queue, T* arr, int size) {
    while (true) {
        int ch;
        std::cout << "For delete enter 1" << std::endl;
        std::cout << "For peek enter 2" << std::endl;
        std::cout << "For stop enter 3" << std::endl;
        std::cout << "Choice: ";
        std::cin >> ch;
        if (ch == 1) {
            queue.pop();
            queue.print();
        } else if (ch == 2) {
            std::cout << queue.peek() << std::endl;
        } else if (ch == 3) {
            delete[] arr;
            return;
        }
    }
}

