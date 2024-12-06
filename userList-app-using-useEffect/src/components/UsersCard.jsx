import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import { FaGithub } from "react-icons/fa6";
import { FcApproval } from "react-icons/fc";

const UsersCard = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUsers = async () => {
        try {
            const users = await fetch(`https://api.github.com/users`);
            const usersData = await users.json();
            setUsers(usersData);
            setLoading(false);
        } catch(error) {
            setLoading(false);
            console.log("Error : ", error);
        }
        
    }

    useEffect(() => {
        getUsers();
    }, []);

    if(loading) {
        return <Loading />
    }

    return (
        <>
            <h2 className='text-3xl flex justify-center items-center gap-2 m-4'><FaGithub /> Github Users</h2>

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
                                    <button className="p-4 verified-icon">
                                        <FcApproval />
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