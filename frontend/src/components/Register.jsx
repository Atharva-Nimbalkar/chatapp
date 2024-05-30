// import React from 'react'

import { NavLink } from "react-router-dom"
import { useState } from "react";
import {useDispatch} from 'react-redux';
import {userRegister}  from "../store/actions/authAction";

export const Register = () => {

/* The `dispatch` function is used to dispatch actions to the Redux store. In this case, it is being used to dispatch the `userRegister` action
from the `authAction` file in the store. This action is responsible for registering a new user with
the provided information. */
  const dispatch=useDispatch();
  const [loadImage,setLoadImage]=useState('');
  const [state,setState]=useState({
    userName: '',
    email:'',
    password:'',
    confirmPassword: '',
    image: ''
  })

  const inputHandle=e=>{
        setState({
          ...state,
          [e.target.name]:e.target.value
        })
  }

  /* The `fileHandle` function is a handler for the file input field in the registration form. When a
  user selects a file (an image in this case), this function is triggered.  */
  const  fileHandle=(e)=>{
    if(e.target.files.length !==0){
      setState({
       /* The spread operator `...state` in the `inputHandle` function is used to create a new object
       by copying the existing properties of the `state` object and then updating the specific
       property that is being changed. */
        ...state,
        [e.target.name]: e.target.files[0]
      })
    }

    //to add image
    const reader=new FileReader();
    reader.onload=()=>{
      setLoadImage(reader.result);
    }
    reader.readAsDataURL(e.target.files[0])//get fast index data
  }

  const register=(e)=>{
    
    const {userName,email,password,confirmPassword,image}=state;  
/* The line `e.preventDefault();` in the `register` function is preventing the default behavior of the
form submission when the user clicks the submit button. */
    e.preventDefault();

    /* `const formData=new FormData();` is creating a new instance of the `FormData` object in JavaScript. which can then be sent using the `fetch()` method or in this case,
    it is being used to append form data for user registration before dispatching it to the Redux store. */
    const formData=new FormData();
    formData.append('username',userName);
    formData.append('email',email);
    formData.append('password',password);
    formData.append('confirmPassword',confirmPassword);
    formData.append('image',image);

/* The line `dispatch(userRegister(formData))` is dispatching the `userRegister` action with the` formData` object as a parameter. This action is responsible for registering a new user with the
information provided in the form fields. The `formData` object contains the user's username, email, password, etc that are needed for user registration. By dispatching this action, the user registration process is initiated and the user data is sent to the Redux store
for handling the registration logic. */
    dispatch(userRegister(formData))



    // console.log(state);
  }
  return (
    <>
        <div className="register">
          <div className="card">
              <div className="card-header">
                <h3>Register</h3>
               </div>
           <div className="card-body">
                <form onSubmit={register}>
                  <div className="form-group">
                      <label htmlFor="username">
                          User Name
                      </label>
                      <input type="text" onChange={inputHandle} name="userName" value={state.userName} className="form-control" placeholder="User Name" id="username" autoComplete="on"/>
                  </div>

                  <div className="form-group">
                      <label htmlFor="email">
                          email
                      </label>
                      <input type="email" onChange={inputHandle} name="email" value={state.email} className="form-control" placeholder="email" id="email" />
                  </div>

                  <div className="form-group">
                      <label htmlFor="password">
                          Password
                      </label>
                      <input type="password"onChange={inputHandle} name="password" value={state.password} className="form-control" placeholder="password" id="password" />
                  </div>

                  <div className="form-group">
                      <label htmlFor="confirmPassword">
                          Confirm Password
                      </label>
                      <input type="password" onChange={inputHandle} name="confirmPassword" value={state.confirmPassword} className="form-control" placeholder="Confirm Password" id="confirmPassword" />
                  </div>

                  <div className="form-group">
                      <div className="file-image">
                            <div className="image">
{loadImage ? <img src={loadImage} />: ''}
                            </div>
                      <div className="file">
                        <label htmlFor="image">select image</label>
                        <input type="file" onChange={fileHandle} name="image"className="form-control" id="image"/>
                      </div>
                      </div>
                  </div>

                <div>
                  <div>
                        <div className="form-group">
                            <input type='submit' value="register" className="btn"/>
                        </div>
                        <div className="form-group">
                            <span><NavLink to='/connectnow/login'>Login to your account</NavLink></span>
                        </div>
                  </div>
                </div>
                </form>
            </div>     
          </div>
        </div>
    </>
  )
}
