import React, { useState, useRef, useReducer, useEffect, useContext} from 'react'
import {Link, useHistory} from "react-router-dom"
import '../Components/LogIn.css'
// import shoppingContext from '../Context/shopping/shoppingContext'
import { auth } from '../firebase'

// const reducer = (state,action) =>{


//   if(action.type === "EMAIL_INPUT"){
//     return {...state, emailValue: action.payload}
//   }

//   if(action.type === "PASS_INPUT"){
//     return {...state, passwordValue: action.payload}
//   }

//   return {emailValue: "", passwordValue: ""}
// }


const LogIn = () => {

   const [email ,setEmail] = useState("");
   const [password ,setPassword] = useState(""); 
  
   const history = useHistory();

  
  // const [formIsValid, setFormIsValid] = useState(false)
    
  //  const [state,dispatch] = useReducer(reducer,{
  //      emailValue: "",
  //      passwordValue: ""

  //  });

  // // const emailRef = useRef()
  // // const passworfRef = useRef()

  // const {emailValue: email, passwordValue: password} =state

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //    console.log("CHECKING FORM VALIDITY");
  //    setFormIsValid(
  //     email.includes("@") && state.password.trim().length > 6
  //    )
  //   },500);
  
  //   return () => {
  //     console.log("CLEAN UP HERE")
  //     clearTimeout(identifier);
  //   }
  // }, [])
    
  // const emailChangeHandler = (e) =>{
  // dispatchEvent({type: "EMAIL_INPUT", payload: e.target.value})
  // }

  // const passwordChangeHandler = (e) =>{
  //   dispatchEvent({type: "PASS_INPUT", payload: e.target.value})
  // }

  const signIn = e =>{
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password).then(auth =>{
      history.push('/')})
      .catch(error => alert(error.massage))

    // const email =  state.emailValue;
    // const password =  state.passwordValue

    // ctx.onLogIn(email,password)
    
    
    // const email =  emailRef.current.value
    // const password =  passworfRef.current.value
    // localStorage.setItem('isLoggedIn', '1')
    // setIsLoggedIn(true);
 
  }

  const register = e =>{
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) =>{
        if(auth){
          history.push('/')
        }
      })
      .catch(error => alert(error.massage))
    
 
  };


  return (
    <>
       <div className='login'>

          <Link to="/">
          <img
           src='https://www.google.com/url?sa=i&url=https%3A%2F%2Ficon-icons.com%2Ficon%2Famazon-logo%2F169612&psig=AOvVaw2GbHLTGvXo9jqCrUwTK0XE&ust=1710102261495000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKD5ksWB6IQDFQAAAAAdAAAAABAD'
           alt='Amazon Logo' 
           className='login_logo'/>
          </Link>
         <div className='login_container'>
            <h1>Sign-In</h1>
            <form>

                <h5>Email</h5>
                <input type='text' 
                // ref={emailRef}
                 value={email}
                 onChange={e => setEmail(e.target.value)}/>

                
                <h5>Email</h5>
                <input type='password' 
                // ref={passworfRef}
                value={password}
                onChange={e => setPassword(e.target.value)}/>

                <button type='submit'
                className='login_signIn'
                onClick={signIn}>
                  Sign In
                </button>

            </form>

             <p>By continuing, you agree to Amazon's 
              Conditions of Use and Privacy Notice.
              </p>

              <button className='login_registerButton' onClick={register}> 
                Create your Amazon Account
              </button>
         </div>


       </div>
    </>
  ) 
}

export default LogIn