import {combineReducers, createStore, Store} from 'redux';
import {profileReducer} from './profileReducer';
import {dialogsReducer} from './dialogsReducer';
import {navReducer} from './navReducer';
//export AppStateType = ReturnType<typeof reducers >
let reducers = combineReducers({
    dataProfile: profileReducer,
    dataDialogs: dialogsReducer,
    dataNav: navReducer
});
export type ReducersType = ReturnType<typeof reducers>

export let reduxStore:Store<ReducersType> = createStore(reducers);

