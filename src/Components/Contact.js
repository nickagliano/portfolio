import React, { Component } from 'react';
import '../css/Contact.css';
import Piano from './Piano';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';


class Contact extends Component { 
	render() {
		return(
			<div>
				<header>
					<h1>Contact</h1>
					<Piano/>
					<FaAngleDoubleDown size="30"/>
				</header>
				<div className="contactContainer">
					<div className="contactIcons">
						<a href="https://www.linkedin.com/in/nickagliano/" target="_blank" rel="noopener noreferrer" className="icon"><FaLinkedin size={30}/></a>
						<a href="http://www.github.com/nickagliano" target="_blank" rel="noopener noreferrer" className="icon"><FaGithub size={30}/></a>
						<a href="http://www.instagram.com/nickagliano" target="_blank" rel="noopener noreferrer" className="icon"><FaInstagram size={30}/></a>
					</div>
				</div>
			</div>
		)
	}
}

export default Contact;