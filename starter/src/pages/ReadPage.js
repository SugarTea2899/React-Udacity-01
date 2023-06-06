import React, { useEffect, useState } from "react";
import BookShelf from "../components/BookShelf";
import { Link } from "react-router-dom";
import * as BookApi from "../BooksAPI";

function ReadPage() {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const books = await BookApi.getAll();
    setBooks(books);
  };

  const handleUpdateBook = async (book, shelf) => {
    await BookApi.update(book, shelf);
    await getBooks();
  };

  useEffect(() => {
    getBooks();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyRead</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            handleUpdateBook={handleUpdateBook}
            books={books}
            filterValue="currentlyReading"
            title="Currently Reading"
          />
          <BookShelf
            handleUpdateBook={handleUpdateBook}
            books={books}
            filterValue="wantToRead"
            title="Want To Read"
          />
          <BookShelf
            handleUpdateBook={handleUpdateBook}
            books={books}
            filterValue="read"
            title="Read"
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

export default ReadPage;
