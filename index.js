//as we're working on a node.js application so have to import redux using require and if it was a react application we can do it simply using es6 import
const redux = require('redux');


//creating the store
const createStore=redux.createStore();

console.log('from index.js')
const BUY_CAKE='BUY_CAKE'
const BUY_ICECREAM='BUY_ICECREAM'



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
function buyIceCream(){
    return{
        type: BUY_ICECREAM,
        info: 'second redux action'
    }
}
        // Reducers
        //(previousState, action) ==> newState

        // const initialState ={
        //     numOfCakes: 10,
        //     numOfIceCreams: 20

        // }

        // //implementing the reducer
        //single reducer with multiple actions for each state change
        // const reducer = (state= initialState,action)=> {
        //     switch(action.type){
        //         case BUY_CAKE: 
        //             return {
        //                 ...state,
        //                 numOfCakes: state.numOfCakes - 1 
        //             }
        //         case BUY_ICECREAM: 
        //             return {
        //                 ...state,
        //                 numOfIceCreams: state.numOfIceCreams - 1 
        //             }
            
        //     default: return state
        //     }
        // }
//this is just using one reducer we can have
//multiple 
//we can just maintain multiple state & reducer which will work on one state at a time
//and to combine multiple reducer, redux provides us with the function- called -> combineReducers 
//which can then be passed to the createStore method
const combineReducers= redux.combineReducers

const initialCakes ={
    numofCakes: 10
}
const initialIceCream ={
    numofIceCreams: 20
}
const cakeReducer = (state= initalCakes,action)=> {
    switch(action.type){
        case BUY_CAKE: 
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1 
            }
        
    
    default: return state
    }
}
const IceCreamReducer = (state= initialIceCream,action)=> {
    switch(action.type){
        case BUY_ICECREAM: 
            return {
                ...state,
                numofIceCreams: state.numofIceCreams - 1 
            }
        
    
    default: return state
    }
}
const rootReducer=combineReducers({
    cake: cakeReducer,
    iceCream: IceCreamReducer
})
const store= createStore(rootReducer);
//now redux store is holding the application state

//To  get the initial state
console.log('INITIAL STATE',store.getState())

const unsubscribe = store.subscribe(()=>{
    console.log('UPDATED STATE',store.getState())
})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
//final part is to unsubscribe and than can be acheived by calling the function returned by the subscribe method

unsubscribe();