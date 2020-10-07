import React from 'react';
import './assets/css/main.css';
import './assets/css/fontawesome-all.min.css';

import Banner from './images/loader.jpg';

import {withRouter} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Andi from './images/andi.png';



class Loader extends React.Component{
   

    render(){

        
       return(
        <>
        <Helmet>
                        <meta charset="utf-8" />
                        <link rel="icon" href={Andi} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            
             <title>Loading...</title>
                </Helmet>
      <div id="wrapper" className="divided">


    <section className="banner style2 orient-center content-align-center  fullscreen onload-image-fade-in onload-content-fade-right" style={{color:"white"}}>
        <div className="content">
        
           
        </div>
        <div className="image">
            <img src={Banner} alt="" />
        </div>
    </section>

   

</div>
        </>
       );
    }
}

export default withRouter(Loader);