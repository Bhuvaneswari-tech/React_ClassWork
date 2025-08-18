import React from 'react'

const Fifth = () => {
    const isAdmin = true;
  return (
    <div>
        <h2>Ternary Example</h2>
        <p>{isAdmin ? "You are an Admin." : "You are a Guest. "}</p>
    </div>
  )
}

export default Fifth