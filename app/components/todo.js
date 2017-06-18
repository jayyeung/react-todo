import React from 'react';

import Todo_add from 'components/todo_add';
import Todo_todo from 'components/todo_todo';
import Todo_finished from 'components/todo_finished';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: [],
            finished: []
        }
    }

    addTask(val, date) {
        let task = {
            value: val,
            date: date
        };

        this.setState({
            todo: this.state.todo.concat(task)
        });
    }

    updateTodo(val) {
        let todo = this.state.todo.filter((obj) => {
            return obj.value !== val;
        });

        let finished = this.state.todo.filter((obj) => {
            return obj.value === val;
        });
        
        this.setState({
            todo: todo,
            finished: this.state.finished.concat(finished) 
        });
    }

    updateFinished(val) {
        let finished = this.state.finished.filter((obj) => {
            return obj.value !== val;
        });

        let todo = this.state.finished.filter((obj) => {
            return obj.value === val;
        });

        this.setState({
            todo: this.state.todo.concat(todo),
            finished: finished 
        });
    }

    render() {
        return (
             <div className="todo">
                <Todo_add addTask={(val, date) => this.addTask(val, date)} />
               
                <Todo_todo tasks={this.state.todo} updateTodo={(val) => this.updateTodo(val)}/>

                <Todo_finished tasks={this.state.finished} updateFinished={(val) => this.updateFinished(val)}/>
            </div>
        );
    }
}