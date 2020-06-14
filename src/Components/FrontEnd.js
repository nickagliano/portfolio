import React, { Component } from 'react';
import '../css/FrontEnd.css';
import Piano from './Piano';
import { FaAngleDoubleDown } from 'react-icons/fa';

class FrontEnd extends Component { 
	
	openInNewTab(url) {
	  var win = window.open(url, '_blank');
	  win.focus();
	}
	render() {
		return(
			<div>
				<header>
					<h1>Front-End</h1>
					<Piano/>
					<FaAngleDoubleDown size="30"/>
				</header>
				<div className="feContainer">
					<div className="feText">
						<h1>Personal</h1>
						<p>I'm very familiar with Javascript, CSS, and HTML. Node.js to me feels like home. Recently, I've devoted a lot of time into learning React and Redux.</p>
						<h3>Projects:</h3>
						<p>- This website</p>
						<p><span className="link" onClick={()=> window.open("https://www.vc19tf.com/", "_blank")}>- Virginia COVID-19 Task Force</span>: a pro-bono website for a local COVID-19 relief group</p>
						<p>- rva.beer: a local Richmond, VA beer and wine hub (in progress)</p>
						<p><span className="link" onClick={()=> window.open("https://cranky-cray-2f8edb.netlify.app/", "_blank")}>- COCO</span>: a collaborative online collage maker (in progress)</p>

					</div>
					<div className="feText">
						<h1>Professional</h1>
						<p><b>Online waiver system</b> - For a whitewater rafting company. I made the system from scratch, drew up a database schema, built a customer facing front-end (in React) for signing waivers, and an admin view for employees to explore the waiver database. I implemented an email system which is triggered based on webhooks from an external trip booking system (Bookeo) so that customers can receive their digital waivers as soon as they book.</p>
						<p><b>Web scrapers</b> - I've written hundreds of web crawlers to extract information from a variety of web pages. Locating good, clean data requires solid understanding of the front end, as well as clean, efficient logic on the backend to be able to extract that data, and get it ready to load onto longer term storage (MongoDB, mySQL database).</p>
					</div>
				</div>
			</div>
		)
	}
}

export default FrontEnd;