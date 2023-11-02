import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './validation/LoginValidation';
import Navbar from './NavBar'; 

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const [errors, setErrors] = useState({});
    const handleInput = (event) => {
        setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = Validation(values);
        if (Object.values(validationErrors).every((error) => error === '')) {
          fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              navigate('/home');
            })
            .catch((err) => console.log(err));
        } else {
          setErrors(validationErrors);
          alert("No record existed");
        }
      };    

    return (
        <div>
            <Navbar /> 
            <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
                <div className='bg-white p-3 rounded w-50'>
                    <h2>Log in</h2>
                    <form action='' onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label htmlFor='email'> <strong>Email</strong> </label>
                            <input
                                type='email'
                                placeholder='Email'
                                name='email'
                                onChange={handleInput}
                                className='form-control rounded-0'
                            />
                            {errors.email && <span className='text-danger'> {errors.email}</span>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='password'> <strong>Password</strong> </label>
                            <input
                                type='password'
                                placeholder='Password'
                                name='password'
                                onChange={handleInput}
                                className='form-control rounded-0'
                            />
                            {errors.password && <span className='text-danger'> {errors.password}</span>}
                        </div>
                        <button type='submit' className='btn btn-success w-100'>
                            Log in
                        </button>
                        <Link to='/signup' className='btn btn-default border w-100 bg-light text-decoration-none '>
                            Create account
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
