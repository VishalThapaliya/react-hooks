import React, { useState } from 'react'
import UserRegistrationForm from './UserRegistrationForm';
import UsersList from './UsersList';


const UsersManagement = () => {
    const userData = [
        {id: 1, firstName: 'Bishal', lastName: 'Thapaliya', age: 35, city: 'Grenoble', country: 'France'},
        {id: 2, firstName: 'Nilkantha', lastName: 'Thapaliya', age: 55, city: 'Kathmandu', country: 'Nepal'},
        {id: 3, firstName: 'Reshu', lastName: 'Shrestha', age: 30, city: 'Washington DC', country: 'USA'},
        {id: 4, firstName: 'Merina', lastName: 'Shrestha', age: 35, city: 'Grenoble', country: 'France'},
        {id: 5, firstName: 'Jayanti', lastName: 'Thapaliya', age: 60, city: 'Gaur', country: 'Nepal'},
        {id: 6, firstName: 'Sawan', lastName: 'Shrestha', age: 33, city: 'Paris', country: 'France'},
        {id: 7, firstName: 'Shristhi', lastName: 'Thapa', age: 27, city: 'Munich', country: 'Germany'},
        {id: 8, firstName: 'Shriyank', lastName: 'Thapaliya', age: 35, city: 'Grenoble', country: 'France'},
        {id: 9, firstName: 'Nisha', lastName: 'Shrestha', age: 55, city: 'Butwal', country: 'Nepal'},
        {id: 10, firstName: 'Veer', lastName: 'Sharma Osman', age: 45, city: 'Ankara', country: 'Turkey'}
    ]

    const [allUsers, setAllUsers] = useState(userData);
    
    return (
        <div className="flex justify-between gap-5 border-2">
            <UserRegistrationForm setAllUsers={setAllUsers} allUsers={allUsers} />
            <UsersList allUsers={allUsers} />
        </div>
    )
}

export default UsersManagement