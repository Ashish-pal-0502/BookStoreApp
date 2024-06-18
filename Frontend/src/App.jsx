import React from "react";
import Home from "./Home/Home";
import Courses from "./Courses/Courses"
import Contacts from "./Courses/Contacts"
import Signup from "./components/Signup"
import AboutApp from "./Courses/AboutApp"
import {Navigate, Route, Routes} from "react-router-dom";
import  { Toaster } from 'react-hot-toast';
import {useAuth} from "./context/AuthProvider";


function App() {
  const [authUser, setAuthUser]= useAuth();
  console.log(authUser);
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/contact" element={<Contacts/>}/>
      <Route path="/about" element={<AboutApp/>}/>
     </Routes>
     <Toaster />
    </div>
    </>
  );
}

export default App;
