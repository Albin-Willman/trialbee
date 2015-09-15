
import { REMOVE_TODO, ADD_TODO } from 'actions/todo-list';

const defaultValue = {
    items: [{
        id: '32few',
        value: 'milk'
    },{
        id: 'dewdew',
        value: 'sugar'
    }],
    newValue: ''
};

export function todosReducer(state = defaultValue, action) {
    switch (action.type) {
        case REMOVE_TODO:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id)
            };
        case ADD_TODO: {
            return {
                ...state,
                items: [...state.items, createTodo(action.payload.value, state.items.length)] 
            }
        }
        default:
            return state;
    }
}

function createTodo(value, id){
    return {
        id: id,
        value: value
    }
}

