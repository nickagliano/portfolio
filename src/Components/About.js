import React, { Component } from 'react';
import '../css/About.css';
import Piano from './Piano';
import me from '../images/me_kayaking.jpg'
import { GiTreeSwing } from 'react-icons/gi';
import { GiWaveSurfer } from 'react-icons/gi';
import { FaHatWizard } from 'react-icons/fa';
import { GiBadGnome } from 'react-icons/gi';
import { GiAlgae } from 'react-icons/gi';
import { FaAngleDoubleDown } from 'react-icons/fa';

let moment = require('moment');


function calcYears() {
	let years = moment().diff('1997-08-14', 'years');
	return years;
}

function calcDays() {
	let days = moment().diff('1997-08-14', 'days');
	return days;
}

function calcSeconds() {
	let seconds = moment().diff('1997-08-14', 'seconds');
	return seconds;
}

class About extends Component { 
	componentDidMount() {
		this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
	}
	
	render() {
		return(
			<div>
				<header>
					<h1>About Me</h1>
					<Piano/>
					<FaAngleDoubleDown size="30"/>
				</header>
				<div className="aboutContainer">
					<div className="bio">
						<img alt="me in a kayak" src={me} height="500"  id="about"></img>
						<div className="bioText">
							<div className="iconDivider"><GiWaveSurfer size="30"/> <GiTreeSwing size="30"/> <FaHatWizard size="30"/> <GiBadGnome size="30"/>  <GiAlgae size="30"/></div>
							<hr></hr>
							<p>Hi, my name is <b>Nick Agliano.</b></p>
							<p>Right now, I'm {calcYears()} years, or {calcDays()} days, or {calcSeconds()} seconds old.</p>
							<div className="iconDivider">–</div>
							<p>I have a bachelor's degree in Computer Science, with a focus in Data Science. I have professional experience developing software in a fast-moving, start-up culture. I love collaborating and sharing ideas with a team, but can also work very well independently.</p>
							<div className="iconDivider">–</div>
							<p>My preferred languages are <b><i>Javascript</i></b> and <b><i>Python</i></b>. I've been developing with Javascript/HTML/CSS for over 6 years, and Python for 4 years. I'm also very comfortable in Java, C, and C++. The databases I'm most familiar with are MongoDB, mySQL, and Oracle SQL. Other misc. technologies: git, AWS, RESTful API's, AR/VR, Unity.</p>
							<div className="iconDivider">–</div>
							<p>Before working in tech, I worked various jobs including outdoor trip leader, whitewater raft guide, bus driver, logistics manager for a rafting company, and lifeguard at a water park. When I'm not writing code, you can find me biking, whitewater kayaking, playing basketball, or tennis.</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}


export default About;