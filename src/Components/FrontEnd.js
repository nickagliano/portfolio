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
						<p><span className="link" onClick={()=> window.open("https://cranky-cray-2f8edb.netlify.app/", "_blank")}>- COCO</span>: a collaborative online collage maker</p>
						<p><span className="link" onClick={()=> window.open("http://www.google.com", "_blank")}>- rva.beer</span>: a local Richmond, VA beer and wine hub</p>
					</div>
					<div className="feText">
						<h1>Professional</h1>
						<p>I've written hundreds of web crawlers to extract information from a variety of web pages. Locating good, clean data requires intimate understanding of the front end, as well as clean, efficient logic on the backend to be able to extract that data.</p>
					</div>
				</div>
			</div>
		)
	}
}

export default FrontEnd;