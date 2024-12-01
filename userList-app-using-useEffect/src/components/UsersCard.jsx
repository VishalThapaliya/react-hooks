import React, { useEffect, useState } from 'react'

const UsersCard = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const users = await fetch(`https://api.github.com/users`);
        const usersData = await users.json();
        console.log(usersData)
        setUsers(usersData);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <h2>Github Users</h2>

            <div className="max-w-full w-screen h-screen flex justify-between items-center flex-wrap gap-4">
                {
                    users.map((user) => {
                        return(
                            <div className="container mx-auto max-w-sm rounded-lg overflow-hidden shadow-lg my-2 bg-white" key={user.id}>
                                <div className="relative z-10">
                                    <img className="w-full" src={user.avatar_url} alt="Profile image" />
                                    <div className="text-center absolute w-full">
                                        <p className="text-gray-400 tracking-wide uppercase text-lg font-bold">{user.login}</p>
                                    </div>
                                </div>
                                <div className="relative flex justify-between items-center flex-row px-6 z-50 -mt-10">
                                    <button className="p-4 bg-red-600 rounded-full hover:bg-red-500 focus:bg-red-700 transition ease-in duration-200 focus:outline-none">
                                        <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="w-6 h-6">
                                        <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                                                C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                                                C15.952,9,16,9.447,16,10z" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="pt-6 pb-8 text-gray-600 text-center">
                                    <p>Profile: {user.type}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default UsersCard