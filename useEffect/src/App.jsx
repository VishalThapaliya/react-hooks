import { useEffect, useState } from 'react'
import './App.css'
import CleanUp from './components/CleanUp';

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if(count <= 0) {
      document.title = `Count`;  
    } else {
      document.title = `Count (${count})`;
    }
  }, [count]);

  return (
    <>
      {/* <div>
        <h1>useEffect Hook</h1>
        <p>This Hook is used to perform side effects in your components. The useEffect hook contains a callback function that comes into effect when the page loads. It allows us to execute some functions when a component gets updated.</p>
        
        <h2>useEffect Dependency array</h2>
        <p>The useEffect manages an array that contains the state variables or functions which are kept an eye for any changes. These changes then trigger the callback function.</p>

        <strong>Empty array</strong>
        <p>The most basic dependency array would be an empty array. The empty array indicates that the useEffect doesn’t have any dependencies on any state variables. Therefore, the callback function is only called once the page renders in this case.</p>

        <strong>Array containing dependencies</strong>
        <p>Single State variable: If the array contains a state variable, the useEffect callback function gets triggered on 2 occasions. First, when the page renders and whenever the state variable is updated.</p>
        
        
        <p>Click on the button below to increase count.</p> 
        <p>The moment the count is increased, the page title will be updated with the current count value.</p>
        <pre>In this example, the count state is included in the dependency array, therefore whenever the counter state is updated i.e setCount(count + 1), the useEffect callback function is triggered and the value of the count is displayed.</pre>
        
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div> */}

      <CleanUp />
    </>
  )
}

export default App
