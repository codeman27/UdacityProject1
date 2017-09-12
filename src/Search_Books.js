import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Book_Shelf';
import * as BooksAPI from './BooksAPI';

class SearchBooks extends Component {
  state= {
    searchResults: []
  }

  onInputChange(term){
    term.length > 0 &&
    console.log(this.state.searchResults[0])
    BooksAPI.search(term, 5).then(data => {
      console.log(data)
      this.setState({searchResults: data})
    })

  }

  render(){
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              onChange={(event)=> this.onInputChange(event.target.value)}
              value={this.state.searchTerm}
              type="text" placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchResults.length > 0 ?
              <Bookshelf
                onChangeBookShelf={this.props.onChangeBookShelf}
                books={this.state.searchResults}
              /> :
              <h1>No matches</h1>
            }
          </ol>
        </div>
      </div>
    )
  }
};

export default SearchBooks;
