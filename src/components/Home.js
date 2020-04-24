
import React, { Component } from 'react';
import './../App.css';
// import { Form, Button } from 'semantic-ui-react';
import Survey from './Survey';

import hotel from './../assets/hotel.png'


class Home extends Component {
  
    render() {
        const mystyle = {
            textAlign: "center",
            color: "#024873",
            padding: "20px",
            fontFamily: "Arial",
            fontSize: 80,
          };
      return (
        <div className="home">
      
           <h1 style={mystyle}>Room Reviews</h1>
           <div className="txtCenter">
                <img src={hotel} alt="Logo" className="logoImage" style={{width: "70%", padding: 10}}/>    
           </div>  
            <hr></hr>
           <div class="txtCenter" style={{padding: "20px"}}>
             <h1>Your source for room reviews and solutions</h1>
             <br></br>
             <h2>We provide you with instant room reviews to help you find out where the problems are and how to fix them. We allow customers to give feedback directly to you in the very moment that they are at your hotel. For a free trial please contact Dylan Dinehart: ddinehart@gmail.com.</h2>
            </div>

           {/* <Survey backgroundColor="#002B5C" roomNumber={roomNumber}/> */}
           
         </div>
      )
    }
  }
  
  export default Home;
  

