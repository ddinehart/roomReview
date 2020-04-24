
import React, { Component } from 'react';
// import './App.css';
// import { Button } from 'semantic-ui-react';
import Survey from './Survey';

import StGInnSuites from './../assets/StGInnSuites.jpg'



class Hotel extends Component {
  
  // var href = location.href;
  // console.log("path", href.match(/([^\/]*)\/*$/)[1]);

    render() {

      var roomNumber = window.location.href.match(/([^\/]*)\/*$/)[1];
        console.log("path", roomNumber);
      // console.log(this.href.substring(this.href.lastIndexOf('/') + 1));
        const mystyle = {
            textAlign: "center",
            color: "#002B5C",
            padding: "20px",
            fontFamily: "Arial",
            fontSize: 60,
            height: "700px",
            width: "100%",
            
          };
          var sectionStyle = {
            width: "100%",
            // height: "50%",
            backgroundImage: `url(${StGInnSuites})`,
            backgroundColor: "#82B8D9",
            backgroundPosition: "top ",
            backgroundRepeat: "no-Repeat",
            backgroundSize: "100%",
            color: "#002B5C"
          };
          

      return (
        <div className="Hotel" style={sectionStyle}>
          <div>
            <h1 style={mystyle}>{this.props.hotelName}</h1>
          </div>
                {/* <img src={this.props.imageTitle} alt="Logo" className="logoImage" style={{width: "70%", padding: 10}}/>     */}
           {/* <div className="txtCenter">
           </div>   */}
           <Survey backgroundColor="#002B5C" roomNumber={roomNumber} path="https://www.tripadvisor.com/UserReviewEdit-g57119-d530349-St_George_Inn_Suites-St_George_Utah.html"/>

           
         </div>
      )
    }
  }
  
  export default Hotel;
  