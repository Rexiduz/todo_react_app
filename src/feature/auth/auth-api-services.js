import {
    client,
    api,

} from "../../shared/api";
var SERVER_URL = 'https://candidate.neversitup.com/todo'

const loginAdmin = async (user) => {
 
    return await client.post(SERVER_URL+'/users/auth', user);
};


const fetchMe = async () => {
    return await api.get('/api/v1/me')
}


const loginLocal = async (data) => {
    return await client.post('/api/v1/user/auth', data);
}

export {
    loginAdmin,
    fetchMe,
    loginLocal,
};