import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <div className='header'>
        <h2>Goods | <a href="Category.jsx">Link to code on GitHub</a></h2>
        {/* значок корзины */}
        {/* <div className='div_icon'>
          <FontAwesomeIcon icon={faBasketShopping} className="fa-2x fa2"/>
        </div> */}
    </div>
  )
}
