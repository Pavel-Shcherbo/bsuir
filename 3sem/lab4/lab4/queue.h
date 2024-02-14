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


};



void validation(int* size, int val)
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
void processQueue(Queue<T>& queue, T* arr, int size) {
    while (true) {
        int ch;
        std::cout << "For delete enter 1" << std::endl;
        std::cout << "For peek enter 2" << std::endl;
        std::cout << "For stop enter 3" << std::endl;
        std::cout << "Choice: ";
        validation(&ch, 3);
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
