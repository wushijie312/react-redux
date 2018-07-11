import React,{ Component } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { addToCart, updateCart, deleteFromCart } from "../actions/actions";
export class Home extends Component{
	componentDidMount() {
		// let { increase_async } = this.props;
		console.log(this.props);
		// console.log(store.dispatch(increase_asyn()));
		// increase_async();
		// .increase_async();
	}
	click1(){
		console.log(1,this);
		this.props.deleteFromCart("bread 700g");
		// store.dispatch(deleteFromCart('Coffee 500gm'));
		// unsubscribe();
	}

	render(){
		const {products,shoppingCart}=this.props;
		return(
			<div>
			    <div>
			    	Home+{shoppingCart.cart[0].product}
			    <ul>
			        <li><Link to='/hello/1'>hello</Link></li>
			     </ul>
			     <div onClick={this.click1.bind(this)}>clickme</div>
			    </div>
			</div>
		)
	}
}
function mapStateToProps(state) {
	return {
		products: state.products,
		shoppingCart: state.shoppingCart,
	}
}
function mapDispatchToProps(dispatch) {
	// return {
 //        addToCart: (...args) => dispatch(addToCart(...args)),
 //    }

	return bindActionCreators({ addToCart, updateCart, deleteFromCart }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
