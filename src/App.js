import React from 'react';
import Home from './home';
import './App.css';
import {Track} from './tracks.js';
import {Switch , Route ,BrowserRouter as Router} from 'react-router-dom';

import RegForm from './regform';
import {Thanks,Error} from './thanks';

class App extends React.Component{
  render() {
    return (
      <Router>
        <div className="App">
     
          <Switch location = {this.props.location}>
            <Route path="/" exact render ={()=>(
              <Home/>
            )}/>
            <Route path="/tracks" exact render ={()=>(
              <Track/>
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
    );
  }
}



export default App;
