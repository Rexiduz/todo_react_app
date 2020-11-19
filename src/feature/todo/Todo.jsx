import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        title: ''
    });

    const submitUpdate = title => {
        updateTodo(edit._id, title);
        setEdit({
            _id: null,
            title: ''
        });
    };
   
    if (todos.length <= 0) {
        return <div className='card card-body shadow-sm text-center' style={{ margin: 15 }}>
            <h3 className='text-black-50'>Empty press 'Add todo'</h3>
            <h3 className='text-black-50'>for add new todo</h3>
        </div>
    }

    if (edit._id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => (
        <div
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}
        >
            <div key={todo._id} onClick={() => completeTodo(todo._id)}>
                {todo.title}
            </div>
            <div>
            {todo.description}
            </div>
            <div className='icons'>
                <RiCloseCircleLine
                    onClick={() => removeTodo(todo._id)}
                    className='delete-icon'
                />
                <TiEdit
                    onClick={() => setEdit({ _id: todo._id, title: todo.title , description : todo.description })}
                    className='edit-icon'
                />
            </div>
        </div>
    ));


};

export default Todo;