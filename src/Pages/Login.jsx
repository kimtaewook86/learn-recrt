// src/Pages/Login.jsx
import React from 'react';
import InputField from '../components/InputField';
import LoginButton from '../components/LoginButton';


const Login = () => {
  return (
    <div className="login-container"> 
      <h1 className="login-title">로그인</h1>
      <div className="login-box">
        <InputField />
        {/* <PasswordField /> */}
        <LoginButton />
        {/* <p>계정이 없으신가요? <a href="#">가입하기</a></p> */}
        <p>계정이 없으신가요?</p>
        <p>or</p>
        
      </div>
    </div>
  );
};

export default Login;
