import React,{ Component } from "react";
import { Link } from "react-router-dom";
export default class Hello extends Component{
	render(){

		return(
			<div>
			    Hello world!!!
			    <ul>
			        <li><Link to='/'>Home</Link></li>
			      </ul>
			</div>
		)
	}
}

