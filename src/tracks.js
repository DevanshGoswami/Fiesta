import React from 'react';
import {Navg} from './navbar';
import './assets/css/main.css';
import './assets/css/fontawesome-all.min.css';
import Logo from './images/cheff2.png';
import sp1 from './images/1.jpg';
import sp2 from './images/2.jpg';
import sp3 from './images/3.jpg';
import sp4 from './images/4.jpg';
import sp5 from './images/5.jpg';
import sp6 from './images/6.jpg';
import sp7 from './images/7.jpg';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Andi from './images/andi.png';


export const Track = () => {
    return(
       <>

<Helmet>
                        <meta charset="utf-8" />
                        <link rel="icon" href={Andi} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta
            name="Tracks"
            content="Presenting to you the 7 flavours we have carefully chosen for Chef's Hack."
             /> 
             <title>Tracks</title>
                </Helmet>
				<Navg style={{background:"#d69d70"}}/>
       <div id="wrapper" className="divided" style={{marginTop:"70px"}}>


    


    <section className="wrapper style1 align-left">
        <div className="inner">
        <h2 style={{fontWeight:"800",fontSize:"50px"}}><span style={{color:"#d69d70"}}>T</span>RACKS</h2>
        <p style={{fontWeight:"400"}}><span className="theme2">Chef's</span> Hack is a coding bash which is mindfully designed to serve a downright erudite experience and mark a startling episode in your entire coding journey.</p>
        <br></br>
            <p style={{fontWeight:"400"}}>Presenting to you the <span className="theme2">7</span> flavours we have carefully chosen for Chef's Hack.</p>
            <ul className="actions fixed">
			  <li><a href="https://devfolio.co/external-apply/chefshack/" style={{textDecoration:"none"}}><button className="button devfolio" style={{borderRadius:"0", textTransform:"none"}}><svg class="logo" xmlns="http://www.w3.org/2000/svg" fill="#fff"viewBox="0 0 115.46 123.46" style={{height:"18px",width:"18px",marginRight:"8px",}}><path d="M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 2.18.08 3.34z" /><path d="M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 55.41 0 0 1 50.58 55.34z"/></svg>Apply with Devfolio</button></a></li>
			</ul>

        </div>
      

    </section>

	<section className="wrapper style1 align-left">
        <div className="inner">
		<section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">
						<div className="content">
							<h2 style={{fontWeight:"800",color:"#d69d70"}}>Education Tech: Highest Degree of Innovation</h2>
							<p style={{fontWeight:"400"}}>
                            The pandemic has pushed the world to rethink the education methodologies leading to innovation. Though virtual learning is has become the talk of the town but its credibility has under a lot of scrutinies. Thus, it is important that we challenge the status quo and tinker an age-old method.
                            </p>
							
						</div>
						<div className="image">
							<img src={sp1} alt="" />
						</div>
					</section>
                    
                    <section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">
						<div className="content">
							<h2 style={{fontWeight:"800",color:"#d69d70"}}>Mobility: Innovate the Wheel</h2>
							<p style={{fontWeight:"400"}}>The invention of the wheel changed the outcome of the entire human civilisation. Yet we are scared to reinvent the wheel but we can innovate it. Innovation is the need of the hour to provide the availability of secure travel.</p>
							
						</div>
						<div className="image">
							<img src={sp2} alt="" />
						</div>
					</section>
                    
                    <section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">
						<div className="content">
							<h2 style={{fontWeight:"800",color:"#d69d70"}}>Open Innovation</h2>
							<p style={{fontWeight:"400"}}>An open-ended theme2 where the only restriction is your imagination. Build the ideas that you believe in and make a difference.
                            </p>
							
						</div>
						<div className="image">
							<img src={sp3} alt="" />
						</div>
					</section>
                    
                    <section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">
						<div className="content">
							<h2 style={{fontWeight:"800",color:"#d69d70"}}>Robotics and Drones</h2>
							<p style={{fontWeight:"400"}}>There is a need to design drones and robots that can solve some of the pressing challenges of India such as handling medical emergencies, search and rescue operations, etc.</p>
							
						</div>
						<div className="image">
							<img src={sp4} alt="" />
						</div>
					</section>
                    
                    <section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">
						<div className="content">
							<h2 style={{fontWeight:"800",color:"#d69d70"}}>Health Technology in Rural Areas</h2>
							<p style={{fontWeight:"400"}}>As we have progressed a lot in medical field but resources and available facilities are not properly reaching to all the people which is mostly concentrated in rural areas.</p>
							
						</div>
						<div className="image">
							<img src={sp5} alt="" />
						</div>
					</section>
                    
                    <section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">
						<div className="content">
							<h2 style={{fontWeight:"800",color:"#d69d70"}}>Financial Tech</h2>
							<p style={{fontWeight:"400"}}>Since pandemic has struck whole world at a disastrous level in all the fields but most affected sector is Finance. We all have recognised the need of innovative technical ideas to provide a boost to our Indian economy and finance.
                           </p>
							
						</div>
						<div className="image">
							<img src={sp6} alt="" />
						</div>
					</section>
                    
                    <section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">
						<div className="content">
							<h2 style={{fontWeight:"800",color:"#d69d70"}}>Environmental Sustainability</h2>
							<p style={{fontWeight:"400"}}>In past few years environmental sustainability has surfaced as one of the most pressing issues which are to be taken into immediate consideration across the globe. There is a need to come up with ideas and innovations which can secure the environment in a sustainable manner.</p>
							
						</div>
						<div className="image">
							<img src={sp7} alt="" />
						</div>
					</section>
                    
        </div>

    </section>

   

                    <footer className="wrapper style1 align-center">
        
        <div className="inner">
        <img src={Logo} alt="" height="150" width="150"></img>
            <ul className="icons" style={{marginTop:"50px",fontSize:"20px"}}>
                <li><a href="https://twitter.com/CodeChefSRM" className="icon brands style1 fa-twitter theme2" target = "_blank" rel = "noopener noreferrer"><span className="label">Twitter</span></a></li>
                <li><a href="https://www.facebook.com/CodeChefSRM/" className="icon brands style1 fa-facebook-f theme2" target = "_blank" rel = "noopener noreferrer"><span className="label">Facebook</span></a></li>
                <li><a href="https://www.instagram.com/codechefsrm/" className="icon brands style1 fa-instagram theme2" target = "_blank" rel = "noopener noreferrer"><span className="label">Instagram</span></a></li>
                <li><a href="https://in.linkedin.com/company/ccscsrm" className="icon brands style1 fa-linkedin-in theme2" target = "_blank" rel = "noopener noreferrer"><span className="label">LinkedIn</span></a></li>
                <li><a href="mailto:codechefsrm@gmail.com" className="icon style1 fa-envelope theme2"><span className="label" target = "_blank" rel = "noopener noreferrer">Email</span></a></li>
            </ul>
            <p style={{fontWeight:"400",fontSize:"18px"}}><Link to="/" style={{textDecoration:"none",color:"#d69d70"}}>HOME</Link> <br></br> <Link to="/tracks" style={{textDecoration:"none",color:"#d69d70"}}>TRACKS</Link><br></br>
            <Link to="/APOC" style={{textDecoration:"none",color:"#d69d70"}}>APOC |</Link> <Link to="/abhivyakti" style={{textDecoration:"none",color:"#d69d70"}}> Abhivyakti |</Link> <Link to="/FryNTry" style={{textDecoration:"none",color:"#d69d70"}}> Fry 'N' Try</Link>
            <br></br> <Link to="/registration" style={{textDecoration:"none",color:"#d69d70"}}>REGISTER</Link></p>
            
            <p><span className="theme2">&copy;</span> Chef's Fiesta: All Rights Reserved.</p>
            <p>{'</>'} by <a href="https://codechefsrm.in" className="theme2" style={{textDecoration:"none"}}>CodeChef SRM</a></p>
            
            <span style={{fontSize:"14px"}}>
            <i className="fa fa-phone theme2" aria-hidden="true"></i> Contact us: <br></br><a href="tel:+91 87916 15165" className="theme2" style={{textDecoration:"none",fontWeight:"bold"}}>Takshil Mittal</a> <br></br><a href="tel:+91 95715 66754" className="theme2" style={{textDecoration:"none",fontWeight:"bold"}}>Sachin Agarwal</a>
            </span>
        </div>
</footer>


    

</div>
       </>
    );
}