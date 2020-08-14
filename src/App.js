import React from 'react';
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import Skills from './components/skills'
import WorkExp from './components/workexp'
import Education from './components/education'
import Projects from './components/project'
import Certificates from './components/certificate'
import Photo from './components/photo'

const fs = require('fs');

function App() {
  return (
    <div className="App grid-container">
      <div className="col-1">
        <Header/>
        <Skills/>
        <WorkExp/>
        <Education/>
        <Projects/>
        <Certificates/>
        <Footer/>
      </div>
      <div className="col-2">
        <Photo/>
      </div>
    </div>
  );
}

export default App;
