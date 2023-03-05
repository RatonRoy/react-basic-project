import { useState } from 'react';
import './App.css';
import Questions from './components/Questions';
import data from './data'; 

function App() {
 const [questions, setQuestions ] = useState(data)
  
  return (
    <div className='container'>
      <section className='info'>
        {questions.map((question) => (
          <Questions key={question.id} question={question} />
        ))}
      </section>
    </div>
  )
}

export default App;
