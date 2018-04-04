import React from 'react';
import TodoHeaderContainer from '../containers/todo_header_container';
import TodoListContainer from '../containers/todo_list_container';
import AuditContainer from '../containers/audit_container'

const Main = () =>(
    <div>
        <TodoHeaderContainer/>
        <TodoListContainer/>
        <AuditContainer/>
    </div>
);

export default Main;

