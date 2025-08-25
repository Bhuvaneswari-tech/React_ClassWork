import React from 'react'

//Higher Order Component
const withBorder = (WrappedComponent) => {
    return(props) =>{
        return(
            <div style={{border: "2px solid blue", padding:"10px", borderRadius:"8px"}}>
               <WrappedComponent {...props} />
            </div>
        )
    }
}

//A simple component
const Message = ({text}) =>{
    return <h2>{text}</h2>
}

//Enhance component with HOC
const MessageWithBorder = withBorder(Message);

const Example1 = () => {
  return (
    <div>
        <MessageWithBorder text="Hello, this is inside a HOC!" />
    </div>
  )
}

export default Example1