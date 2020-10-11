import React from 'react';
import {Navg} from './navbar';
import './assets/css/main.css';
import './assets/css/fontawesome-all.min.css';
import Logo from './images/cheff.png';
import {Helmet} from 'react-helmet';
import Andi from './images/andi.png';
import {Link} from 'react-router-dom';
import banner2 from './images/congo.jpg';



export const Thanks = () =>{
    return(
        <>
        <Helmet>
                        <meta charset="utf-8" />
                        <link rel="icon" href={Andi} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta
            name="Thanks"
            content="We are happy to have you registered for the event."
             /> 
             <title>Thank You!</title>
                </Helmet>
                <Navg style={{background:"#0f1178"}}/>
        <div id="wrapper" className="divided">


    <section className="banner style2 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right" >
        <div className="content">
        <h2 style={{fontWeight:"800",fontSize:"32px"}}><span style={{color:'#0f1178'}}>CONGRAT</span>ULATIONS<span style={{color:'#0f1178'}}>!</span>!</h2>
            <p className="major">You have been successfully registered for <span className="theme">Chef's</span> Fiesta.</p>
            <br>
            </br>
            <p className="major" style={{fontSize:"20px"}}>Check your <span className="theme">MailBoxes</span> to register yourself for the individual events you have chosen on <strong style={{fontWeight:"800"}}>Google Form</strong>.</p>
            <ul className="actions fixed">
								<li><Link to="/"  className="button primary big wide smooth-scroll-middle">HOME</Link></li>
							</ul>
        </div>
        <div className="image">
            <img src={banner2} alt="" />
        </div>
    </section>


    


    <footer className="wrapper style1 align-center">
        
        <div className="inner">
        <img src={Logo} alt="" height="200" width="200"></img>
            <ul className="icons" style={{marginTop:"50px",fontSize:"20px"}}>
                <li><a href="https://twitter.com/CodeChefSRM" className="icon brands style1 fa-twitter theme" target = "_blank" rel = "noopener noreferrer"><span className="label">Twitter</span></a></li>
                <li><a href="https://www.facebook.com/CodeChefSRM/" className="icon brands style1 fa-facebook-f theme" target = "_blank" rel = "noopener noreferrer"><span className="label">Facebook</span></a></li>
                <li><a href="https://www.instagram.com/codechefsrm/" className="icon brands style1 fa-instagram theme" target = "_blank" rel = "noopener noreferrer"><span className="label">Instagram</span></a></li>
                <li><a href="https://in.linkedin.com/company/ccscsrm" className="icon brands style1 fa-linkedin-in theme" target = "_blank" rel = "noopener noreferrer"><span className="label">LinkedIn</span></a></li>
                <li><a href="mailto:codechefsrm@gmail.com" className="icon style1 fa-envelope theme"><span className="label" target = "_blank" rel = "noopener noreferrer">Email</span></a></li>
            </ul>
            <p style={{fontWeight:"400",fontSize:"18px"}}><Link to="/" style={{textDecoration:"none",color:"#0f1178"}}>HOME</Link> <br></br> <Link to="/tracks" style={{textDecoration:"none",color:"#0f1178"}}>TRACKS</Link><br></br>
            <Link to="/APOC" style={{textDecoration:"none",color:"#0f1178"}}>APOC |</Link> <Link to="/abhivyakti" style={{textDecoration:"none",color:"#0f1178"}}> Abhivyakti |</Link> <Link to="/FryNTry" style={{textDecoration:"none",color:"#0f1178"}}> Fry 'N' Try</Link>
            <br></br> <Link to="/registration" style={{textDecoration:"none",color:"#0f1178"}}>REGISTER</Link></p>
            
            <p><span className="theme">&copy;</span> Chef's Fiesta: All Rights Reserved.</p>
            <p>{'</>'} by <a href="https://codechefsrm.in" className="theme" style={{textDecoration:"none"}}>CodeChef SRM</a></p>
            
            <span style={{fontSize:"14px"}}>
            <i className="fa fa-phone theme" aria-hidden="true"></i> Contact us: <br></br><a href="tel:+91 87916 15165" className="theme" style={{textDecoration:"none",fontWeight:"bold"}}>Takshil Mittal</a> <br></br><a href="tel:+91 95715 66754" className="theme" style={{textDecoration:"none",fontWeight:"bold"}}>Sachin Agarwal</a>
            </span>
        </div>
</footer>

</div>

        </>
    );
}

export const Error = () =>{
    return(
        <>
         <Helmet>
                        <meta charset="utf-8" />
                        <link rel="icon" href={Andi} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta
            name="Error"
            content="Page Not Found"
             /> 
             <title>Error 404</title>
                </Helmet>
        <div id="wrapper" className="divided">


    <section className="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right" >
        <div className="content">
        <h2 style={{fontWeight:"800",fontSize:"40px"}}><span style={{color:'#0f1178'}}>Error </span>404</h2>
            <p className="major">No one is truly lost when they remain in the hearts and minds of those who love them.</p>
            <br>
            </br>
            <p className="major" style={{fontSize:"20px"}}>Page <span className="theme">Not</span> Found.</p>
            <ul className="actions stacked">
								<li><Link to="/"  className="button primary big wide smooth-scroll-middle">HOME</Link></li>
							</ul>
        </div>
    </section>


    


    

</div>

        </>
    );
}