import React from 'react';
// from 15.5.0, the PropTypes is independent from React, need to npm install and import separately
import PropTypes from 'prop-types';

class HelloWorld extends React.Component {
	constructor(props){
		super(props);
		this.state = {}
	};
	render(){
		return (
			<div>
				hello world from {this.props.name}
			</div>
		)		
		//even without the brackets (), it still works, for example
		/* 
		return <div>hello world from {this.props.name}</div> 
		*/
		// or
		/*
		return (
			<div>
				hello world from {this.props.name}
			</div>
		)
		*/
		//but usually the () is react jsx specification recommended 
	};
};

HelloWorld.defaultProps = {
	name: 'Noah'
}

HelloWorld.propTypes = {
	name: PropTypes.string
}

module.exports = {HelloWorld: HelloWorld};

// if  : module.exports = { HelloWorld : HelloWorld }
// then :  import {HelloWorld} from '../components/hello_world';

// if : export default  HelloWorld;
// then: import HelloWorld from '../components/hello_world';
