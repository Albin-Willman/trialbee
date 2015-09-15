
import { REMOVE_TODO, ADD_TODO, START_LOADING, FINISH_LOADING } from 'actions/todo-list';

const defaultValue = {
    items: [],
    loading: false
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
        case START_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        case FINISH_LOADING: {
            return {
                ...state,
                loading: false
            }
        }
        default:
            return state;
    }
}
