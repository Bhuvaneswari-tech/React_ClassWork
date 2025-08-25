import React, { useEffect } from 'react'

const withLogger = (WrapperComponent) => {
    return function LoggerComponent(props){
        useEffect(()=>{
            console.log("Props received: ", props)
        },[props])
        return <WrapperComponent {...props} />
    }
}

const Profile = ({name}) => <h2>Hello, {name}</h2>

const ProfileWithLogger = withLogger(Profile)
const Example4 = () => {
  return (
    <div>
        <ProfileWithLogger name="Bhuvaneswari" />
    </div>
  )
}

export default Example4