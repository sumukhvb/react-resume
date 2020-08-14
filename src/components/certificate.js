import React, {Component} from "react"

export default class Certificates extends Component{
  render(){
    return(
      <div>
        <h4>Certificates</h4>
        <div className="inner-grid-container">
          <div className="col-i-1">
            <p><strong>COURSERA</strong></p>
          </div>
          <div className="col-i-2">
            <p className="inner-content"><b>Server-side Development using NodeJS, ExpressJS and MongoDB</b><br/><a href="#">Link</a></p>
            <p className="inner-content"><b>Divide and Conquer, Searching, Sorting and Randomized Algorithms</b><br/><a href="#">Link</a></p>
            <p className="inner-content"><b>Machine Learning</b><br/><a href="#">Link</a></p>
          </div>
        </div>
        <div className="inner-grid-container">
          <div className="col-i-1">
            <p><strong>UDEMY</strong></p>
          </div>
          <div className="col-i-2">
            <p className="inner-content"><b>The Complete NodeJS Developer Course (3rd Edition)</b><br/><a href="#">Link</a></p>
            <p className="inner-content"><b>Javascript Bootcamp - Build Real-World Applications</b><br/><a href="#">Link</a></p>
          </div>
        </div>
      </div>
    );
  }
}
