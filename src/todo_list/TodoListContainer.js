import React, { Component } from 'react';

import TodoList from './TodoList';

class TodoListContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            currentItem: ''
        }
    }

    onInputChangeHandler(event) {
        this.setState({ currentItem: event.target.value });
    }

    onClickButtonHandler() {
        this.state.items.push(this.state.currentItem);
        this.setState({ currentItem: '' });
    }

    render() {
        return (
            <TodoList 
                onChangeHandler={this.onInputChangeHandler.bind(this)} 
                onClickHandler={this.onClickButtonHandler.bind(this)}
                currentItem={this.state.currentItem}
                items={this.state.items} 
            />
        );
    }
}

export default TodoListContainer;