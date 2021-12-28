export type UserType = {
    followed: boolean;
    id: number;
    name: string;
    photos: { small: string | null, large: string | null };
    status: string | null;
    uniqueUrlName: string | null;

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
}
const initialState: UsersType = {
    items: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,

};
export type ActionUsersType = ReturnType<typeof followAC | typeof unfollowAC | typeof setUsersAC | typeof setPagesAC | typeof getCurrentPageAC | typeof setTotalUserCountAC>;
export const usersReducer = (state = initialState, action: ActionUsersType): UsersType => {
    switch (action.type) {
        case'FOLLOW-TYPE':
            return {...state, items: state.items.map(x => x.id === action.payload.id ? {...x, followed: false} : x)};
        case 'UNFOLLOW-TYPE':
            return {...state, items: state.items.map(x => x.id === action.payload.id ? {...x, followed: true} : x)};
        case 'SET-USERS':
            return {...state, items: action.payload.users};
        case 'SET-PAGES':
            return {...state, pageSize: action.payload.pages};
        case 'GET-CURRENT-PAGE':
            console.log(action.payload.page)
            return {...state, currentPage: action.payload.page};
        case 'SET-TOTAL-USER-COUNT':
            return {...state, totalUsersCount: action.payload.count};
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
        type: 'SET-USERS',
        payload: {users,},
    } as const;
};
export const setPagesAC = (pages: number) => {
    return {
        type: 'SET-PAGES',
        payload: {pages},
    } as const;
};
export const getCurrentPageAC = (page: number) => {
    return {
        type: 'GET-CURRENT-PAGE', payload: {page,},
    } as const;
};
export const setTotalUserCountAC = (count: number) => {
    return {
        type: 'SET-TOTAL-USER-COUNT',
        payload: {count,},
    } as const;
};