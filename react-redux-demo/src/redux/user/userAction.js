import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"
import axios from 'axios';
export const fetchUsersRequest = () =>{
    return{
        type: FETCH_USERS_REQUEST
    }
}
export const fetchUsersSuccess =  () =>{
    return{
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
export const fetchUsersFailure =  () =>{
    return{
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = () =>{
    return (dispatch) =>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( res =>{
            console.log(res.data)
            const users= res.data
            dispatch(fetchUsersSuccess(users))
        })
        .catch(err =>{
            console.log(err.message)
            dispatch(fetchUsersFailure(err.message))
        })
    }
}
