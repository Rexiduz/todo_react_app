
import {
    api,

} from "../../shared/api";


const getTodoById = async (id) => {
    return await api.get('/todos/'`${id}`);
};

const getTodoList = async () => {

    return await api.get('/todos');
};


const createTodo = async (model) => {
    return await api.post('/todos', model);
};

const editTodo = async (id, model) => {
    return await api.put('/todos/'+ `${id}`, model);
};

const deleteTodo = async (id) => {
    return  await api.delete('/todos/' + `${id}`);
};


export {
    getTodoById,
    getTodoList,
    createTodo,
    editTodo,
    deleteTodo,
};