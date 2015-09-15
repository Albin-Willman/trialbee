
import { removeTodo as __removeTodo, addTodo as __addTodo, startLoading, finishLoading } from 'actions/todo-list';
import uuid from 'node-uuid';

export function addTodo(value) {
  return (dispatch, getState) => {
        setTimeout($=> { 
            dispatch(__addTodo(uuid.v1(), value))
        }, 1000);
    };
}

export function removeTodo(id) {
    return (dispatch, getState) => {
        if (randomIntFromInterval(0, 100) > 50) {
            dispatch(__removeTodo(id));
        } else {
            alert('I dont think so');
        }
    };
}

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

export function importInitialData(path) {
    return (dispatch, getState) => {
        dispatch(startLoading());
        fakeAjax(data => {
            for(var i in data) {
                var item = data[i];
                dispatch(__addTodo(item.id, item.value));
            }
            dispatch(finishLoading());
        })
    } 
}

function fakeAjax(callback){
    setTimeout(
        $=> callback([
            { id: 1, value: 'Milk'},
            { id: 2, value: 'Cookies'}
            ])
    , 1000);
}
