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
}
const initialState: UsersType = {
    items: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
};
export type ActionUsersType = ReturnType<typeof follow | typeof unfollow | typeof setUsers | typeof setPages | typeof getCurrentPage | typeof setTotalUsersCount|typeof checkIsFetching>;
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
        case 'SET-PAGES':
            return {...state, pageSize: action.payload.pages};
        case 'GET-CURRENT-PAGE':
            //console.log(action.payload.page)
            return {...state, currentPage: action.payload.page};
        case 'SET-TOTAL-USER-COUNT':
            return {...state, totalUsersCount: action.payload.count};
        case 'CHECK-IS-FETCHING':
            return {...state,isFetching:action.payload.isFet};
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
export const setPages = (pages: number) => {
    return {
        type: 'SET-PAGES',
        payload: {pages},
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