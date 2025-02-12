import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Footer = () => {
    const { name, phone  } = useContext(AppContext);

    return (
        <div>
            <h4>Name: {name}</h4>
            <h4>Phone: {phone}</h4>
        </div>
    )
}

export default Footer