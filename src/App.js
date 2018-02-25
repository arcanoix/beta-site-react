import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Gustavo Herrera | Programador Web</h1>
        </header>
        <p className="App-intro">
          Iniciando <code>React</code> Site.
        </p>
        <p>My personal site: <a href="http://www.gustavoherrera.net">gustavoherrera.net</a></p>
        <p>My blog: <a href="http://www.gustavoherrera.net/blog">Blog</a></p>
      </div>
    );
  }
}

export default App;
