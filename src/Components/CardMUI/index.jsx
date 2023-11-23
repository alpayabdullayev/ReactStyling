import React from 'react'
import "./index.scss"

function CardMUI({img,name,price}) {
  return (
    <>

      <div className="cards">
        <div className="cardImage">
            <img src={img} alt="" />
        </div>
        <h1>{name}</h1>
        <p>{price}</p>
      </div>

    </>
  )
}

export default CardMUI
