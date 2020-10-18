import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/css/fontawesome-all.min.css';
import one from './images/timeline01.png';
import two from './images/timeline02.png';


export const Timeline = () => {

    return(
        <>
        <h2 style={{fontWeight:"800",fontSize:"40px",marginBottom:"50px"}}><span style={{color:'#0f1178'}}>Time</span>line</h2>
        <div>
           
            <div className="d-none d-lg-block">
            <img src={two} width="1049" height="338" alt=""></img>
            </div>

            <div className="d-block d-lg-none">
            <img src={one} width="315" height="587" alt=""></img>
            </div>
        </div>
        </>
    );
}