import React from 'react'
import useStyles from './Login.style'
import { Button } from '@material-ui/core';
import { auth, provider } from '../../Firebase';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';

const Login = () => {
    const classes = useStyles();
    const [ {} , dispatch] = useStateValue();
    
    const signIn = () =>{
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => alert(error.message));
    };

    return (
        <div className={classes.login}>
            <div className={classes.loginContainer}>
            <img style={{ objectFit: "contain" , heigth: "100px" , marginBottom: "40px"}}
                 src="https://upload.wikimedia.org/wikiped" alt="" 
            />
            <div className={classes.loginText}>
                <h1>Sign in to Whatsapp</h1>
            </div>

            <Button style={{marginTop: "50px" , textTransform:"inherit"
                            , backgroundColor: "#0a8d48" , color: "white"}}
               onClick={signIn}>
                Sign In with Google
            </Button>
            </div>
        </div>
    )
}

export default Login
