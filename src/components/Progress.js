import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

class Progress extends Component {


  render() {
    const {totalItems, checkedItems} = this.props;
    const total = totalItems.length;
    const checked = checkedItems.size;
    var comp = total === 0? <ProgressBar active now={0} /> : <ProgressBar active now={checked / total * 100} />;
    return (
      <div className='progress-list'>
        <div className='progress-container'>
        {comp}
        </div>
        {/* <div>{checked}</div>
        <div>:</div>
        <div>{total}</div> */}
      </div>
    );
  }
}

export default Progress;