import {ActionType, DataNavType} from './store';

export const navReducer: (s: DataNavType, a: ActionType) => DataNavType = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}