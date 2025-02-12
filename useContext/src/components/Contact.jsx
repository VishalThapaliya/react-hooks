import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'


const Contact = () => {
    const {name, phone} = useContext(AppContext);
  return (
    <div>
        <h3>Name: {name}</h3>
        <h3>Phone: {phone}</h3>
    </div>
  )
}

export default Contact