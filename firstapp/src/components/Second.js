import React from 'react'

const Second = () => {
    const items = [
        {name: "Pen" , price: "$10"},
        {name: "Book" , price: "$12"},
        {name: "Table" , price: "$15"}
    ]
  return (
    <div>
        <ul>
            {
                items.map(item => (
                    <li key={item.name}>
                        Name: <span id={item.name}>{item.name}</span>&nbsp;&nbsp;
                        Price: <span id={item.price}>{item.price}</span>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Second