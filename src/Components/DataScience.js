import React, { Component } from 'react';
import '../css/DataScience.css';
import Piano from './Piano';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { GiRobotGolem } from 'react-icons/gi';

class DataScience extends Component { 
	render() {
		return(
			<div>
				<header>
					<h1>Data Science</h1>
					<Piano/>
					<FaAngleDoubleDown size="30"/>
				</header>
				<div className="aiContainer">
					<div className="aiTextLeft">
						<h1>Academic</h1>
						<p>While in university, my studies focused on data science, including higher-level courses in database theory, data mining, natural language processing, artificial intelligence, and machine learning.</p>
						<h3>Projects</h3>
						<p>- Twitter sentiment analysis</p>
						<p>- Predicting class of protein based on amino acid sequence</p>
						<p>- Language generation based on input text</p>
					</div>
					<GiRobotGolem color="black" size="30"/>
					<div className="aiTextRight">
						<h1>Personal</h1>
						<h3>Projects</h3>
						<p>- <b>Scuttlebutt</b>: Extracting sentiment over time from stock market-oriented subreddits.</p>
						<p>- <b>DeepPokémon</b>: Developing a deep-reinforcement-learning agent to competitively battle in Pokémon.</p>
					</div>
				</div>
				
			</div>
		)
	}
}

export default DataScience;