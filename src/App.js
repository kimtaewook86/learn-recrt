import ThemeButton from "./components/ThemeButton";
import Card from "./components/Card";
import { useEffect, useState } from "react";

function App() {
//   console.log("App.js");

  /**
   * Logical operators
   * 단축 평가 논리 계산법
   */

  // const user = {
  //   isLoggedIn: false,
  //   role: "admin", // Corrected to 'admin' from 'admon'
  // };

  // // 사용자가 로그인 한 상태이면서, 역할이 'admin'인 경우엔 "관리자 페이지 접근 가능", 아니면 "관리자 페이지 접근 불가능"
  // if (user.isLoggedIn && user.role === 'admin') {
  //   console.log("관리자 페이지 접근 가능");
  // } else {
  //   console.log("관리자 페이지 접근 불가능");
  // }

  // // 함수 정의
  // const greeting = (input = "고객") => {
  //   return `${input}님, 반갑습니다!`; // Use backticks for template literals
  // };

  // // 함수 호출
  // greeting();

  // // Function definition for addition
  // const add = (a, b) => {
  //   return a + b;
  // };
  // console.log("add", add(1)); // Calling add function with 1 argument

  // // 배열 구조분해 할당
  // const studentList = ['김태욱', '정세헌'];
  // const [firstStudent = "장현재", secondStudent, third] = studentList;
  // console.log("🚀 ~ App ~ firstStudent:", firstStudent);
  // console.log("🚀 ~ App ~ studentList:", studentList);
  // console.log("🚀 ~ App ~ third:", third);

  // const addStudent = () => {
  //   const addStudentList = [...studentList, "장현재22"];
  //   console.log("🚀 addStudentList:", addStudentList);
  //   console.log("🚀 studentList:", studentList);
  //   };
  // // 객체 정의
  // const person = {
  //   name: "김태욱",
  //   age: 39,
  //   email: "kimtaewook86@naver.com"

  // };

  // const messagaItem = {
  //   messagaId: 1,
  //   message: "안녕하세요",
  // }
  // 객체 구조분해 할당
  //const { name: personName, age, email } = person;
  // console.log("🚀 ~ App ~ personName:", personName);
  // console.log("🚀 ~ App ~ age:", age);
  // console.log("🚀 ~ App ~ email:", email);

  // const{name: personName, age, email} = person;
  // const copyPeroson = {
  //   ...person,
  //   ...messagaItem,
  //   name:"김다솜", //값 수정
  //   nickName:"후츠릿", //값 추가
  // };

//   return <div ><Card /></div>;

// }
// export default App;
// import React from 'react';
// import Counter from './components/Counter'; // Assuming you have a Counter component
// import Card from './components/Card'; // Import the Card component

// function App() {
//   return (
//     <div>
//       {/* Rendering the Card component with props */}
//       <Card title="호스트헬퍼" subText="김태욱" />

//       {/* Render other components as needed */}
//       <Counter />
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import InputField from './components/InputField'; // Import InputField component

// function App() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   return (
//     <div>
//       {/* Using the InputField component for text input */}
//       <InputField
//         label="Username"
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />

//       {/* Using the InputField component for password input */}
//       <InputField
//         label="Password"
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//     </div>
//   );
// }

// const handleClick = () => {
//   console.log('click')
// }

// // export default App;


// 모드 변경 논리
/**
 * 1. TgmeButton 컴포넌트에서 버튼을 클릭한다
 * 2. 
 */
const [isDarkMode, setIsDarkMode] = useState(false);

const handleThmeme = () => {
setIsDarkMode(!isDarkMode);
};

const handleClick = () => {}

useEffect(() => {
  console.log(isDarkMode ? "다크모드" : 
    "라이트 모드");
}, [isDarkMode]);

// view
return (
  <div className={`wrap ${isDarkMode ? "dark-mode" 
    : "light-mode"}`}>
    <Card title={"kim"} subText="서브텍스트" 
    onCardClick={handleClick} />
    <Card title={"kim22"} subText="서브텍스트" 
    onCardClick={handleClick} />
    <ThemeButton isDarkMode={isDarkMode} onTheme={handleThmeme} />
    </div> 
  );
}
  export default App;