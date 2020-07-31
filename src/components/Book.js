import React from 'react'
import '../App.css'
import BookShelfChanger from './BookShelfChanger'


  class Book extends React.Component {

  render() {
    const {Book} = this.props
    const CatTitle = Book.shelf == 'wantToRead' ? 'Want To Read' : Book.shelf == 'currentlyReading' ? 'Currently Reading' : Book.shelf == 'read' ? 'Read' : ''
    return (
      
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${Book.imageLinks.smallThumbnail})` }}></div>
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