import React from 'react';

import TodoItem from './TodoItem';

const TodoList = ({ 
    items, onChangeHandler, currentItem, onClickHandler
}) => {
    return (
        <div>
            <input onChange={onChangeHandler} type='text' value={currentItem} />
            <button onClick={onClickHandler}>submit</button>
            <ul>
                {
                    items.map(item => (
                        <TodoItem key={item} item={item} />
                    ))
                }
            </ul>
        </div>
    );
};

export default TodoList;