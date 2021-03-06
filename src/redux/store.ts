import {applyMiddleware, combineReducers, createStore, Store} from 'redux';
import {ActionProfileType, profileReducer} from './profileReducer/profileReducer';
import {ActionDialogsType, dialogsReducer} from './dialogsReducer';
import {navReducer} from './navReducer';
import {ActionUsersType, usersReducer} from './usersReducer';
import {ActionAuthType, authReducer} from './authReducer';
import thunk, {ThunkAction} from 'redux-thunk';
import {appReducer} from './appReducer';


export type ActionType = ActionProfileType | ActionDialogsType | ActionUsersType | ActionAuthType;
//void - это то,что возвращает санка, unknown можно заменить {},
export type ThunkType<ReturnType = void> = ThunkAction<void, RootStateType, unknown, ActionType>

let rootReducer = combineReducers({
    dataProfile: profileReducer,
    dataDialogs: dialogsReducer,
    dataNav: navReducer,
    dataUsers: usersReducer,
    dataAuth: authReducer,
    dataApp:appReducer,
});
export type RootStateType = ReturnType<typeof rootReducer>

export let store: Store<RootStateType> = createStore(rootReducer, applyMiddleware(thunk));


