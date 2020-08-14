import React, {Component} from "react"

export default class WorkExp extends Component{
  render(){
    return(
      <div>
        <h4>Work Experience</h4>
        <div className="inner-grid-container">
          <div className="col-i-1">
            <p><strong>May 2020 - Present</strong></p>
          </div>
          <div className="col-i-2">
            <p><b>Slack Upskilling Community Manager</b><br/>SKILLSANTA<br/><i>Manage Slack channel, Solve doubts of students and Post quizzes and assignments</i></p>
          </div>
        </div>
        <div className="inner-grid-container">
          <div className="col-i-1">
            <p><strong>May 2020 - <br/>July 2020</strong></p>
          </div>
          <div className="col-i-2">
            <p><b>Backend Development Intern</b><br/>GIRLSCRIPT FOUNDATION<br/><i>Build REST APIs for E-Learning platform in NodeJS, ExpressJS and MongoDB</i></p>
          </div>
        </div>
      </div>
    );
  }
}
