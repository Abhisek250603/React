import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, abhisekCounter] = useState(0)

  // let counter = 12

  const addValue = () => {
    counter += 1
    if (counter > 20) {
      counter = 20
    }
    abhisekCounter(counter)
  }

  const removeValue = () => {
    counter -= 1
    if (counter < 0) {
      counter = 0
    }
    abhisekCounter(counter)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br /><br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
