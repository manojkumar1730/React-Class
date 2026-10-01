import React, { useState } from 'react'
import { bookData } from './bookData'
import './book.css'
import BookCard from './BookCard'


const DisplayBookCard = () => {
    let [bookDataArray, setBookDataArray] = useState(bookData)
    return (
        <div className="book-system">
            <h1>Book Management System</h1>
            <div className="books">
                {
                    bookDataArray.map((book, index) => {
                        let { id, name, img, count,description} = book;
                        return (

                            <div className='display-book' key={index} >
                                <BookCard book={book} index={index} />
                                
                            </div>
                        )

                    })

                }
            </div>
        </div>
    )
}

export default DisplayBookCard