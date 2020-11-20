import React from 'react'
import { useHistory } from 'react-router-dom';
import { getTodoList } from '../feature/todo/todo-api-service'

/**
 * @typedef TodoContext
 * @property {any} todo
 * @property {boolean} loading
 */

/** @type {import('react').Context<TodoContext>} */
export const TodoContext = React.createContext();

export const TodoProvider = (props) => {
    const history = useHistory();
    const [todoList, setTodoList] = React.useState([])
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetchAll();
    }, [])

    async function fetchAll() {

        let res = await getTodoList();
        if (res) {
            setTodoList(res);
            setLoading(false);
            return todoList;
        }
        history.push('/404');
    }

    return (
        <TodoContext.Provider value={{ loading, todoList , fetchAll }}>
            {props.children}
        </TodoContext.Provider>
    )
}
