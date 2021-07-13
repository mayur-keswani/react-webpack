import React from 'react'
import SVG from './Assets/SVG.png'
import './index.css'
const App = () =>{

	return(
		<div className="container" >
			<h3>Importing svg and css file using webpack!</h3>
  			<img src={SVG} width="80%"/>
		</div>
	)
}

export default App