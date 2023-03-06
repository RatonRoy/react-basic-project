import React from 'react';

const Category = ({ filterCategory, categories }) => {
  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        return (
          <button
            className='filter-btn'
            key={index}
            onClick={() => filterCategory(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Category;