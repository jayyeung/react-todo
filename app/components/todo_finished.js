import React from 'react';

import Todo_item from 'components/todo_item';

export default class Todo_finished extends React.Component {
    updateTasks(val) {
        this.props.updateFinished(val);
    }

    render() {
        if (this.props.tasks.length < 1) { return null; }

        return (
            <div className="todo__finished">
                {
                    this.props.tasks.map((obj, i) => {
                        return <Todo_item finished={true} key={obj.value} value={obj.value} date={obj.date} done={obj.done} updateTasks={(val) => this.updateTasks(val)}/>;
                    })
                }                
            </div>
        );
    }
}