import {combineReducers, createStore, Store} from 'redux';
import {profileReducer} from './profileReducer';
import {dialogReducer} from './dialogReducer';
import {navReducer} from './navReducer';

let reducers = combineReducers({
    dataProfile: profileReducer,
    dataDialogs: dialogReducer,
    dataNav: navReducer
});
export type ReducersType=ReturnType<typeof reducers>
export let reduxStore:Store<ReducersType,any> = createStore(reducers);