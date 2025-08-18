import React from 'react'
import './First.css'

// const divStyle = {
//     color: 'red'
// }

const message = "Creating the First Component";
const items = ['Pen', 'Book','Table','Board','Bottle']

const First = () => {
  return (
    <div className='container'>
        <h1 id="myId">{message.toLowerCase()}</h1>
        <p>Welcome to Landing page of my application.</p>
        <select>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">Coconut</option>
            <option value="mango">Mango</option>
        </select>

        <ul>
            {items.map((item,index)=>(
                <li key="{index}">{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default First

//rafce - react arrow functional component with export default