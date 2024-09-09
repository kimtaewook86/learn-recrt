// src/Pages/Login.jsx
import React from 'react';
import InputField from '../components/InputField';
import PasswordField from '../components/PasswordField';
import LoginButton from '../components/LoginButton';
import SocialButton from '../components/SocialButton';

const Login = () => {
  return (
    <div className="login-container"> 
      <h1 className="login-title">로그인</h1>
      <div className="login-box">
        <InputField />
        <PasswordField />
        <LoginButton />
        <p>계정이 없으신가요? <a href="#">가입하기</a></p>
        <p>or</p>
        <SocialButton />
      </div>
    </div>
  );
};

export default Login;
