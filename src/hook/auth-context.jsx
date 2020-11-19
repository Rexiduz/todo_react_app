import React from 'react'
import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router';
import { fetchMe, loginAdmin, loginLocal } from '../feature/auth/auth-api-services';
import { getTodoList } from '../feature/todo/todo-api-service';

/**
 * @typedef AuthContext
 * @property {any} me
 * @property {boolean} loading
 * @property { (profile: object, shopName: string) => PromiseLike<void> } handleLineLogin
 * @property { (profile: object) => PromiseLike<void> } handleAdminLineLogin
 * @property { () => boolean } isAdmin
 */

/** @type {import('react').Context<AuthContext>} */
export const AuthContext = React.createContext();

export const AuthProvider = (props) => {
    
    const [me, setMe] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const h = useHistory();

    
    React.useEffect(() => {
        fetchInit();
    }, []);

    const isAdmin = () => {
        if (loading == true) return false;
        return me.userType === 'ADMIN'
    }

    const fetchInit = async () => {
        try {
            setLoading(true);
            let token = localStorage.getItem('token');
            
            if (token) {
                await getTodoList()
                h.push('/TodoList')
            } else {
                // h.push(props.match.url);
            }

        } catch (error) {
            localStorage.removeItem('token');
        } finally {
            setLoading(false);
        }
    }


    function setAuth(token) {
        setMe(token);
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    }


    async function handleAdminLogin(loginData) {
        try {
            let token = await loginAdmin(loginData);
            if (token.data.token) {
                setAuth(token.data.token);
                return token.data.token
            }
            return token
        } catch (error) {
            throw new Error(error)
        }
    }


    async function handleLocalLogin(loginData) {
        try {
            let resLogin = await loginLocal(loginData);
            if (resLogin.data.success) {
                setAuth(resLogin.data.token);
                return resLogin.data
            }
            return resLogin.data
        } catch (error) {
            throw new Error(error)
        }

    }

    return (
        <AuthContext.Provider value={{ me, isAdmin, handleLocalLogin, handleAdminLogin, loading }}>
            {props.children}
        </AuthContext.Provider>
    )
}
