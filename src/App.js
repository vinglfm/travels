import React, { Component } from 'react';
import Home from './components/Home/Home.js';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Home/>
      </div>
    );
  }
}
