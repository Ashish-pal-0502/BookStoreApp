import React from 'react'
import list from "../../public/list"
import Card from "./Card"
import {Link} from "react-router-dom"


function Course() {
	return (
	<>
	<div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
		<div className=" mt-28 text-center items-center justify-center">
			<h1 className="text-2xl mx:text-4xl "><span className="text-green-500">All books are available for you... </span>Readers :)</h1>

			<p className="mt-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo consectetur odit asperiores consequuntur dolor aut, necessitatibus laboriosam hic nobis illo dolorum nihil blanditiis deserunt autem odio nulla adipisci eos repellendus!</p>
			<Link to="/">
			<button className="mt-6 bg-green-500 rounded px-4 py-2 hover:bg-green-600 duration-300">Back</button>
			</Link>
		</div>
		<div className="mt-12 grid grid-cols-1 md:grid-cols-4 ">
			{list.map((item)=>(<Card key={item.id} item={item}/>))}
		</div>
	</div>
	</>
	)
}

export default Course
