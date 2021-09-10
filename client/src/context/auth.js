import React, {createContext} from 'react';

const AuthContext = createContext({
    user: null,
    login: (data)=> {},
    logout: () => {}
})

// reducer,
function authReducer(state, action) {
    switch(action.state) {

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