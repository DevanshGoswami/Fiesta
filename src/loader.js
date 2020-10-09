import React from 'react';
import './assets/css/main.css';
import './assets/css/fontawesome-all.min.css';
import Accordion from './test';
import Logo from './images/cheff.png';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

import {Navg} from './navbar';



class Loader extends React.Component{
   

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
       
                <Navg style={{background:"#0f1178"}}/>
      <div id="wrapper" className="divided">
      <section className="wrapper style1 align-center">
            <div className="inner">
            <h2 style={{fontWeight:"800",fontSize:"60px"}}><span style={{color:'#0f1178'}}>F</span>AQs</h2>
           
           
            </div>
        </section>

      <section className="wrapper style1 align-left">
						<div className="inner">
                      
										
										
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

export default withRouter(Loader);