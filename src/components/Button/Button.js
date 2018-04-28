import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Btn extends Component {

  // deleteItem() {
  //   alert('You clicked the delete button');

  // }

  render() {
    const {btnValue, func, value} = this.props;
    return(
      <Button value={value} className='btn shadow-3' bsStyle="primary" onClick={func}>{btnValue}</Button>
    );
  }
}

export default Btn;