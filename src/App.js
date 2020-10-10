import React, {useEffect} from 'react';
import Home from './home';
import './App.css';
import {Track} from './tracks.js';
import {Switch , Route ,BrowserRouter as Router,useLocation} from 'react-router-dom';

import RegForm from './regform';
import {Thanks,Error} from './thanks';

import {APOC} from './apoc';
import {ABHI} from './abhi';
import {FRY} from './fry';

import Loader from './loader';
import {Sponsor} from './sponsors';






function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

class App extends React.Component{

componentDidMount(){
  console.log("Well, Chef's Fiesta has made you excited, has'nt it?")
}


  render() {
    return (
      <>
    
      <Router>
      <ScrollToTop/>
  
      <div className="App">
        
          <Switch location = {this.props.location}>
         
            <Route path="/" exact render ={()=>(
             
                <Home/>
         
            )}/>
             <Route path="/sponsor" exact render ={()=>(
             
             <Sponsor/>
      
         )}/>
             <Route path="/faqs" exact render ={()=>(
             
             <Loader/>
      
            )}/>
           
            <Route path="/tracks" exact render ={()=>(
              <Track/>
            )}/>
            <Route path="/abhivyakti" exact render ={()=>(
              <ABHI/>
            )}/>
            <Route path="/APOC" exact render ={()=>(
              <APOC/>
            )}/>
             <Route path="/FryNTry" exact render ={()=>(
              <FRY/>
            )}/>
             <Route path="/registration" exact render ={()=>(
              <RegForm/>
            )}/>
             <Route path="/thanks" exact render ={()=>(
              <Thanks/>
            )}/>
             <Route path="*" exact render ={()=>(
              <Error/>
            )}/>
           
         
          </Switch> 
          </div>
     </Router>
     </>
    );
  }
}



export default App;
