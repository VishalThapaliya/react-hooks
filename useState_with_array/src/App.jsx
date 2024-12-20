import React, { useState } from 'react'

const App = () => {
  const userData = [
    {id: 1, name: 'Bishal Thapaliya', age: 35, city: 'Grenoble', country: 'France'},
    {id: 2, name: 'Nilkantha Thapaliya', age: 55, city: 'Kathmandu', country: 'Nepal'},
    {id: 3, name: 'Reshu Shrestha', age: 30, city: 'Washington DC', country: 'USA'},
    {id: 4, name: 'Merina Shrestha', age: 35, city: 'Grenoble', country: 'France'},
    {id: 5, name: 'Jayanti Thapaliya', age: 60, city: 'Gaur', country: 'Nepal'},
    {id: 6, name: 'Sawan Shrestha', age: 33, city: 'Paris', country: 'France'},
    {id: 7, name: 'Shristhi Thapa', age: 27, city: 'Munich', country: 'Germany'},
    {id: 8, name: 'Shriyank Thapaliya', age: 35, city: 'Grenoble', country: 'France'},
    {id: 9, name: 'Nisha Shrestha', age: 55, city: 'Butwal', country: 'Nepal'},
    {id: 10, name: 'Veer Sharma Osman', age: 45, city: 'Ankara', country: 'Turkey'}
  ]

  const [userInfo, setUserInfo] = useState(userData);

  const clearUserInfo = () => {
    setUserInfo([]);
  }

  return (
    <>
      {
        userInfo && userInfo.length ? (
          <div className="flex flex-wrap gap-4 justify-start px-5 py-5">
            {
              userInfo.map((user) => (
                <div 
                  key={user.id}
                  className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h2 className='text-blue-900 text-lg font-bold'>{user.name}</h2>
                  <p>{user.age}</p>
                  <div>{user.city}, <span>{user.country}</span> </div>
                  
                </div>
              ))   
            }
          </div>
        ) : (
          <div>No user data found!!!</div>
        )
      }
      { 
        userInfo && userInfo.length ? (
          <div className="m-5 flex justify-center">
            <button className='rounded-md py-2 px-4 bg-cyan-600 text-white' onClick={clearUserInfo}>
              Clear user info
            </button>
          </div>
          
        ) : ('')
      } 
    </>
  )
}

export default App