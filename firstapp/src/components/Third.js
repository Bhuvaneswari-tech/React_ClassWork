import React from 'react'

const displayBlock1 = true
const displayBlock2 = false

const Third = () => {
  return (
    <div>
        {displayBlock1 && <h1>I am Block1</h1>} {/*true && true*/}
        {displayBlock2 && <h1>I am Block2</h1>} {/*false && true*/}
    </div>
  )
}

export default Third