import './App.css'
import items from './data'
import { useState } from 'react'
import Category from './components/Category/Category'
import Menu from './components/menu/Menu'

const allCategory = ['all', ...new Set(items.map((item) => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategorys] = useState(allCategory)

  const filterCategory = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }

    const filterMenu = items.filter((item) => item.category === category)
    setMenuItems(filterMenu)
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h1> Our Menu </h1>
          <div className='underline'></div>
        </div>
        <Category categories={categories} filterCategory={filterCategory} />
        <div className='section-center'>
          {menuItems.map((item) => (
            <Menu key={item.id} item={item} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
