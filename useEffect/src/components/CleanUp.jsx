import React, { useEffect, useState } from 'react'

const CleanUp = () => {
    const [windowWidth, setWindowWidth] = useState(window.screen.width);
    
    const actualWidth = () => {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
       window.addEventListener('resize', actualWidth); 

       return () => {
        window.removeEventListener('resize', actualWidth); 
       }
    }, [windowWidth]);

    return (
        <div>
            <h1>React’s useEffect cleanup function</h1>
            <p>React’s <code>useEffect</code> cleanup function saves applications from unwanted behaviors like memory leaks by cleaning up effects. In doing so, we can optimize our application’s performance.
            To follow along with this article, you should have a basic understanding of what <code>useEffect</code> is, including using it to fetch APIs.</p>

            <pre>
                <p>The useEffect Hook is designed to allow the return of a function within it, which serves as a cleanup function.</p>
                <p>The cleanup function prevents memory leaks — a situation where your application tries to update a state memory location that no longer exists — and removes unnecessary and unwanted behaviors.</p>
            Note that you don’t update the state inside the return function either:</pre>

            <h3>The actual size of the window is: </h3>
            <h1>{windowWidth}</h1>
        </div>
    )
}

export default CleanUp