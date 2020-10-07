import React from 'react';
import './assets/css/main.css';
import './assets/css/fontawesome-all.min.css';
import Accordion from './test';
import Banner from './images/banner.jpg';
import sp1 from './images/spotlight01.jpg';
import sp2 from './images/spotlight02.jpg';
import sp3 from './images/spotlight03.jpg';
import sp4 from './images/spotlight04.jpg';
import Logo from './images/cheff.png';
import {withRouter,Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Andi from './images/andi.png';
import Timeline from './images/timeline.jpg'


class Home extends React.Component{
   

    render(){

        const data = [
            { id: 1, name: "How do I register for various events in Chef's Fiesta?", 
            content: "Registration link will be provided for all the events on social media platforms and codechefsrm.in/events", state: "inactive" },
            { id: 2, name: "Can I participate in more than one event?", 
            content: "Yes, you can participate in multiple events.", state: "inactive" },
            { id: 3, name: "Is there a registration fee?", 
            content: "No, there's no registration fee for any event.", state: "inactive" },
            { id: 4, name: "How do I attend the webinars?", 
            content: "After you register, the link for the webinar, timing and platform will be e-mailed to your registered e-mail ID prior to the event.", state: "inactive" },
            { id: 5, name: "Will I get a certificate for participating in an event?", 
            content: "Yes, everyone who participates will receive a participation certificate.", state: "inactive" },
            { id: 6, name: "How can I contact you if I face any problem?", 
            content: "You can contact us at – codechefsrm@gmail.com", state: "inactive" },
            { id: 7, name: "Something which Chef loves the most?", 
            content: "01010100 01101111 00100000 01000011 01101111 01100100 01100101 00100000 01001111 01110101 01110010 00100000 01001000 01100101 01100001 01110010 01110100 01110011 00100000 01001111 01110101 01110100 00100001.", state: "inactive" },
            
          ];
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
      <div id="wrapper" className="divided">


    <section className="banner style2 orient-center content-align-center  fullscreen onload-image-fade-in onload-content-fade-right" style={{color:"white"}}>
        <div className="content">
        <h1 style={{fontWeight:"800",fontSize:"78px"}}><span style={{color:"white"}}>CHEF'S</span><span style={{color:"#0f1178"}}> FIESTA</span></h1>
							<p style={{fontSize:"25px"}} className="major">Adding spice to your code.</p>
							<ul className="actions stacked">
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
           
        </div>

    </section>


    <section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in" id="first">
        <div className="content">
            <h2 style={{fontWeight:"800",fontSize:"50px"}}><span style={{color:"#d69d70"}}>CHEF'S</span> HACK</h2>
            <p style={{fontWeight:"400"}}> In this monotonous lockdown era we bring forth our very own virtual 15 days projects based hackathon. Turn your brainstormed ideas into amazing projects under the guidance of a mentor.</p>
            
            <ul className="actions stacked">
			  <li><Link to="/tracks" className="button primary1 theme1">TRACKS</Link></li>
			</ul>
        </div>
        <div className="image">
            <img src={sp1} alt="" />
        </div>
    </section>

    <section className="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
        <div className="content">
            <h2 style={{fontWeight:"800",fontSize:"50px"}}>A <span style={{color:"#118f46"}}>PINCH OF CODE</span> 2.0</h2>
            <p style={{fontWeight:"400"}}>Remember A pinch of Code? We are back with an upgrade to hook you to your desktops and test your coding skills. Engage in APOC 2.0 on 24th October 2020. </p>
            <ul className="actions stacked">
			  <li><Link to="/APOC" className="button primary2 theme1">Learn More</Link></li>
			</ul>
        </div>
        <div className="image">
            <img src={sp2} alt="" />
        </div>
    </section>


    <section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">
        <div className="content">
            <h2 style={{fontWeight:"800",fontSize:"50px"}}><span style={{color:"#13007d"}}>ABHI</span>VYAKTI</h2>
            <p style={{fontWeight:"400"}}>Who needs ebooks when you have your novels? Well for all you avid readers and writers out there, CodeChef is organising an article writing competition where you can showcase your writing skills and stand a chance to stand out among all your fellow writers.</p>
            <ul className="actions stacked">
			  <li><Link to="/abhivyakti" className="button primary3 theme1">Learn More</Link></li>
			</ul>
        </div>
        <div className="image">
            <img src={sp3} alt="" />
        </div>
    </section>

    <section className="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
        <div className="content">
            <h2 style={{fontWeight:"800",fontSize:"50px"}}>FRY <span style={{color:"#ea6943"}}>'N'</span> TRY</h2>
            <p style={{fontWeight:"400"}}>So you’re a quizzer stuck at home with no quiz events but “Kaun Banega crorepati”? Well, wait no more as CodeChef brings to you; its quizzing event, stay tuned to know more!</p>
            <ul className="actions stacked">
			  <li><Link to="/FryNTry" className="button primary4 theme1">Learn More</Link></li>
			</ul>
        </div>
        <div className="image">
            <img src={sp4} alt="" />
        </div>
    </section>

    <section className="spotlight style4 orient-center content-align-center image-position-center onscroll-image-fade-in" id="first">
						<div className="content">
                        <h2 style={{fontWeight:"800",fontSize:"55px"}}><span style={{color:'#0f1178'}}>Time</span>line</h2>
                        <p className="major" style={{fontWeight:"400"}}>
                            The Chef has not served yet?<br></br>
                            Something delicious is cooking....
                        </p>
						</div>
                        
						
					</section>

    <section className="spotlight style4 orient-center content-align-left image-position-center onscroll-image-fade-in" id="first">
						<div className="content" style={{marginTop:"150px",marginBottom:"40px"}}>
							
						</div>
						<div className="image">
                            <img src={Timeline} alt=""/>
                            </div>
					</section>
                   

   
    <section className="wrapper style1 align-left">
						<div className="inner">
                      
										<header>
											<h3 style={{fontWeight:"bold",fontSize:"50px"}}><span style={{color:"#0f1178"}}>F</span>AQs</h3>
										</header>
										
                                    <Accordion data={data} />
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