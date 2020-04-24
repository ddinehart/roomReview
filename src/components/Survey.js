
import React, { Component } from 'react';
import './../App.css';
import { Button} from 'semantic-ui-react'
import  { Link } from 'react-router-dom';
import Question from './Question';
import Rating from './Rating';
import axios from 'axios';

class Survey extends Component {
  state = {
    question1Title: "Was your room Clean?",
    question2Title: "How did you feel about the quality of your room?",
    question3Title: "What did you like and dislike about the room?",
    rating: 0
  }
    
  setAnswer = (data) => {
    console.log("data", data.data.id, data.data.value)
    this.setState({[data.data.id]: data.data.value}, () => {
        
    })
  }
  setRating = (rating) => {
    let trueRating = rating.rating.rating;
    // let id = rating.rating.id;
    console.log("data for rating", rating.rating)
    this.setState({rating: trueRating})
  }
  
    sendSurveyAnswersToServer = () => {
        const roomNumber = this.props.roomNumber
        const answer = this.state.question1Answer;
        const answer2 = this.state.question2Answer;
        const answer3 = this.state.question3Answer;
        const rating = this.state.rating;
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        var date = mm + '/' + dd + '/' + yyyy;

        
        // console.log(answer, "asnwer sstateseelja")
        var data = `roomNumber=${encodeURIComponent(roomNumber)}`;
        data += "&question1=" + encodeURIComponent(answer);
        data += "&question2=" + encodeURIComponent(answer2);
        data += "&question3=" + encodeURIComponent(answer3);
        data += "&rating=" + encodeURIComponent(rating);
        data += "&date=" + encodeURIComponent(date);
        console.log('called')
        axios
            .post("http://localhost:3001/surveyAnswers", data, {
                body: data,
                method: "POST",
                credentials: "include",
                headers: {
                "Content-Type": "application/x-www-form-urlencoded"
                }
            })
    }
  
    render() {
      console.log('claj;dfj', this.state)
      const mystyle = {
        margin: "10px",
        color: "white",
        padding: "20px",
        backgroundColor: this.props.backgroundColor,
        borderRadius: "5px",
        fontFamily: "Arial"
      };
      
      // console.log("state", this.state)
    //   const Listreview = this.state.reviews.map((review) =>
    // <li>{review}</li>
  // );
      return (
          <div >
            <div style={mystyle}> 
              <Question id={"question1Answer"} title={this.state.question1Title} setAnswer={this.setAnswer} style={mystyle} backgroundColor={this.props.backgroundColor}></Question>
            </div>
            <div style={mystyle}> 
              <Question id={"question2Answer"} title={this.state.question2Title} setAnswer={this.setAnswer} style={mystyle}></Question>
            </div>
            <div style={mystyle}> 
              <Question id={"question3Answer"} title={this.state.question3Title} setAnswer={this.setAnswer} style={mystyle}></Question>
            </div>
            <div style={mystyle}> 
              <Rating  title={this.state.question3Title} setRating={this.setRating} style={mystyle}></Rating>
            </div>
            <Link to="/home">
              <Button style={{margin: "10px", backgroundColor: "green", color: "white"}} onClick={this.sendSurveyAnswersToServer}>Submit</Button>
            </Link>
          </div>
      
      )
    }
  }
  
  export default Survey;
  

