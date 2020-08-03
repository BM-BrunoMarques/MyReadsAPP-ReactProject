import React from 'react'
import '../App.css'
import * as BooksAPI from '../BooksAPI'


/*this component was created to manage the behavior of changing books in between shelfs. 
It's called on the "Main Page" and "Search Page"

When the value from the select box changes it updates the books shelves on the "Main Page",it also updates the search results on the "Search Page" thru "props.UpdSearch", so you can instanly see it's current shelf when changed.
*/

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
    const DefaultSel = (typeof Book.shelf === 'undefined') ? 'none' : Book.shelf
    return (

      <div className={`book-shelf-changer ${Book.shelf}`}>
        <select value={`${DefaultSel}`} onChange={this.moveBookShelf}>
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