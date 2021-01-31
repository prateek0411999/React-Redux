const redux = require('redux');
const applyMiddleware =redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')
const createStore= redux.createStore
const initialState={
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUsersRequest =() =>{
    return {
        type: FETCH_USERS_REQUEST,

    }
}

const fetchUsersSuccess=  () =>{
    return {
        type : FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = error =>{
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

const reducer = (state= initialState, action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading: true
            }
        
        case FETCH_USERS_SUCCESS:
            return {
                
                loading: false,
                error: '',
                users: action.payload
            }
        case FETCH_USERS_FAILURE :
            return {
                loading: false,
                users: [],
                error: action.payload
            }
    }
}
//action creator 
//using thunk middleware we can return a function instead of an action object
//also it can dispatch the same
const fetchUsers = () =>{
    return function(dispatch) {
        //using jsonPlaceHolder for the same
        dispatch(fetchUsersRequest())
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
const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() =>{
    console.log(store.getState())
})
store.dispatch(fetchUsers())