import React, { Component } from 'react';
import './../App.css';
import { Form, Rating } from 'semantic-ui-react'


class RatingStars extends Component {

    
    handleChange = (e, rating) => {
        console.log("Rating", rating.rating)
            this.props.setRating({ rating})
    }

    render() {
        // const inputStyle = {
        //     fontFamily: "Arial"
        //   };
        console.log('props rating', this.props)
      return (
        <div style={{backgroundColor: this.props.backgroundColor}}>
            <Form>
              <h3 style={{fontSize: "large", padding: "10px", fontFamily: "Arial"}}>Overall Rating:</h3>
                <Rating onRate={this.handleChange} id="rating" icon='star' defaultRating={5} maxRating={5} size='massive' />
            </Form>
        </div>
      
      )
    }
  }
  
  export default RatingStars;