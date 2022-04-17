import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const emailRef = useRef('')
    const passwordRef = useRef('')
    const nameRef = useRef('')
    const confirmPasswordRef = useRef('')
    const navigate = useNavigate();
    const navigateLogin = () =>{
        navigate('/login')
    }
    const habdleSubmit = event =>{
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        console.log(email, password, name, confirmPassword)

        createUserWithEmailAndPassword(email, password)
    }
    if(user){
        navigate('/about')
    }
    return (
        <div className='container w-50 mx-auto mb-5 mt-5 rounded-3 shadow p-3 mb-5 bg-body rounded'>
        <h2 className='text-success text-center'>Please SignUp</h2>
        <Form onSubmit={habdleSubmit}>
       
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control ref={nameRef} type="Text" placeholder="Enter Name" required/>  
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>  
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control ref={confirmPasswordRef} type="password" placeholder="Confirm Password" required/>
            </Form.Group>
            <Form.Group className="mb-3 text-success" controlId="formBasicCheckbox">
                <Form.Check className='text-success' type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="success" type="submit">
                Sign Up
            </Button>
        </Form>
        <p className='mt-3'>All Ready Have an Accounts? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
    </div>
    );
};

export default SignUp;