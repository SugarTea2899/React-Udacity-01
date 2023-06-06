import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";
import * as BookApi from "../BooksAPI";
import BookGrid from "../components/BookGrid";

function SearchPage() {
  const [inputValue, setInputValue] = useState("");
  const [books, setBooks] = useState([]);
  const debouncedInputValue = useDebounce(inputValue, 500);

  const getSearchBookResults = async () => {
    const books =
      debouncedInputValue !== ""
        ? await BookApi.search(debouncedInputValue, 500)
        : [];
  
    if (books.length > 0) {
      const myBooks = await BookApi.getAll();
      for (const book of books) {
        const foundBook = myBooks.find(myBook => myBook.id === book.id);
        if (foundBook) {
          book.shelf = foundBook.shelf;
        }
      } 
    }

    setBooks(books);
  };

  const handleUpdateBook = async (book, shelf) => {
    await BookApi.update(book, shelf);
  };

  useEffect(() => {
    getSearchBookResults();
    // eslint-disable-next-line
  }, [debouncedInputValue]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            defaultValue={inputValue}
            onChange={handleChange}
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <BookGrid handleUpdateBook={handleUpdateBook} books={books} />
      </div>
    </div>
  );
}

export default SearchPage;
