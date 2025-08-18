import React from 'react'

const Fourth = () => {
    const isLoggedIn = true;

    let message;

    if(isLoggedIn){
        message = "Welcome back, User!";
    }
    else{
        message = "Please log in to continue."
    }
  return (
    <div className='App'>
        <h2>Login Checking</h2>
        <p>{message}</p>
    </div>
  )
}

export default Fourth