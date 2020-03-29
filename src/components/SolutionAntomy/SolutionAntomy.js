import React from "react";
import Style from "./SolutionAntomy.module.css";
import Cms from "../assets/images/LMS.gif";
export const SolutionRight = () =>{
    return(
        <React.Fragment>       
          <div className={Style.right}>               
                <div  className={Style.menuConatiner}>
                    <ul className={Style.tabMenu}>
                        <li className="">
                            <div className={Style.menuThumb}>
                                <span>
                                    01
                                </span>
                            </div>
                            <div className={Style.menuContent}>
                                <h5 className={Style.title}>Courses Mangement System</h5>
                                <p>
                                    Manage courses curriculum, materials, schedules, assignmets, projects and grading books. Also you can access a recorded virtual classroom session.
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
                                <h5 className={Style.title}> Virtual ClassRoom</h5>
                                <p>                           
                                    Where instructors/teachers can meet their learners, and can interact with each other and have a real classroom experience remotely.
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
                                <h5 className={Style.title}>Courses Marketplace</h5>
                                <p>                           
                                    Build landing page coding-less, get reviews after finishing each course, build reputation. Compete on StorkyApp marketplace.
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
                                <h5 className={Style.title}>Classroom Handy Tools</h5>
                                <p>                           
                                    Free tool helps teachers to organize their classrooms, materials and learning widgets. Just with  a computer and projector, smart-board, or TV.
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
            <div>
                <img  src={Cms} alt="Courses Mangement System " className={Style.circleVIDEO}/>
            </div>                  
            </div>                
        </React.Fragment>
    );
}
