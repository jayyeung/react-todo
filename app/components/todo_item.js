import React from 'react';

export default class Todo_item extends React.Component {
    updateTask() {
        this.props.updateTasks(this.props.value);
    }

    render() {
        return (
            <div className={"todo__item " + (this.props.finished ? 'todo__item--finished' : '') } onClick={ this.updateTask.bind(this) }>
                <span className="todo__checkbox"></span>
                <p className="todo__title">{ this.props.value } <span className="label">Added { this.props.date }</span></p>
            </div>
        );
    }
};      