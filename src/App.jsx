import { useState } from 'react'
import './App.css'
import './test.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='underline'>starter</h1>
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, nam!</p>

    </>
  )
}

export default App
