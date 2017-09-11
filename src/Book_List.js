import React from 'react';
import {Link} from 'react-router-dom';
import BookShelf from './Book_Shelf';

const BookList = (props) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <BookShelf
              onChangeBookShelf={props.onChangeBookShelf}
              books={props.books.filter(function(book){
                return book.shelf === "currentlyReading"
            })} />
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want To Read</h2>
            <BookShelf
              onChangeBookShelf={props.onChangeBookShelf}
              books={props.books.filter(function(book){
                return book.shelf === "wantToRead"
            })} />
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <BookShelf
            onChangeBookShelf={props.onChangeBookShelf}
            books={props.books.filter(function(book){
              return book.shelf === "read"
          })}/>
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default BookList;
