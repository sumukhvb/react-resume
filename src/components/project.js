import React, {Component} from "react"

export default class Projects extends Component{
  render(){
    return(
      <div>
        <h4>Projects</h4>
        <div className="inner-grid-container">
          <div className="col-i-1">
            <p><strong>TASKIFY<br/>APPLICATION</strong></p>
          </div>
          <div className="col-i-2">
            <p>An application built with NodeJS, ExpressJS and MongoDB. It stores tasks of the user. It has a login and a signup facility. Users can create read and delete tasks.&nbsp;<a href="#">Github</a></p>
          </div>
        </div>
        <div className="inner-grid-container">
          <div className="col-i-1">
            <p><strong>YOUTUBE<br/>DOWNLOADER</strong></p>
          </div>
          <div className="col-i-2">
            <p>A desktop application built in tkinter which downloads Youtube videos in high and low quality.&nbsp;<a href="#">Github</a></p>
          </div>
        </div>
        <div className="inner-grid-container">
          <div className="col-i-1">
            <p><strong>RNEWS</strong></p>
          </div>
          <div className="col-i-2">
            <p>A news application built using java which displays news fetched from newsapi.org about technology.&nbsp;<a href="#">Github</a></p>
          </div>
        </div>
        <div className="inner-grid-container">
          <div className="col-i-1">
            <p><strong>COVID19 HELPER</strong></p>
          </div>
          <div className="col-i-2">
            <p>A web application built with ReactJS. It shows current stats and help you fing help from government.&nbsp;<a href="#">Github</a></p>
          </div>
        </div>
        <div className="inner-grid-container">
          <div className="col-i-1">
            <p><strong>PORTFOLIO</strong></p>
          </div>
          <div className="col-i-2">
            <p>This is my portfolio built using HTML, CSS, Javascript and Bootstrap4.&nbsp;<a href="#">Link</a></p>
          </div>
        </div>
      </div>
    );
  }
}
