import React from "react";
import Book from "./Book";

function BookGrid({ books, handleUpdateBook }) {
  const renderListBooks = (books) => {
    return books.map((book) => (
      <li key={book.id}>
        <Book
          id={book.id}
          author={book.authors ? book.authors.join(', ') : 'Not updated yet'}
          title={book.title}
          imageUrl={book.imageLinks?.thumbnail}
          handleUpdateBook={handleUpdateBook}
          shelf={book.shelf}
        />
      </li>
    ));
  };

  return <ol className="books-grid">{books && books.length > 0 && renderListBooks(books)}</ol>;
}

export default BookGrid;
