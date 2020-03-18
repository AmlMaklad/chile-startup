import React from "react";
import Style from "./SolutionAntomy.module.css";
import  inst from "../assets/images/60frms.mp4";
export const SolutionRight = () =>{
    return(
        <React.Fragment>       
          <div className={Style.right}>
                <h1><mark> Solution</mark></h1>
                <p className={Style.mainP}>Our Storky Contain A fundamental Components that make it aperfect solution </p>
                <div  className={Style.menuConatiner}>
                    <ul className={Style.tabMenu}>
                        <li className="">
                            <div className={Style.menuThumb}>
                                <span>
                                    01
                                </span>
                            </div>
                            <div className={Style.menuContent}>
                                <h5 className={Style.title}> Virsual ClassRoom</h5>
                                <p>                           
                                    Lorem ipsum dolor sit amet, conse ctetue adipiscing elit, sed diam nonum nibhie.
                                </p>
                            </div>
                        </li>                   
                        <li className="">
                            <div className={Style.menuThumb}>
                                <span>
                                    02
                                </span>
                            </div>
                            <div className={Style.menuContent}>
                                <h5 className={Style.title}>Course Mangement System</h5>
                                <p>                           
                                    Lorem ipsum dolor sit amet, conse ctetue adipiscing elit, sed diam nonum nibhie.
                                </p>
                            </div>
                        </li>                   
                        <li className="">
                            <div className={Style.menuThumb}>
                                <span>
                                    03
                                </span>
                            </div>
                            <div className={Style.menuContent}>
                                <h5 className={Style.title}>Market Place</h5>
                                <p>                           
                                    Lorem ipsum dolor sit amet, conse ctetue adipiscing elit, sed diam nonum nibhie.
                                </p>
                            </div>
                        </li>                   
                        <li className="">
                            <div className={Style.menuThumb}>
                                <span>
                                    04
                                </span>
                            </div>
                            <div className={Style.menuContent}>
                                <h5 className={Style.title}>Handy tool</h5>
                                <p>                           
                                    Lorem ipsum dolor sit amet, conse ctetue adipiscing elit, sed diam nonum nibhie.
                                </p>
                            </div>
                        </li>                   
                    </ul>
                </div>
          </div>   
        </React.Fragment>
    );
}

export const SolutionLeft = () =>{

    return(
        <React.Fragment>
           <div className={Style.left}>
           <h1><mark>Components </mark></h1>
            <div>
                <video className={Style.circleVIDEO} autoPlay loop>
                    <source src={inst} type="video/mp4"></source>
                </video> 
            </div>                  
            </div>                
        </React.Fragment>
    );
}
