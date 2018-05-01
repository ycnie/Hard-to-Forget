import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

class TextInput extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleEnterPress = this.handleEnterPress.bind(this);
  }
  
  handleChange(event) {
    this.props.inputText(event.target.value);
  }



  handleEnterPress(event) {
    if(event.key === 'Enter') {
      this.props.createItem(event);
    }
  }

  render() {

    return (
      <FormGroup bsSize='lg' className='text-field'>
        <FormControl id='input-box' onChange={this.handleChange} type="text" placeholder="What to do next..." onKeyPress={this.handleEnterPress}/>
      </FormGroup>
    );
  }
}

export default TextInput;