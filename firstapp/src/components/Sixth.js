import React from 'react'

const Sixth = () => {

    //const flowers = ["Rose", "Lilly", "Tulip", "Sunflower", "Jasmine"]
    const flowers = []

  return (
    <div>
        <h2>Conditional + Looping</h2>
        {flowers.length>0?(
        <ul>
            {flowers.map((flower,index) => (
                <li key={index}>{flower}</li>
            ))
            }
        </ul>
        ):(
            <p>No flowers available.</p>
        )
    }
    </div>
  )
}

export default Sixth