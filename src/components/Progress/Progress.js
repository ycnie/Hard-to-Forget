import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';
import './Progress.css';

class Progress extends Component {


  
  handleProgress = () => {
    this.props.handleProgress();
  }

  render() {
    const {totalItems, checkedItems, result, handleProgress} = this.props;
    // const total = totalItems;
    // const checked = checkedItems;
    var comp = totalItems === 0? <ProgressBar active now={0} /> : <ProgressBar active now={checkedItems / totalItems * 100} />;
    return (
      <div className='progress-list'>
        <div className='progress-container grow grow:hover' onClick={handleProgress}>
        {comp}
        </div>
        <div className='progress-result'>{result}</div>
        {/* <div>{checked}</div>
        <div>:</div>
        <div>{total}</div> */}
      </div>
    );
  }
}

export default Progress;