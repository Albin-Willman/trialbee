
export const REMOVE_TODO = 'removeTodo';
export const ADD_TODO = 'addTodo';
import uuid from 'node-uuid'

export function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        payload: {
            id: id
        }
    };
}

export function addTodo(value) {
    return {
        type: ADD_TODO,
        payload: {
            id: uuid.v1(),
            value: value
        }
    };
}
