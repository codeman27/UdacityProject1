import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import './App.css';
import SearchBooks from './Search_Books';
import BookList from './Book_List';

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books});
    });
  }

  changeBookShelf = (book, shelf) => {
    if(book.shelf !== shelf){
      BooksAPI.update(book, shelf).then(() => {
        book.shelf = shelf;
        this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat(book)
        }));
      });
    }
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookList
            onChangeBookShelf={this.changeBookShelf}
            books={this.state.books}
          />
        )}></Route>
        <Route path="/search" render={() => (
          <SearchBooks
            onChangeBookShelf={this.changeBookShelf}
            books={this.state.books}
          />
        )}></Route>
      </div>
    )
  }
}

//Adding a comment to test commit

export default BooksApp
