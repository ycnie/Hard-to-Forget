import React, { Component } from 'react';
// import Test from './Test';
// import NavBar from './NavBar';
import ListTable from '../ListTable/ListTable';
import CheckList from '../CheckList/CheckList';
import TextInput from '../TextArea/TextArea';
import Progress from '../Progress/Progress';
import Btn from '../Button/Button';


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
      listDescription: ''
    }
  }

  textFieldInput = (textInput) => {
    this.setState({
      textField: textInput
    })
    console.log(textInput)
  }

  createItem = (event) => {
    console.log('called')
    var listItems = this.state.listItems;
    var text = this.state.textField;
    if (text.length > 0) {
      listItems[this.state.currentList].push(text);
    }
    this.setState((prevState, props) => ({
      listItems: listItems,
    }))
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
    // console.log(listItems[this.state.currentList])
    this.setState((prevState, props) => ({
      listItems: listItems,
    }))
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
    // this.setState({
    //   listName: 'Grocery'
    // })
    this.setState({
      currentList: lsName
    })
  }

  render() {
    return (
      <div className='app-container'>
        {/* <NavBar></NavBar> */}
        <div className='list-container'>
          <div className='list-table-and-progress'>
            <ListTable 
              desc={this.state.desctription} 
              listChange={this.listChange}></ListTable>
            <Progress 
              totalItems={this.state.listItems[this.state.currentList]} 
              checkedItems={this.state.progress[this.state.currentList]}></Progress>
          </div>
          <div className='checklist-and-text'>
            <div className='input-field'>
              <TextInput
                inputText={this.textFieldInput}
                createItem={this.createItem}
              ></TextInput>
              <Btn btnValue={'Add'} func={this.createItem}></Btn>
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
