import React from "react";
import Style from "./VirsualClassroom.module.css";
import  attendee from "../../assets/completed-video-att.mp4";
import  inst from "../../assets/full-video-inst.mp4";


export const AttendeeScreen = props =>{
    const videClasses = (props.videoNum === 1) ? Style.videoframe  : Style.instVideo;
    return(
        <React.Fragment>       
          <div className={Style.right} onMouseOver= {(e) => props.mouseover(1)} >
            <h1>
                <mark className={Style.yellow}>InstructorScreen</mark>
            </h1>
            <div >
                <video preload="auto" className={videClasses} autoPlay loop>
                        <source src={inst} type="video/mp4"></source>
                </video>
            </div>
          </div>   
        </React.Fragment>
    );
}

export const InstructorScreen = props =>{
    const videClasses = (props.videoNum === 1) ?[Style.videoframe,Style.rightshift].join(' ')   : Style.instVideo;
    return(
      <React.Fragment>
           <div className={Style.left} onMouseOver={(e) => props.mouseover(2)}>
                <h1>
                    <mark className={Style.yellow}>Attendee Screen</mark>
                </h1>
                <div >
                    <video preload="auto" className={videClasses} autoPlay loop>
                        <source src={attendee} type="video/mp4"></source>    
                    </video>
                </div>
          </div> 
        </React.Fragment>
    );
}
