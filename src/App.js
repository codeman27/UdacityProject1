import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom';
import './App.css'
import SearchBooks from './Search_Books';
import BookList from './Book_List';

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  changeBookShelf = (book, newShelf) => {
    if(this.state.books.includes(book)){
      this.setState( (state) => {
        books: state.books.map(function(b){
          if(book.id === b.id){
            b.shelf= newShelf
          }
        })
      })
    }
    else{
      BooksAPI.get(book.id).then((newBook) => {
        newBook.shelf = newShelf
        this.setState( (state) => {
          return {books: [...state.books, newBook]}
        })
      })
    }

    BooksAPI.update(book, newShelf)
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
          />
        )}></Route>
      </div>
    )
  }
}

//Adding a comment to test commit

export default BooksApp
