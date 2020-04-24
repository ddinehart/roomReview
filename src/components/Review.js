
import React, { Component } from 'react';
// import './App.css';
import {  Table} from 'semantic-ui-react'
import ReviewRow from './ReviewRow';

class Reviews extends Component {
  state = {
    reviews: [ {question1: "hello"}]
  }
    
  componentDidMount() {
    this.getSurveyAnswersFromServer();
  }


    getSurveyAnswersFromServer = () => {
      // fetch("http://localhost:3001/surveyAnswers").then(res => {
      fetch("http://localhost:3001/surveyAnswers").then(res => res.json()).then(
(result) => {
                console.log('result', result)
                this.setState({ reviews: result});
                
              },
              (error) => {
                console.log(error)
              })
              console.log('now', this.state)
    }
  
    
    render() {
      const mystyle = {
        margin: "20px",
        fontFamily: "Arial",
        fontSize: "large",
        padding: "10px"
      };
      
      console.log("state", this.state)

      return (
        <div style={mystyle}>

          <h1 class="txtCenter">Room Reviews Table</h1>

        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Answer 1</Table.HeaderCell>
              <Table.HeaderCell>Answer 2</Table.HeaderCell>
              <Table.HeaderCell>Answer 3</Table.HeaderCell>
              <Table.HeaderCell>Rating</Table.HeaderCell>
              <Table.HeaderCell>Room Number </Table.HeaderCell>
              <Table.HeaderCell>Date </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
  
          <Table.Body>
            {this.state.reviews.map((review, i) => (

                <ReviewRow review={review} key={i}/>
            ))}
          </Table.Body>
        </Table>
        </div>
      
      )
    }
  }
  
  export default Reviews;
  

