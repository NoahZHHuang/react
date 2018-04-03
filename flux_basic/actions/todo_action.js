import AppDispatcher from '../dispatcher/app_dispatcher';
import {ADD_TODO} from '../constants/action_types';

const TodoAction = {
    
    addTodo: (text) => {
        AppDispatcher.handleAction({
            type: ADD_TODO,
            payload: {text: text}
        });
    }

}

export default TodoAction;