import React from 'react';
import GoogleLogin from 'react-google-login'
import { useNavigate } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc'
import photoverse from '../assets/photoverse.jpg' 
import logo from '../assets/logowhite.png' 
import {Client} from '../Client'
const Login = () => { 
const navigate=useNavigate();
const responseGoogle=(response)=>{
console.log(response);
localStorage.setItem('user',JSON.stringify(response.profileObj));
const {name,googleId,imageUrl}=response.profileObj
const doc={
    _id:googleId,
    _type:"user",
    userName: name,
    image:imageUrl
}
Client.createIfNotExists(doc).then(()=>{navigate('/', {replace:true})})
}


  return<div className='  flex justify-start items-center flex-col h-screen' > 
  <div className='relative w-full h-full'>
  <img className='  w-full h-full object-cover' src={photoverse}></img>
  <div className='flex flex-col absolute  justify-center items-center top-0 right-0 left-0 bottom-0 bg bg-blackOverlay'>
  <div className='p-5'>
  <img src={logo} width="130px" ></img>

  </div>
  <div className='  shadow-2xl'>
  <GoogleLogin
  clientId='1064381562641-uolimn5c820qeggb5jadvcsb0nqhlbhi.apps.googleusercontent.com'
  render={(renderprops)=>(

    <button 
    type='button ' 
    className='  bg-mainColor  flex justify-center items-center p-3 rounded-lg outline-none'
    onClick={renderprops.onClick}
    disabled={renderprops.disabled}
    >
    <FcGoogle className='mr-4 '/>sign in with google
    </button>
  )}
  onSuccess={responseGoogle}
  onFailure={responseGoogle}
  cookiePolicy={'single_host_origin'}

  />
  
  </div>
  </div>
  </div> 

  </div>; 
};
 
export default Login;
