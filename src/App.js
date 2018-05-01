import React, { Component } from 'react';
import './App.css';
import {
  HashRouter,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import PlanLists from './components/PlanLists/PlanLists';
import Particles from 'react-particles-js';
import JoinUs from './components/JoinUs/JoinUs';
import Card from './components/Card/Card';
import paramsOfParticles from './particlesjs-config.json';


const Home = () => <h1>Hello Home!</h1>

class App extends Component {



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
              <Route path='/card' component={Card} />
              <Route path='/join-us' component={JoinUs} />
              {/* <Route path='/contact' component={Home} /> */}
            </div>
          </HashRouter>
      </div>

    );
  }
}

export default App;
