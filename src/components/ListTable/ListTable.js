import React, { Component } from 'react';
import { Tab, Row, Col, Nav, NavItem } from 'react-bootstrap';

class ListTable extends Component {

  constructor(props) {
    super(props);
    this.handlePageChange = this.handlePageChange.bind(this);
  }


  handlePageChange(event){
    this.props.listChange(event.target.text);
  }

  render() {
    
    const desc = this.props.desc;// a js object, with the names of lists as keys
    
    return (
      <Tab.Container className='list-table' id="left-tabs-example" defaultActiveKey="first">
      <Row className="clearfix">
        <Col sm={4}>
          <Nav bsStyle="pills" stacked>
            {
              Object.entries(desc).map((lsName, i) => {
                return (
                <NavItem eventKey={`${lsName[0]}-${i}`} key={lsName[0] + i} onClick={this.handlePageChange}>{lsName[0]}</NavItem>
                );
              })
            }
            {/* <NavItem eventKey="list-1" onClick={this.handlePageChange}>Grocery</NavItem>
            <NavItem eventKey="list-2" onClick={this.handlePageChange}>Work</NavItem> */}
          </Nav>
        </Col>
        <Col sm={8}>
          <Tab.Content animation>
            {
              Object.entries(desc).map((lsName, i) => {
                return (
                  <Tab.Pane eventKey={`${lsName[0]}-${i}`} key={lsName[0] + i}>{lsName[1]}</Tab.Pane>
                );
              })
            }
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    );
  }
}

export default ListTable;