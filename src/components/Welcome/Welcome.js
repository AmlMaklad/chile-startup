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
}

export const WelcomeLeft = () =>{
    return(
      <React.Fragment>
           <div className={Style.left}>
            <h1>Welcome Startup Chile</h1>
            <p> 
              <span>Hola</span> , You wanna know about our startup let's have atour to discover more
              <i> our Srotky</i>
             <img  src={Logo} alt = "Storky.app" className={Style.logo} />
            </p> 
            <Svg  className={Style.mouse}/>                
          </div> 
        </React.Fragment>
    );
}
