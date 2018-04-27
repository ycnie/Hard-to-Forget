import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import Btn from '../Button/Button';
import CheckBoxItem from '../CheckBoxItem/CheckBoxItem'

class CheckList extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }

  toggle = (idx) => {
    this.props.handleCheckBox(idx);
  }

  render() {
    const { 
      listItems, // js object
      currentList, // string
      curProgress, // set
      deleteItem, // function
    } = this.props;

    return (
      <div className='checklist'>
        {
          listItems[currentList].map((item, i) => {
            if (curProgress.has(i)) {
              return (
                <div className='checklist-item' key={item + i}>
                <CheckBoxItem itemIndex={i} toggle={this.toggle} isChecked={true}></CheckBoxItem>
                <ListGroupItem className='list-group-item strike' href="#link1">
                  {item}</ListGroupItem>
                {/* <div>{i}</div> */}
                <Btn value={`${currentList}-${i}`} btnValue='Delete' func={deleteItem}></Btn>
              </div>
              );
            }
            return (
              <div className='checklist-item' key={item + i}>
                <CheckBoxItem itemIndex={i} toggle={this.toggle} isChecked={false}></CheckBoxItem>
                <ListGroupItem className='list-group-item' href="#link1">
                  {item}</ListGroupItem>
                {/* <div>{i}</div> */}
                <Btn value={`${currentList}-${i}`} btnValue='Delete' func={deleteItem}></Btn>
              </div>
            )
          })
        }
      </div>
    );
  }
}

// const CheckList = ({items, func, input}) => {
//   return (
//     <div className='checklist'>
//          {
//           items.map((item, i) => {
//             return (
//               <div className='checklist-item' key={item + i}>
//                 <Checkbox inputRef={ref => { this.input = ref; }}></Checkbox>
//                 <ListGroupItem className='list-group-item' href="#link1">
//                   {item}</ListGroupItem>
//                 <Btn value={i} btnValue='Delete' func={func}></Btn>
//               </div>
//             )
//           })
//         }
//     </div>
//   )
// }

export default CheckList;