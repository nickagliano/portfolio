import React, { Component } from 'react';
import '../css/Random.css';
import Piano from './Piano';
import { FaAngleDoubleDown } from 'react-icons/fa';

class Random extends Component { 
	render() {
		return(
			<div>
				<header>
					<h1>Data Science</h1>
					<Piano/>
					<FaAngleDoubleDown size="30"/>
				</header>
				<div className="randomContainer">
					<div className="randomText">
						<p>whrengewjngerngwerngwehrngojwehrngownergwerbngkhwe</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Random;