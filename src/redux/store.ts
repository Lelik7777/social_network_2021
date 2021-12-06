import {combineReducers, createStore, Store} from 'redux';
import {profileReducer} from './profileReducer/profileReducer';
import {ActionDialogsType, dialogsReducer} from './dialogsReducer';
import {navReducer} from './navReducer';
import {ActionProfileType} from './profileReducer/profileReducerActionTypes';
export type ActionType=ActionProfileType|ActionDialogsType;
let rootReducer = combineReducers({
    dataProfile: profileReducer,
    dataDialogs: dialogsReducer,
    dataNav: navReducer
});
export type RootStateType = ReturnType<typeof rootReducer>

export let store:Store<RootStateType> = createStore(rootReducer);

