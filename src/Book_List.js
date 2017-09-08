import React from 'react';
import {Link} from 'react-router-dom';
import CurrentlyReading from './Currently_Reading';
import WantToRead from './Want_To_Read';
import Read from './Read';

const BookList = (props) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <CurrentlyReading books={props.books.filter(function(book){
            return book.shelf === "Currently Reading"
          })} />
          <WantToRead books={props.books.filter(function(book){
            return book.shelf === "Want to Read"
          })} />
          <Read books={props.books.filter(function(book){
            return book.shelf === "Read"
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
