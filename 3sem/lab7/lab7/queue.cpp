#include "queue.h"

template <typename T>
Queue<T>::Queue() : front(nullptr), rear(nullptr) {}

template <typename T>
Queue<T>::~Queue()
{
    while (!isEmpty())
    {
        pop();
    }
}

template <typename T>
bool Queue<T>::isEmpty() const
{
    return front == nullptr;
}

template <typename T>
void Queue<T>::push(T& item)
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

template <typename T>
void Queue<T>::pop()
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

template <typename T>
T Queue<T>::peek()
{
    if (isEmpty()) {
        std::cout << "Error, queue is empty!" << std::endl;
        return 1;
    }
    return front->data;
}

template <typename T>
void Queue<T>::print()
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

