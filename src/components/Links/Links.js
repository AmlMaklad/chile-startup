import React from "react";
import Style from "../../containers/Main/Main.module.css";


export const LinkRight = props =>{
    return(
        <React.Fragment>
            <button className={Style.btn}>
                Try Instructor Demo
            </button>
        </React.Fragment>
    )
}
export  const LinkLeft = props =>{
    return(
        <React.Fragment>
            <button className={Style.btnwhite}>
                Try Attendee Demo
            </button>
        </React.Fragment>
    )
}
