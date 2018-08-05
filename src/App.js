import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import lembo from './images/lembo.jpg';
import Map from './components/Map.js';
import Sidebar from './components/Sidebar.js';
import './App.css';
import PersonTracker from './components/PersonTracker';

const Home = () => (
  <div>
    <h2>Home</h2>
    <Map isMarkerShown />
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
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
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={lembo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Hurripesos</h1>
          </header>
          <nav className="App-nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
              <li>
                <Link to="/persontracker">Person Tracker</Link>
              </li>
            </ul>
          </nav>
          <div className="App-content">
            <Route exact path="/" component={Home} />
            <Route path="/topics" component={Topics} />
            <Route path="/persontracker" component={PersonTracker} />
          </div>
          <aside className="App-sidebar">
            <Sidebar />
          </aside>
          <footer className="App-footer">Hurripesos™ 2018</footer>
        </div>
      </Router>
    );
  }
}

export default App;
