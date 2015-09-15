
import { REMOVE_TODO, ADD_TODO } from 'actions/todo-list';

const defaultValue = {
    items: []
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
                items: [...state.items, action.payload] 
            }
        }
        default:
            return state;
    }
}
