// Declare empty array for library
let myLibrary = [];

// Object constructor
function Book(Title, Author, Pages, Read) {
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Read = Read;
    // this.info = function() {
    //     return (Title + Author + ", " + Pages + ", " + Read);
    //}
}

// Function for adding a new book to the array/library
function addBookToLibrary(Title, Author, Pages, Read) {
    let book = new Book(Title, Author, Pages, Read);
    myLibrary.push(book);
    displayBooksOnPage();
}

// const theHobbit = new Book("The Hobbit", " by J.R.R. Tolkien", "295 Pages", "not Read yet");
// console.log(theHobbit.info());

// Function to display library array to cards
function displayBooksOnPage() {
    const books = document.querySelector(".books");

    // Remove all previously displayed cards before I loop over array again
    const removeDivs = document.querySelectorAll(".card");
    console.log("show me the node count of current card divs....", removeDivs);
    for (let i = 0; i < removeDivs.length; i++) {
        removeDivs[i].remove();
    }
    
    // Loop over the library array and display to the cards
    myLibrary.forEach(myLibrary => {
        const card = document.createElement("div");
        card.classList.add("card");
        books.appendChild(card);
        for (let key in myLibrary) {
            console.log(`${key}: ${myLibrary[key]}`);
            const para = document.createElement("p");
            para.textContent = (`${key}: ${myLibrary[key]}`);
            card.appendChild(para);
        }
    })

    // for (let i = 0; i < myLibrary.length; i++) {
    //     console.log("looping through", myLibrary[i]);
    //     const card = document.createElement("div");
    //     card.classList.add("card");
    //     let arrayToString = JSON.stringify(myLibrary[i], null, 4);
    //     arrayToString = arrayToString.replace(/,/g, "");
    //     console.log("trying to convert array to string....", arrayToString);
    //     const para = document.createElement("p");
    //     para.innerText = arrayToString;  //Safer to use than innerHTML and I am NOT injecting HTML
    //                                     //just displaying the string contents of a variable
    //     // card.textContent = arrayToString;
    //     books.appendChild(card);
    //     card.appendChild(para);
    // }
}

// Start event listener/display form to add a new book to library
const addBookButton = document.querySelector(".add-book-button")
addBookButton.addEventListener("click", displayTheForm);

function displayTheForm() {
    document.getElementById("add-book-form").style.display = "";
}

// Start event listener/add input to array for new entry form
const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", intakeFormData);

// Transform form data to variables for intake
function intakeFormData() {
    let Title = document.getElementById("Title").value;
    let Author = document.getElementById("Author").value;
    let Pages = document.getElementById("Pages").value;
    let Read = document.getElementById("Read").value;
    
    // Break out if form is incomplete or not valid
    if ((Title == "") || (Author == "") || (Pages == "") || (Read == "")) {
        return;
    }
    // Call function to input the book data to array
    addBookToLibrary(Title, Author, Pages, Read);

    // Reset the form after successful submission
    document.getElementById("add-book").reset();
}

// Start event listener for clear form button
const clearButton = document.querySelector(".reset-button");
clearButton.addEventListener("click", clearForm);

function clearForm() {
    document.getElementById("add-book").reset();
}

// Calling function and adding data manually for now until the form is built out
// addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295 Pages", "Not Read yet");
// addBookToLibrary("The Seven Habits of Highly Effective People", "Steven Covey", "200 Pages", "Read");
// addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295 Pages", "Not Read yet");
// addBookToLibrary("The Seven Habits of Highly Effective People", "Steven Covey", "200 Pages", "Read");
// addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295 Pages", "Not Read yet");
// addBookToLibrary("The Seven Habits of Highly Effective People", "Steven Covey", "200 Pages", "Read");
// addBookToLibrary("The Seven Habits of Highly Effective People", "Steven Covey", "200 Pages", "Read");

// console.log("End of code array contents", myLibrary);

// displayBooksOnPage();
