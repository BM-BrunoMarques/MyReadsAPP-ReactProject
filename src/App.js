import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Link } from 'react-router-dom'
import ListBooksPerCategory from './components/ListBooksPerCategory'
import Search from './components/Search'

class BooksApp extends React.Component {
  
  state = {
    Books: {},
  }

  reloadBooks = () => {
      
      BooksAPI.getAll()	
      .then((Books) => {
      this.setState((currentState) => ({
        Books: Books
      }))
    })

  }

  updateBooks = (B) => {
  
    this.setState((currentState) => ({
        Books: B
      }))
    
  }

  componentDidMount() {
    this.reloadBooks()
  }

  render() {
    return (
      <div className="app">
        

        <Route exact path='/' render={() => ( 
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
                 <ListBooksPerCategory Books={this.state.Books} reloadBooks={this.reloadBooks} />
            <div className='open-search'>
              <Link to='/search'> Search </Link>
            </div>
          </div>
       )} />

       <Route exact path='/search' render={() => ( 
         <div className="search-books">
           <Search reloadBooks={this.reloadBooks} Books={this.state.Books}  updateBooks={this.updateBooks} />
         </div>
       )} />

     </div>
  )}
}

export default BooksApp
