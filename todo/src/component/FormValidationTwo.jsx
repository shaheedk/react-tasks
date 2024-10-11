import React, { useState } from "react";

function FormValidationTwo() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formData);
    setFormErrors(errors);
    setIsSubmit(true);

 
    if (Object.keys(errors).length === 0) {
      alert("Submission success");
    }
  };

  const validate = (values) => {
    let formErrors = {};

    if (!values.username) {
      formErrors.username = "Username is required";
    }

    if (!values.email) {
      formErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      formErrors.email = "This is not a valid email format";
    }

    if (!values.password) {
      formErrors.password = "Password is required";
    } else if (values.password.length < 6) {
      formErrors.password = "Password must be greater than 6 characters";
    }

    if (!values.confirmPassword) {
      formErrors.confirmPassword = "Confirm Password is required";
    } else if (values.confirmPassword !== values.password) {
      formErrors.confirmPassword = "Passwords do not match";
    }

    return formErrors;
  };

  return (
    <div>
      <div className="form">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <h4>Login Page</h4>
          <label>Username</label>
          <p>{formErrors.username && <span>{formErrors.username}</span>}</p>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={onHandleChange}
          />
         

          <label>Email</label>
          <p>{formErrors.email && <span>{formErrors.email}</span>}</p>
          <input
            type="text"
            name="email"
            placeholder="Example@gmail.com"
            value={formData.email}
            onChange={onHandleChange}
          />
       

          <label>Password</label>
          <p>{formErrors.password && <span>{formErrors.password}</span>}</p>
          <input
            type="password"
            name="password"
            placeholder="********"
            value={formData.password}
            onChange={onHandleChange}
          />
          

          <label>Confirm Password</label>
          <p>{formErrors.confirmPassword && <span>{formErrors.confirmPassword}</span>}</p>
          <input
            type="password"
            name="confirmPassword"
            placeholder="********"
            value={formData.confirmPassword}
            onChange={onHandleChange}
          />
        

          <br /> <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default FormValidationTwo;
