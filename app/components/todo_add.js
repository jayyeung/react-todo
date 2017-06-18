import React from 'react';

export default class Todo_add extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            date: 'Today'
        }

        this.submitTask = this.submitTask.bind(this);
        this.handleTask = this.handleTask.bind(this);
    }

    submitTask(e) {
        e.preventDefault(); 
        if (!this.state.value.match(/^\s*$/)) {
            this.props.addTask(this.state.value, this.state.date);
        }
        this.setState({ value: '' });
    }

    handleTask(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <div className="todo__add">
                <div className="todo__item">
                    <span className="todo__checkbox todo__checkbox--vline"></span>

                    <form onSubmit={this.submitTask.bind(this)}> 
                        <input className="todo__input" type="text" placeholder="What needs to be done?" 
                        value={this.state.value} onChange={this.handleTask}/>
                        <span className="label">Add a new task +</span>
                    </form>

                </div>
            </div>
        );
    }
}