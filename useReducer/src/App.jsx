
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useReducer } from 'react'

function App() {
  const reducer = (state, action) => {
    if(action.type === 'increment_count') {
      return state + 1;
    } else if(action.type === 'decrement_count') {
      return state - 1;
    }

    return state;
  }
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>The useReducer Hook</h1>
      <h2>Count: {state}</h2>
      <div className="card">
        <button onClick={() => { dispatch({ type: 'increment_count' }) }}>Increment</button>
        <button onClick={() => { dispatch({ type: 'decrement_count' }) }}>Decrement</button>
      </div>   
    </>
  )
}

export default App
