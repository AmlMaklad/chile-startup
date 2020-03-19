import React from "react";
import welcomeImg from "../assets/images/welcome.png";
import Style from "./Welcome.module.css";
import Svg from "../SVGS/Mouse";
import Logo from "../assets/images/storkyLogo.png";

export const WelcomeRight = () =>{
	return(
			<React.Fragment>       
				<div className={Style.right}>
					<img  src= {welcomeImg} alt="Welcome Startup Chile" className={Style.welomeMsg}/>

				</div>   
				{/* Slider Dots */}            
			</React.Fragment>
	);
};

export const WelcomeLeft = () =>{
	return(
		<React.Fragment>
					<div className={Style.left}>
					<h1>Welcome Startup Chile</h1>
					<p> 
						<span>Hola</span> , Welcome to 3 minutes StorkyApp tour, here you will find a <strong>Demo video, Live Demo Links, Anatomy of StorkyApp Components</strong> and quick illustration of the next steps <br/>
							<i>Scroll Down To start your tour</i>
						<img  src={Logo} alt = "StorkyAapp" className={Style.logo} />
					</p> 
					<Svg  className={Style.mouse}/>                
				</div> 
			</React.Fragment>
	);
};
