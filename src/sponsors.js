import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/css/fontawesome-all.min.css';

export const Sponsor = () => {
    return(
        <div>
            <section className="text-center">
    <h2 style={{fontWeight:"800",fontSize:"40px",marginBottom:"50px"}}><span style={{color:'#0f1178'}}>S</span>PONSORS</h2>
            <div>
           
            <div className="content box">
           <h2>Title</h2>
            <div className="row justify-content-center" style={{marginTop:"50px"}}>
                <div className="col-12 col-sm-3 mx-2 py-3 mt-5 " >
                    <a href="https://xobin.com/"><img src="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_200,h_200/https://xobin.com/wp-content/uploads/2020/09/XobinLogoLatest.png" alt="" height="40px" width="150px"></img></a>  
                </div>
                <div className="col-12 col-sm-3 mx-2 py-3 mt-1" >
                    <a href="https://devfolio.co/"><img src="https://www.hackoff.tech/assets/img/brands/devfolio2.png" alt="" height="150px" width="200px"></img></a>  
                </div>
               
            </div>
            
            </div>

            <div className="content box">
           <h2>Gold</h2>
            <div className="row justify-content-center" style={{marginTop:"50px"}}>
                <div className="col-12 col-sm-3 mx-2 py-3" >
                    <a href="https://foxmula.com/"><img src="https://lh3.googleusercontent.com/pw/ACtC-3cGsQ9WH2x-Io5jlI52CQrMwOfwzCjOF2O8pMm52dT5B6UXSnzFnDRyAAR0Uj1a19FMszfM9c1E1xbwPIR1y6sayDGAjMT5OTyoV4tUEFx2yuDWVeT-xG1nG7LSbFwPzHJjKRdlt5JuZTQVfhjlS1Yd=w650-h243-no?authuser=0" alt="" height="70px" width="150px"></img></a>  
                </div>
                <div className="col-12 col-sm-3 mx-2 py-3" >
                    <a href="https://matic.network/"><img src="https://www.pgconnects.com/hong-kong/wp-content/uploads/sites/10/2019/07/logo-MaticNetwork-300x.png" alt="" height="60px" width="150px"></img></a>  
                </div>
                <div className="col-12 col-sm-3 mx-2 py-3 mt-1" >
                    <a href="https://www.portis.io/"><img src="https://lh3.googleusercontent.com/pw/ACtC-3cze1nVO2YZFq8jHduVQoHJ4cSzZDiWSJBS4dYejo-Cq24ASBVXT7FKvGC0okZr7RErEtq7pPX7Q9CsbnjBNGB1aNZ-diXnfCc9EWGZfsJNJm1N1ZUt50oGv-4BymKgi8NwYFyvFHYMcw9W-a4MauMp=w256-h82-no?authuser=0" alt="" height="60px" width="150px"></img></a>  
                </div>
                <div className="col-12 col-sm-3 mx-2 py-3 mt-3" >
                    <a href="https://fold.money/"><img src="data:image/png;base64,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" alt="" height="70px" width="150px"></img></a>  
                </div>
                <div className="col-12 col-sm-3 mx-2 py-3 mt-3" >
                    <a href="https://tezos.com/"><img src="https://nomadic-labs.com/images/tezos.png" alt="" width="150px" height="55px"></img></a>  
                </div>
                <div className="col-12 col-sm-3 mx-2 py-3 mt-3">
                <a href="https://bit.ly/3jbxgRw"><img src="https://lh3.googleusercontent.com/pw/ACtC-3dlGxgvOBCfU9Vt7Gup1jfXRvCQatY9IcvcIuN7UIQ6Pq32FOSWnyTvNvo0KrDMnRjS4K8GY-xoWVKJzcjwdQnHeAo5QJWhdUNfp6KXVXBLSCANLYRzsOi8LukKQBjqrOrbetgrh0ZTTq_QpvEoAaLz=w582-h152-no?authuser=0" height="60px" width="200px"  alt=""></img></a>
                </div>
            </div>
            </div>
           
           

           <div className="content box">
           <h2>Silver</h2>
            <div className="row justify-content-center" style={{marginTop:"50px"}}>
                <div className="col-12 col-sm-3 mx-5 py-3">
                    <a href="https://egghead.io/"><img src="https://res.cloudinary.com/dg3gyk0gu/image/upload/v1566948117/transcript-images/Eggo_Notext.png" alt="" height="100px" width="84px"></img></a>
                </div>
                <div className="col-12 col-sm-3 mx-5 py-3">
                    <a href="https://www.echoar.xyz/"><img src="https://static.wixstatic.com/media/c42fea_d1fbddac9a524f16b3d4456d639b444a~mv2.png/v1/fill/w_750,h_375,al_c/c42fea_d1fbddac9a524f16b3d4456d639b444a~mv2.png" alt="" height="100px" width="150px"></img></a>
                </div>
                <div className="col-12 col-sm-3 mx-5 py-3 mt-2">
                    <a href="https://www.sashido.io/en/"><img src="https://peddiehacks.peddie.org/FinalLogos/sashido-logo-for%20sites.png" alt="" height="70px" width="170px"></img></a>
                </div>
                <div className="col-12 col-sm-3 mx-5 mt-4 py-3">
                <a href="https://www.axure.com/"><img src="https://www.axure.com/wp-content/uploads/2019/04/logo-black.svg" height="38px" width="170px"  alt=""></img></a>
                </div>
            </div>
            </div>
            <div>
           </div>
            
            <div className="content box">
            <h2>Bronze</h2>
            <div className="row justify-content-center" style={{marginTop:"50px"}}>
                <div className="col-12 col-sm-3 mx-2 py-3">
                    <a href="https://repl.it/"><img src="https://repl.it/public/images/light-logo.svg" alt="" height="50px" width="200px"></img></a>
                </div>
                <div className="col-12 col-sm-3 mx-2 py-3">
                <a href="https://balsamiq.com/"><img src="https://ga1.imgix.net/logo/o/91065-1487749816-7583342?auto=format&ch=Width%2CDPR&dpr=2.63&ixjsv=2.0.0&ixlib=rb-1.0.0&q=38&w=400" height="100px" width="100px"  alt=""></img></a>
                </div>
                <div className="col-12 col-sm-3 mx-2 py-3">
                <a href="https://www.voiceflow.com/"><img src="https://uploads-ssl.webflow.com/5bddf05642686caf6d17eb58/5e29f310a832473c0689b8ec_5cf52c37420081eec94ed662_VF_Logo_Black-p-3200-p-500.png" height="40px" width="170px"  alt=""></img></a>
                </div>
                <div className="col-12 col-sm-3 mx-2 py-3">
                <a href="https://www.interviewcake.com/"><img src="https://ga-core.s3.amazonaws.com/cms/files/files/000/004/656/original/InterviewCake_horizontal.png" height="40px" width="170px"  alt=""></img></a>
                </div>

                <div className="col-12 col-sm-3 mx-2 py-3">
                <a href="https://codingblocks.com/"><img src="https://codingblocks.com/assets/images/cb/cblogo.png" height="50px" width="140px"  alt=""></img></a>
                </div>

                <div className="col-12 col-sm-3 mx-2 py-3">
                <a href="https://www.linode.com/"><img src="https://www.linode.com/wp-content/uploads/2018/10/linode-logo-blk-rgb-minified.svg" height="40px" width="170px"  alt=""></img></a>
                </div>
                
                <div className="col-12 col-sm-3 mx-2 py-3">
                <a href="https://www.jetbrains.com/"><img src="https://www.jetbrains.com/company/brand/img/jetbrains_logo.png" height="100px" width="100px"  alt=""></img></a>
                </div>
            </div>
            </div>
            
            <div className="content box">
            <h2>Streaming Partner</h2>
            <div className="row justify-content-center" style={{marginTop:"50px"}}>
                <div className="col-12 mx-5 py-3">
                    <a href="https://streamyard.com/"><img src="https://streamyard.com/resources/assets/images/logo.png" alt="" height="60px" width="250px"></img></a>
                </div>
            </div>
            </div>

            <div className="content box">
           <h2>Media Partner</h2>
            <div className="row justify-content-center" style={{marginTop:"50px"}}>
                <div className="col-12 col-sm-3 mx-2 py-3 mt-1">
                    <a href="https://srmpedia.in/"><img src="https://srmpedia.in/assets/img/logo.png" alt="" height="100px" width="84px"></img></a>
                </div>
                <div className="col-12 col-sm-3 mx-2 py-3">
                    <a href="https://www.myklassroom.com/"><img src="https://media.myklassroom.com/root/canvas/images/myKlassroom-logo-1.png" alt="" height="170px" width="140px"></img></a>
                </div>
               
            </div>
            </div>
            <div>
           </div>

            
            </div>
            </section>
        </div>
    );
}