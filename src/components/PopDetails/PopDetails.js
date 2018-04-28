import React, { Component } from 'react';
import { Modal, Button, FormControl } from 'react-bootstrap';

class PopDetails extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose = () => {
    var title = document.getElementById('title');
    var content = document.getElementById('content');
    this.props.handleClose(title, content);
  }


  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.handleClose} keyboard={true}>
          <Modal.Header closeButton>
            <Modal.Title>Create your PLANNNN!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>What's your Plan?</h4>
            <FormControl id='title' type="text" placeholder=" type in here" />
            <h4>Give your plan a description:</h4>
            <FormControl id='content' componentClass="textarea" placeholder="type in here" />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default PopDetails;