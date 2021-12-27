import ava from './img/avatar.png';

export type UserType = {
    followed: boolean;
    id: number;
    name: string;
    photos: {small:string|null,large:string|null};
    status: string|null;
    uniqueUrlName:string|null;

   /* location: {
        city: string;
        country: string;
    }*/
}
export type UsersType = {
    items: UserType[];
}
const initialState: UsersType = {
    items:[],
};
export type ActionUsersType = ReturnType<typeof followAC | typeof unfollowAC | typeof setUsersAC>;
export const usersReducer = (state = initialState, action: ActionUsersType): UsersType => {
    switch (action.type) {
        case'FOLLOW-TYPE':
            return {...state, items: state.items.map(x => x.id === action.payload.id ? {...x, followed: false} : x)};
        case 'UNFOLLOW-TYPE':
            return {...state, items: state.items.map(x => x.id === action.payload.id ? {...x, followed: true} : x)};
        case 'SET-USERS-TYPE':
            return {...state, items: [...state.items, ...action.payload.users]};
        default:
            return state;
    }
};
export const followAC = (id: number) => {
    return {
        type: 'FOLLOW-TYPE',
        payload: {id},
    } as const;
};

export const unfollowAC = (id: number) => {
    return {
        type: 'UNFOLLOW-TYPE',
        payload: {
            id,
        },
    } as const;
};

export const setUsersAC = (users: UserType[]) => {
    return {
        type: 'SET-USERS-TYPE',
        payload: {users,},
    } as const;
};