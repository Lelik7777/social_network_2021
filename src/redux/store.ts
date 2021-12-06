import {combineReducers, createStore, Store} from 'redux';
import {profileReducer} from './profileReducer';
import {dialogsReducer} from './dialogsReducer';
import {navReducer} from './navReducer';
let rootReducer = combineReducers({
    dataProfile: profileReducer,
    dataDialogs: dialogsReducer,
    dataNav: navReducer
});
export type RootStateType = ReturnType<typeof rootReducer>

export let store:Store<RootStateType> = createStore(rootReducer);

