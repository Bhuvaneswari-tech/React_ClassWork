import React from 'react'

const Employee = () => {
    const employee = [
        {id: 1, name: "John Doe", dept: "IT"},
        {id: 2, name: "Charles kon", dept: "HR"},
        {id: 3, name: "Eva Maria", dept: "Finance"},
        {id: 4, name: "David Lee", dept: "Admin"},
        {id: 5, name: "Flora", dept: "FrontDesk"}
    ]
  return (
    <div style={{margin: "20px"}}>
        <h2>Product List</h2>
        <table border = "1" cellPadding="10" cellSpacing="0">
            <thead>
                <tr style={{backgroundColor: "#f2f2f2"}}>
                    <th>Employee ID</th>
                    <th>Employee Name</th>
                    <th>Department</th>
                </tr>
            </thead>
            <tbody>
                {employee.map((emp)=>(
                    <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.dept}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Employee