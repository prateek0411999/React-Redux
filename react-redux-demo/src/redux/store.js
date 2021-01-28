import {createStore } from 'redux'
import cakeReducer from './cakes/cakeReducer';
const store = createStore(cakeReducer)

export default store
//to provide the redux store to our react application - react-redux has a property called provider for the same
 