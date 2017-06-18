import React from 'react';

import Todo_item from 'components/todo_item';

export default class Todo_todo extends React.Component {
    updateTasks(val) {
        this.props.updateTodo(val);
    }

    render() {
        if (this.props.tasks.length < 1) { return null; }

        return (
            <div className="todo__todo">
                {
                    this.props.tasks.map((obj, i) => {
                        return <Todo_item key={obj.value} value={obj.value} date={obj.date} done={obj.done} updateTasks={(val) => this.updateTasks(val)}/>;
                    })
                }                
            </div>
        );
    }
}