import './CSS/App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Login I Logout/Login';
import Verification from './Login I Logout/verification';
import UserProfile from './User/UserProfile';

import SubjectData from './Subject/SubjectData';

import Test from './Chapter/Pages/Test'

import Profile from './User Account/Profile';
import Edit from './User Account/Edit';

import { useEffect } from 'react';


function App() {

  // console.log("object")

const navigate = useNavigate();

  useEffect(
        () => {
            if(localStorage.getItem("Access Key")){
                navigate("/", { state: localStorage.getItem("Access Key") })
            }
        }, []
    )


  return (


    <Routes>

      <Route path="/login" element={<Verification />} />
      <Route path="/login/check" element={<Login />} />
      <Route path="/" element={<UserProfile />} />
      <Route path="/:subjectName" element={<SubjectData />} />

      <Route path="/Content" element={<Test />} /> 

      <Route path="/profile" element ={<Profile />} />

      <Route path="/edit" element= {<Edit />} />

    </Routes>

  );

}

export default App;