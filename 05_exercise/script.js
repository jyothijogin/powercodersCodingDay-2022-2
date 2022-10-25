let books = [
  {
    title: "Long Shadows",
    author: "David Baldacci",
    availability: "Available",
    price: "20",
  },
  {
    title: "The Maze",
    author: "Nelson Demille",
    availability: "Not Available",
    price: "30",
  },
  {
    title: "Fairy Tale",
    author: "Stephen King",
    availability: "Available",
    price: "12",
  },
];

 let container = document.getElementById("container");
 let sortedBooksbyTitle = filter();
 let bookTitle= document.getElementById("title");
let author= document.getElementById("author");
 
display();

 function filter() {
    
}
function display() {
 container.innerHTML = books
  .map((book) => {
    return `  
    <div class="books">
        <h1>${book.title}</h1>
        <div>${book.author}</div>
        <div>${book.price}</div>
        <div>${book.availability}</div>
    </div>
    `;
  })
  .join(" ");
}




 function addBook() {
        books.push(bookTitle.value,author.value);
        display();
 }