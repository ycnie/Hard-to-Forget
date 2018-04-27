import React, {Component }from 'react';

class CheckBoxItem extends Component {

  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.props.toggle(this.props.itemIndex);
  }

  render() {
    return(
      <input type='checkbox' 
      value={this.props.itemIndex}
      checked={this.props.isChecked}
      onChange={this.handleToggle} />
    );
  }
}

export default CheckBoxItem;