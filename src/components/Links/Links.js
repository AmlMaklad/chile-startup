import React from "react";
import Style from "../../containers/Main/Main.module.css";


export const LinkRight = props =>{
    return(
        <React.Fragment>
            <p>
                Try using StorkyApp virtual classroom as instructor <small>Please use it in different browser than the attendees link</small>
            </p>
            <button className={Style.btn}>
                Instructor Live Demo
            </button>
        </React.Fragment>
    )
}
export  const LinkLeft = props =>{
    return(
        <React.Fragment>
            <p>
                Try using StorkyApp virtual classroom as attendee <small>Please use it in different browser than the instructors link</small>
            </p>
            <button className={Style.btnwhite}>
                Attendee Live Demo
            </button>
        </React.Fragment>
    )
}
