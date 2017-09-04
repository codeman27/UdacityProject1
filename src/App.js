import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom';
import './App.css'
import SearchBooks from './Search_Books';
import BookList from './Book_List';

class BooksApp extends Component {
  state = {

  }
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={BookList}></Route>
        <Route path="/Search" component={SearchBooks}></Route>
      </div>
    )
  }
}

//Adding a comment to test commit

export default BooksApp
