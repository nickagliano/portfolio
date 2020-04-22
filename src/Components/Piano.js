import React, { Component } from 'react';
import '../css/Home.css';
import {Link} from "react-router-dom";

import { FaHome } from 'react-icons/fa';
import { AiOutlineSmile } from 'react-icons/ai';
import { GiRobotGolem } from 'react-icons/gi';
import { FaLaptopCode } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import { animateScroll as scroll } from "react-scroll";

class Piano extends Component { 
	componentDidMount() {
		this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
	}
	
	render() {
		return(
			<div>
				<div className="pianoWrapper">
				    <div className="piano">
				        <ul className="set">
				            <Link to="/">
								<li className="white f">
									<span className="iconWrapper">
										<FaHome size={40} color="rgb(0, 0, 0, .4)" />
									</span>
								</li>
							</Link>
				            <li className="black fs"></li>	
				            <Link to="/about" onClick={scroll.scrollToBottom}>
									<li className="white g">
										<span className="iconWrapper">
											<AiOutlineSmile size={40} color="rgb(255, 200, 3, .4)" />
										</span>
									</li>
							</Link>
				            <li className="black gs"></li>
				            <Link to="/data-science" onClick={scroll.scrollToBottom}>
								<li className="white a">
									<span className="iconWrapper">
										<GiRobotGolem size={40} color="rgb(50,255,200,0.4)" />
									</span>
								</li>
							</Link>
				            <li className="black as"></li>
				            <Link to="/front-end" onClick={scroll.scrollToBottom}>
								<li className="white b">
									<span className="iconWrapper">
										<FaLaptopCode size={40} color="rgb(111, 31, 128, .3)" />
									</span>
								</li>
							</Link>
							<Link to="/contact" onClick={scroll.scrollToBottom}>
					            <li className="white c">
									<span className="iconWrapper">
										<MdMailOutline size={40} color="rgb(34, 128, 31,.3)" />
									</span>
								</li>
							</Link>
				            <li className="black cs"></li>
							<Link to="/random" onClick={scroll.scrollToBottom}>
								<li className="white d">
									<span className="iconWrapper">
										<GiPerspectiveDiceSixFacesRandom size={40} className="rainbow-text" />
									</span>
								</li>
							</Link>
				        </ul>
				    </div>
				</div>

			</div>
		)
	}
}

export default Piano;