
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/css/fontawesome-all.min.css';

import React from 'react';


class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
      this.leadingZero = this.leadingZero.bind(this);
      this.getTimeDifference = this.getTimeDifference.bind(this);
    }
  
    componentDidMount() {
      this.getTimeDifference(this.props.eventDate);
      setInterval(() => this.getTimeDifference(this.props.eventDate), 1000);
    }
  
    leadingZero(num) {
      return (num < 10 && num > 0) ? "0" + num : num;
    }
  
    getTimeDifference(eventDate) {
      const time = Date.parse(eventDate) - Date.parse(new Date());
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const seconds = Math.floor((time / 1000) % 60);
      this.setState({ days, hours, minutes, seconds });
    }
  
    render() {
      return (
        <div className="card-deck text-center" >
          
          <div className=" card" style={{color:"white",background:"#0f1178",borderRadius:"400px"}}>
            <div className="card-title mt-4" style={{fontSize:"40px", fontWeight:"700"}}>
            {this.leadingZero(this.state.days)} 
            </div>
            <div className="card-body">
            {this.state.days === 1 ? 'Day' : 'Days'}
            </div>
          </div>
          <div className=" card" style={{color:"white",background:"#0f1178",borderRadius:"400px"}}>
            <div className="card-title mt-4" style={{fontSize:"40px", fontWeight:"700"}}>
            {this.leadingZero(this.state.hours)}    
            </div> 
            <div className="card-body">
            {this.state.hours === 1 ? 'Hour' : 'Hours'}
            </div>
          </div>
          <div className=" card" style={{color:"white",background:"#0f1178",borderRadius:"400px"}}>
          <div className="card-title mt-4" style={{fontSize:"40px", fontWeight:"700"}}>
            {this.leadingZero(this.state.minutes)}    
            </div> 
            
            <div className="card-body">
            {this.state.minutes === 1 ? 'Minute' : 'Minutes'}
            </div>
          </div>
          <div className=" card" style={{color:"white",background:"#0f1178",borderRadius:"400px"}}>
            
            <div className="card-title mt-4" style={{fontSize:"40px", fontWeight:"700"}}>
            {this.leadingZero(this.state.seconds)}    
            </div> 
            <div className="card-body">
            {this.state.seconds === 1 ? 'Second' : 'Seconds'}
            </div>
          </div>
        </div>
      );
    }
  }


  export default Timer;