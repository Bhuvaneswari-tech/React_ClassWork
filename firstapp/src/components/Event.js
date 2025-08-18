import React from 'react'

const display = event =>alert(event.target.id)

const Event = () => {
  return (
    <div>
        <h1>Adding Events to Elements</h1>
        <button id="myID" onClick={display}>Click Here</button>
    </div>
  )
}

export default Event