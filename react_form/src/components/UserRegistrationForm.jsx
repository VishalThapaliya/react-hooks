import React, { useState } from 'react'

const UserRegistrationForm = ({ setAllUsers, allUsers }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const generateRandomId = () => Math.floor(Math.random() * 1000000);
    
    const registerUser = (e) => {
        e.preventDefault();
        const newUser = {
            id: generateRandomId(),
            firstName, 
            lastName, 
            age, 
            city, 
            country
        }

        setAllUsers([...allUsers, newUser]);
        resetFormFields();
    }

    const resetFormFields = () => {
        setFirstName('');
        setLastName('');
        setAge('');
        setCity('');
        setCountry('');
    }


    return (
        <div className="w-2/4">
            <h1 className="text-3xl font-bold underline">
                Register a new user
            </h1>

            <form className="w-full max-w-lg mt-5" onSubmit={registerUser}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            First Name
                        </label>
                        <input 
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                            id="grid-first-name" 
                            type="text" 
                            placeholder="Jane" 
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Last Name
                        </label>
                        <input 
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            id="grid-last-name" 
                            type="text" 
                            placeholder="Doe" 
                        />
                    </div>
                </div>
            
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-age">
                            Age
                        </label>
                        <input
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            id="grid-age" 
                            type="number" 
                            placeholder="90210" 
                        />
                    </div>
                    
                    <div className="w-full md:w-2/4 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                            City
                        </label>
                        <input
                            value={city}
                            onChange={(e) => setCity(e.target.value)} 
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            id="grid-city" 
                            type="text" 
                            placeholder="Grenoble" 
                        />
                    </div>
                    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                            Country
                        </label>
                        <div className="relative">
                            <select 
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="grid-state"
                            >
                                <option>Nepal</option>
                                <option>France</option>
                                <option>Germany</option>
                                <option>Australia</option>
                                <option>Canada</option>
                                <option>USA</option>
                                <option>Spain</option>
                                <option>UK</option>
                                <option>Japan</option>
                                <option>Turkey</option>
                                <option>India</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4"  viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className="flex justify-center items-center py-2">
                    <button 
                        className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded" 
                        type="submit"
                    >
                        + Add user
                    </button>
                </div>
            </form>

        </div>
    )
}

export default UserRegistrationForm