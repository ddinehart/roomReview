
import React, { Component } from 'react';
import './../App.css';
import  { Link } from 'react-router-dom';
import { Form, Button, } from 'semantic-ui-react';


class Login extends Component {
    

  // var loginUserOnServer = function (email, plainPassword) {
  //   var data = `email=${encodeURIComponent(email)}`;
  //   data += "&plainPassword=" + encodeURIComponent(plainPassword);
  //   console.log("email, plain pass", data)
    
  //   // return fetch("http://localhost:3001/session", {
  //   return fetch("http://localhost:3001/session", {
  //     body: data,
  //     method: "POST",
  //     credentials: "include",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded"
  //     }
  //   });
  // };
  
    // getSurveyAnswersFromServer = () => {
    //     fetch("http://localhost:3001/surveyAnswers")
    //           .then(res => res.json())
    //           .then(
    //             (result) => {
    //               console.log(result)
    //             },
    //             (error) => {
    //               console.log(error)
    //             }
    //           )
    // }
  
    render() {
      const mystyle = {
        alignContent: "center",
        width: "50%",
        marginTop: "10%",
        marginLeft: "25%",
        marginRight: "33%",
        color: "white",
        padding: "20px",
        backgroundColor: "#82B8D9",
        borderRadius: "5px",
        fontFamily: "Arial"
      };
      return (
        <div style={mystyle} >
      
           <h1>Login</h1>
           <br>
           </br>
           <div>
               <Form>
         <Form.Field>
           <label>Email </label>
           <input placeholder='' />
         </Form.Field>
         <Form.Field>
           <label> Password</label>
           <input placeholder='' />
         </Form.Field>
         <Link to="/reviews">
                
         <Button onClick={this.getSurveyAnswersFromServer}>Submit</Button>
            </Link>
         </Form>
           </div>
         </div>
      )
    }
  }
  
  export default Login;
  

