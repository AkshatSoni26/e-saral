import './CSS/App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Login I Logout/Login';
import Verification from './Login I Logout/verification';
import UserProfile from './User/UserProfile';

import SubjectData from './Subject/SubjectData';

import Test from 'C:/Users/eSaral/Documents/verification_login/src/Components/Chapter/Pages/Test.js'
import EditForm from './EditForm/EditForm';


function App() {

  console.log("object")

  return (


    <Routes>

      <Route path="/login" element={<Verification />} />
      <Route path="/login/check" element={<Login />} />
      <Route path="/" element={<UserProfile />} />
      <Route path="/:subjectName" element={<SubjectData />} />

      <Route path="/Content" element={<Test />} /> 

      <Route path="/edit" element ={<EditForm />} />

    </Routes>

  );

}

export default App;