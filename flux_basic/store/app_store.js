import AppDispatcher from '../dispatcher/app_dispatcher';
import {ADD_TODO} from '../constants/action_types';
import {EventEmitter} from 'events';

const store = {
    todos: []
}

class StoreClass extends EventEmitter {

    addChangeListener(callback){
        this.on(ADD_TODO, callback);
    }

    removeChangeListener(callback){
        this.removeListener(ADD_TODO, callback);
    }

    getTodos(){
        return store.todos;
    }

}

const AppStore = new StoreClass();

AppDispatcher.register((action)=>{
    switch (action.type){
        case ADD_TODO:
            store.todos.push(action.payload.text);
            AppStore.emit(ADD_TODO);
            break;
        default :
            break;
    }
    return true;
});

export default AppStore;