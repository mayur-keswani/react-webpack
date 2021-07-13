import React from "react";
import ReactDOM from "react-dom";
import SVG from './Assets/SVG.png'
import './index.css'
const Index = () => {
  return <div className="container" >
  			<img src={SVG} width="80%"/>
		</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));