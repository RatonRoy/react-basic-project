import React from 'react'

const PeopleList = ({ person }) => {
  const { name, id, image, age } = person

  return (
    <section>
      <article className='person'>
        <img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>{age} years</p>
        </div>
      </article>
    </section>
  )
}

export default PeopleList
