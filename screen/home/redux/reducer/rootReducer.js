import {locationReducer ,userLocationReducer} from './location'
import { bucket , twp} from './cart';
import {combineReducers} from 'redux'
import { grocery } from './grocery';

const RootReducer=combineReducers({
  
    locationReducer:locationReducer,
    userLocationReducer:userLocationReducer,
    grocery:grocery,
    bucket:bucket,
    twp:twp

})


export default RootReducer;