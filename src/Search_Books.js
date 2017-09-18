import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Book_Shelf';
import * as BooksAPI from './BooksAPI';

const bookResultArr = []

class SearchBooks extends Component {
  state= {
    searchResults: [],
    searchTerm: '',
    bookResults: []
  }

  onInputChange(term){
    if(term){
      this.setState({searchTerm: term})
      BooksAPI.search(term, 20).then(data => {
        this.setState({searchResults: data})
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
              {this.state.searchResults.length > 0 ?
              <Bookshelf
                onChangeBookShelf={this.props.onChangeBookShelf}
                books={this.state.searchResults}
              /> : this.state.searchTerm.length > 0 ?
              <h1>Sorry, No Books :(</h1>
              :
              <h1>Search for some books!</h1>
            }
          </ol>
        </div>
      </div>
    )
  }
};

export default SearchBooks;
