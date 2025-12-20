/**
 * Simple Book Management Application
 * Challenge 5, 21-Dec-2025
 * Made Bambang
 * 
 */


/* ================================
   1. Book Type
   ================================ */
   type Book = {
    title: string;
    author: string;
    publicationYear: number;
  };
  
  /* ================================
     2. Book Storage
     ================================ */
  const books: Book[] = [];
  
  /* ================================
     3. Add Book
     ================================ */
  function addBook(
    title: string,
    author: string,
    publicationYear: number
  ): void {
    books.push({ title, author, publicationYear });
  
    console.log(
      `Book added: "${title}" by ${author} (${publicationYear})`
    );
  }
  
  /* ================================
     4. List Books
     ================================ */
  function listBooks(): void {
    console.log('All Books:');
  
    books.forEach((book) => {
      console.log(
        `- ${book.title} by ${book.author} (${book.publicationYear})`
      );
    });
  }
  
  /* ================================
     5. Search Book
     ================================ */
  function searchBook(title?: string): void {
    // If no title provided
    if (!title) {
      console.log('Please provide a title to search.');
      return;
    }
  
    const results = books.filter((book) =>
      book.title.includes(title) // case-sensitive & contains
    );
  
    if (results.length === 0) {
      console.log(
        `No books found with title containing "${title}".`
      );
      return;
    }
  
    console.log(`Search Results for "${title}":`);
  
    results.forEach((book) => {
      console.log(
        `- ${book.title} by ${book.author} (${book.publicationYear})`
      );
    });
  }

    /* ================================
    Example Input:
     ================================ */

// Adding some books
addBook('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
addBook('1984', 'George Orwell', 1949);

// Displaying all books
listBooks();

// Searching for a book by title
searchBook('1984');

// Don't delete code bellow and this code must be at the bottom of the file
export { addBook, listBooks, searchBook };
