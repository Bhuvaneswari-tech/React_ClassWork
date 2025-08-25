import React, { useEffect, useState } from 'react'

const withData = (url) =>(WrappedComponent) =>{
    return function DataComponent(props){
        const [data, setData] = useState(null)

        useEffect(()=>{
            fetch(url)
            .then(res=>res.json())
            .then(data=>setData(data))
        },[url])
        if(!data) return <h3>Loading data...</h3>
        return <WrappedComponent {...props} data={data} />
    }
    
}

const PostList = ({data}) =>(
    <ul>{data.map((post)=> <li key={post.id}>{post.title}</li>)}</ul>
)

const PostListWithData = withData('https://jsonplaceholder.typicode.com/posts')(PostList)
const Example6 = () => {
  return (
    <div>
        <PostListWithData />
    </div>
  )
}

export default Example6