import {ThunkType} from './store';
import {authAPI, RequestLoginType, ResultCode} from '../api/api';
import {Dispatch} from 'redux';

export type DataForAuthType = {
    id: null | number;
    email: string | null;
    login: string | null;
}
export type AuthType = {
    data: DataForAuthType;
    isAuth: boolean;
}
export type ActionAuthType =
    { type: ActionType.SET_DATA_AUTH, payload: { data: DataForAuthType; isAuth: boolean; } }
    | ReturnType<typeof setLogin>

enum ActionType {
    SET_DATA_AUTH = 'authReducer/SET_DATA_AUTH',
}

const initialState: AuthType = {
    data: {} as DataForAuthType,
    isAuth: false,
}

export const authReducer = (state = initialState, action: ActionAuthType): AuthType => {
    switch (action.type) {
        case ActionType.SET_DATA_AUTH:
            return {...state, data: action.payload.data, isAuth: action.payload.isAuth};
        case 'SET_LOGIN':
            return {...state, isAuth: action.isAuth};
        default:
            return state;
    }
};
export const setDataAuth = (data: DataForAuthType, isAuth: boolean) => {
    return {
        type: ActionType.SET_DATA_AUTH,
        payload: {data, isAuth},
    };
};
export const setLogin = (isAuth: boolean) => ({type: 'SET_LOGIN', isAuth} as const);

export const getAuthMe = (): ThunkType =>
    async (dispatch: Dispatch<ActionAuthType>) => {
        debugger
        const res = await authAPI.getAuthMe();
        if (res.resultCode === 0) {
            dispatch(setDataAuth(res.data, true));
        }
    };
export const postLogin = (data: RequestLoginType) =>
    async (dispatch: Dispatch<ActionAuthType>) => {
        const res = await authAPI.login(data);
        if (res.data.resultCode === ResultCode.success) {
            dispatch(setLogin(true));
        }
    }
export const setLogout = () =>
    async (dispatch: Dispatch<ActionAuthType>) => {
        const res = await authAPI.logout();
        if (res.data.resultCode === ResultCode.success) {
            dispatch(setLogin(false));
        }
    }