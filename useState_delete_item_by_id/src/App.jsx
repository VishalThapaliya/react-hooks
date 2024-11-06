import { useState } from 'react'
import './App.css'

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

  const [users, setUsers] = useState(userData);

  const deleteItem = (id) => {
    const newUsers = users.filter((user) => user.id !== id);

    setUsers(newUsers);
  }

  return (
    <>
      {  users.length > 0 && 
      <table className="w-full text-left table-auto min-w-max">
        <thead>
          <tr>
            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Name</th>
            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Age</th>
            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">City</th>
            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Country</th>
            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.city}</td>
                <td>{user.country}</td>
                <td>
                  <button 
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => deleteItem(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      }

      { users.length > 0 || 
        <h1 className="m-4 text-2xl font-bold leading-none tracking-tight text-gray-600 md:text-2xl lg:text-3xl dark:text-white">No users data found!!!</h1>
      }
    </>
  )
}

export default App
