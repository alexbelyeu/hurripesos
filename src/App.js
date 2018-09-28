import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaExclamationTriangle, FaHome, FaTimes } from 'react-icons/fa';
import './App.css';
import PersonTracker from './components/PersonTracker';
import Home from './components/Home';
import Search from './components/Search';
import lembo from './images/lembo.jpg';

const Logo = styled.div`
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListElement = styled.div`
  color: black;
`;

const Emergency = ({ match }) => (
  <div>
    <h2>Emergency</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

class App extends Component {
  constructor() {
    super();
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  openNav() {
    const navElement = document.getElementsByClassName('App-nav')[0];
    navElement.classList.add('open-nav');
  }

  closeNav() {
    const navElement = document.getElementsByClassName('App-nav')[0];
    navElement.classList.remove('open-nav');
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <div className="App-nav-menu-button" onClick={this.openNav}>
              <FaBars />
            </div>
            <Link to="/">
              <Logo id="logo">
                <img src={lembo} className="App-logo" alt="logo" />
                <h1 className="App-title">hurripesos</h1>
              </Logo>
            </Link>
          </header>
          <nav className="App-nav">
            <div className="App-nav-close-button" onClick={this.closeNav}>
              <FaTimes />
            </div>
            <ul>
              <li>
                <ListElement>
                  <Search />
                </ListElement>
              </li>
              <li>
                <Link to="/" onClick={this.closeNav}>
                  <ListElement>
                    <FaHome /> Home
                  </ListElement>
                </Link>
              </li>
              <li>
                <Link to="/emergency" onClick={this.closeNav}>
                  <ListElement>
                    <FaExclamationTriangle /> Emergency
                  </ListElement>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="App-content">
            <Route exact path="/" component={Home} />
            <Route path="/emergency" component={Emergency} />
            <Route path="/persontracker" component={PersonTracker} />
          </div>
          <footer className="App-footer">2018© hurripesos</footer>
        </div>
      </Router>
    );
  }
}

export default App;
