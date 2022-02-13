import React, { useState } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthencation from './Firebase/firebase.init';


initializeAuthencation();
const provider = new GoogleAuthProvider();



const SigninGoogle = () => {
    const [user, setUser] = useState({});

    const handlegoogleSignin = () => {
        const auth = getAuth();

        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user);
            })

    }

    return (
        <>
            <div className='container usercontainer'>

                {
                    user.email && (<div>
                        <h2> welcome {user.displayName}</h2>
                        <img src={user.photoURL} className='imguser' />
                    </div>)
                }
<br /><br />

                <div onClick={handlegoogleSignin} className='btn btn-primary '>
                    <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" className='google'/>
                    signInWithGoogle
                </div>
            </div>
        </>
    )
}

export default SigninGoogle;
