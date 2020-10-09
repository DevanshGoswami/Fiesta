import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/css/fontawesome-all.min.css';

export const Sponsor = () => {
    return(
        <div>
            <section className="text-center">
    <h2 style={{fontWeight:"800",fontSize:"40px",marginBottom:"50px"}}><span style={{color:'#0f1178'}}>{' ~ '}S</span>PONSORS{' ~ '}</h2>
            <div>
    
            <div className="buttonsilver">Silver</div>
            <div className="row justify-content-center" style={{marginTop:"50px"}}>
                <div className="col-12 col-sm-2 mx-5 py-3">
                    <a href="https://egghead.io/"><img src="https://res.cloudinary.com/dg3gyk0gu/image/upload/v1566948117/transcript-images/Eggo_Notext.png" alt="" height="100px" width="84px"></img></a>
                </div>
                <div className="col-12 col-sm-2 mx-5 mt-4 py-3">
                <a href="https://www.axure.com/"><img src="https://www.axure.com/wp-content/uploads/2019/04/logo-black.svg" height="38px" width="170px"  alt=""></img></a>
                </div>
            </div>
            </div>
            <div>
            
            <div className="buttonbronze">Bronze</div>
            <div className="row justify-content-center" style={{marginTop:"50px"}}>
                <div className="col-12 col-sm-3 mx-2 py-3">
                    <a href="https://repl.it/"><img src="https://repl.it/public/images/light-logo.svg" alt="" height="70px" width="250px"></img></a>
                </div>
                <div className="col-12 col-sm-3 mx-2 py-3">
                <a href="https://balsamiq.com/"><img src="https://ga1.imgix.net/logo/o/91065-1487749816-7583342?auto=format&ch=Width%2CDPR&dpr=2.63&ixjsv=2.0.0&ixlib=rb-1.0.0&q=38&w=400" height="100px" width="100px"  alt=""></img></a>
                </div>
                <div className="col-12 col-sm-3 mx-2 py-3">
                <a href="https://www.interviewcake.com/"><img src="https://ga-core.s3.amazonaws.com/cms/files/files/000/004/656/original/InterviewCake_horizontal.png" height="60px" width="250px"  alt=""></img></a>
                </div>
            </div>
            
            <div className="buttonred">Streaming</div>
            <div className="row justify-content-center" style={{marginTop:"50px"}}>
                <div className="col-12 mx-5 py-3">
                    <a href="https://streamyard.com/"><img src="https://streamyard.com/resources/assets/images/logo.png" alt="" height="60px" width="250px"></img></a>
                </div>
            </div>
            </div>
            </section>
        </div>
    );
}