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
   ReturnType<typeof setDataAuth>
    | ReturnType<typeof setLogin>



const initialState: AuthType = {
    data: {} as DataForAuthType,
    isAuth: false,
}

export const authReducer = (state = initialState, action: ActionAuthType): AuthType => {
    switch (action.type) {
        case 'SET_DATA_AUTH':
            return {...state, data: action.payload.data, isAuth: action.payload.isAuth};
        case 'SET_LOGIN':
            return {...state, isAuth: action.isAuth};
        default:
            return state;
    }
};
//action creators
export const setDataAuth = (data: DataForAuthType, isAuth: boolean) => {
    return {
        type: 'SET_DATA_AUTH',
        payload: {data, isAuth}
    }as const;
};
export const setLogin = (isAuth: boolean) => ({type: 'SET_LOGIN', isAuth} as const);

export const getAuthMe = (): ThunkType =>
    async (dispatch: Dispatch<ActionAuthType>) => {
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