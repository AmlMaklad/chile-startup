import React from "react";
import Style from "./VirsualClassroom.module.css";
import  attendee from "../../assets/completed-video-att.mp4";
import  inst from "../../assets/full-video-inst.mp4";
import StyleMain from "../../containers/Main/Main.module.css";


export const AttendeeScreen = props =>{
    const videClasses = (props.videoNum === 1) ? Style.videoframe  : Style.instVideo;
    return(
        <React.Fragment>       
          <div className={Style.right} onMouseOver= {(e) => props.mouseover(1)} >
            <h1>
                <mark className={Style.yellow}>InstructorScreen</mark>
            </h1>
            <p>
                Try using StorkyApp virtual classroom as instructor <small>Please use it in different browser than the attendees link</small>
            </p>
            <div >
                <video preload="auto" className={videClasses} autoPlay loop>
                        <source src={inst} type="video/mp4"></source>
                </video>
            </div>
            {/* <a className={StyleMain.btnwhite} href={'https://storky.app/login?email=startupchile@storky.app&password=123456&referer=https://storky.app/conference/8/8/app'}>
                Instructor Live Demo
            </a> */}
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
                <p>
                Try using StorkyApp virtual classroom as attendee <small>Please use it in different browser than the instructors link</small>
                </p>
                <div >
                    <video preload="auto" className={videClasses} autoPlay loop>
                        <source src={attendee} type="video/mp4"></source>    
                    </video>
                </div>
                {/* <a className={StyleMain.btn} href={'https://storky.app/login?email=startupchile_att@storky.app&password=123456&referer=https://storky.app/conference/8/8/app'}>
                    Attendee Live Demo
                </a> */}
          </div> 
        </React.Fragment>
    );
}

// Open both demo links in the same time on different browsers or different computers to have a live session, Instructors Only control sessions