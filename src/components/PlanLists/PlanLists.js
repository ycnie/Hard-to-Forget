import React, { Component } from 'react';
import ListTable from '../ListTable/ListTable';
import CheckList from '../CheckList/CheckList';
import TextInput from '../TextArea/TextArea';
import Progress from '../Progress/Progress';
import Btn from '../Button/Button';
import PopDetails from '../PopDetails/PopDetails';
import './PlanLists.css';


class PlanLists extends Component {

  constructor() {
    super();
    this.state = {
      currentList: 'Grocery',
      lists: [
        'Grocery',
        'Work',
        'Academic'
      ],
      listItems: {
        'Grocery': ['Paper Towel', 'Notebook', 'Eggs'],
        'Work': ['Meeting at 2:pm'],
        'Academic': ['Meet my advisor at 3:pm', 'Review EC504']
      },
      desctription: {
        'Grocery':'This list is for reminding me of the stuff that I have to buy ASAP at StarMarket!',
        'Work':'Plan for work',
        'Academic': 'Plan for study!!!'
      },
      progress: {
        'Grocery': new Set(),
        'Work': new Set(),
        'Academic': new Set()
      },
      textField: '',
      listDescription: '',
      show: false
    }
    this.textFieldInput = this.textFieldInput.bind(this);
    this.createItem = this.createItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.listChange = this.listChange.bind(this);
    this.showModal = this.showModal.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  storeToLocal(key, val) {
    sessionStorage.setItem(key, JSON.stringify(val));
  }

  getFromLocal(key) {
    return sessionStorage.getItem(key);
  }

  textFieldInput = (textInput) => {
    this.setState({
      textField: textInput
    })
  }

  createItem = (event) => {
    var text = this.state.textField;
    var listItems = this.state.listItems;
    if (text.length > 0) {
      listItems[this.state.currentList].push(text);
    }
    this.setState((prevState, props) => ({
      listItems: listItems,
    }))
    // this.storeToLocal(this.state.listItems, listItems);
    var box = document.getElementById('input-box');
    box.value = '';
  }

  deleteItem = (event) => {
    let idx = event.target.value.split('-')[1];
    let index = parseInt(idx, 10);
    let prog = this.state.progress;
    if (prog[this.state.currentList].has(index)) {
      prog[this.state.currentList].delete(index);
    }
    let listItems = this.state.listItems;
    listItems[this.state.currentList].splice(index, 1);
    this.setState((prevState, props) => ({
      listItems: listItems,
    }))
    // this.storeToLocal(this.state.listItems, listItems);
  }

  handleCheckBox = (v) => {
    let progress = this.state.progress;
    let ls = this.state.currentList;
    if (progress[ls].has(v)) {
      progress[ls].delete(v);
    } else {
      progress[ls].add(v);
    }
    this.setState({
      progress: progress,
    })
  }

  listChange = (lsName) => {
    this.setState({
      currentList: lsName
    })
  }

  showModal = () => {
    this.setState({
      show: true
    })
  }

  handleClose = (title, content) => {
    this.setState({
      show: false
    })
    var titleText = title.value;
    var contentText = content.value;
    if (titleText.length > 0 && contentText.length > 0) {
      var lists = this.state.lists;
      var listItems = this.state.listItems;
      var desctription = this.state.desctription;
      var progress = this.state.progress;
      lists.push(titleText);
      listItems[titleText] = [];
      desctription[titleText] = contentText;
      progress[titleText] = new Set();
      this.setState({
        lists: lists,
        listItems: listItems,
        desctription: desctription,
        progress: progress
      })
    }
  }

  handleProgress = () => {

  }


  

  render() {

    const total = this.state.listItems[this.state.currentList].length;
    const checked = this.state.progress[this.state.currentList].size;
    const progressResult = total === 0 
    ? 'Start your plan now!!' 
    : ((checked === total)
    ? 'Nice Done! You have accomplished your plan!!' 
    : `You Still have ${total-checked} things to do! Keep it Up!!!` );

    return (
      <div className='planlists-container'>
        <div className='list-container'>
          <div className='list-table-and-progress'>
            <ListTable 
              desc={this.state.desctription} 
              listChange={this.listChange}></ListTable>
              <input type='button' value='Add' className='br-pill bg-blue grow grow:hover shadow-3 font-gugi' onClick={this.showModal}/>
            <PopDetails show={this.state.show} handleClose={this.handleClose}/>
            <Progress 
              totalItems={total} 
              checkedItems={checked}
              result={progressResult}
              handleProgress={this.handleProgress}></Progress>
          </div>
          <div className='checklist-and-text'>
            <div className='input-field'>
              <TextInput
                inputText={this.textFieldInput}
                createItem={this.createItem}
              ></TextInput>
              <Btn className='font-gugi' btnValue={'Add'} func={this.createItem}></Btn>
            </div>
            <CheckList 
              listItems={this.state.listItems} 
              currentList={this.state.currentList} 
              curProgress={this.state.progress[this.state.currentList]}
              deleteItem={this.deleteItem} 
              handleCheckBox={this.handleCheckBox}
            ></CheckList>
          </div>
        </div>
      </div>
    );
  }
}

export default PlanLists;
