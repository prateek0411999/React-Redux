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
// const reducer = (state= initialState,action)=>{
//     switch(action.type){
//         case BUY_CAKE: 
//             return {
//                 ...state,
//                 numOfCakes: state.numOfCakes - 1 
//             }
//     }
//     default: 
//         return state
// }