import React from 'react'

//HOC component
const withAuth = (WrappedComponent) =>{
    return function AuthComponent(props){
        const isLoggedIn =  props.isLoggedIn; //coming from parent
        if(!isLoggedIn){
            return <h2>Please Login to continue.</h2>
        }
        return <WrappedComponent {...props} />
    }
}

//Simple Component
const Dashboard = () => <h2>Welcome to Dashboard</h2>

//Enhance component to HOC
const ProtectedDashboard = withAuth(Dashboard)

const Example2 = () => {
  return (
    <div>
        <ProtectedDashboard isLoggedIn={true} />
    </div>
  )
}

export default Example2