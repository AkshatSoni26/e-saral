import './CSS/App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Login I Logout/Login';
import Verification from './Login I Logout/verification';
import UserProfile from './User/UserProfile';
import { useContext, useEffect, useState } from 'react';
import SubjectData from './Subject/SubjectData';
import { header_data } from './User/UserUi';
import Learn from './Chapter/Pages/Learn';
import Practice from './Chapter/Pages/Practice';
import Revise from './Chapter/Pages/Revise';
import Test from './Chapter/Pages/Test';
// import Chapter from './Chapter/Chapter';
import Header2 from './Chapter/ComponentsOfChapeters/Header2';



// import { button_context } from './Subject/Chapter Data/ChapterData';

function App() {

  // const buttons_data = useContext(button_context)

  console.log("object")

  return (


    <Routes>

      <Route path="/login" element={<Verification />} />
      <Route path="/login/check" element={<Login />} />
      <Route path="/" element={<UserProfile />} />
      <Route path="/:subjectName" element={<SubjectData />} />

      {/* <Route path="/:subjectName/:chapterName" element={<SubjectData />} /> */}

      {/* <Route path="/learn" element={<Learn />} />
     
     <Route path="/practise" element={<Practice />} />
      <Route path="/revise" element={<Revise />} />
      <Route path="/test" element={<Test />} /> */}

      <Route path="/test" element={<Header2 />} />

    </Routes>

  );

}

export default App;