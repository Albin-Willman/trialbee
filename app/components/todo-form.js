import React from 'react';

export class TodoForm extends React.Component {

    static propTypes = {
        value: React.PropTypes.string,
        action: React.PropTypes.func
    };

    static defaultProps = {
        action: (e) => {
            e.preventDefault();
            alert('you should implement this');
        }

    };
    state = {
        value: ''
    }
    updateValue = (e) => {
        this.setState({
            value: e.target.value
        });
    }
    submit = (e) => {
        e.preventDefault();
        this.props.action(this.state.value);
        this.setState({
            value: ''
        });
    }

    render() {
        return (
            <form
                onSubmit={this.submit}>
                <input value={this.state.value} onChange={this.updateValue} className='form-controll' />
                <input type='submit' value='New' className='btn btn-success' />
            </form>
        );
    };


}