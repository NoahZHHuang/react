import React from 'react';

//If the component is a simple one which is only used for rendering with props
//not include any function/behavior/state, then no need to write like 
/*
	class *** extends React.Component {
		constructor(props){
			super(props)
		}
		render(){
			return (****);
		}
	}
*/
//arrow function way will be more succinct
const TodoList = (props) => (
	<ul>
		{
			props.items.map(
				(item) => (
					<li key={item.id}>{item.text}</li>
				)
			)
		}
	</ul>
)

export default TodoList;