import React from 'react';
import BookGrid from './BookGrid';

function BookShelf({title, books, filterValue, handleUpdateBook}) {
  const filteredBooks = books.filter(book => book.shelf === filterValue);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <BookGrid handleUpdateBook={handleUpdateBook} books={filteredBooks} />
      </div>
    </div>
  )
}


export default BookShelf;