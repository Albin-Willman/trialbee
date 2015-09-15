import React from 'react';
import { connect } from 'react-redux';

import { TodoItem } from 'components/todo-item';
import { TodoForm } from 'components/todo-form';
import { removeTodo } from 'services/todo-list';

import { addTodo } from 'actions/todo-list';

@connect(filterState)
export class TodoList extends React.Component {
    render() {
        console.log(this.props);

        var { dispatch } = this.props;

        var items = this.props.items
                    .map(transformItemsIntoProps(dispatch))
                    .map(transformPropsIntoComponent);

        return (
            <div className="container">
                i am a todo list
                <ul className="list-group">{items}</ul>
                <TodoForm action={ todo => dispatch(addTodo(todo)) } />
            </div>
        );
    }
}

export function filterState(state) {
    return state.todos;
}

export function transformItemsIntoProps(dispatch) {
    return item => {
        return {
            ...item,
            action: $=> dispatch(removeTodo(item.id))
        };
    };
}

export function transformPropsIntoComponent(item) {
    return <TodoItem {...item} key={item.id} />;
}