import React, {useReducer, createContext} from 'react';

// This is checking for the jwt token that is being stored in the local storage when a user is created
if(localStorage.getItem('jwtToken')) {

}

const AuthContext = createContext({
    user: null,
    login: (userData)=> {},
    logout: () => {}
})

// reducer,
function authReducer(state, action) {
    switch(action.type) {

        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            }

        case 'LOGOUT':
            return{
                ...state,
                user: null
            }
        default:
            return state;
    }
}


function AuthProvider(props){
    const [ state, dispatch] = useReducer(authReducer, { user: null});
    // now we can use it to dispatch any action and attach it a payload and do any action we want.

    function login(userData)  {
        localStorage.setItem("jwtToken", userData.token)
        dispatch({
            type: 'LOGIN',
            payload: userData
        })
    }

    function logout() {
        localStorage.removeItem('jwtToken')
        dispatch({
            type: 'LOGOUT'
        })
    }

    return (
        <AuthContext.Provider
            value={{user: state.user, login, logout}}
            {...props}
            />
    )
}

export {AuthContext, AuthProvider};