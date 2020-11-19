import React, { useState, useEffect, useContext } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { getTodoList, createTodo, editTodo, deleteTodo } from '../todo/todo-api-service'
import { useHistory } from 'react-router-dom';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const history = useHistory();



  useEffect(() => {

    if (!localStorage.getItem('token')) {
      history.push(`/`);
      return;
    }

    todoList()
    return () => {

    }
  }, [])

  const todoList = async () => {

    try {
      let todos = await getTodoList()
      setTodos(todos.data)
    } catch (error) {
      localStorage.removeItem('token')
    }

  }

  const addTodo = async todo => {

    try {
      let data = await createTodo(todo)

      if (data) {
        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        todoList()
      }
    } catch (error) {

    }

  };

  const updateTodo = async (todoId, newValue) => {

    let data = await editTodo(todoId, newValue)

    if (data) {
      setTodos(prev => prev.map(item => (item._id === todoId ? newValue : item)));
      todoList()
    }

  };

  const removeTodo = async id => {
    await deleteTodo(id)
    const removedArr = [...todos].filter(todo => todo._id !== id);

    setTodos(removedArr);
    todoList()
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <section className="row justify-content-center pt-5 pl-3 pr-3">
        <h1>Todo List?</h1>
      </section>

      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;