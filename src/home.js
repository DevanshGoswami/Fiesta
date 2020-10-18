import React from 'react';
import {Navg} from './navbar';
import './assets/css/main.css';

import './assets/css/fontawesome-all.min.css';
import {Prizes} from './prizes.js'
import Banner from './images/banner.jpg';
import sp1 from './images/spotlight01.jpg';
import sp2 from './images/spotlight02.jpg';
import sp3 from './images/spotlight03.jpg';
import sp4 from './images/spotlight04.jpg';
import Logo from './images/cheff.png';
import {withRouter,Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Andi from './images/andi.png';

import {Sponsor} from './sponsors';
import Timer from './timer';
import {Timeline} from './timeline';


class Home extends React.Component{

 
    render(){

       
       return(
        <>
        <Helmet>
        <meta charset="utf-8" />
        <link rel="icon" href={Andi} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta
            name="Home"
            content="Chef's Fiesta is a flagship event from CodeChef SRM Chapter with various interesting sub-events like a Projectathon, Webinars featuring special Guest Speakers, Technical and Non-technical Quizzes, The Second version of Our Coding Contest APOC 2.0 and Article writing contest on technical and non-technical topics."
             /> 
             <title>Chef's Fiesta - Home</title>
                </Helmet>
     
      
                <Navg style={{background:"#0f1178"}}/>


      <div id="wrapper" className="divided" style={{marginTop:"10px"}}>


    <section className="banner style2 orient-center content-align-left  fullscreen onload-image-fade-in onload-content-fade-right" style={{color:"white"}}>
        <div className="content">
        <h1 style={{fontWeight:"800",fontSize:"78px"}}><span style={{color:"white"}}>CHEF'S</span><span style={{color:"#0f1178"}}> FIESTA</span></h1>
       <p style={{fontSize:"18px"}} className="major"><span style={{fontSize:"20px",fontWeight:"600"}}><span className="fa fa-calendar" style={{marginRight:'15px'}}></span>23.10.2020 - 09.11.2020</span><br/><br/>"when you don't create things, you become defined by your tastes rather than ability. your tastes only narrow {'&'} exclude people. so create"<br></br>

                            </p>
                            
                          
                            <ul className="actions fixed">
                            
								<li><Link to="/registration"  className="button primary big wide smooth-scroll-middle">REGISTER</Link></li>
							</ul>
           
        </div>
        <div className="image">
            <img src={Banner} alt="" />
        </div>
    </section>
    

    

    <section className="wrapper style1 align-left">
        <div className="inner">
            <h2 style={{fontWeight:"800",fontSize:"50px"}}><span style={{color:'#0f1178'}}>A</span>BOUT</h2>
            <p style={{fontWeight:"400"}}><span className="theme">Chef's Fiesta</span> is a flagship event from <span className="theme">CodeChef SRM Chapter</span> with various interesting sub-events like a <span className="theme">Projectathon</span>, <span className="theme">Webinars</span> featuring special Guest Speakers, Technical and Non-technical <span className="theme">Quizzes</span>, The Second version of Our Coding Contest <span className="theme">APOC 2.0</span> and Article writing contest on technical and non-technical topics.<br></br>
            The Registrations will start from <span className="theme">6 October 2020</span> and Chef's Fiesta will officially commence from <span className="theme">23 October 2020</span> and will continue till <span className="theme">9 November 2020</span>.<br></br> With all our bases covered, we will be organizing Learning Sessions in the midst of the registration period for those who wish to exceed their limits.<br></br> The topics to be taught in the sessions are Deep Learning, Full Stack Tips and Tools Optimization, App Dev Tools Optimization and Competitive Coding.
            </p>
            <h2 style={{fontWeight:"600",fontSize:"30px"}}><span style={{color:'#0f1178'}}>Code</span> of Conduct for Chef's Hack</h2>
            <p style={{fontWeight:"400"}}>Feel free to check out our Code of Conduct right <a href="https://devfolio.co/code-of-conduct" className="theme">here</a>, Our code of conduct is based on the Devfolio code of Conduct.</p>
        </div>

    </section>

    <section className="wrapper style1 align-center">
        <div className="inner">
        <h2 style={{fontWeight:"800",fontSize:"50px",marginBottom:"70px"}}><span style={{color:'#0f1178'}}>E</span>VENTS</h2>
        <div className="content box">
        <section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in" id="first"  style={{marginBottom:"50px"}}>
        <div className="content">
            <h2 style={{fontWeight:"800",fontSize:"30px"}}><span style={{color:"#d69d70"}}>CHEF'S</span> HACK</h2>
            <p style={{fontWeight:"400"}}> In this monotonous lockdown era we bring forth our very own virtual 15 days projects based hackathon. Turn your brainstormed ideas into amazing projects under the guidance of a mentor.</p>
            
            <ul className="actions stacked">
            <li><a href="https://chefshack.devfolio.co" style={{textDecoration:"none"}}><button className="button devfolio" style={{borderRadius:"0", textTransform:"none"}}><svg class="logo" xmlns="http://www.w3.org/2000/svg" fill="#fff"viewBox="0 0 115.46 123.46" style={{height:"18px",width:"18px",marginRight:"8px",}}><path d="M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 2.18.08 3.34z" /><path d="M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 55.41 0 0 1 50.58 55.34z"/></svg>Apply with Devfolio</button></a></li>
              <li><Link to="/tracks" className="button primary1 theme1">TRACKS</Link></li> 
			</ul>
        </div>
        <div className="image">
            <img src={sp1} alt="" />
        </div>
    </section>
        </div>
        <div className="content box">
        <section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in" style={{marginBottom:"50px"}}>
        <div className="content">
            <h2 style={{fontWeight:"800",fontSize:"30px"}}>A <span style={{color:"#118f46"}}>PINCH OF CODE</span> 2.0</h2>
            <p style={{fontWeight:"400"}}>Remember A pinch of Code? We are back with an upgrade to hook you to your desktops and test your coding skills. Engage in APOC 2.0 on 24th October 2020. </p>
            <ul className="actions stacked">
			  <li><Link to="/APOC" className="button primary2 theme1">Learn More</Link></li>
			</ul>
        </div>
        <div className="image">
            <img src={sp2} alt="" />
        </div>
    </section>
        </div>
        <div className="content box">
        <section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in" style={{marginBottom:"50px"}}>
        <div className="content">
            <h2 style={{fontWeight:"800",fontSize:"30px"}}><span style={{color:"#13007d"}}>ABHI</span>VYAKTI</h2>
            <p style={{fontWeight:"400"}}>Who needs ebooks when you have your novels? Well for all you avid readers and writers out there, CodeChef is organising an article writing competition where you can showcase your writing skills and stand a chance to stand out among all your fellow writers.</p>
            <ul className="actions stacked">
			  <li><Link to="/abhivyakti" className="button primary3 theme1">Learn More</Link></li>
			</ul>
        </div>
        <div className="image">
            <img src={sp3} alt="" />
        </div>
    </section>
        </div>
        <div className="content box">
        <section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in" style={{marginBottom:"50px"}}>
        <div className="content">
            <h2 style={{fontWeight:"800",fontSize:"30px"}}>FRY <span style={{color:"#ea6943"}}>'N'</span> TRY</h2>
            <p style={{fontWeight:"400"}}>So you’re a quizzer stuck at home with no quiz events but “Kaun Banega crorepati”? Well, wait no more as CodeChef brings to you; its quizzing event, stay tuned to know more!</p>
            <ul className="actions stacked">
			  <li><Link to="/FryNTry" className="button primary4 theme1">Learn More</Link></li>
			</ul>
        </div>
        <div className="image">
            <img src={sp4} alt="" />
        </div>
    </section>
        </div>
        
        

    


    

    
        </div>

    </section>


    

    <section className="wrapper style1 align-center">
        <div className="inner">
            <p style={{fontSize:"25px",fontWeight:"400"}}>Time is a storm in which we all are lost..</p>
        <Timer key="October 23,2020" eventName="Hello" eventDate="October 23,2020"/>
        </div>

  </section>

  <section className="wrapper style1 align-center">
        <div className="inner">
        <Timeline/>
        </div>

  </section>

    <section className="wrapper style1 align-center">
        <div className="inner">
        <Prizes/>
        </div>

  </section>

    <section className="wrapper style1 align-center">
        <div className="inner">
        <Sponsor/>
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
}

export default withRouter(Home);