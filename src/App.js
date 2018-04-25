import React, { Component } from 'react';
import './App.css';
// import Test from './Test';
// import NavBar from './components/NavBar';
// import ListTable from './components/ListTable';
// import CheckList from './components/CheckList';
// import TextInput from './components/TextArea';
// import Progress from './components/Progress';
// import Btn from './components/Button';
import {
  HashRouter,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar';
import PlanLists from './components/PlanLists';

const Home = () => <h1>Hello Home!</h1>

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     currentPage: 'PlanLists'
  //   }
  // }
  render() {
    return(
      <div>
        <NavBar></NavBar>
        <HashRouter>
          <div>
          <Route exact path='/' component={PlanLists} />
          <Route path='/planlists' component={PlanLists} />
          <Route path='/calender' component={Home} />
          </div>
        </HashRouter>
      </div>

    );
  }
}

export default App;
