import React from 'react';
import './assets/css/main.css';
import './assets/css/fontawesome-all.min.css';
import Logo from './images/fry.png';

import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Andi from './images/andi.png';

export const FRY = () => {
    return(
       <>

<Helmet>
                        <meta charset="utf-8" />
                        <link rel="icon" href={Andi} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta
            name="Fry 'n' Try"
            content="Quizz Competition on Instagram."
             /> 
             <title>Fry 'N' Try</title>
                </Helmet>
       <div id="wrapper" className="divided">


    


    <section className="wrapper style1 align-left">
        <div className="inner">
        <h2 style={{fontWeight:"800",fontSize:"50px"}}>FRY <span style={{color:"#ea6943"}}>'N' </span>TRY</h2>
        <p style={{fontWeight:"400"}}> The Quiz is mandatory for all the participants whether or not they are from a technical domain. This will give a fair chance for the students from differing streams to match their aptitude and brush up their skills accordingly.<br></br> This will be the most apt way to introduce students to some facts which are useful in real life implementation and excel in their particular fields.</p>
        
           
            <ul className="actions fixed">
			  <li><Link to="/" className="button primary4">Home</Link></li>
			</ul>

        </div>
      

    </section>

               

                    <footer className="wrapper style1 align-center">
        
        <div className="inner">
        <img src={Logo} alt="" height="150" width="150"></img>
            <ul className="icons" style={{marginTop:"50px",fontSize:"20px"}}>
                <li><a href="https://twitter.com/CodeChefSRM" className="icon brands style1 fa-twitter theme5" target = "_blank" rel = "noopener noreferrer"><span className="label">Twitter</span></a></li>
                <li><a href="https://www.facebook.com/CodeChefSRM/" className="icon brands style1 fa-facebook-f theme5" target = "_blank" rel = "noopener noreferrer"><span className="label">Facebook</span></a></li>
                <li><a href="https://www.instagram.com/codechefsrm/" className="icon brands style1 fa-instagram theme5" target = "_blank" rel = "noopener noreferrer"><span className="label">Instagram</span></a></li>
                <li><a href="https://in.linkedin.com/company/ccscsrm" className="icon brands style1 fa-linkedin-in theme5" target = "_blank" rel = "noopener noreferrer"><span className="label">LinkedIn</span></a></li>
                <li><a href="mailto:codechefsrm@gmail.com" className="icon style1 fa-envelope theme5"><span className="label" target = "_blank" rel = "noopener noreferrer">Email</span></a></li>
            </ul>
            <p style={{fontWeight:"400",fontSize:"18px"}}><Link to="/" style={{textDecoration:"none",color:"#ea6943"}}>HOME</Link> <br></br> <Link to="/tracks" style={{textDecoration:"none",color:"#ea6943"}}>TRACKS</Link><br></br>
            <Link to="/APOC" style={{textDecoration:"none",color:"#ea6943"}}>APOC |</Link> <Link to="/abhivyakti" style={{textDecoration:"none",color:"#ea6943"}}> Abhivyakti |</Link> <Link to="/FryNTry" style={{textDecoration:"none",color:"#ea6943"}}> Fry 'N' Try</Link>
            <br></br> <Link to="/registration" style={{textDecoration:"none",color:"#ea6943"}}>REGISTER</Link></p>
            
            <p><span className="theme5">&copy;</span> Chef's Fiesta: All Rights Reserved.</p>
            <p>{'</>'} by <a href="https://codechefsrm.in" className="theme5" style={{textDecoration:"none"}}>CodeChef SRM</a></p>
            
            <span style={{fontSize:"14px"}}>
            <i className="fa fa-phone theme5" aria-hidden="true"></i> Contact us: <br></br><a href="tel:+91 87916 15165" className="theme5" style={{textDecoration:"none",fontWeight:"bold"}}>Takshil Mittal</a> <br></br><a href="tel:+91 95715 66754" className="theme5" style={{textDecoration:"none",fontWeight:"bold"}}>Sachin Agarwal</a>
            </span>
        </div>
</footer>


    

</div>
       </>
    );
}