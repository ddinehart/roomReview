import React, { Component } from 'react';
import './../App.css';
import { Form} from 'semantic-ui-react'


class Question extends Component {

    state = {
        questionAnswer: ""
    }
    
    handleChange = (e, data) => {
        console.log("called", data)
        this.setState({
            [data.id]: data.value
        }, () => {
            this.props.setAnswer({ data})
        })
    }

    render() {
        const inputStyle = {
            height: "150px",
            fontFamily: "Arial"
          };
        // console.log('prorps', this.props)
      return (
        <div style={{backgroundColor: this.props.backgroundColor}}>
            <Form>
                <Form.Field>
                    <h3 >{this.props.title} </h3>
                    <Form.Input
                        width={16}
                        id="questionAnswer" 
                        onChange={this.handleChange}
                        style={inputStyle}
                        id={this.props.id}
                        // size="large"
                        />
                        {/* <Rating onClick={this.handleChange} id={this.props.id} icon='star' defaultRating={4} maxRating={5} size='massive' /> */}
                </Form.Field>
         {/* <Button onClick={this.submitSurveyAnswers}>Submit</Button> */}
            </Form>
        </div>
      
      )
    }
  }
  
  export default Question;