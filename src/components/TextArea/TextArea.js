import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

class TextInput extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   text :''
    // };
    // this.updateText = this.updateText.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEnterPress = this.handleEnterPress.bind(this);
  }

  
  // updateText(event) {
  //   let textInput = event.target.value;
  //   this.setState({
  //     text: textInput
  //   });
  //   this.handleChange(textInput);
  // }
  
  handleChange(event) {
    this.props.inputText(event.target.value);
  }



  handleEnterPress(event) {
    if(event.key === 'Enter') {
      this.props.createItem(event);
      console.log('enter pressed');
    } else {
      console.log('please pree enter!!');
    }
  }

  render() {

    return (
      <FormGroup bsSize='lg' className='text-field'>
        <FormControl onChange={this.handleChange} type="text" placeholder="What to do next..." onKeyPress={this.handleEnterPress}/>
      </FormGroup>
    );
  }
}

export default TextInput;