
export const REMOVE_TODO = 'removeTodo';
export const ADD_TODO = 'addTodo';
export const START_LOADING = 'startLoading';
export const FINISH_LOADING = 'finishLoading';


export function finishLoading(id) {
    return {
        type: FINISH_LOADING,
        payload: {}
    };
}

export function startLoading(id) {
    return {
        type: START_LOADING,
        payload: {}
    };
}

export function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        payload: {
            id: id
        }
    };
}

export function addTodo(id, value) {
    return {
        type: ADD_TODO,
        payload: {
            id: id,
            value: value
        }
    };
}
