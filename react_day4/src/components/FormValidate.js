import React, { useState } from 'react'

const FormValidate = () => {

    const [form, setform] = useState({
        name:'',
        email:'',
        password:'',
        phone:''
    })

    const [errors, setErrors] = useState([])

    //Validation function
    const validate = () =>{
        let newErrors = {};

        //Required Field Validation
        if(!form.name.trim()){
            newErrors.name = "Name is required"
        }

        if(!form.email.trim()){
            newErrors.email = "Email is required"
        }

        if(!form.password.trim()){
            newErrors.password = "Password is required"
        }

        if(!form.phone.trim()){
            newErrors.phone = "Phone number is required"
        }

        //2. Format Validation(Email) - bhuvana123@example.com
        if(form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)){
            newErrors.email = "Invalid Email format";
        }

        //3. Length Validation (Password min 6, max 12)
        if(form.password && (form.password.length<6 || form.password.length>12)){
            newErrors.password = "Password must be 6-12 characters long."
        }

        //4. Pattern Validation(Phone number: only 10 digits)
        if(form.phone && !/^\d{10}$/.test(form.phone)){
            newErrors.phone = "Phone must be exactly 10 digits"
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    const handleChange = (e) =>{
        setform({...form, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(validate()){
            alert("Form submitted successfully!")
        }
    }
  return (
    <div style={{maxWidth:'400px',margin:'auto'}}>
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type='text' name='name' value={form.name} onChange={handleChange} />
                {errors.name && <p style={{color:'red'}}>{errors.name}</p>}
            </div><br />

            <div>
                <label>Email:</label>
                <input type='email' name='email' value={form.email} onChange={handleChange} />
                {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
            </div><br />

            <div>
                <label>Password:</label>
                <input type='password' name='password' value={form.password} onChange={handleChange} />
                {errors.password && <p style={{color:'red'}}>{errors.password}</p>}
            </div><br />

            <div>
                <label>Phone:</label>
                <input type='number' name='phone' value={form.phone} onChange={handleChange} />
                {errors.phone && <p style={{color:'red'}}>{errors.phone}</p>}
            </div><br />

            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default FormValidate