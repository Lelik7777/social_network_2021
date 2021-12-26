import {combineReducers, createStore, Store} from 'redux';
import {ActionProfileType, profileReducer} from './profileReducer/profileReducer';
import {ActionDialogsType, dialogsReducer} from './dialogsReducer';
import {navReducer} from './navReducer';

import {ActionUsersType, usersReducer} from './usersReducer';

export type ActionType=ActionProfileType|ActionDialogsType|ActionUsersType;
let rootReducer = combineReducers({
    dataProfile: profileReducer,
    dataDialogs: dialogsReducer,
    dataNav: navReducer,
    dataUsers:usersReducer,
});
export type RootStateType = ReturnType<typeof rootReducer>

export let store:Store<RootStateType> = createStore(rootReducer);

