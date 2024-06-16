import React from "react";
import Home from "./Home/Home";
import Courses from "./Courses/Courses"
import Contacts from "./Courses/Contacts"
import Signup from "./components/Signup"
import AboutApp from "./Courses/AboutApp"
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Courses/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/contact" element={<Contacts/>}/>
      <Route path="/about" element={<AboutApp/>}/>
     </Routes>
    </div>
    </>
  );
}

export default App;
