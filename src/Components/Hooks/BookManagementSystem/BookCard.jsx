// BookCard.jsx
import React, { useState } from 'react'
import './book.css'

const BookCard = ({ book }) => {
  const { id, name, img, count, description } = book
  const [cnt, setCnt] = useState(count)
  const [flipped, setFlipped] = useState(false)

  const handleGet = () => {
    cnt > 0 ? setCnt(cnt - 1) : alert('OUT OF STOCK')
  }
  const handleReturn = () => {
    cnt < count ? setCnt(cnt + 1) : alert('STACK IS FULL')
  }

  return (
    <div className="display-book">
      <div className="main">
        <div className="container" onClick={() => setFlipped(!flipped)}>
          {flipped ? (
            <>
              <h2>Book Description</h2>
              <p className="desc">{description}</p>
            </>
          ) : (
            <>
              <h2>Book Number :- {id}</h2>
              <h3>Book Name :- {name}</h3>
              <img src={img} alt={name} />
            </>
          )}
        </div>
        <h5>Copies Available = {cnt}</h5>
        <button className="btn1" onClick={handleGet}>GET</button>
        <button className="btn2" onClick={handleReturn}>RETURN</button>
      </div>
    </div>
  )
}

export default BookCard