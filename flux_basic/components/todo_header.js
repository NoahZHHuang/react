import React from 'react';
import TodoAction from '../actions/todo_action';

class TodoHeader extends React.Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.state = {
            text: ''
        }
    }

    onChange(event){
        this.setState({
            text: event.target.value
        });
    }

    onAdd(){
        TodoAction.addTodo(this.state.text);
        this.setState({
            text: ''
        });
    }

    render(){
        return(
            <div>
                <h1>Add a todo item here</h1>
                <div>
                    <input value = {this.state.text} type='text' placeholder='todo item' onChange = {this.onChange}/>
                    <button onClick = {this.onAdd}>Confirm</button>
                </div>
            </div>
        );
    }
}

export default TodoHeader;

