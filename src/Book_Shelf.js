import React from 'react';

const BookShelf = (props) => {
  return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map(function(book){
            return (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                      <select value={book.shelf} onChange={ (event) => props.onChangeBookShelf(book, event.target.value)}>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
  );
};

export default BookShelf;
