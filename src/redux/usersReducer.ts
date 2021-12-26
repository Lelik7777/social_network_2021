export type UserType = {
    id: number;
    following: boolean;
    name: string;
    status: string;
    location: {
        city: string;
        country: string;
    }
}
type UsersType = {
    users: UserType[];
}
const initialState: UsersType = {
    users: [
        {id: 1, following: true, name: 'Alex', status: 'i am a boss', location: {city: 'Moscow', country: 'Russia'}},
        {id: 1, following: true, name: 'Bob', status: 'i am a boss', location: {city: 'New York', country: 'Usa'}},
        {id: 1, following: true, name: 'Alex', status: 'i am a boss', location: {city: 'Moscow', country: 'Russia'}},
    ],
};
export type ActionUsersType = ReturnType<typeof follow | typeof unfollow | typeof setUsers>;
export const usersReducer = (state = initialState, action: ActionUsersType): UsersType => {
    switch (action.type) {
        case'FOLLOW-TYPE':
            return {...state, users: state.users.map(x => x.id === action.payload.id ? {...x, following: true} : x)};
        case 'UNFOLLOW-TYPE':
            return {...state, users: state.users.map(x => x.id === action.payload.id ? {...x, following: false} : x)};
        case 'SET-USERS-TYPE':
            return {...state,users:[...state.users,...action.payload.users]};
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
        type: 'SET-USERS-TYPE',
        payload: {users,},
    } as const;
};