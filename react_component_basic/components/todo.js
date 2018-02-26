import React from 'react';
import TodoList from './todo_list';

class Todo extends React.Component {
	constructor(props){
		super(props);
		this.onChange = this.onChange.bind(this);
		this.onClick = this.onClick.bind(this);
		this.state = {
			items: [],
			text: ''
		}
	}

	onChange(e){
		this.setState(
			{
				text: e.target.value
			}
		);
	}

	onClick(){
		const nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
		const nextText = '';
		this.setState({
			items: nextItems,
			text: nextText
		});
	}

	render(){
		return(
			<div>
				<h3>TODO</h3>
				<TodoList items={this.state.items} />
				<input onChange = {this.onChange} value={this.state.text}/>
				<button onClick = {this.onClick}>{'Add #'+(this.state.items.length +1)}</button>
			</div>
		);
	}
}

export default Todo;