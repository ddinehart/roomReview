
import React, { Component } from 'react';
import './../App.css';
import { Table } from 'semantic-ui-react'


class ReviewRow extends Component {
    
 
  
    render() {
      return (
        <Table.Row>
            <Table.Cell>{this.props.review.question1}</Table.Cell>
            <Table.Cell>{this.props.review.question2}</Table.Cell>
            <Table.Cell>{this.props.review.question3}</Table.Cell>
            <Table.Cell>{this.props.review.rating}</Table.Cell>
            <Table.Cell># {this.props.review.roomNumber}</Table.Cell>
            <Table.Cell>{this.props.review.date}</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
      
      )
    }
  }
  
  export default ReviewRow;
  

