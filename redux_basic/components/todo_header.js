import React from 'react';

const TodoHeader = ({
    onChanageText,
    onCreateTodo,
    todo
}) => (
    <div>
        <h1>Add an todo item here</h1>
        <input type='text' value={todo.get('text')} onChange={onChanageText}/>
        <button onClick={onCreateTodo}>Send</button>
    </div>
)

export default TodoHeader;
