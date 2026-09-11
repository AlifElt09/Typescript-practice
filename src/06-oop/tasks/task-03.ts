/**
 * A school library wants to create a digital system for managing books.
 * 
 * Each book has:
 * - ISBN
 * - Title
 * - Author
 * - Total pages
 * - Borrowing status
 * 
 * The library wants to prevent users from directly changing the borrowing status.
 * Instead, the status can only change through:
 * - borrow()
 * - returnBook()
 * 
 * Business Rules
 * - A book can only be borrowed when: status = available
 * - When a book is borrowed: available → borrowed
 * - A borrowed book cannot be borrowed again.
 * - When the book is returned: borrowed → available
 * - An available book cannot be returned.
 * 
 * Tasks:
 * - create class Book that minimum has property and method below:
 *   - private status: string;
 *   - borrow()
 *   - returnBook()
 *   - showInfo()
 *   - isAvailable()
 * - implement class with at least 2 objects
 */

class Book {
    constructor (
        private status: string,
        private isbn: string,
        private title: string,
        private author: string,
        private totalPages: number
    ) { }
    
    borrow() {
        if (this.status === "available") {
            this.status = "borrowed";
        }}
    returnBook() {
        if (this.status === "borrowed") {
            this.status = "available";
        }}
    showInfo() {
        console.log(`ISBN: ${this.isbn}`);
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Total Pages: ${this.totalPages}`);
        console.log(`Status: ${this.status}`);
    }
    isAvailable() {
        return this.status === "available";
    }
}

const book1 = new Book("borrowed", "book1", "IT Guide", "SMK Telkom Malang", 67);
const book2 = new Book("available", "book2", "Typescript Guide", "SMK Telkom Malang", 67);

book1.borrow();
book1.showInfo();
book2.returnBook();
book2.showInfo();

console.log(book1.isAvailable());
console.log(book2.isAvailable());
