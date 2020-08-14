import React, {Component} from "react"

export default class Skills extends Component{
  render(){
    return(
      <div>
      <h4>Skills</h4>
      <div className="inner-grid-container">
        <div className="col-i-1">
          <p><strong>Languages</strong></p>
          <p><strong>Databases</strong></p>
          <p><strong>Web Technology</strong></p>
          <p><strong>Tools</strong></p>
        </div>
        <div className="col-i-2">
          <p>C, C++, Java, Javascript</p>
          <p>MySQL, MongoDB</p>
          <p>HTML, CSS, ReactJS, Bootstrap4, NodeJS, ExpressJS, Mongoose, MaterialUI</p>
          <p>VSCode, Anaconda, IntelliJ IDEA, WebStorm, MongoDB Compass, MySQL Workbench</p>
        </div>
      </div>
      </div>
    );
  }
}
