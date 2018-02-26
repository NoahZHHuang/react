import React from 'react';
import ReactDOM from 'react-dom';
import {HelloWorld} from '../components/hello_world';
import Timer from '../components/timer';
import Todo from '../components/todo';

ReactDOM.render(<HelloWorld/>, document.getElementById('hello_world_placeholder_1'));
ReactDOM.render(<HelloWorld name='Allie'/>, document.getElementById('hello_world_placeholder_2'));
ReactDOM.render(<Timer/>, document.getElementById('timer_placeholder'));
ReactDOM.render(<Todo/>, document.getElementById('todo_placeholder'));

