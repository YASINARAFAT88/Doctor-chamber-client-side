import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Login = () => {
const location = useLocation()

let from = location.state?.from?.pathname || "/"

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const habdleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password)

        signInWithEmailAndPassword(email, password)
    }
    if(user){
        navigate(from, {replace: true});
    }
    
    const handleSignUp = event =>{
        navigate('/signup')
    }
    return (
        <div className='container w-50 mx-auto mb-5 mt-5 rounded-3 shadow p-3 mb-5 bg-body rounded'>
            <h2 className='text-success text-center'>Please login</h2>
            <Form onSubmit={habdleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3 text-success" controlId="formBasicCheckbox">
                    <Form.Check className='text-success' type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="success" type="submit">
                    Log in
                </Button>
            </Form>
            <p className='mt-3'>New to Doctor Chamber? <Link to='/signup' className='text-danger pe-auto text-decoration-none' onClick={handleSignUp}>Please Sign Up</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;