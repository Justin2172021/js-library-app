// Declare empty array for library
let myLibrary = [];

// Object constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return (title + author + ", " + pages + ", " + read);
    }
}

// Function for adding a new book to the array/library
function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

// const theHobbit = new Book("The Hobbit", " by J.R.R. Tolkien", "295 pages", "not read yet");
// console.log(theHobbit.info());

// Calling function and adding data manually for now until the form is built out
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295 pages", "not read yet");
addBookToLibrary("The Seven Habits of Highly Effective People", "Steven Covey", "200 pages", "read");
console.log(myLibrary);

