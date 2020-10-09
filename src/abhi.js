import React from 'react';
import './assets/css/main.css';
import './assets/css/fontawesome-all.min.css';
import Logo from './images/Abhivyakti.png';

import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Andi from './images/andi.png';
import {Navg} from './navbar';

export const ABHI = () => {
    return(
       <>

<Helmet>
                        <meta charset="utf-8" />
                        <link rel="icon" href={Andi} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta
            name="Abhivyakti"
            content="Article writing competition on technical and non-technical topics."
             /> 
             <title>Abhivyakti</title>
                </Helmet>
                <Navg style={{background:"#13007d"}}/>
       <div id="wrapper" className="divided">


    


    <section className="wrapper style1 align-left">
        <div className="inner">
        <h2 style={{fontWeight:"800",fontSize:"50px"}}><span style={{color:"#13007d"}}>ABHI</span>VYAKTI</h2>
        <p style={{fontWeight:"400"}}> In addition to the other events, Chef’s Fiesta also includes Editorials, comprising both <span className="theme4">technical and nontechnical</span> writing. This will test whether or not are the participants thorough with the conceptual knowledge or, which is necessary during placement sessions.<br></br> The participants will be required to submit their inputs within the given time frame and will be judged individually for their editorials.</p>
     
           
            <ul className="actions fixed">
			  <li><Link to="/registration" className="button primary3">Register</Link></li>
			</ul>

        </div>
      

    </section>
    <section className="wrapper style1 align-left">
        <div className="inner">
         <h2><span style={{color:"#13007d"}}>Tech</span>nical</h2>
         <ol style={{fontWeight:"400"}}>
             <li>Data Science</li>
             <li>Robotics</li>
             <li>Genetic Engineering</li>
             <li>Wireless Technology</li>
             <li>Cloud Computing</li>
             <li>Cyber Security</li>
             <li>Computer Networks</li>
             <li>Extra-terrestrial Intelligence</li>
             <li>AR/VR</li>
             <li>Computer Graphics</li>
             <li>Nano Technology</li>
             <li>Computer Animation</li>
             <li>Mind Control System</li>
             <li>Techno Disaster Management</li>
             <li>Android 9.0</li>
         </ol>
        </div>
      

    </section>
    <section className="wrapper style1 align-left">
        <div className="inner">
         <h2><span style={{color:"#13007d"}}>Non</span> Technical</h2>
         <ol style={{fontWeight:"400"}}>
             <li>Can India become an industrial superpower like China?</li>
             <li>Can AI robots successfully replace teachers in schools and universities in the future? If yes, is it the right thing to do with increasing unemployment?</li>
             <li>How much longer would it take India to become a fully developed country?</li>
             <li>Views on experienced people fired and replaced by the cheaper young generation.</li>
             <li>The adverse psychological effects due to the shift of education to digital platforms</li>
             <li>Social media: need to draw a line between the reel and the real!</li>
             <li>Is westernisation the only path to a better future?</li>
             <li>Is media free of political bias?</li>
             <li>Is human cloning a genetic disaster?</li>
             <li>How long will the "new normal" exist ?</li>
             <li>Scope of Atmanirbhar Abhiyaan</li>
             <li>Why are the farmers agitated today?</li>
             <li>How is National Education Policy going to benefit our future generations?</li>
             <li>Future of India's secularism and democracy</li>
         </ol>
        </div>
      

    </section>

               

                    <footer className="wrapper style1 align-center">
        
        <div className="inner">
        <img src={Logo} alt="" height="70" width="170"></img>
            <ul className="icons" style={{marginTop:"50px",fontSize:"20px"}}>
                <li><a href="https://twitter.com/CodeChefSRM" className="icon brands style1 fa-twitter theme4" target = "_blank" rel = "noopener noreferrer"><span className="label">Twitter</span></a></li>
                <li><a href="https://www.facebook.com/CodeChefSRM/" className="icon brands style1 fa-facebook-f theme4" target = "_blank" rel = "noopener noreferrer"><span className="label">Facebook</span></a></li>
                <li><a href="https://www.instagram.com/codechefsrm/" className="icon brands style1 fa-instagram theme4" target = "_blank" rel = "noopener noreferrer"><span className="label">Instagram</span></a></li>
                <li><a href="https://in.linkedin.com/company/ccscsrm" className="icon brands style1 fa-linkedin-in theme4" target = "_blank" rel = "noopener noreferrer"><span className="label">LinkedIn</span></a></li>
                <li><a href="mailto:codechefsrm@gmail.com" className="icon style1 fa-envelope theme4"><span className="label" target = "_blank" rel = "noopener noreferrer">Email</span></a></li>
            </ul>
            <p style={{fontWeight:"400",fontSize:"18px"}}><Link to="/" style={{textDecoration:"none",color:"#13007d"}}>HOME</Link> <br></br> <Link to="/tracks" style={{textDecoration:"none",color:"#13007d"}}>TRACKS</Link><br></br>
            <Link to="/APOC" style={{textDecoration:"none",color:"#13007d"}}>APOC |</Link> <Link to="/abhivyakti" style={{textDecoration:"none",color:"#13007d"}}> Abhivyakti |</Link> <Link to="/FryNTry" style={{textDecoration:"none",color:"#13007d"}}> Fry 'N' Try</Link>
            <br></br> <Link to="/registration" style={{textDecoration:"none",color:"#13007d"}}>REGISTER</Link></p>
            
            <p><span className="theme4">&copy;</span> Chef's Fiesta: All Rights Reserved.</p>
            <p>{'</>'} by <a href="https://codechefsrm.in" className="theme4" style={{textDecoration:"none"}}>CodeChef SRM</a></p>
            
            <span style={{fontSize:"14px"}}>
            <i className="fa fa-phone theme4" aria-hidden="true"></i> Contact us: <br></br><a href="tel:+91 87916 15165" className="theme4" style={{textDecoration:"none",fontWeight:"bold"}}>Takshil Mittal</a> <br></br><a href="tel:+91 95715 66754" className="theme4" style={{textDecoration:"none",fontWeight:"bold"}}>Sachin Agarwal</a>
            </span>
        </div>
</footer>


    

</div>
       </>
    );
}