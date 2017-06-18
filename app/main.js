// compile scss
require('styles/main.scss');

// React
import React from 'react';
import ReactDOM from 'react-dom';

var Todo_item = (props) => {
    return (
        <div className="todo__item">
            <span className="todo__checkbox"></span>
            <p className="todo__title">{ props.value } <span className="label">Added { props.date }</span></p>
        </div>
    );
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
        this.props.addTask(this.state.value, this.state.date);
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
                        <span className="label">+ Add a new task</span>
                    </form>

                </div>
            </div>
        );
    }
}

var Todo_todo = (props) => {
    return (
        <div className="todo__todo">
            {
                props.tasks.map((obj) => {
                    return <Todo_item key={obj.value} value={obj.value} date={obj.date}/>;
                })
            }                
        </div>
    );
}

class Todo_finished extends React.Component {
    render() {
        return (
            <div className="todo__finished">
                <Todo_item/>            
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
        var task = {
            value: val,
            date: date
        };

        this.setState({
            todo: this.state.todo.concat(task)
        });
    }

    render() {
        return (
             <div className="todo">
                <Todo_add addTask={(val, date) => this.addTask(val, date)} />
               
                <Todo_todo tasks={this.state.todo}/>

                <Todo_finished tasks={this.state.finished}/>
            </div>
        );
    }
}

ReactDOM.render( <Todo/>, document.getElementById('app'));