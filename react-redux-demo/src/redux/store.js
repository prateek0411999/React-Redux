import {createStore , applyMiddleware } from 'redux'
import rootReducer from './rootReducer';
import { logger } from "redux-logger";
import {composeWithDevTools} from 'redux-devtools-extension';
//redux-logger for viewing the logs in the browser about the redux store

const store = createStore(rootReducer , composeWithDevTools( applyMiddleware(logger)) )

export default store
//to provide the redux store to our react application - react-redux has a property called provider for the same
 