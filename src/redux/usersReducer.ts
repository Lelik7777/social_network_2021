import {userAPI} from '../api/api';
import {ThunkDispatch} from 'redux-thunk';
import {ActionType, RootStateType, ThunkType} from './store';
import {Dispatch} from 'redux';


export type UserType = {
    followed: boolean;
    id: number;
    name: string;
    photos: { small: string | null, large: string | null };
    status: string | null;
    /*uniqueUrlName: string | null;*/

    /* location: {
         city: string;
         country: string;
     }*/
}
export type UsersType = {
    items: UserType[];
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean;
    isFollowInProcessing: number[];
}
const initialState: UsersType = {
    items: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowInProcessing: [],
};
export type ActionUsersType =
    ReturnType<typeof follow> | ReturnType<typeof unfollow> |
    ReturnType<typeof getCurrentPage> | ReturnType<typeof setTotalUsersCount> | ReturnType<typeof checkIsFetching>
    | ReturnType<typeof setIsFollowInProc> | ReturnType<typeof setUsers>


export const usersReducer = (state = initialState, action: ActionUsersType): UsersType => {
    switch (action.type) {
        case'FOLLOW-TYPE':
            //debugger;
            return {...state, items: state.items.map(x => x.id === action.payload.id ? {...x, followed: true} : x)};
        case 'UNFOLLOW-TYPE':
            //debugger
            return {...state, items: state.items.map(x => x.id === action.payload.id ? {...x, followed: false} : x)};
        case 'SET-USERS':
            return {...state, items: action.payload.users};
        case 'GET-CURRENT-PAGE':
            //console.log(action.payload.page)
            return {...state, currentPage: action.payload.page};
        case 'SET-TOTAL-USER-COUNT':
            return {...state, totalUsersCount: action.payload.count};
        case 'CHECK-IS-FETCHING':
            return {...state, isFetching: action.payload.isFet};
        case 'SET_IS_FOLLOW_IN_PROC':
            return {
                ...state,
                isFollowInProcessing: action.payload.isFet ? [...state.isFollowInProcessing, action.payload.id] : state.isFollowInProcessing.filter(x => x !== action.payload.id)
            };
        default:
            return state;
    }
};
export const follow = (id: number) => {
    return {
        type: 'FOLLOW-TYPE',
        payload: {id},
    } as const;
};

export const unfollow = (id: number) => {
    return {
        type: 'UNFOLLOW-TYPE',
        payload: {
            id,
        },
    } as const;
};

export const setUsers = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
        payload: {users,},
    } as const;
};
export const getCurrentPage = (page: number) => {
    return {
        type: 'GET-CURRENT-PAGE', payload: {page,},
    } as const;
};
export const setTotalUsersCount = (count: number) => {
    return {
        type: 'SET-TOTAL-USER-COUNT',
        payload: {count,},
    } as const;
};
export const checkIsFetching = (isFet: boolean) => {
    return {
        type: 'CHECK-IS-FETCHING',
        payload: {isFet,},
    } as const;
};
export const setIsFollowInProc = (isFet: boolean, id: number) => {
    return {
        type: 'SET_IS_FOLLOW_IN_PROC',
        payload: {isFet, id,},
    } as const;
};

export const getUsers = (page: number, count: number): ThunkType =>
// можно типизировать через ThunkType,который в  store
//можно вместо
    //внутренняя ф-ция принимает два параметра: первый это dispatch,a second - state across getState
    // через который можно достать любое значение из общего стейта
    async (dispatch, getState: () => RootStateType) => {
        dispatch(checkIsFetching(true));
        const res = await userAPI.getUsers(page, count);
        dispatch(setUsers(res.items));
        dispatch(setTotalUsersCount(res.totalCount));
        dispatch(checkIsFetching(false));

    }

//second variant of typing
/*
export const getUsers2 = (page: number, count: number) => {

    return (dispatch:ThunkDispatch<RootStateType,unknown,ActionType>,getState:()=>RootStateType ) => {

        dispatch(checkIsFetching(true));
        userAPI.getUsers(page, count)
            .then((res) => {
                dispatch(setUsers(res.items));
                dispatch(setTotalUsersCount(res.totalCount));
                dispatch(checkIsFetching(false));
            });
    }
}*/

export const getCurPage = (page: number, count: number) =>
    async (dispatch: ThunkDispatch<RootStateType, unknown, ActionType>) => {
        dispatch(checkIsFetching(true));
        dispatch(getCurrentPage(page));

        const res=await userAPI.getUsers(page, count);
                dispatch(setUsers(res.items));
                dispatch(checkIsFetching(false));
    };

export const setPageAtBegin = (page: number, count: number) => {
    return (dispatch: ThunkDispatch<RootStateType, unknown, ActionType>) => {
        dispatch(checkIsFetching(true));
        dispatch(getCurrentPage(page));
        if (count) {
            userAPI.getUsers(page, count)
                .then((res) => {
                    dispatch(setUsers(res.items));
                    dispatch(checkIsFetching(false));
                });
        }
    }
};
export const setFollow = (id: number) => {
    return (dispatch: ThunkDispatch<RootStateType, unknown, ActionType>) => {
        debugger
        dispatch(setIsFollowInProc(true, id));
        userAPI.postFollow(id).then(() => {
            dispatch(follow(id));
            dispatch(setIsFollowInProc(false, id));
        }).catch((er)=>{
            console.log(er)
        })
    }
};
export const setUnFollow = (id: number) => {
    return (dispatch: ThunkDispatch<RootStateType, unknown, ActionType>) => {
        dispatch(setIsFollowInProc(true, id));
        userAPI.deleteFollow(id).then(() => {
            dispatch(unfollow(id));
            dispatch(setIsFollowInProc(false, id));
        })
    }
}