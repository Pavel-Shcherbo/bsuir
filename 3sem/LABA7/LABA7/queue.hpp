#include <iostream>

template <typename T>
struct Node {
    T data;
    Node* next;
};

template <typename T>
class Queue {
private:
    Node<T>* front;
    Node<T>* rear;

public:
    Queue() : front(nullptr), rear(nullptr) {}

    ~Queue() {
        while (!isEmpty()) {
            pop();
        }
    }

    bool isEmpty() const {
        return front == nullptr;
    }

    void push(const T& item) {
        Node<T>* newNode = new Node<T>;
        newNode->data = item;
        newNode->next = nullptr;

        if (isEmpty()) {
            front = rear = newNode;
        } else {
            rear->next = newNode;
            rear = newNode;
        }
    }

    void pop() {
        if (isEmpty()) {
            std::cout << "Error, queue is empty!" << std::endl;
            return;
        }

        Node<T>* temp = front;
        front = front->next;
        delete temp;

        if (front == nullptr) {
            rear = nullptr;
        }
    }

    T peek() const {
        if (isEmpty()) {
            std::cout << "Error, queue is empty!" << std::endl;
            return T();
        }
        return front->data;
    }

    void print() const {
        if (isEmpty()) {
            std::cout << "Error, queue is empty!" << std::endl;
            return;
        }

        for (Node<T>* current = front; current != nullptr; current = current->next) {
            std::cout << current->data << " ";
        }
        std::cout << std::endl;
    }

    class Iterator {
    private:
        Node<T>* current;

    public:
        Iterator(Node<T>* start) : current(start) {}

        Iterator& operator++() {
            current = current->next;
            return *this;
        }

        bool operator!=(const Iterator& other) const {
            return current != other.current;
        }

        T& operator*() const {
            return current->data;
        }
    };

    class ConstIterator {
    private:
        Node<T>* current;

    public:
        ConstIterator(Node<T>* start) : current(start) {}

        ConstIterator& operator++() {
            current = current->next;
            return *this;
        }

        bool operator!=(const ConstIterator& other) const {
            return current != other.current;
        }

        const T& operator*() const {
            return current->data;
        }
    };

    class ReverseIterator {
    private:
        Node<T>* current;

    public:
        ReverseIterator(Node<T>* start) : current(start) {}

        ReverseIterator& operator++() {
            current = current->next;
            return *this;
        }

        bool operator!=(const ReverseIterator& other) const {
            return current != other.current;
        }

        T& operator*() const {
            return current->data;
        }
    };

    class ReverseConstIterator {
    private:
        Node<T>* current;

    public:
        ReverseConstIterator(Node<T>* start) : current(start) {}

        ReverseConstIterator& operator++() {
            current = current->next;
            return *this;
        }

        bool operator!=(const ReverseConstIterator& other) const {
            return current != other.current;
        }

        const T& operator*() const {
            return current->data;
        }
    };

    Iterator begin() const {
        return Iterator(front);
    }

    Iterator end() const {
        return Iterator(nullptr);
    }

    ConstIterator cbegin() const {
        return ConstIterator(front);
    }

    ConstIterator cend() const {
        return ConstIterator(nullptr);
    }

    ReverseIterator rbegin() {
        return ReverseIterator(rear);
    }

    ReverseIterator rend() {
        return ReverseIterator(nullptr);
    }

    ReverseConstIterator crbegin() const {
        return ReverseConstIterator(rear);
    }

    ReverseConstIterator crend() const {
        return ReverseConstIterator(nullptr);
    }

    Node<T>* search(const T& item) {
        for (Node<T>* current = front; current != nullptr; current = current->next) {
            if (current->data == item) {
                return current;
            }
        }
        return nullptr;  // Item not found
    }

    void sort() {
        if (isEmpty() || front->next == nullptr) {
            return;
        }

        Node<T>* last = nullptr;

        do {
            Node<T>* prev = nullptr;
            Node<T>* curr = front;
            Node<T>* next = curr->next;
            bool swapped = false;

            while (next != last) {
                if (curr->data > next->data) {
                    if (prev == nullptr) {
                        front = next;
                    } else {
                        prev->next = next;
                    }

                    curr->next = next->next;
                    next->next = curr;

                    swapped = true;
                } else {
                    prev = curr;
                    curr = next;
                }

                next = curr->next;
            }
            last = curr;  // Update the last swapped position
        } while (last != front);

        // Update the rear pointer after sorting
        rear = front;
        while (rear->next != nullptr) {
            rear = rear->next;
        }
    }
};

void validation(int* size, int val) {
    while (true) {
        if (std::cin >> *size && *size > 0 && *size <= val) {
            break;
        } else {
            std::cin.clear();
            std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
            std::cout << "Invalid input. Please enter an integer.\n";
        }
    }
}

// Function declaration
template<typename T>
void printEven(typename Queue<T>::Iterator begin, typename Queue<T>::Iterator end);

template <typename T>
void processQueue(Queue<T>& queue, T* arr, int size) {
    while (true) {
        int ch;
        std::cout << "1. Delete element" << std::endl;
        std::cout << "2. Peek front element" << std::endl;
        std::cout << "3. Search for element" << std::endl;
        std::cout << "4. Sort the queue" << std::endl;
        std::cout << "5. Print the queue" << std::endl;
        std::cout << "6. Stop" << std::endl;
        std::cout << "7. Print even elements" << std::endl;
        std::cout << "Choice: ";
        validation(&ch, 7);

        switch (ch) {
            case 1:
                queue.pop();
                queue.print();
                break;
            case 2:
                std::cout << "Front element: " << queue.peek() << std::endl;
                break;
            case 3:
                T searchValue;
                std::cout << "Enter value to search: ";
                std::cin >> searchValue;
                if (queue.search(searchValue) != nullptr) {
                    std::cout << "Value found in the queue." << std::endl;
                } else {
                    std::cout << "Value not found in the queue." << std::endl;
                }
                break;
            case 4:
                queue.sort();
                std::cout << "Queue sorted." << std::endl;
                queue.print();
                break;
            case 5:
                std::cout << "Queue elements: ";
                for (typename Queue<T>::ConstIterator it = queue.cbegin(); it != queue.cend(); ++it) {
                    std::cout << *it << " ";
                }
                std::cout << std::endl;
                break;
            case 6:
                delete[] arr;
                return;
            case 7:
                std::cout << "Print even elements: ";
                printEven<T>(queue.begin(), queue.end());
                break;
        }
    }
}

// Function definition
template<typename T>
void printEven(typename Queue<T>::Iterator begin, typename Queue<T>::Iterator end)
{
    for (typename Queue<T>::Iterator it = begin; it != end; ++it) {
        if (std::is_integral<T>::value) {
            // For integer types
            if (static_cast<int>(*it) % 2 == 0) {
                std::cout << *it << " ";
            }
        } else {
            // For non-integer types (e.g., double)
            if (std::fmod(*it, 2.0) == 0.0) {
                std::cout << *it << " ";
            }
        }
    }
    std::cout << std::endl;
}

