import React, { useEffect, useState } from 'react'

export default function FormValidation() {
  const initialValues = { username: '', email: '', password: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const[isSubmit,setIsSubmit]=useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
 setIsSubmit(true)
  };
 useEffect(()=>{
  console.log(formErrors)
  if (Object.keys(formErrors).length===0 && isSubmit){
    console.log(formValues)
  }
},[formErrors])

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.username) {
        errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
  }else if(!regex.test(values.email)){
    errors.email="this is not valid email format"
  }
  if (!values.password) {
    errors.password= "Password is required!";
}else if(values.password<4){
errors.password="Password must be more than 4 characters"
}

  }

  return (
    <div>
      <div className="form">
        <pre>{JSON.stringify(formValues)}</pre>
        <form onSubmit={handleSubmit}>
          <h4>Loggin Page</h4>
          <label>Username</label>
          <p>{formErrors.username}</p>
          <input type="text" name='username' placeholder='Username' value={formValues.username} onChange={handleChange} />
          <label>Email</label>
          <p>{formErrors.email}</p>
          <input type="text" name='email' placeholder='Email' value={formValues.email} onChange={handleChange} />
          <label>Password</label>
          <p>{formErrors.password}</p>
          <input type="text" name='password' placeholder='Password' value={formValues.password} onChange={handleChange} /> <br /> <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

