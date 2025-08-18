import React from 'react'
import './product.css'

const Product = () => {

    const products = [
    { id: 1, name: "Laptop", description: "High performance laptop", price: 55000 },
    { id: 2, name: "Mobile", description: "Smartphone with 5G", price: 25000 },
    { id: 3, name: "Headphones", description: "Wireless Bluetooth headphones", 
        price: 3000 },
    { id: 4, name: "Keyboard", description: "Mechanical keyboard", price: 2000 }
  ];
    
  return (
    <div className='product-container'>
        <h2 className='title'>Product List</h2>
        <table className='product-table'>
            <thead>
                <tr>
                    <th>Product ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price (&#8377;)</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product)=>(
                    <tr key = {product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Product