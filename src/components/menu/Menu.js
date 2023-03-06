import React from 'react'

const Menu = ({ item }) => {
  const { title, category, img, desc, price } = item
  return (
    <article className='menu-item'>
      <img src={img} alt={title} className='photo' />
      <div className='menu-info'>
        <header>
          <h4 className=''> {title} </h4>
          <h4 className='price'> ${price} </h4>
        </header>
        <p className='item-text'>{desc}</p>
      </div>
    </article>
  )
}

export default Menu
