import React from "react";

const Mouse = props =>{
    return(
        <svg  width="50" height="50" viewBox="0 0 32 32" className= {props.className}>
        <g>
        </g>
            <path d="M27 11h-2c0-4.963-4.038-9-9-9s-9 4.037-9 9h-2c0-6.065 4.935-11 11-11s11 4.935 11 11z" fill="#666"/>
            <path d="M16 32c-6.065 0-11-4.935-11-11v-8h2v8c0 4.963 4.038 9 9 9s9-4.037 9-9v-8h2v8c0 6.065-4.935 11-11 11z" fill="#666"/>
            <path d="M15 6h2v8h-2v-8z" fill="#666"/>
        </svg>
    );
}
export default Mouse;