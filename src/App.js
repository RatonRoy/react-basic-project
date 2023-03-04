import './App.css'
import data from './data'
import { useState } from 'react'
import PeopleList from './components/PeopleList'

function App() {
  const [people, setPeople] = useState(data)

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        {people.map((person) => (
          <PeopleList key={person.id} person={person} />
        ))}
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  )
}

export default App
