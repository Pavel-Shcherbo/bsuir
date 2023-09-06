
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef enum { FICTION, NON_FICTION } BookType;

typedef struct {
    char title[50];
    char author[30];
    int year;
    float price;
    BookType type;
} Book;

Book* create_book_array(int size) {
    Book* books = (Book*) malloc(size * sizeof(Book));
    if (books == NULL) {
        printf("Error: Failed to allocate memory for book array.\n");
        return NULL;
    }
    return books;
}

void display_books(Book* books, int size) {
    for (int i = 0; i < size; i++) {
        printf("Title: %s\n", books[i].title);
        printf("Author: %s\n", books[i].author);
        printf("Year: %d\n", books[i].year);
        printf("Price: %.2f\n", books[i].price);
        printf("Type: %s\n\n", books[i].type == FICTION ? "Fiction" : "Non-fiction");
    }
}

void initialize_book(Book* book, char title[], char author[], int year, float price, BookType type) {
    strcpy(book->title, title);
    strcpy(book->author, author);
    book->year = year;
    book->price = price;
    book->type = type;
}

int compare_by_title(const void* a, const void* b) {
    const Book* book_a = (const Book*) a;
    const Book* book_b = (const Book*) b;
    return strcmp(book_a->title, book_b->title);
}

int compare_by_author(const void* a, const void* b) {
    const Book* book_a = (const Book*) a;
    const Book* book_b = (const Book*) b;
    return strcmp(book_a->author, book_b->author);
}

int compare_by_year(const void* a, const void* b) {
    const Book* book_a = (const Book*) a;
    const Book* book_b = (const Book*) b;
    return book_a->year - book_b->year;
}

int compare_by_price(const void* a, const void* b) {
    const Book* book_a = (const Book*) a;
    const Book* book_b = (const Book*) b;
    return (int) (book_a->price * 100) - (int) (book_b->price * 100);
}

void sort_books_by_title(Book* books, int size) {
    qsort(books, size, sizeof(Book), compare_by_title);
}

void sort_books_by_author(Book* books, int size) {
    qsort(books, size, sizeof(Book), compare_by_author);
}

void sort_books_by_year(Book* books, int size) {
    qsort(books, size, sizeof(Book), compare_by_year);
}

void sort_books_by_price(Book* books, int size) {
    qsort(books, size, sizeof(Book), compare_by_price);
}

void remove_book(Book* books, int size, int index) {
    if (index < 0 || index >= size) {
        printf("Error: Invalid index.\n");
        return;
    }
    for (int i = index; i < size - 1; i++) {
        books[i] = books[i+1];
    }
}

int compare_by_year_and_price(const void* a, const void* b) {
    const Book* book_a = (const Book*) a;
    const Book* book_b = (const Book*) b;

    // First compare by year
    if (book_a->year != book_b->year) {
        return book_a->year - book_b->year;
    }

    // If the years are the same, compare by price
    return (int) (book_a->price * 100) - (int) (book_b->price * 100);
}

void sort_books_by_year_and_price(Book* books, int size) {
    qsort(books, size, sizeof(Book), compare_by_year_and_price);
}

