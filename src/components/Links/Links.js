import React from "react";
import Style from "../../containers/Main/Main.module.css";


const Links = props =>{
    return(
        <React.Fragment>
            <button className={Style.btn}>
                Try Instructor Demo
            </button>
        </React.Fragment>
    )
}
export default Links;