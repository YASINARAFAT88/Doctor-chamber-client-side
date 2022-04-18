import React from 'react';
import G from './google.png'
import Git from './github.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error) {
        
        errorElement =  <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
        
      }
      if(user){
          navigate('/home')
      }
    return (
        <div>
            <div className='d-flex align-items-center '>
                <div style={{height: "1px"}} className="bg-success w-50"></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{height: "1px"}} className="bg-success w-50"></div>
            </div>
            {errorElement}
            <button onClick={()=> signInWithGoogle()} className='w-100 btn btn-success mb-3'>
                <img style={{width: "30px"}} src={G} alt="" />
                <span className='px-3'>Google sign in</span> </button>

            <button className='w-100 btn btn-success'>
                <img style={{width: "40px"}} src={Git} alt="" />
                <span className='px-3'>Github sign in</span> </button>
        </div>
    );
};

export default SocialLogin;