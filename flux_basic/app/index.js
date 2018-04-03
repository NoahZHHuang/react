import React from 'react';
import ReactDOM from 'react-dom';
import TodoHeader from '../components/todo_header';
import TodoList from '../components/todo_list';

ReactDOM.render(
    <div>
        <TodoHeader/>
        <TodoList/>
    </div>,
    document.getElementById('app')
);