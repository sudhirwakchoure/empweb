import React, { useState } from "react";
import"../App.css";
export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};
    if (!name) {
      errors.name = "Name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length <4) {
      errors.password = "Password must be at least 4 characters long";
    }
    if (!confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (confirmPassword !== password) {
      errors.confirmPassword = "Passwords do not match";
    }
    if (Object.keys(errors).length === 0) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      fetch(`http://localhost:8081/employees`, {
        method: "POST",
        body:  JSON.stringify({
          //id: id,
          name:name,
          email:email,
          password:password,
      }), 
       headers: {
        'Content-type': 'application/json; charset=UTF-8',
     }, 
        }).then((response) => {
            if(response.status===200){
              alert("Succsefully Register")
            }else{
              alert("try Again")
            }
          // Handle the response from the backend API
          console.log(response);
        })
        .catch((error) => {
          // Handle any errors that occur during the fetch request
          console.log(error);
        });
    } else {
      setErrors(errors);
    }
  };
    

  return (

    <div className="posts-container">
    <h2>Register</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <div>{errors.name}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <div>{errors.email}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <div>{errors.password}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errors.confirmPassword && <div>{errors.confirmPassword}</div>}
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

