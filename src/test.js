import React, { Component } from "react";

import {withRouter} from 'react-router-dom';

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = { accordions: this.props.data };
  }
  componentDidMount() {
    this.setPanelHeight(".panel-1", false);
  }
  handleClick = (currentAccordion) => {
    const newAccordions = this.state.accordions;
    newAccordions.forEach((accordion) => {
      if (currentAccordion.id === accordion.id) {
        accordion.state = "active";
        this.setPanelHeight(`.panel-${accordion.id}`, false);
      } else {
        accordion.state = "inactive";
        this.setPanelHeight(`.panel-${accordion.id}`, true);
      }
    });
    this.setState({ accordions: newAccordions });
  };
  setPanelHeight(selector, close) {
    const panel = document.querySelector(`${selector}`);
    panel.style.maxHeight = close === true ? null : panel.scrollHeight + "px";
  }
  render() {
    const { accordions } = this.state;
    return (
      <React.Fragment>
        {accordions.map((accordion, index) => {
          return (
            <React.Fragment key={index}>
             <ul>
                
                 <li
                className={`accordion ${accordion.state}`}
                onClick={() => this.handleClick(accordion)}
                style={{fontWeight:"500",fontSize:"18px"}}
              >
                {accordion.name}
              </li>
              <div className={`panel panel-${accordion.id}`} 
              style={{marginTop:"15px",fontWeight:"400",fontSize:"18px"}}
              >
                {accordion.content}
              </div>
                 
             </ul>
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
}

export default withRouter(Accordion);