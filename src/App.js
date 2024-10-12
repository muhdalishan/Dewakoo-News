import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Pages/News';

export class App extends Component {
  
  render() {
    return (
    <>
   <NavBar></NavBar>
   <News/>
    </>
    )
  }
}

export default App
