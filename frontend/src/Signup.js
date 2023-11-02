import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './validation/SignupValidation';
import NavBar from './NavBar';

function Signup() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    fullName: '',
    position: '',
    phone: '',
    address: '',
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);

    if (values.email && values.password && values.fullName && 
      values.position && values.phone && values.address) {
      // Send user data to the server for authentication
      fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
    })
        .then((response) => response.json())
        .then((data) => {
        //if (data === 'Success') {
            // User's credentials are valid; navigate to the next page
            navigate('/');
        //} else {
            // User's credentials are not valid; display an alert
        //    alert('Invalid email or password');
        })
        //})
        .catch((err) => console.log(err));
    } else {
    setErrors(validationErrors);
    }
};

  return (
    <div>
      <NavBar />
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 m-3 rounded w-25">
        <h2>Sign up</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.email && <span className="text-danger"> {errors.email}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.password && <span className="text-danger"> {errors.password}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="fullName">
              <strong>Full name</strong>
            </label>
            <input
              type="text"
              placeholder="Full name"
              name="fullName"
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.fullName && <span className="text-danger"> {errors.fullName}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="position">
              <strong>Position</strong>
            </label>
            <input
              type="text"
              placeholder="Position"
              name="position"
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.position && <span className="text-danger"> {errors.position}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="phone">
              <strong>Phone number</strong>
            </label>
            <input
              type="tel"
              placeholder="Phone number"
              name="phone"
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.phone && <span className="text-danger"> {errors.phone}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="address">
              <strong>Address</strong>
            </label>
            <input
              type="text"
              placeholder="Address"
              name="address"
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.address && <span className="text-danger"> {errors.address}</span>}
          </div>
          <button type="submit" className="btn btn-success w-100">
            Sign up
          </button>
          <Link to="/" className="btn btn-default border w-100 bg-light text-decoration-none">
            Log in
          </Link>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Signup;
