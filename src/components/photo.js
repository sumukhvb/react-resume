import React, {Component} from "react"

export default class Photo extends Component{
  render(){
    return(
      <div className="photoCard">
        <figure><img src="https://cdn.onlinewebfonts.com/svg/img_184513.png" className="photo"/></figure>
        <figcaption id="ref1"><center><b>Raushan Kumar</b><br/>Student, Developer</center></figcaption>
        <span className="figContactPlate">
          <center>
            <img src="https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png" className="icon"/>&nbsp;&nbsp;&nbsp;
            <img src="https://image.flaticon.com/icons/png/512/23/23931.png" className="icon"/>&nbsp;&nbsp;&nbsp;
            <img src="https://image.flaticon.com/icons/png/512/61/61109.png" className="icon"/>
          </center>
        </span>
      </div>
    );
  }
}
