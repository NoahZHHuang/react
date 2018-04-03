import React from 'react';
import AppStore from '../store/app_store';
import TodoAction from '../actions/todo_action'

function getAppState(){
    return {
        todos: AppStore.getTodos()
    }
}

class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = { 
            todos : []
        };
    }

    componentDidMount(){
        AppStore.addChangeListener(this.onChange);
    }

    componentWillUnmount(){
        AppStore.removeChangeListener(this.onChange);
    }

    onChange(){
        this.setState(getAppState());
    }


    render(){
        return (
            <div>
                <ul>
                    {
                        this.state.todos.map((todo)=>(
                            <li>{todo}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
    
}

export default TodoList;