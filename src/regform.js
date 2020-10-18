import React from 'react';
import {Navg} from './navbar';
import {withRouter,Link} from 'react-router-dom';
import './assets/css/main.css';
import './assets/css/fontawesome-all.min.css';
import axios from 'axios';
import {Helmet} from 'react-helmet';
import Andi from './images/andi.png';


import Logo from './images/cheff.png';

class RegForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            toMail: "",
            name: "",
            college: "",
            regno: "",
            phone: "",
            hack:"",
            apoc:"",
            abhi:"",
            events: []
        }
        this.handleChange = this.handleChange.bind(this);
  
        this.handleSubmit = this.handleSubmit.bind(this);
        }
        

        handleChange(e){
            this.setState({
                [e.target.name] : e.target.value 
            })
        }
        
        handleSubmit(e){
            e.preventDefault();
            if(this.state.hack){
                this.setState({
                    events : this.state.events.push(this.state.hack)
                })
            }
            if(this.state.apoc){
                this.setState({
                    events : this.state.events.push(this.state.apoc)
                })
            }
            if(this.state.abhi){
                this.setState({
                    events : this.state.events.push(this.state.abhi)
                })
            }

            const object = {
                toMail: this.state.toMail,
                regno: this.state.regno,
                phone: this.state.phone,
                name: this.state.name,
                college: this.state.college,
                events: this.state.events
            }
            
            
            axios.post("https://us-central1-chefs-fiesta.cloudfunctions.net/sendMail",object);
            this.props.history.push('/thanks');
        }
       

    render(){

        const {toMail,phone,regno,name,college} = this.state;

        return(
            <>
            <Helmet>
                        <meta charset="utf-8" />
                        <link rel="icon" href={Andi} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta
            name="Registration"
            content="Register for Chef's Fiesta."
             /> 
             <title>Registeration</title>
                </Helmet>
                <Navg style={{background:"#0f1178"}}/>
         <div id="wrapper" className="divided" style={{marginTop:"70px"}}>

         <section className="wrapper style1 align-center">
            <div className="inner">
            <h2 style={{fontWeight:"800",fontSize:"45px"}}><span style={{color:'#0f1178'}}>REG</span>ISTRATION</h2>
           
           
            </div>
        </section>
        <section className="wrapper style1 align-left">
        <div className="inner">
        <div class="content">
<ul>
    <li>Kindly fill the form given below with correct information.</li>
    <li>Do note that this form is for the registration of Chef's Fiesta, but individual events will require separate registration. </li>
    <li style={{fontWeight:"700"}}>Upon successful completion of the given form, you'll receive an email with the link(s) of individual events that you choose. Make sure to fill the individual event forms.</li>
    <li>Fry 'n' Try will be open6 for all, and thus does not require any registration.</li>
    <li>Choose all the events that you're interested in by selecting the corresponding checkbox.</li>
    <li>Certificate will only be provided to the participants who participate in any of the events. Thus, form registration doesn't guarantee you a certificate.</li>
    <li>For any queries, please feel free to contact us at <a href="mailto:codechefsrm@gmail.com" className="theme">codechefsrm@gmail.com</a></li>
</ul>

<section className="wrapper style1 align-left">
            <div className="inner">
            <h2 style={{fontWeight:"800",fontSize:"30px"}}><span style={{color:'#d69d70'}}>Chef's</span> Hack</h2>
            <p style={{fontWeight:"400"}}>Go to our page on Devfolio through the link given below and register with your team.</p>
            <ul className="actions stacked">
            <li><a href="https://chefshack.devfolio.co" style={{textDecoration:"none"}}><button className="button devfolio" style={{borderRadius:"0", textTransform:"none"}}><svg class="logo" xmlns="http://www.w3.org/2000/svg" fill="#fff"viewBox="0 0 115.46 123.46" style={{height:"18px",width:"18px",marginRight:"8px",}}><path d="M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 2.18.08 3.34z" /><path d="M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 55.41 0 0 1 50.58 55.34z"/></svg>Apply with Devfolio</button></a></li>
                </ul>
           
            </div>
        </section>


</div>
        </div>
        </section>


    <section className="wrapper style1 align-left" >
        <div className="inner medium">
   
            <form onSubmit={this.handleSubmit}>
                <div className="fields">
                    <div className="field half">
                        <label htmlFor="name" className="theme">Name</label>
                        <input type="text" name="name" id="name" value={name} onChange={this.handleChange} required placeholder="Harry Potter"/>
                    </div>
                    <div className="field half">
                        <label htmlFor="toMail" className="theme">Email</label>
                        <input type="email" name="toMail" id="toMail" value={toMail} onChange={this.handleChange} required placeholder="potter@hogwarts.com"/>
                    </div>
                    <div className="field half">
                        <label htmlFor="name" className="theme">Phone Number</label>
                        <input type="text" name="phone" id="phone" value={phone} onChange={this.handleChange} required placeholder="+91 99 99999999"/>
                    </div>
                    <div className="field half">
                        <label htmlFor="regno" className="theme">Registration Number/Roll Number</label>
                        <input type="text" name="regno" id="regno" value={regno} onChange={this.handleChange} required placeholder="RAXXXXXXXXXXXXX"/>
                    </div>
                    <div className="field">
                        <label htmlFor="college" className="theme">College</label>
                        <input type="text" name="college" id="college" value={college} onChange={this.handleChange} placeholder="Hogwarts School of Higher Studies" required/>
                    </div>

                  
                  <h2 style={{marginTop:"50px",fontWeight:"800",textAlign:"center"}}><span style={{color:"#0f1178"}}>E</span>VENTS</h2>
                                                 
                                                    <div className="field">
														<input type="checkbox" id="apoc" name="apoc" onChange={this.handleChange} value="APOC" />
														<label htmlFor="apoc" style={{fontWeight:"400"}}><span>APOC</span> 2.0</label>
													</div>
                                                    <div className="field">
														<input type="checkbox" id="abhi" name="abhi" onChange={this.handleChange} value="Abhivyakti" />
														<label htmlFor="abhi" style={{fontWeight:"400"}}><span>ABHI</span>VYAKTI</label>
													</div>
                  </div>
                                                    
                    
              
                <ul className="actions special">
                    <li><input type="submit" name="submit" id="submit" value="Submit" className="button primary" /></li>
                </ul>
               
            </form>

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

export default withRouter(RegForm);

