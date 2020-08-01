import React from 'react'
import '../App.css'
import BookShelfChanger from './BookShelfChanger'

/*this component was created to return a book in the desired format.
It's called on the "Main Page" and "Search Page"


*/

  class Book extends React.Component {

  render() {
    
    const {Book} = this.props;
    
//I chose to define CatTitle like this, so it would be possible to show in which shelf the book is on the "Search Page" 
    const CatTitle = Book.shelf === 'wantToRead' ? 'Want To Read' 
                     : Book.shelf === 'currentlyReading' ? 'Currently Reading' 
                     : Book.shelf === 'read' ? 'Read' 
                     : '';
// I am replacing http with https on the Book cover image, to avoid a 'Mixed Content' warning    
    const imgThumb = Book.imageLinks ? Book.imageLinks.smallThumbnail.replace("http://", "https://") : null;

    return (
      
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imgThumb})` }}>{imgThumb === null && (<span>?</span>)}</div>
          <BookShelfChanger Book={Book} reloadBooks={this.props.reloadBooks} UpdSearch={this.props.UpdSearch} SearchPage={this.props.SearchPage} />
        </div>

        <div className="book-title">{Book.title}</div>
        <div className="book-authors">{Book.publisher}</div>

        {typeof Book.shelf !== 'undefined' && (
          <div className="shelf">
            <div className={`${Book.shelf}`}>{`${CatTitle}`}</div>
          </div>
        )}
      </div>
    )
  }
}

export default Book