import React from 'react'
import '../App.css'
import Book from './Book'

const CategoryAlias = ["wantToRead", "currentlyReading", "read"];
const CategoryTitle = ["Want To Read", "Currently Reading", "Read"];


class ListBooksPerCategory extends React.Component {

  render() {
    const {Books, BookShelf} = this.props
    return (
      <div>
        {CategoryAlias.map((category, index) => (
        <div key={category}>
          <div className="list-books-content">
            <div className="bookshelf">
              <h2 className="bookshelf-title">{CategoryTitle[index]}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {Object.values(Books).filter(book => book.shelf === category).map((booke) => 
                    <li key={booke.id}>
		  	          <Book Book={booke} reloadBooks={this.props.reloadBooks} />
                    </li>                                                              
                  )}
                </ol>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    )
  }
}

export default ListBooksPerCategory