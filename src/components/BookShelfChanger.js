import React from 'react'
import '../App.css'
import * as BooksAPI from '../BooksAPI'

class BookShelfChanger extends React.Component {
  
  moveBookShelf = (e) => {
    if (e.target.value !== this.props.Book.shelf){
      BooksAPI.update(this.props.Book, e.target.value)
      .then(() => {
        this.props.reloadBooks()
        if (this.props.SearchPage){
          setTimeout(() => {
            this.props.UpdSearch();
          }, 500)
        }
      })
    }
  }

  render() {
    const {Book} = this.props
    const DefSel = (typeof Book.shelf === 'undefined') ? 'move' : Book.shelf
    return (

      <div className="book-shelf-changer ">
        <select value={`${DefSel}`} onChange={this.moveBookShelf}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>

    )
  }
}

export default BookShelfChanger