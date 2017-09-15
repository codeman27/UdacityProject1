import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Book_Shelf';
import * as BooksAPI from './BooksAPI';

class SearchBooks extends Component {
  state= {
    searchResults: []
  }

  onInputChange(term){
    if(term){
      console.log(term)
      BooksAPI.search(term, 20).then(data => {
        this.setState({searchResults: data})
        console.log(this.state.searchResults)
      })
    }
  }

  render(){
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              onChange={(event)=> this.onInputChange(event.target.value)}
              type="text" placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
              <Bookshelf
                onChangeBookShelf={this.props.onChangeBookShelf}
                books={this.state.searchResults}
              />
          </ol>
        </div>
      </div>
    )
  }
};

export default SearchBooks;
