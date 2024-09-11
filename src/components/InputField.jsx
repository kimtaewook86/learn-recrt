import React from 'react';
import InputField from '../components/InputField';
import LoginButton from '../components/LoginButton';
// import '../Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <h1 className="login-title">로그인</h1>
      <form className="login-form">
        <InputField type="text" placeholder="이메일" />
        <InputField type="password" placeholder="비밀번호" />
        <LoginButton text="로그인" onClick={() => console.log('로그인 클릭')} />
        <p className="or-divider">또는</p>
        <LoginButton text="Google로 계속하기" onClick={() => console.log('Google 로그인 클릭')} isSocial={true} />
      </form>
    </div>
  );
};

export default Login;
