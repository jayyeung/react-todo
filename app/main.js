// compile scss
require('styles/main.scss');

// React
import React from 'react';
import ReactDOM from 'react-dom';

class Todo_item extends React.Component {
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

class Todo_add extends React.Component {
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
 
class Todo_todo extends React.Component {
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

class Todo_finished extends React.Component {
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

class Todo extends React.Component {
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

ReactDOM.render( <Todo/>, document.getElementById('app'));