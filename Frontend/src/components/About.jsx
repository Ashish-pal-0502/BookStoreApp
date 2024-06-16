import React from 'react'
import {Link} from "react-router-dom"


export default function About() {
	return (
		<>
		<div className=" mt-28 text-center items-center justify-center">
			<h1 className="text-2xl mx:text-4xl "><span className="text-green-500">BookstoreAshish Limited: Top Online Bookshop </span>AshishBooks India Limited :)</h1>

			<p className="mt-12">Welcome to Bookscape, the online bookstore that is fast becoming the #1 destination to discover and buy books. With over 1 million titles in its ever-expanding catalogue, find books from 700+ publishers such as Penguin Random House India, Rupa Publications India, Cambridge University Press, Arihant Publication India and many more.

Our online bookstore guarantees authentic, competitively priced books, delivered fast and free across</p>
			<Link to="/">
			<button className="mt-6 bg-green-500 rounded px-4 py-2 hover:bg-green-600 duration-300">Back</button>
			</Link>
		</div>
		</>
	)
}
