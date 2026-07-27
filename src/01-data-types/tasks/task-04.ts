/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

enum BookCategory {
    Fiction = "Fiction",
    NonFiction = "Non-Fiction",
    Science = "Science",
    technology = "Technology",
}
type Book = {
    isbn: string;
    title: string;
    author: string;
    pages: number;
    genre: string;
    category: BookCategory;
    available: boolean;
};

const book1: Book = {
    isbn: "book1",
    title: "IT Guide",
    author: "SMK Telkom Malang",
    pages: 167,
    genre: "Technology",
    category: BookCategory.technology,
    available: true,
};

const book2: Book = {
    isbn: "book2",
    title: "The universe",
    author: "SMK Telkom Malang",
    pages: 180,
    genre: "Science",
    category: BookCategory.Science,
    available: true,
};

const book3: Book = {
    isbn: "book3",
    title: "Heroes",
    author: "SMK Telkom Malang",
    pages: 170,
    genre: "Fantasy",    
    category: BookCategory.Fiction,    
    available: true,
};

let bookcatalog: Book[] = [book1, book2, book3];
console.log(bookcatalog);