import React, {Component} from "react"

export default class Education extends Component{
  render(){
    return(
      <div>
        <h4>Education</h4>
        <div className="inner-grid-container">
          <div className="col-i-1">
            <p><strong>2018 - 2022</strong></p>
          </div>
          <div className="col-i-2">
            <p><b>SHARDA UNIVERSITY, Greater Noida, India</b><br/>B.Tech, Computer Science & Engineering<br/><i>GPA: 9.583</i></p>
          </div>
        </div>
        <div className="inner-grid-container">
          <div className="col-i-1">
            <p><strong>2015 - 2018</strong></p>
          </div>
          <div className="col-i-2">
            <p><b>G.P.G COLLEGE, Bihar, India</b><br/>Intermediate<br/><i>Percentage : 64.8</i></p>
          </div>
        </div>
        <div className="inner-grid-container">
          <div className="col-i-1">
            <p><strong>2015</strong></p>
          </div>
          <div className="col-i-2">
            <p><b>D.A.V PUBLIC SCHOOL, Bihar, India</b><br/>High School<br/><i>CGPA : 8.8</i></p>
          </div>
        </div>
      </div>
    );
  }
}
