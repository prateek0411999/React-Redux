import {combineReducers} from 'redux';
import cakeReducer from './cakes/cakeReducer';
import iceCreamReducer from './iceCreams/iceCreamReducers';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
export default rootReducer