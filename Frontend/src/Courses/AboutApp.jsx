import React from 'react'
import Navbar from "../components/Navbar";
import About from "../components/About";




function AboutApp() {
	return (
		<>
		<Navbar></Navbar>
		<div className="min-h-screen">
			<About/>
		</div>
		</>
	)
}

export default AboutApp
