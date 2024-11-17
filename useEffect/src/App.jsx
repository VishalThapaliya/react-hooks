import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if(count <= 0) {
      document.title = `Count`;  
    } else {
      document.title = `Count (${count})`;
    }
  });

  return (
    <>
      <div>
        <h1>useEffect Hook</h1>
        <p>Click on the button below to increase count.</p> 
        <p>The moment the count is increased, the page title will be updated with the current count value.</p>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
    </>
  )
}

export default App
