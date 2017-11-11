import React from 'react';
import ReactDOM from 'react-dom';

import TodoListContainer from './todo_list/TodoListContainer';

const App = () => {
    return (
        <div>
            <TodoListContainer />
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
