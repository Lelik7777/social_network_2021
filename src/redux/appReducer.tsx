const initialState: AppReducerType = {
    requestStatus: 'loaded',
}

export const appReducer = (state = initialState, action: AppActionType): AppReducerType => {
    switch (action.type) {
        case 'SET_REQUEST_STATUS':
            return {...state, requestStatus: action.status};
        default:
            return state;
    }
}
export const setRequestStatus = (status: RequestStatusType) =>
    ({type: 'SET_REQUEST_STATUS', status} as const);
export type AppActionType = ReturnType<typeof setRequestStatus>
export type RequestStatusType = 'loaded' | 'successful';
export type AppReducerType = {
    requestStatus: RequestStatusType;
}