import React from 'react'

//HOC
const withLoader = (WrappedComponent) =>{
    return function LoaderComponent({loading, ...props}){
        if(loading){
            return <h3>Loading...</h3>
        }
        return <WrappedComponent {...props} />
    }
}

//Simple component
const UserList = ({users}) =>(
    <ul>{users.map((u,i) => <li key={i}>{u}</li>)}</ul>
)

const UserListWithLoader = withLoader(UserList)

const Example3 = () => {
  return (
    <div>
        <UserListWithLoader loading={false} users={["user1","user2","user3"]} />
    </div>
  )
}

export default Example3