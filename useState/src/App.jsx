import { useState } from 'react'
import './App.css'

function App() {
  const [hook, setHook] = useState('Bishal Thapaliya is learning React JS.');
  
  const toggleHook = () => {
    hook === 'Bishal Thapaliya is learning React JS.' ? setHook('React JS is Awesome.') : setHook('Bishal Thapaliya is learning React JS.');
  }

  return (
    <>
      <div className='h-dvh w-dvw bg-blue-900 flex flex-col items-center justify-center'>
        <h1 className='text-6xl font-bold text-cyan-300'>{hook}</h1>
        <button className='bg-slate-500 px-3 py-2 rounded-md my-5 text-yellow-200' onClick={toggleHook}>Toggle me</button>
      </div>
    </>
  )
}

export default App
