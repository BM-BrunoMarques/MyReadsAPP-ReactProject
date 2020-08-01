import React from 'react'
import '../App.css'
import Book from './Book'

/*this component was created to List the 3 existing categories along with its books. 
It's called on the "Main Page"
*/

class ListBooksPerCategory extends React.Component {

  render() {
    const {Books, CategoryTitle, category, index, reloadBooks} = this.props
    return (
      <div>
          <div className="list-books-content">
            <div className="bookshelf">
              <h2 className="bookshelf-title">{CategoryTitle[index]}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {Object.values(Books).filter(book => book.shelf === category).map((booke) => 
                    <li key={booke.id}>
                      <Book Book={booke} reloadBooks={reloadBooks} />
                    </li>                                                              
                  )}
                </ol>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default ListBooksPerCategory