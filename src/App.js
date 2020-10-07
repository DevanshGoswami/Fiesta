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







function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

class App extends React.Component{
  render() {
    return (
      <>
     
      <Router>
        <div className="App">
        <ScrollToTop/>
          <Switch location = {this.props.location}>
            <Route path="/" exact render ={()=>(
             
                <Home/>
         
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
