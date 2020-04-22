import React, { Component } from 'react';
import '../css/Home.css';
import Piano from './Piano';
import { FaAngleDoubleDown } from 'react-icons/fa';

class Home extends Component { 
	render() {
		return(
			<div>
				<header>
					<h1>
		                Hi, I'm Nick Agliano.
		            </h1>
					<Piano/>
					<FaAngleDoubleDown size="30" color="rgb(0,0,0,0)"/>
				</header>
			</div>
		)
	}
}

export default Home;