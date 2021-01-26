//as we're working on a node.js application so have to import redux using require and if it was a react application we can do it simply using es6 import
const redux = require('redux');


//creating the store
const createStore=redux.createStore();

console.log('from index.js')
const BUY_CAKE='BUY_CAKE'

//define the action - an object with type property
// {
//     type: BUY_CAKE,
//     info: 'First redux action'
// }
//implement the action creater
function buyCake(){
    return{
        type: BUY_CAKE,
        info: 'First redux action'
    }
}
// Reducers
//(previousState, action) ==> newState

const initialState ={
    numOfCakes: 10

}

//implementing the reducer
const reducer = (state= initialState,action)=>{
    switch(action.type){
        case BUY_CAKE: 
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1 
            }
    
    default: return state
}
}

const store= createStore(reducer);
//now redux store is holding the application state

//To  get the initial state
console.log('INITIAL STATE',store.getState())

const unsubscribe = store.subscribe(()=>{
    console.log('UPDATED STATE',store.getState())
})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
//final part is to unsubscribe and than can be acheived by calling the function returned by the subscribe method

unsubscribe();