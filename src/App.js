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
import NavBar from './components/NavBar/NavBar';
import PlanLists from './components/PlanLists/PlanLists';
import Particles from 'react-particles-js';
import JoinUs from './components/JoinUs/JoinUs';
import Contact from './components/Contact/Contact';
import paramsOfParticles from './particlesjs-config.json';

const Home = () => <h1>Hello Home!</h1>

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     currentPage: 'PlanLists'
  //   }
  // }
  render() {
    return (
      <div className='app'>
        <Particles className='particles'
          params={paramsOfParticles}
        />
        <NavBar></NavBar>
        <HashRouter>
            <div>
              <Route exact path='/' component={PlanLists} />
              <Route path='/planlists' component={PlanLists} />
              <Route path='/calender' component={Home} />
              <Route path='/join-us' component={JoinUs} />
              <Route path='/contact' component={Contact} />
            </div>
          </HashRouter>
      </div>

    );
  }
}

export default App;
