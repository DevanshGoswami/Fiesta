import React from 'react';
import './assets/css/main.css';
import './assets/css/fontawesome-all.min.css';
import Logo from './images/APOC.png';

import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Andi from './images/andi.png';
import {Navg} from './navbar';

export const APOC = () => {
    return(
       <>

<Helmet>
                        <meta charset="utf-8" />
                        <link rel="icon" href={Andi} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta
            name="APOC 2.0"
            content="Flagship Coding competition by CodeChef SRM."
             /> 
             <title>APOC 2.0</title>
                </Helmet>
                <Navg style={{background:"#118f46"}}/>
       <div id="wrapper" className="divided">


    


    <section className="wrapper style1 align-left">
        <div className="inner">
        <h2 style={{fontWeight:"800",fontSize:"50px"}}>A <span style={{color:"#118f46"}}>Pinch Of Code</span> 2.0</h2>
        <p style={{fontWeight:"400"}}> This is going to be a two round coding contest for our coding maniacs. Round 1 will be held on <span className="theme3">24th Oct</span> and the subsequent Round 2 will take place on <span className="theme3">31st October</span>.<br></br> This <span className="theme3">coding contest</span> will challenge the participants with their knowledge on core concepts of coding and provide them with the real-world coding experience.<br></br> This will boost their self confidence and will develop a competitive sprint in them to fight with their fellow mates.</p>
        <br></br>
           
            <ul className="actions fixed">
			  <li><Link to="/registration" className="button primary2">Register</Link></li>
			</ul>

        </div>
      

    </section>

               

                    <footer className="wrapper style1 align-center">
        
        <div className="inner">
        <img src={Logo} alt="" height="150" width="150"></img>
            <ul className="icons" style={{marginTop:"50px",fontSize:"20px"}}>
                <li><a href="https://twitter.com/CodeChefSRM" className="icon brands style1 fa-twitter theme3" target = "_blank" rel = "noopener noreferrer"><span className="label">Twitter</span></a></li>
                <li><a href="https://www.facebook.com/CodeChefSRM/" className="icon brands style1 fa-facebook-f theme3" target = "_blank" rel = "noopener noreferrer"><span className="label">Facebook</span></a></li>
                <li><a href="https://www.instagram.com/codechefsrm/" className="icon brands style1 fa-instagram theme3" target = "_blank" rel = "noopener noreferrer"><span className="label">Instagram</span></a></li>
                <li><a href="https://in.linkedin.com/company/ccscsrm" className="icon brands style1 fa-linkedin-in theme3" target = "_blank" rel = "noopener noreferrer"><span className="label">LinkedIn</span></a></li>
                <li><a href="mailto:codechefsrm@gmail.com" className="icon style1 fa-envelope theme3"><span className="label" target = "_blank" rel = "noopener noreferrer">Email</span></a></li>
            </ul>
            <p style={{fontWeight:"400",fontSize:"18px"}}><Link to="/" style={{textDecoration:"none",color:"#118f46"}}>HOME</Link> <br></br> <Link to="/tracks" style={{textDecoration:"none",color:"#118f46"}}>TRACKS</Link><br></br>
            <Link to="/APOC" style={{textDecoration:"none",color:"#118f46"}}>APOC |</Link> <Link to="/abhivyakti" style={{textDecoration:"none",color:"#118f46"}}> Abhivyakti |</Link> <Link to="/FryNTry" style={{textDecoration:"none",color:"#118f46"}}> Fry 'N' Try</Link>
            <br></br> <Link to="/registration" style={{textDecoration:"none",color:"#118f46"}}>REGISTER</Link></p>
            
            <p><span className="theme3">&copy;</span> Chef's Fiesta: All Rights Reserved.</p>
            <p>{'</>'} by <a href="https://codechefsrm.in" className="theme3" style={{textDecoration:"none"}}>CodeChef SRM</a></p>
            
            <span style={{fontSize:"14px"}}>
            <i className="fa fa-phone theme3" aria-hidden="true"></i> Contact us: <br></br><a href="tel:+91 87916 15165" className="theme3" style={{textDecoration:"none",fontWeight:"bold"}}>Takshil Mittal</a> <br></br><a href="tel:+91 95715 66754" className="theme3" style={{textDecoration:"none",fontWeight:"bold"}}>Sachin Agarwal</a>
            </span>
        </div>
</footer>


    

</div>
       </>
    );
}