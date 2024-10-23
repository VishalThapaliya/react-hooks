import { useState } from 'react'
import './App.css'

function App() {
  const [hook, setHook] = useState(true);

  return (
    <>
      <div className='h-dvh w-dvw bg-blue-900 flex flex-col items-center justify-center'>
        <h1 className='text-6xl font-bold text-cyan-300'>{hook ? 'Hook' : 'useState hook'} in React</h1>
        <button className='bg-slate-500 px-3 py-2 rounded-md my-5 text-yellow-200' onClick={() => setHook(!hook)}>Click me</button>
      </div>
    </>
  )
}

export default App
