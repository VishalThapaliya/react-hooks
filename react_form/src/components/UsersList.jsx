import React from 'react'

const UsersList = ({ allUsers }) => {
    return (    
        <div className="w-3/4">
            <h1 className="text-3xl font-bold underline">Users</h1>
            <div className="flex flex-wrap gap-1 justify-start px-5 py-2">
                {
                    allUsers.map((user) => (
                        <div 
                            key={user.id}   
                            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                        >
                            <div className='flex justify-between'>
                                <h2 className='text-blue-900 text-lg font-bold'>
                                    {user.firstName} {user.lastName}
                                </h2>
                                
                            </div>
                            
                            <p>Age: {user.age}</p>
                            <div>{user.city}, <span>{user.country}</span> </div>
                        </div>
                    ))   
                }
        </div>
            
        </div> 
 
    )
}

export default UsersList